$().ready(function() {
	$('#ex3a').jqm({
		trigger: '#ex3aTrigger',
		overlay: 30, /* 0-100 (int) : 0 is off/transparent, 100 is opaque */
		overlayClass: 'whiteOverlay'})
		.jqDrag('.jqDrag'); /* make dialog draggable, assign handle to title */
	
	// Close Button Highlighting. IE doesn't support :hover. Surprise?
	$('input.jqmdX')
	.hover(
		function(){ $(this).addClass('jqmdXFocus'); }, 
		function(){ $(this).removeClass('jqmdXFocus'); })
	.focus( 
		function(){ this.hideFocus=true; $(this).addClass('jqmdXFocus'); })
	.blur( 
		function(){ $(this).removeClass('jqmdXFocus'); });

});