/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007 Brice Burgess <bhb@iceburg.net>, http://www.iceburg.net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * $Version: 2007.01.28 +r3
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
			loading: 'loading...', // HTML displayed while a page loads
			zIndex: 3000,
			autofire: false,
			overlay: true
		};
		$.jqm.serial++; s = $.jqm.serial;
		$.jqm.hash[s] = { 
			settings: $.extend(DEFAULTS, settings), active: false, overlay: false }; 
		
		this.bind("click", {serial: s}, function(event) { 
			if(!$.jqm.hash[event.data.serial]['active'])
				return  $.jqm.open(event.data.serial)
			return false;
		});
		
		if($.jqm.hash[s]['settings'].autofire)
			this.click();
		
		return this;
	}
	$.jqm = {
		open: function(serial) {
			h = $.jqm.hash[serial];
			h['active'] = true;
			settings = h['settings'];
			
			z = settings.zIndex - 2;
			var f = $('<iframe></iframe>')
				.css({'z-index':z,border:'none',opacity:0});
			if (settings.overlay) 
			f = $('<div class="'+settings.cssOverlay+'"></div>')
				.css({opacity: 0.5, 'z-index': z+1})
				.one('click', {serial: serial}, $.jqm.close)
				.add(f[0]);
			f
				.css({height: $.jqm.pageHeight(), width: '100%', position: 'absolute', left: 0, top: 0})
				.jqmAddHash('overlay', serial)
				.appendTo('body');
			
			if (settings.ajax)
				$('<div></div>')
					.html(settings.loading)
					.appendTo('body')
					.load(settings.ajax, function() { 
						$(this).jqmPrepare(settings, serial);
					});
			else
				$(settings.inline).jqmPrepare(settings, serial);
			
			return false;
		},
		close: function(event) {
			h = $.jqm.hash[event.data.serial];
			p = h['window'].parent();
			
			h['window']
				.hide()
				.find('.jqmDestroy').remove().end() // .remove('expr') doesn't work???
				.insertBefore(p);
			p.remove();
			
			h['overlay'].remove();
			
			h['active'] = false;
			return false;
		},
		pageHeight: function() { // returns full document height despite body being set to 100%
			h = (window.innerHeight && window.scrollMaxY) ?
				window.innerHeight + window.scrollMaxY :
				(document.body.scrollHeight > document.body.offsetHeight) ?
					document.body.scrollHeight :
					document.body.offsetHeight;
			return h+'px';
		},
		hash: {},
		serial: 0
	};
	
	$.fn.jqmPrepare = function(settings, serial) {
		return this
		.jqmAddHash('window', serial)
		.addClass(settings.cssWindow)
		.wrap('<div class="'+settings.cssContainer+' jqmDestroy" style="z-index: '+settings.zIndex+'"></div>')
		.prepend('<div class="'+settings.cssHeader+' jqmDestroy">'+settings.header+'</div>')
		.show()
		.find('.jqmClose') // attach close events
			.one('click', {serial: serial}, $.jqm.close);
	}
	
	$.fn.jqmAddHash = function(type, serial) {
		$.jqm.hash[serial][type] = this; return this;
	}
})(jQuery);