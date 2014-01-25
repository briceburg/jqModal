<div id="ex4" class="jqmDialog jqmdWide">
<div class="jqmdTL"><div class="jqmdTR"><div class="jqmdTC">Modal Dialog</div></div></div>
<div class="jqmdBL"><div class="jqmdBR"><div class="jqmdBC">

<div class="jqmdMSG">
<p>Please wait... <img src="inc/busy.gif" alt="loading" /></p>
</div>

</div></div></div>
<input type="image" src="dialog/close.gif" class="jqmdX jqmClose" />
</div>


<!-- nested dialog -->
<div id="ex4c" class="jqmDialog jqmdAbove">
<div class="jqmdTL"><div class="jqmdTR"><div class="jqmdTC">Modal Dialog</div></div></div>
<div class="jqmdBL"><div class="jqmdBR"><div class="jqmdBC jqmdTall">

<div class="jqmdMSG">
<p class="largeText">You bet!</p>

<p>Notice that you can only interact with this modal.
If you click outside of it, focus will return to the form input element.
</p>

<input type="text" size="15" value="I get focus"/>
<input type="text" size="15" value=""/>

<p>
When this window is closed, the focus lock will resume on the calling 
modal window. This will repeat until there are no more modals open.
</p>

<p>
Use the "z-index" to control overlay and window overlap. See the <a href="README">documentation</a>.
</p>
</div>

</div></div></div>
<input type="image" src="dialog/close.gif" class="jqmdX jqmClose" />
</div>