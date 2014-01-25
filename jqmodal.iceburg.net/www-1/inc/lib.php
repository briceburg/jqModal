<?php
// example library
function exSource($i, $nodisplay = array(), $htmlAppend = false) {
	$js = file_get_contents("examples/$i.js");
	$css = file_get_contents("examples/$i.css");
	$html = file_get_contents("examples/$i.inc");
	
	if (!isset($nodisplay['js']))
		echo "<script type=\"text/javascript\">\n$js\n</script>\n";
	if (!isset($nodisplay['css']))
		echo "<style>\n$css\n</style>\n";
	if (!isset($nodisplay['html']))
		echo "\n$html\n";
	?>
	
<div class="src">
<div class="js">
<a href="#">Javascript</a>
<pre>
<?php echo str_replace("\t",'  ', htmlspecialchars($js)) ?>
</pre>
</div>

<div class="css">
<a href="#">CSS</a>
<pre>
<?php echo str_replace("\t",'  ', htmlspecialchars($css)); ?>
</pre>
</div>

<div class="html">
<a href="#">HTML</a>
<pre>
<?php if ($htmlAppend) echo htmlspecialchars($htmlAppend)."\n...\n"; echo str_replace("\t",'  ',htmlspecialchars($html)); ?>
</pre>
</div>
</div>
<?php } ?>