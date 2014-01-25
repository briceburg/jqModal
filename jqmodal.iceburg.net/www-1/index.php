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
<script type="text/javascript" src="inc/jquery-1.2.6.pack.js"></script>
<script type="text/javascript" src="jqModal.js"></script>

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

<div class="box">

<a class="anchor" name="who"></a>
<div class="wwwwh">Who?</div>

<div id="heading">
jqModal <p>Minimalist Modaling with jQuery</p>
</div>

<br />

<div class="wwwwh">What?</div>
<p>
jqModal is a plugin for <a href="http://jquery.com/">jQuery</a> to help you display notices, dialogs, and modal windows in a web browser. It is flexible and tiny, akin to a "Swiss Army Knife", and makes a great base as a general purpose windowing framework.
</p>

<p><em>Features</em>;</p>
<ul>
<li>Designer Frieldly - Use *your* HTML+CSS for Layout and Styling</li>
<li>Translator/i18n friendly - No hardcoded English strings</li>
<li>Developer friendly - Extensible through callbacks to make anything (gallery slideshows, video-conferencing, etc.) possible</li>
<li>Simple support for remotely loaded content (aka "AJAX")</li> 
<li>Multiple Modal Support (including Modal-in-Modal)</li>
</ul>

<div class="wwwwh">Why?</div>
<p>
There is no shortage of dialog scripts that "dazzle" their audience. Some will try to walk your dog. These scripts are often rooted in unnecessary effects, are rigid, and extremely cumbersome. This is not where jqModal is headed! I wanted to write a simple modal framework. Something <em>lightweight</em> yet <em>powerful</em> and <em>flexible</em>. We'll demonstrate the dazzling dogwalks later... for now, you are encouraged to pioneer your own effects by harnessing the power of <a href="http://www.jquery.com/">jQuery</a> and jqModal!
</p>
<p>
If you like jqModal, please consider a dontation to support its development:
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="image" src="https://www.paypal.com/en_US/i/btn/x-click-but04.gif" border="0" name="submit" alt="Make payments with PayPal - it's fast, free and secure!">
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
</form>
</p>

<div class="wwwwh">When?</div>
<p>
Current Version: <em>2009.03.01 +r14</em>
<br /> Copyright &copy; 2007-2009 Brice Burgess - released under both the <a href="http://www.opensource.org/licenses/mit-license.php">MIT</a> and <a href="http://www.gnu.org/licenses/gpl.html">GPL</a> licenses.
</p>

<a class="anchor" name="where"></a>
<div class="wwwwh">Where?</div>
<p>
Download the <em><a href="jqModal.js">Plugin</a></em> (jqModal.js - 2.97k) [jQuery >= <strong>1.1.3.1</strong>+]
<br />
Download the <em><a href="jqModal.css">Styling</a></em> (jqModal.css - 496 bytes) 
<br /><br />
<strong>[PREVIOUS RELEASES]</strong> available <a href="release/">here</a>.
<br /><br />
<strong>[OPTIONAL]</strong> <em><a href="../jqDnR/">Drag'n'Resize Plugin</a></em> (jqDnR.js - 874 bytes) - It is recommended to combine DnR and jqModal javascript files into one to reduce server overhead.
<br /><br />
&nbsp;&nbsp;** file sizes reflect <strong>un</strong>compressed source with header removed
</p>

<strong>Image Caching</strong>; Some browsers do not preload background images and image elements if they are hidden (have a parent whose display is set to none or hidden).
This could effect the responsiveness of your dialogs. This page uses an OPTIONAL workaround to get around this issue. It preloads dialog decoration images for faster display. 
See the code used by clicking the HTML tab below;
<div class="src">
<div class="html">
<a href="#">HTML</a>
<pre>
&lt;!-- optional: image cacheing. Any images contained in this div will be
	loaded offscreen, and thus cached --&gt;
	
&lt;style type="text/css"&gt;
/* Caching CSS created with the help of;
	Klaus Hartl &lt;klaus.hartl@stilbuero.de&gt; */
@media projection, screen {
     div.imgCache { position: absolute; left: -8000px; top: -8000px; }
     div.imgCache img { display:block; }
}
@media print { div.imgCache { display: none; } }
&lt;/style&gt;

