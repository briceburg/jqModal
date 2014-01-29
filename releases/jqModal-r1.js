/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007 Brice Burgess <bhb@iceburg.net>, http://www.iceburg.net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * $Version: 2007.01.26 (alpha)
 */
(function($) {

	$.fn.jqm = function(settings) {
		
		var DEFAULTS = {
			cssHeader: 'jqmHeader',
			cssWindow: 'jqmWindow',
			cssOverlay: 'jqmOverlay',
			cssContainer: 'jqmContainer',
			header: '<a href="#" class="jqmClose">Close</a>',
			inline: '#jqModal',
			ajax: false, // set to URL to pull content via AJAX
			loading: 'loading...', // displayed while a page loads
			zIndex: false, // (int) override stylesheet z-index settings
			overlay: true
		};
		
		$.jqm.serial++;
		$.jqm.hash[$.jqm.serial] = { };
		$.jqm.hash[$.jqm.serial]['settings'] = $.extend(DEFAULTS, settings);
		$.jqm.hash[$.jqm.serial]['active'] = false;
		
		this.bind("click", {serial: $.jqm.serial}, function(event) { 
			if(!$.jqm.hash[event.data.serial]['active'])
				return  $.jqm.open(event.data.serial)
			return false;
		});
		
		if($.jqm.hash[$.jqm.serial]['settings'].autofire)
			this.click();
		
		return this;
	}
	$.jqm = {
		open: function(serial) {
			h = $.jqm.hash[serial];
			h['active'] = true;
			settings = h['settings'];
			if (settings.overlay) {
			$('body')
				.prepend('<div class="'+settings.cssOverlay+'"></div>')
				.children(':first-child')
					.jqmAddHash('overlay', serial)
					.css({height: $.jqm.pageHeight(), display: 'block', opacity: 0.5})
					.one('click', {serial: serial}, $.jqm.close); // attach close event			
			}
			else { h['overlay'] = false; }
			
			if (settings.ajax)
				$('body')
					.prepend('<div id="jqmAjaxID'+serial+'"></div>')
					.children(':first-child')
						.addClass('jqmAjaxDestroy')
						.html(settings.loading)
						.load(settings.ajax, function() { 
							$(this).jqmPrepare(settings, serial);
						});
			else
				$(settings.inline).jqmPrepare(settings, serial);
				
			if(settings.zIndex) {
				h['window'].parent().css('z-index',settings.zIndex).end();
				if(h['settings'].overlay)
						h['overlay'].css('z-index',settings.zIndex-1);
			}
			return false;
		},
		close: function(event) {
			h = $.jqm.hash[event.data.serial];
			p = h['window'].parent();
			
			h['window']
				.hide()
				.find('.jqmDestroy').remove().end() // .remove('expr') doesn't work
				.insertBefore(p);
			p.remove();
			
			if(h['settings'].overlay)
				h['overlay'].hide().remove();
			
			h['active'] = false;
			return false;
		},
		pageHeight: function() {
			// document height
			var h = Math.max( document.body.scrollHeight, document.body.offsetHeight );
			return h+100+'px';
		},
		hash: {},
		serial: 0
	};
	
	$.fn.jqmPrepare = function(settings, serial) {
		this
		.jqmAddHash('window', serial)
		.wrap('<div class="'+settings.cssContainer+' jqmDestroy"></div>')
		.prepend('<div class="'+settings.cssHeader+' jqmDestroy">'+settings.header+'</div>')
		.addClass(settings.cssWindow)
		.show()
		.find('.jqmClose') // attach close events
		.one('click', {serial: serial}, $.jqm.close);
		return this;
	}
	
	$.fn.jqmAddHash = function(type, serial) {
		$.jqm.hash[serial][type] = this;
		return this;
	}
})(jQuery);