/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007-2014 Brice Burgess @iceburg_net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * $Version: 2014.??.?? +r12 beta
 * Requires: jQuery 1.2.3+
 */

/**
 * TODO
 * 
 * + test data attribute for ajax
 * + compat change; onShow/onHide callbacks must return true||false
 * + compat chaange onShow callback responsible for displaying overlay.
 * + bumped minimum jquery version to 1.2.3 (for data())
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
			onShow: onShow,
			onHide: onHide,
			onLoad: false
		};
		
		$.extend(o,options);
		
		return this.each(function(){
			var e = $(this),
				jqm = $(this).data('jqm');
			
			if(!jqm) jqm = {ID: I++};
			
			// add/extend options to modal and mark as initialized
			e.data('jqm',$.extend(o,jqm)).addClass('jqm-init');
			
			// ... Attach events to trigger showing of this modal
			o.trigger&&$(this).jqmAddTrigger(o.trigger);
		});
	};
	
	
	/**
	 * Matching modals will have their jqmShow() method fired by attaching a
	 *   onClick event to elements matching `trigger`.
	 * 
	 * @name jqmAddTrigger
	 * @param trigger a selector String, jQuery collection of elements, or a DOM element.
	 */
	$.fn.jqmAddTrigger=function(trigger){
		return this.each(function(){
			if(!addTrigger($(this), 'jqmShow', trigger))
				err("jqmAddTrigger must be called on initialized modals")
		});
	};
	
	
	/**
	 * Matching modals will have their jqmHide() method fired by attaching an
	 *   onClick event to elements matching `trigger`.
	 * 
	 * @name jqmAddClose
	 * @param trigger a selector String, jQuery collection of elements, or a DOM element.
	 */
	$.fn.jqmAddClose=function(trigger){
		return this.each(function(){
			if(!addTrigger($(this), 'jqmHide', trigger))
				err("jqmAddTrigger must be called on initialized modals")
		});
	};
	
	
	/**
	 * Open matching modals (if not shown)
	 */
	$.fn.jqmShow=function(trigger){
		return this.each(function(){ !this._jqmShown&&show($(this), trigger); });
	};
	
	/**
	 * Close matching modals
	 */
	$.fn.jqmHide=function(trigger){
		return this.each(function(){ this._jqmShown&&hide($(this), trigger); });
	};
	
	
	// utility functions
	
	var
		err = function(msg){
			if(window.console && window.console.error) window.console.error(msg);
		
		
	}, show = function(e, t){
		
		/**
		 * e = modal element (as jQuery object)
		 * t = triggering element
		 * 
		 * o = options
		 * z = z-index of modal
		 * v = overlay element (as jQuery object)
		 * 
		 * 
		 * cc closeClas
		 * h hash
		 * h.c hash/options
		 */
		
		var o = e.data('jqm'),
			z = /^\d+$/.test(e.css('z-index'))&&e.css('z-index')||o.zIndex,
			v = $('<div></div>').css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:o.overlay/100})

		
		console.log('before onShow');

		// trigger onShow callback maintaining legacy "hash" compatibility
		if(o.onShow({w: e, c: o, o: v, t: t}))
		{
			// mark modal as shown
			e[0]._jqmShown = true;
			

			console.log('after onShow');
			
			
			// if modal dialog 
			//
			// Bind the Keep Focus Function [F] if no other Modals are open (!A[0]) +
			// Add this modal to the opened modals stack (A) for nested modal support +
			// Mark overlay to show wait cursor when mouse hovers over it.
			// 
			// else, close dialog when overlay is clicked
			if(o.modal){ !A[0]&&F('bind'); A.push(e); v.css('cursor','wait'); }
			else {e.jqmAddClose(v); }
		}
		
		
	}, hide = function(e, trigger){
		// hide a modal element (e)
		
		
	}, onShow = function(hash){
		// onShow callback. Responsible for showing a modal.
		//  return true if modal is shown, false if not.
		
		// hash object;
	    //  w: (jQuery object) The dialog element
	    //  c: (object) The config object (dialog's parameters)
	    //  o: (jQuery object) The overlay
	    //  t: (DOM object) The triggering element
		
		// display the overlay (prepend to body) if not disabled
		if(hash.c.overlay > 0)
			hash.o.addClass(hash.c.overlayClass).prependTo('body');
			
		// make modal visible
		hash.w.show();
		
		// attempt to focus on first input in modal
		$(':input:visible:first',hash.w).focus();
		
		return true;
		
		
	}, onHide = function(hash){
		// onHide callback. Responsible for hiding a modal.
		//  return true if modal is closed, false if not.
		
		// hash object;
	    //  w: (jQuery object) The dialog element
	    //  c: (object) The config object (dialog's parameters)
	    //  o: (jQuery object) The overlay
	    //  t: (DOM object) The triggering element 
		
		alert('onHide!');
		
		
	},  addTrigger = function(e, key, trigger){
		// addTrigger: Adds a jqmShow or jqmHide (key) for a modal (e) 
		//  all elements that match trigger string (trigger)\
		
		// return false if e is not an initialized modal element
		if(!e.data('jqm')) return false;
		
		return $(trigger).each(function(){
			// register modal to trigger elements
			this[key] = this[key] || [];
			this[key].push(e);
			
		}).click(function(){
			
			// foreadh modal registered to this trigger, call jqmShow || 
			//   jqmHide (key) on modal passing trigger element (e)
			$.each(this[key], function(i, e){ e[key](this); });
			
			// stop trigger click event from bubbling
			return false;
		});
		
		
	},  F = function(t){
		// F: The Keep Focus Function (for modal dialos)
		// Binds or Unbinds (t) the Focus Examination Function (X) to keypresses and clicks
		
		$(document)[t]("keypress keydown mousedown",X);
		
		
	}, X = function(e){
		// X: The Focus Examination Function (for modal dialogs)

		var modal = $(e.target).data('jqm') || $(e.target).parents('.jqm-init:first').data('jqm'),
			activeModal = A[A.length-1].data('jqm');
		
		// allow bubbling if event target is within active modal dialog
		if(modal && modal.ID == activeModal.ID) return true; 

		// else, try to focus on first input element and halt bubbling
		$(':input:visible:first',activeModal).focus();
    	return false;
		
	}, 
	
	I = 0,   // modal ID increment (for nested modals) 
	A = [];  // array of active modals (used to lock interactivity to appropriate modal) 
	
})( jQuery, window );