&lt;div class="imgCache"&gt;
	&lt;img src="inc/busy.gif" /&gt;
	&lt;img src="dialog/close.gif" /&gt;
	&lt;img src="dialog/sprite.gif" /&gt;
	&lt;img src="dialog/close_sprite.gif" /&gt;
	&lt;img src="dialog/bl.gif" /&gt;
	&lt;img src="dialog/br.gif" /&gt;
	&lt;img src="dialog/bc.gif" /&gt;
	&lt;img src="notice/note_icon.png" /&gt;
	&lt;img src="notice/close_icon.png" /&gt;
&lt;/div&gt;
</pre>
</div></div>

<!-- optional: image caching. Any images contained in this div will be
	loaded offscreen, and thus cached.-->
	
<style type="text/css">
/* Caching CSS courtesf of;
	Klaus Hartl <klaus.hartl@stilbuero.de> */
@media projection, screen {
     div.imgCache { position: absolute; left: -8000px; top: -8000px; }
     div.imgCache img { display:block; }
}
@media print { div.imgCache { display: none; } }
</style>

<div class="imgCache">
	<img src="inc/busy.gif" />
	<img src="dialog/close.gif" />
	<img src="dialog/close_sprite.gif" />
	<img src="dialog/sprite.gif" />
	<img src="dialog/bl.gif" />
	<img src="dialog/br.gif" />
	<img src="dialog/bc.gif" />
	<img src="notice/note_icon.png" />
	<img src="notice/close_icon.png" />
</div>

<div style="width:100%;text-align:center;clear:both;">Test for Internet Explorer 6: <select><option>ActiveX Bleed?</option><option>hope not!</option></select></div>

<a class="anchor" name="how"></a>
<div class="wwwwh">How?</div>

<p><em>Usage</em></p>
Typically, to add popup dialogs, frames, windows, or what-have-yous to your website you must;
<dl>
<dt>1. Add dialog placeholder(s) to your page</dt>
<dd>Dialog placeholders are usually hidden &lt;div&gt; containers placed as children of the &lt;body&gt; element. CSS is used for styling and position. Dialogs are displayed("shown") when a trigger event occurs. Their contents(message/image/etc.) can be inline (hardcoded in the HTML) or added via ajax when the dialog is shown.</dd>
<dt>2. Initialize your dialog(s)</dt>
<dd>jqModal must be called on each dialog element before it can be shown using the <em>$.jqm()</em> function. You can customize your dialogs by passing parameters as an argument (e.g. <em>$('#dialog').jqm({modal: true, trigger: 'a.showDialog'});</em>). 
<p />
NOTE: $.jqm() should only be called ONCE per dialog element! In special cases you may want to change a dialog's parameters. Subsequent calls to $.jqm() will update the dialog(s) parameters.</dd>
<dt>3. Trigger your dialog</dt>
<dd>Dialogs are automatically shown when a "trigger" element is clicked. You can also manually trigger a dialog by executing the <em>$.jqmShow()</em> function on it.</dd>
</dl>

<p><em>Functions</em></p>
<dl>
<dt>jqm</dt>
<dd> 
 Initialize element(s) to be used as a jqModal. Accepts a parameters object. If element(s) are already initialized, the call will update their parameters.
 
 <p class="code">
 $('#dialog').jqm(); <br />
 $('.dialogs').jqm({ajax:'@href',modal:true});
 </p>
</dd>

<dt>jqmShow</dt>
<dd> 
 Show jqModal element(s).
 
 <p class="code">
 $('#dialog').jqmShow(); <br />
 $('.dialogs').jqmShow();
 </p>
 
</dd>

<dt>jqmHide</dt>
<dd> 
 Hide jqModal element(s).
 
 <p class="code">
 $('#dialog').jqmHide(); <br />
 $('.dialogs').jqmHide();
 </p>
 
</dd>

<dt>jqmAddTrigger</dt>
<dd> 
 Adds the passed element(s) as a "show" trigger. Clicking them will show the jqModal.
  Accepts;
  <ul>
      <li>(string) A jQuery <a href="http://docs.jquery.com/Selectors">Selector</a></li>
      <li>(object) A jQuery Collection</li>
      <li>(object) A DOM element</li>
  </ul>
 
 <p class="code">
 $('#dialog').jqmAddTrigger('.openDialog'); <br />
 $('.dialogs').jqmAddTrigger($('#openDialogs a'));
 </p>
 
