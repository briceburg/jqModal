<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<?php require('inc/lib.php'); ?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
<title>jqModal :: Minimalistic Modaling for jQuery</title>
<meta name="author" content="Brice Burgess" />
<meta name="description" content="Minimalistic Modaling for jQuery. Modal Windows in javascript." />
<meta name="keywords" content="modal, modal window, jquery, javascript" />
<link type="text/css" rel="stylesheet" media="all" href="inc/css/common.css" />
<link type="text/css" rel="stylesheet" media="all" href="inc/css/example.css" />


<!-- jqModal Dependencies -->
<!-- <script type="text/javascript" src="inc/jquery-1.2.6.pack.js"></script> -->
<script type="text/javascript" src="inc/jquery-1.11.0.js"></script>
<script type="text/javascript" src="jqModal-new.js"></script>

<!--  jqModal Styling -->
<link type="text/css" rel="stylesheet" media="all" href="jqModal.css" />

<!-- Optional Javascript for Drag'n'Resize -->
<script type="text/javascript" src="inc/jqDnR.js"></script>
<script type="text/javascript" src="inc/dimensions.js"></script>


<script type="text/javascript">$().ready(function(){$('#nav').css('opacity',0.68);});</script>
</head>
<body>

<div id="nav">
<ul>
<li><a href="#who">About</a></li>
<li><a href="#where">Download</a></li>
<li><a href="#how">Usage</a></li>
<li><a href="#examples">Examples</a></li>
<li><a href="#etc">Changes and Issues</a></li>
</div>


<div id="modal">aaaaa</div>


<a href="#" id="trigger">trigger</a>


<script type="text/javascript">
$().ready(function(){

	$('#modal').jqm({trigger: '#trigger'});

	$('#trigger').jqmAddTrigger('');

	$('#modal').jqmShow();
		
});
</script>




</body>
</html>