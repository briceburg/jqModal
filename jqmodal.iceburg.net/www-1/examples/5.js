$().ready(function() {
	var show = $('#ex5show');
	var hide = $('#ex5hide');
	
	$('div.square')
		.jqm({overlay: 0, trigger: false})
		//.jqDrag()
		.jqmAddTrigger(show)
		.jqmAddClose(hide)
		
	$('#ex5multi').click(function() {
		$('div.square:even').jqmShow();
		$('div.square:odd').jqmHide();
		return false;
	});
});