</dd>

<dt>jqmAddClose</dt>
<dd> 
 Adds the passed element(s) as a "close" trigger. Clicking them will hide the jqModal.
  Accepts;<ul>
      <li>(string) A jQuery <a href="http://docs.jquery.com/Selectors">Selector</a></li>
      <li>(object) A jQuery Collection</li>
      <li>(object) A DOM element</li>
  </ul>
 
 <p class="code">
 $('#dialog').jqmAddClose('.hideDialog'); <br />
 $('.dialogs').jqmAddClose($('#hideDialogs a'));
 </p>
 
</dd>
</dl>

<p><em>Parameters</em></p>

Parameters allow tailoring the behavior of any jqModal to your needs. They are passed on-the-fly as an object to the $.jqm function. 
<br /><br />NOTE; you can overide the default setting of a parameter by modifying the <em>$.jqm.params</em> global. For instance, to have ALL dialogs appear as modal dialogs (without passing modal as "true"), execute <em>$.jqm.params.modal = true</em> before any calls to the $.jqm() function. 

<dl>
<dt>overlay</dt>
<dd>The overlay transparency as a percentage. If 0 the overlay is disabled, and
 the page will remain interactive. If 100 the overlay will be 100% opaque.
 <p class="pv">(integer) - default: 50</p>
</dd>

<dt>overlayClass</dt>
<dd>Name of CSS class applied to the overlay.
 <p class="pv">(string) - default: 'jqmOverlay'</p>
</dd>

<dt>closeClass</dt>
<dd>When a dialog is shown, elements that have a CSS class of closeClass will close the dialog when clicked. For instance; If your dialog contains an &lt;img class="closeClass" src="close.gif"&gt;, the dialog will close when this image is clicked. You can use $.jqmHide() to close a dialog manually.  
 <p class="pv">(string|false) - default: 'jqmClose'</p>
</dd>

