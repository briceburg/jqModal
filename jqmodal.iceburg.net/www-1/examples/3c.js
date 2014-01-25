// this example shows the use of onShow and onHide callbacks. Make
// sure to read the documentation for futher instructions, and
// an explanation of the "hash" argument.

$().ready(function() {
	$('#ex3c')
		.jqDrag('.jqDrag')
		.jqResize('.jqResize')
		.jqm({
			trigger:'#ex3cTrigger',
			overlay: 0,
			onShow: function(h) {
				/* callback executed when a trigger click. Show notice */
				h.w.css('opacity',0.92).slideDown(); 
				},
			onHide: function(h) {
				/* callback executed on window hide. Hide notice, overlay. */
				h.w.slideUp("slow",function() { if(h.o) h.o.remove(); }); } 
			});
});
