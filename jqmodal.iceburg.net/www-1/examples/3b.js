$().ready(function() {
	
	// select + reference "triggering element" -- will pass to $.jqm()
	var triggers = $('a.ex3bTrigger')[0];
	
	// NOTE; we could have used document.getElementById(), or selected
	//  multiple elemets with $(..selector..) and passed the trigger
	//  as a jQuery object. OR, just include the string '#ex3btrigger' 
	//  as the trigger parameter (as typically demonstrated).
	
	//  NOTE; we supply a target for the ajax return. This allows us
	//   to keep the structure of the alert window. An element can 
	//   also be passed (see the documentation) as target.
	
	$('#ex3b').jqm({
		trigger: triggers,
		ajax: 'examples/3b.html',
		target: 'div.jqmAlertContent',
		overlay: 0
		});
	
	// Close Button Highlighting. IE doesn't support :hover. Surprise?
	if($.browser.msie) {
	$('div.jqmAlert .jqmClose')
	.hover(
		function(){ $(this).addClass('jqmCloseHover'); }, 
		function(){ $(this).removeClass('jqmCloseHover'); });
	}
});