<dt>trigger</dt>
<dd>
  Elements matching trigger will show the dialog when clicked. They are assigned when $.jqm() is called. Triggers can be;
    <ul>
      <li>(string) A jQuery <a href="http://docs.jquery.com/Selectors">Selector</a></li>
      <li>(object) A DOM element (e.g. $.jqm({trigger: document.getElementByID("showDialog")})</li>
      <li>(false) The call to $.jqm() will not look for trigger elements.</li>
    </ul>
 <p class="pv">(string|object|false) - default: '.jqModal'</p>
</dd>

<dt>ajax</dt>
<dd>If passed, dialog contents will be loaded remotely via ajax. You can pass the URL
(e.g. $.jqm({ajax:'remote/dialog.html'}) or extract it from an attribute of the triggering element.
For instance, $(.jqm({ajax:'@href'}) would grab contents from bar.html if the triggering element was &lt;a href="foo/bar.html"&gt;Open Dialog&lt;/a&gt;.
If a more complicated loading routine is desired, the onShow() callback should be leveraged.    
 <p class="pv">(string|false) - default: false</p>
</dd>

<dt>ajaxText</dt>
<p class="pv">NOTE: ajaxText is applicable only if the ajax parameter is passed.</p>
<dd>Text to display while waiting for ajax returned content. May include HTML (such as an loading image). E.g. $.jqm({ajaxText: '&lt;marquee style="width: 1.5em;"&gt;.. ... .&lt;/marquee&gt;'});</p>
 <p class="pv">(string) - default: ''</p>
</dd>

<dt>target</dt>
<dd>
 <p class="pv">NOTE: target is applicable only if the ajax parameter is passed.</p>
 If passed, the ajax return will be loaded into the target element. The target element MUST EXIST as a child of the dialog. Target can be;
 <ul>
      <li>(string) A jQuery <a href="http://docs.jquery.com/Selectors">Selector</a></li>
      <li>(object) A DOM element (e.g. $.jqm({target: $('#dialog div.contents')[0]})</li>
      <li>(false) ajax return overwrites dialog's innerHTML</li>
    </ul>
 <p class="pv">(string|false) - default: false</p>
</dd>

<dt>modal</dt>
<dd>Restricts input (mouse clicks, keypresses) to the dialog. NOTE: If false, and if overlay is enabled, CLICKING THE OVERLAY WILL CLOSE THE DIALOG.  
 <p class="pv">(boolean) - default: false</p>
</dd>

<dt>toTop</dt>
<dd>When true; places the dialog element as a direct child of &lt;body&gt; when shown. This was added to help overcome z-Index stacking order issues.
<br />
See the <a href="toTop.html">toTop demo</a> to learn what to do if your overlay covers the entire page *including* the modal dialog!  
 <p class="pv">(boolean) - default: false</p>
</dd>

<dt>[Callbacks]</dt>
<dd>Callbacks allow advanced customization of jqModal dialogs. Each callback is passed the "hash" object consisting of the following properties;

    <ul>
      <li>w: (jQuery object) The dialog element</li>
      <li>c: (object) The config object (dialog's parameters)</li>
      <li>o: (jQuery object) The overlay</li>
      <li>t: (DOM object) The triggering element
    </ul>
  	
</dd>

<dt>onShow (callback)</dt>
<dd> 
 Called when a dialog is to be shown. Be sure to show (set visible) the dialog.

 <p class="code">
 // onShow : show+make the window translucent <br />
 var myOpen=function(hash){ hash.w.css('opacity',0.88).show(); }; <br />
 $('#dialog').jqm({onShow:myOpen}); <br />
 </p>
 <p class="pv">(function|false) - default: false</p>
</dd>

<dt>onHide (callback)</dt>
<dd> 
 Called when a dialog is to be hidden. Be sure to remove the overlay (if enabled).
 
 <p class="code">
 
 // onHide : fade the window out, remove overlay after fade. <br />
 var myClose=function(hash) { hash.w.fadeOut('2000',function(){ hash.o.remove(); }); }; <br />
 $('#dialog').jqm({onHide:myClose}); <br />
 </p>
 <p class="pv">(function|false) - default: false</p>
</dd>

<dt>onLoad (callback)</dt>
<dd> 
 Called right after ajax content is loaded.
 
 <p class="code">
 // onLoad : assign Mike Alsup's most excellent <a href="http://www.malsup.com/jquery/form/">ajaxForm</a> plugin to the returned form element(s). <br />
 var myLoad = function(hash){ $('form',hash.w).ajaxForm(); }; <br />
 $('#dialog').jqm({onLoad:myLoad}); <br />
 </p>
    
 <p class="pv">(function|false) - default: false</p>
</dd>

</dl>

See the <a href="README">README</a> for further information.

<a class="anchor" name="examples"></a>
<p><em>Examples</em></p>

<div class="example">
1. <em>Defaults</em> -- <a href="#" class="jqModal">view</a>
<br/>
Out-of-box behavior. The window and its content is taken "inline" from the element with an ID of 'dialog'. The dialog is "triggered" (shown) when element(s) with class <i>jqModal</i> are clicked. No parameters are passed, no fancy window decorations used.
</div>
<?php exSource(1,array('css' => false), '<a href="#" class="jqModal">view</a>'); ?>


<div class="example">
2. <em>AJAX</em> -- <a href="#" class="ex2trigger">view</a>
<br/>
This example demonstrates the ajax parameter. The window's content is pulled from a remote source (Relative URL: <i>examples/2.html</i>) when its trigger is clicked. The trigger parameter is used assign a "show trigger" to element(s) with class <i>ex2trigger</i>.
</div>
<?php exSource(2,array('css' => false), '<a href="#" class="ex2trigger">'); ?>


<div class="example">
3. <em>Styling</em> -- a. <a href="#" id="ex3aTrigger">view</a> (dialog), b. <a href="#" class="ex3bTrigger">view</a> (alert), c. <a href="#" id="ex3cTrigger">view</a> (notice)
<br/>
This example demonstrates the ease in which stylish windows are constructed. All HTML and CSS is abstracted from the plugin which allows a designer unprecedented flexibility. Notice how custom overlays, ajax targets, and callbacks are used. I hope to eventually provide a repository of dialog themes. <em>Interested in contributing?</em> -- see note @ bottom of page.
</div>
<p>
<?php exSource('3a',array(),'<a href="#" id="ex3aTrigger">view</a> (dialog)'); ?>
&nbsp; <strong>3a</strong> (dialog) - custom overlay, draggable window.
</p>
<p>
<?php exSource('3b',array(),'<a href="#" class="ex3bTrigger">view</a> (alert)'); ?>
&nbsp; <strong>3b</strong> (alert) - ajax target.
</p>
<p>
<?php exSource('3c',array(),'<a href="#" id="ex3cTrigger">view</a> (notice)'); ?>
&nbsp; <strong>3c</strong> (alert) - onShow, onHide callbacks.
</p>


<div class="example">
4. <em>Modal, Nested Modal</em> -- a. <a href="examples/4a.html" class="ex4Trigger">view</a> (4a.html), b. <a href="examples/4b.html" class="ex4Trigger">view</a> (4b.html)
<br/>
Focus can be forced on a dialog, making it a true "modal" dialog. Also exemplified is the <strong>ajax attribute selector</strong> (using @href). Any DOM attribute can be used to extract the ajax url (see the <a href="README">documentation</a>).
</div>
<?php exSource('4',array(),'<a href="examples/4a.html" class="ex4Trigger">view</a> (4a.html)'."\n".' <a href="examples/4b.html" class="ex4Trigger">view</a> (4b.html)'); ?>


<div class="example">
5. <em>Multi-Show/Hide</em> -- a. <a href="#" id="ex5show">view</a> (show all), b. <a href="#" id="ex5hide">view</a> (hide all), c. <a href="#" id="ex5multi">view</a> (show+hide some)
<br/>
Triggers can cotrol more than 1 jqModal. You can assign new show or hide triggers to any jqModal element with $.jqmAddTrigger and $.jqmAddClose. 
</div>
<?php exSource('5',array(),'<a href="#" id="ex5show">view</a> (show all)'."\n".'<a href="#" id="ex5hide">view</a> (hide all)'."\n".'<a href="#" id="ex5multi">view</a> (show+hide some)'); ?>


<div class="example">
6. <em>FUN! Overrides</em> -- a. <a href="#" class="alert">view</a> (alert), b. <a href="http://www.jquery.com/" class="confirm">view</a> (confirm)
<br/>
It is now time to show a real-world use for jqModal -- overriding the standard <em>alert()</em> and <em>confirm</em> dialogs! Note; due to the single threaded nature of javascript, the confirm() function must be passed a callback -- it does NOT return true/false.
</div>
<?php exSource('6',array(),'<a href="#" class="alert">view</a> (alert)'."\n".'<a href="#" class="confirm">view</a> (confirm)'); ?>

<div class="example">
7. <em>External Site (iframe) usage</em> (with added bling-in-the-box)
<br />
Alexandre Plennevaux has posted a <a href="http://www.pixeline.be/blog/2008/javascript-loading-external-urls-in-jqmodal-jquery-plugin/">tutorial</a> on effectively using jqModal to load external sites into a popup dialog. His method updates an iframe inside a dialog with the HREF attribute of the triggering element. It is an <strong>excellent</strong> example of real-world jqModal usage. As an added bonus; the bling-factor is furthered by showing off some fancy animated transistions! Be sure to check out his <a href="http://www.pixeline.be/experiments/ThickboxToJqModal/">demonstration</a>. 

<br clear="both" />

<div class="wwwwh">Etc.</div>

<p><em>Previous Releases</em></p>
All revisions of jqModal are available are available <a href="release/">here</a>.

<a class="anchor" name="etc"></a>

<dl>
<dt>Known Issues, Pending Fixes</dt>
<dd>
<ul>
<li>Update jqDnR, make squares draggable</li>
<li>Demonstrate an enhanced slideshow</li>
<li>Incorporate "smart" modal focus routine</li>
<li>Abstract IE6 workarounds from base CSS, use conditional includes</li>
</ul>
</dd>

<dt>R14 Changes</dt>
<dd>
<p>
Changes include smart detection of the triggering element. This allows you to call $.jqmShow() and $.jqmHide() within the event context of a non-initialized triggering element, and that element will mask a proper initialized trigger.
</p>
<p>
This (very minor) change is intended to improve the plugin's natural behavior -- that is; to behave as expected. It will make "live querying" modal triggers easier for some.
</p>
<p>
A simple example of the new behavior is shown below. It will show and load the remote content of all anchor links into the modal window whenever they are clicked.
</p>

<pre>
&lt;a href=&quot;http://my.ajax/content&quot;&gt;open modal with my.ajax/content&lt;/a&gt;

&lt;div id=&quot;jqModal&quot; class=&quot;jqmWindow&quot; style=&quot;display: none;&quot;&gt;&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;

jQuery().ready(function($){
 
  // initialize modal,
  // load the container with a remote return based on the &#039;href&#039;
  //    attribute of triggering element(s)
 
  $(&#039;#jqModal&#039;).jqm({ajax:&#039;@href&#039;});
 
 
  // open the modal whenever anchor links on the page are clicked
   $(&#039;a&#039;).live(&#039;click&#039;,function(){
      $(&#039;#jqModal&#039;).jqmShow();
  });
 
 
});
&lt;/script&gt;
</pre>

</dd>


<dt>R13 Changes</dt>
<dd>
<ul>
<li>Minor code optimizations</li>
<li>Fixed potential exception in modal focus routine</li>
<li>Overlays of modal dialogs are no longer automatically styled with a "wait" cursor. Use CSS to control</li>
<li>Exposed overiding of default parameter values via the $.jqm.params global</li>
</ul>
</dd>

<dt>R12 Changes</dt>
<dd>
<ul>
<li>Now dual licensed under the MIT and GPL licenses</li>
<li>Compatibility with jQuery 1.2.6</li>
<li>Removed zIndex parameter</li>
<li>Subsequent $.jqm calls now update configuration</li>
<li>AJAX target is now cleared before load</li>
<li>Added ajaxText parameter</li>
</ul>
</dd>

<dt>R11 Changes</dt>
<dd>
<ul>
<li>added toTop argument to break z-Index container restraints (<a href="toTop.html">demo</a>)</li>
<li>improved focus method tolerance</li>
<li>overlay now takes z-Index stacking order precedence</li>
</ul>
</dd>
</dl>

<div class="src">
<div class="js">
<a href="#">Earlier Release Changes</a>

<pre>

<p><em>R10 Changes</em>;</p>
<ul>
<li>focus element re-calculated every modal click to prevent IE error</li>
<li>ie6 sets body width to 100%</li>
<li>Require fixed pushStack,$.browser.version -- jQuery 1.1.3.1 MINIMUM!</li>
<li>compressible with a javascript packer</li>
<li>HTTPS/SSL served iFrame content will not throw warnings in IE</li>
</ul>

<p><em>R8,R9 Changes</em></p>
<ul>
<li><em>Updated CSS</em>, Sync up.</li>
<li>Fixed IE crash when ajax loaded elements used as trigger(s)</li>
<li>IE6 - overlay now covers dialog only, allowing page interaction when overlay: 0</li>
</ul>

<p><em>R7 Changes</em></p>
<ul>
<li>Added $.jqmShow, $.jqmHide to manually hide/show dialogs</li>
<li>Added $.jqmAddTrigger and $.jqmAddClose to bind show/hide to elements</li>
<li>Added onLoad callback (called after ajax return)</li>
<li>Added support for handling multiple dialogs @ once across ALL functions</li>
<li>Removed auto-fire parameter, replaced via $(e).jqm().jqmShow()</li>
<li>Removed $.jqmClose()</li>
<li>Removed "wrapClass" parameter, updated base CSS</li>
<li>CSS z-index value takes priority over "zIndex" parameter</li>
<li>Triggers can hide, show, or hide AND show jqModals</li>
<li>Overlays+IE6 iframe are now fixed positioned - support for ie6 quirks + standards mode</li>
<li>Internal Improvements, no event data</li>
</ul>
</pre>

</div>
</div>

<br /><br />


<p><em>Contributing</em>;</p>
<hr />
I would like to eventaully host a HTML+CSS repository of dialog, window, and notice themes to be used in conjunction with jqModal. If you would like to contribute themes or ideas please do! I am a very slow designer and could use your help ;)
Feel free to email me @ &lt;bhb@iceburg.net&gt;.

<script type="text/javascript">

// common
$().ready(function() {
   $('div.src a').click(function(){
    $('~ pre',this).toggle();
    return false;
   });
});
</script>

</div>

</body>
</html>