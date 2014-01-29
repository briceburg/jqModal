/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007 Brice Burgess <bhb@iceburg.net>, http://www.iceburg.net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * $Version: 2007.02.07 +r5
 */
(function($) {
$.fn.jqm=function(o,x,y){
var _o = {
zIndex: 3000,
overlay: 50,
overlayClass: 'jqmOverlay',
wrapClass: 'jqmWrap',
trigger: '.jqModal',
ajax: false,
target: false,
autofire: false,
focus: false
};
$.jqm.serial++; s = $.jqm.serial;
hash[s] = {c:$.extend(_o, o),active:false,w:this,o:false,u:$('input,select,button',this)[0],cb:[($.isFunction(x))?x:false,($.isFunction(y))?y:false]};
$(_o.trigger).bind("click",{'s':s},function(e) { hash[e.data.s]['t']=this;
	return (!hash[e.data.s]['active'])?$.jqm.open(e.data.s):false;});
if(_o.autofire) $(_o.trigger).click();
return this;
}
$.fn.jqmClose=function(){var p=this.parent();
	this.hide().insertBefore(p); p.remove(); return this;}
$.jqm = {
open:function(s){
	var h=hash[s];
	var c=h.c;
	var z=c.zIndex; if (c.focus) z+=10; if (c.overlay == 0) z-=5;
	if(!$.isFunction(h.q)) h.q=function(){return $.jqm.close(s)};
	h['active']=true;

	var f=$('<iframe></iframe>').css({'z-index':z-2,opacity:0});
	var o=$('<div></div>').css({'z-index':z-1,opacity:c.overlay/100}).addClass(c.overlayClass);
	$([f[0],o[0]]).css({height:$.jqm.pageHeight(),width:'100%',position:'absolute',left:0,top:0});

	if (c.focus) { if($.jqm.x.length == 0) $.jqm.ffunc('bind'); $.jqm.x.push(s);
		o=f.add(o[0]).css('cursor','wait');}
	else if (c.overlay > 0){o.bind('click', h.q); o=($.jqm.ie6)?f.add(o[0]):o;}
	else o=(true)?f.css('height','100%').prependTo(h.w):false;
	if (o) h.o=o.appendTo('body');

	h.w.wrap('<div class="'+c.wrapClass+'" id="jqmID'+s+'" style="z-index:'+z+'"></div>');
	if (c.ajax) { var t = (c.target) ?
		(typeof(c.target) == 'string')?$(c.target,h.w):$(c.target):h.w;
		c.ajax=(c.ajax.substr(0,1) == '@')?$(h.t).attr(c.ajax.substring(1)):c.ajax;
		t.load(c.ajax, function() {$('.jqmClose',h.w).bind('click',h.q);}); }
	else h.w.find('.jqmClose').bind('click',h.q);

	(h.cb[0])?h.cb[0](h):h.w.show(); h.u.focus();
	return false;
},
close:function(s){var h=hash[s]; h['active'] = false;
	$('.jqmClose',h.w[0]).unbind('click',h.q);
	var x=$.jqm.x; if(x.length != 0) { x.pop(); 
		if (x.length == 0) $.jqm.ffunc('unbind'); }
	(h.cb[1])?h.cb[1](h):h.w.jqmClose(); if(h.o) h.o.remove();
	return false;
},
pageHeight:function(){var d=document.documentElement;
	return Math.max(document.body.scrollHeight,d.offsetHeight,d.clientHeight || 0,window.innerHeight || 0);
},
hash: {},
serial: 0,
x: [],
f:function(e) { var s=$.jqm.x[$.jqm.x.length-1];
	if($(e.target).parents('#jqmID'+s).length == 0) { hash[s].u.focus(); return false;} return true;
},
ffunc:function(t) {$()[t]("keypress",$.jqm.f)[t]("keydown",$.jqm.f)[t]("mousedown",$.jqm.f);},
ie6:$.browser.msie && typeof XMLHttpRequest == 'function'
};
var hash=$.jqm.hash;
})(jQuery);