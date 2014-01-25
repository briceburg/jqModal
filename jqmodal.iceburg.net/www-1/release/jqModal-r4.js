/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007 Brice Burgess <bhb@iceburg.net>, http://www.iceburg.net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * $Version: 2007.02.02 +r4
 */
(function($) {
$.fn.jqm = function(o, f) {

var _o = {
zIndex: 3000,
overlay: 50,
overlayColor: '#000',
wrapClass: 'jqmWrap',
trigger: '.jqModal',
ajax: false,
target: false,
autofire: false,
focus: false
};

$.jqm.serial++; s = $.jqm.serial;
$.jqm.hash[s] = {conf:$.extend(_o, o),active:false,w:this,callback:($.isFunction(f))?f:false};

$(_o.trigger).bind("click",{serial: s},function(e) { 
	return (!$.jqm.hash[e.data.serial]['active'])?$.jqm.open(e.data.serial):false;
});

if(_o.autofire) $(_o.trigger).click();
return this;
}

$.jqm = {
open: function(s) {
	var h=$.jqm.hash[s];
	var c=h['conf'];
	var z=c.zIndex; if (c.focus) z+=10; if (c.overlay == 0) z-=5;
	h['active']=true;
	if(!$.isFunction(h.c)) h.c=function(){return $.jqm.close(s)};
		
	var f=$('<iframe></iframe>').css({'z-index':z-2,opacity:0});
	var o=$('<div></div>').css({'z-index':z-1,opacity:c.overlay/100,'background-color':c.overlayColor});
	$([f[0],o[0]]).css({height:$.jqm.pageHeight(),width:'100%',position:'absolute',left:0,top:0});
	
	if (c.focus) { if($.jqm.c.length == 0) $.jqm.ffunc('bind'); $.jqm.c.push(s);
		o=f.add(o[0]).css('cursor','wait'); }
	else { o.bind('click', h.c);
		o=(c.overlay == 0)?$('<div></div>'):($.jqm.ie6)?f.add(o[0]):o; }
	h['o']=o.appendTo('body');
	
	h.w.show().wrap('<div class="'+c.wrapClass+'" id="jqmID'+s+'" style="z-index:'+z+'"></div>');
	h.d=false; if ($('input,select,button',h.w)[0]) { h.d=$('input,select,button',h.w)[0]; h.d.focus(); }
	if (c.ajax) { var t = (c.target) ?
		(typeof(c.target) == 'string')?$(c.target,h.w):$(c.target):h.w;
		t.load(c.ajax, function() {$('.jqmClose',h.w).bind('click',h.c);}); }
	else h.w.find('.jqmClose').bind('click',h.c);
	
	if(h.callback) h.callback(h.w[0],s);
	return false;
},
close: function(s) {
	var h=$.jqm.hash[s];
	var p=$(h.w).parent();
	$('.jqmClose',p).unbind('click',h.c);
	h.w.hide().insertBefore(p);
	p.remove(); h['o'].remove();
	h['active'] = false;
	var c=$.jqm.c; if(c.length != 0) { c.pop(); 
		if (c.length == 0) $.jqm.ffunc('unbind'); }
	return false;
},
pageHeight: function() { var d=document.body; var w=window;
	return (w.innerHeight && w.scrollMaxY) ? w.innerHeight+w.scrollMaxY+'px' :
	(d.scrollHeight > d.offsetHeight) ? d.scrollHeight+'px' :d.offsetHeight+'px';
},
hash: {},
serial: 0,
c: [],
f: function(e) { var s=$.jqm.c[$.jqm.c.length-1]; 
	if($(e.target).parents('#jqmID'+s).length == 0) {
	if($.jqm.hash[s].d) $.jqm.hash[s].d.focus();
	return false;} return true;
},
ffunc: function(t) {$()[t]("keypress",$.jqm.f)[t]("keydown",$.jqm.f)[t]("mousedown",$.jqm.f);},
ie6: $.browser.msie && typeof XMLHttpRequest == 'function'
};
})(jQuery);