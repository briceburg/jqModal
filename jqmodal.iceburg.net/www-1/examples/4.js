$().ready(function() {
	
	// notice that you can pass an element as the target 
	//  in addition to a string selector.
	var t = $('#ex4 div.jqmdMSG');
	
	$('#ex4').jqm({
		trigger: 'a.ex4Trigger',
		ajax: '@href', /* Extract ajax URL from the 'href' attribute of triggering element */
		target: t,
		modal: true, /* FORCE FOCUS */
		onHide: function(h) { 
			t.html('Please Wait...');  // Clear Content HTML on Hide.
			h.o.remove(); // remove overlay
			h.w.fadeOut(888); // hide window
			
		},
		overlay: 0});
	
	 // nested dialog
	 $('#ex4c').jqm({modal: true, overlay: 10, trigger: false});
	 
	// Close Button Highlighting Javascript provided in ex3a.
	
	// Work around for IE's lack of :focus CSS selector
	if($.browser.msie)
		$('input')
			.focus(function(){$(this).addClass('iefocus');})
			.blur(function(){$(this).removeClass('iefocus');});
	
});