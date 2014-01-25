/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007-2014 Brice Burgess @iceburg_net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * $Version: 2014.??.?? +r12 beta
 * Requires: jQuery 1.1.3+
 */

/**
 * TODO
 * 
 * + test data attribute for ajax
 * 
 */

(function(jQuery, window, undefined) {
	
	/**
	 * Initialize a set of elements as "modals". Modals typically are popup dialogs,
	 * notices, modal windows, &c. 
	 * 
	 * @name jqm
	 * @param options user defined options, augments defaults.
	 * @type jQuery
	 * @cat Plugins/jqModal
	 */
	
	$.fn.jqm=function(options){
		
		/**
		 *  default options
		 *  
		 * (Integer)   zIndex       - Desired z-Index of modal element. Will not override existing z-index styles (set inline or via CSS).  
		 * (Integer)   overlay      - [0-100] Translucency percentage (opacity) of the body covering overlay. Set to 0 for NO overlay, and up to 100 for a 100% opaque overlay.  
		 * (String)    overlayClass - Applied to the body covering overlay. Useful for controlling overlay look (tint, background-image, &c) with CSS.
		 * (String)    closeClass   - Children of the modal element matching `closeClass` will fire the onHide event (to close the modal).
		 * (Mixed)     trigger      - Matching elements will fire the onShow event (to display the modal). Trigger can be a selector String, a jQuery collection of elements, a DOM element, or a False boolean.
		 * (String)    ajax         - URL to load content from via an AJAX request. False to disable ajax. If ajax begins with a "@", the URL is extracted from the attribute of the triggering element (e.g. use '@data-url' for; <a href="#" class="jqModal" data-url="modal.html">...)	                
		 * (Mixed)     target       - Children of the modal element to load the ajax response into. If false, modal content will be overwritten by ajax response. Useful for retaining modal design. 
		 *                            Target may be a selector string, jQuery collection of elements, or a DOM element -- and MUST exist as a child of the modal element.
		 * (Boolean)   modal        - If true, user interactivity will be locked to the modal window until closed.
		 * (Boolean)   toTop        - If true, modal will be posistioned as a first child of the BODY element when opened, and its DOM posistion restored when closed. Useful for overcoming z-Index container issues.
		 * (Function)  onShow       - User defined callback function fired when modal opened.
		 * (Function)  onHide       - User defined callback function fired when modal closed.
		 * (Function)  onLoad       - User defined callback function fired when ajax content loads.
		 */
		var o = {
			zIndex: 3000,
			overlay: 50,
			overlayClass: 'jqmOverlay',
			closeClass: 'jqmClose',
			trigger: '.jqModal',
			ajax: false,
			target: false,
			modal: false,
			toTop: false,
			onShow: false,
			onHide: false,
			onLoad: false
		};
		
		$.extend(o,options);
		
		return this.each(function(){
			this._jqm = o;
			
			// ... Attach events to trigger showing of this modal
			o.trigger&&$(this).jqmAddTrigger(o.trigger);
		});
	};
	
	
	/**
	 * Matching modals will have their onShow callback fired by the onClick 
	 *   handler of elements matching `trigger`.
	 * 
	 * @name jqmAddTrigger
	 * @param trigger a selector String, jQuery collection of elements, or a DOM element.
	 */
	$.fn.jqmAddTrigger=function(trigger){
		return this.each(function(){
			var e = this;
			if(e._jqm)
			{ 
				$(trigger).each(function(){
					// _jqt: array of modals to show when this trigger element is clicked
					this._jqt = this._jqt || [];
					this._jqt.push(e);
				}).click(function(){
					$.each(this._jqt, function(i, e){
						$(e).jqmShow(this);
					});
				});
			} else { err("jqmAddTrigger must be called on initialized modals");}
		});
	};
	
	
	/**
	 * Open matching modals (if not shown)
	 */
	$.fn.jqmShow=function(trigger){
		return this.each(function(){ !this._jqm.shown&&show(this, trigger); });
	};
	
	/**
	 * Close matching modalsZ
	 */
	$.fn.jqmHide=function(trigger){
		return this.each(function(){ this._jqm.shown&&hide(this, trigger); });
	};
	
	
	// utility functions
	
	var 
	   err = function(msg){
		if(window.console && window.console.error) window.console.error(msg);
		
		
	}, show = function(e, trigger){
		// show a modal element (e)
		console.log(e);
		console.log(e._jqm);
		
	}, hide = function(e, trigger){
		// hide a modal element (e)
		
	};
		
	
			
	
})( jQuery, window );