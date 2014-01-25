/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007 Brice Burgess <bhb@iceburg.net>, http: * Licensed under the MIT License:
 * http: * 
 * $Version: 2007.??.?? +r12 beta
 * Requires: jQuery 1.1.3+
 */
(function($) {
	
// initialize element(s) as modals
$.fn.jqm=function(parameters){
	var parameterDefaults = {
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
	return this.each(function(){
		if (this._jqm)
			return;
		
		// attach expando the modal referencing this modal's serial #
		currentSerial++;
		this._jqm=currentSerial;
		
		$.jqm.Map[currentSerial]={
			config: $.extend(parameterDefaults,parameters),
			active: false,
			window: $(this).addClass('jqmID'+s),
			serial: currentSerial
		};
		
		if(parameters.trigger)
			$(this).jqmAddTrigger(parameters.trigger);
	});
};

// called on a $.jqm initialized modal(s) to add close event triggers
$.fn.jqmAddClose=function(trigger){
	
	// fetch serials of modals to close via this trigger
	var serials=[];
	this.each(function(){
		serials.push(this._jqm)
	});
	
	// assign a click event to each matching trigger element which
	// executes $.jqmHide on each modal.
	$(trigger).each(function(){
		if(this.jqmHide)
			$.extend(this.jqmHide,serials);
		else {
			this.jqmHide=serials;
			$(this).click(function(){
				for(var s in this.jqmHide) {
					if($.jqm.Map[s])
						$.jqm.Map[s].window.jqmHide(this);
				}
				return false;
			});
		}
	});
};

// called on a $.jqm initialized modal(s) to add show event triggers
$.fn.jqmAddTrigger=function(trigger){
	
	// fetch serials of modals to show via this trigger
	var serials=[];
	this.each(function(){
		serials.push(this._jqm)
	});
	
	// assign a click event to each matching trigger element which
	// executes $.jqmShow on each modal.
	$(trigger).each(function(){
		if(this.jqmShow)
			$.extend(this.jqmShow,serials);
		else {
			this.jqmShow=serials;
			$(this).click(function(){
				for(var s in this.jqmShow) {
					if($.jqm.Map[s])
						$.jqm.Map[s].window.jqmShow(this);
				}
				return false;
			});
		}
	});
};

// stopped
$.fn.jqmShow=function(t){return this.each(function(){!H[this._jqm].a&&$.jqm.open(this._jqm,t)});};
$.fn.jqmHide=function(t){return this.each(function(){H[this._jqm].a&&$.jqm.close(this._jqm,t)});};
$.jqm = {
hash:{},
open:function(s,t){var h=H[s],c=h.c,cc='.'+c.closeClass,z=/^\d+$/.test(h.w.css('z-index'))&&h.w.css('z-index')||c.zIndex,o=$('<div></div>').css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:c.overlay/100});h.t=t;h.a=true;h.w.css('z-index',z);
 if(c.modal) {!A[0]&&F('bind');A.push(s);o.css('cursor','wait');}
 else if(c.overlay > 0)h.w.jqmAddClose(o);
 else o=false;
 
 h.o=(o)?o.addClass(c.overlayClass).prependTo('body'):false;
 if(ie6&&$('html,body').css({height:'100%',width:'100%'})&&o){o=o.css({position:'absolute'})[0];for(var y in {Top:1,Left:1})o.style.setExpression(y.toLowerCase(),"(_=(document.documentElement.scroll"+y+" || document.body.scroll"+y+"))+'px'");}
 
 if(c.ajax) {var r=c.target||h.w,u=c.ajax,r=(typeof r == 'string')?$(r,h.w):$(r),u=(u.substr(0,1) == '@')?$(t).attr(u.substring(1)):u;
  r.load(u,function(){c.onLoad&&c.onLoad.call(this,h);cc&&h.w.jqmAddClose($(cc,h.w));O(h);});}
 else cc&&h.w.jqmAddClose($(cc,h.w));

 c.toTop&&h.o&&h.w.before('<span id="jqmP'+h.w[0]._jqm+'"></span>').insertAfter(h.o);	
 (c.onShow)?c.onShow(h):h.w.show();O(h);return false;
},
close:function(s){var h=H[s];h.a=false;
 if(h.c.modal){A.pop();!A[0]&&F('unbind');}
 h.c.toTop&&h.o&&$('#jqmP'+h.w[0]._jqm).after(h.w).remove();
 if(h.c.onHide)h.c.onHide(h);else{h.w.hide()&&h.o&&h.o.remove()}return false;
}};
var currentSerial=0,A=[],ie6=$.browser.msie&&($.browser.version == "6.0"),i=$('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),
O=function(h){if(ie6)h.o&&h.o.html('<p style="width:100%;height:100%"/>').prepend(i)||(!$('iframe.jqm',h.w)[0]&&h.w.prepend(i)); f(h);},
f=function(h){try{$(':input:visible',h.w)[0].focus();}catch(e){}},
F=function(t){$()[t]("keypress",x)[t]("keydown",x)[t]("mousedown",x);},
x=function(e){var h=H[A[A.length-1]],r=(!$(e.target).parents('.jqmID'+h.s)[0]);r&&f(h);return !r;}
})(jQuery);