jqModal Changes By Release
==========================

## r17 2014.01.30

* focus function is now overridable via $.jqm.focusFunc
* re-implement r14, r13 changes [fork rewrite was of previous version]


## r16 2014.01.28

* entirely rewritten; now human readable and compatible with latest jQuery versions (1.11.0, 2.1.0)
* bumped minimum jQuery version requirement to 1.2.3 (for jQuery.data())
* removed automatic IE6 activeX/iframe bleed-through fixes
* onShow callback is now responsible for displaying modal as well as overlay
* onHide callback is now responsible for removing the overlay as well as modal
* returning false in callbacks now halts behavior (e.g. stop the showing of a modal by returning false in onShow)
* moved to github to improve maintenance and community development


## r15 2013.08.04

* jQuery 1.9+ compatibility fix by [Yoosuf Muhammad](https://github.com/eyoosuf)


## r14 2009.03.01


* smart detection of the triggering element. The event context is now always passed to $.jqmShow() and $.jqmHide(). Makes "live querying" modal triggers easier for some.


## r13 2008.07.06

* Minor code optimizations
* Fixed potential exception in modal focus routine
* Overlays of modal dialogs are no longer automatically styled with a "wait" cursor. Use CSS to control
* Exposed overiding of default parameter values via the $.jqm.params global

## r12 2008.06.22

* Now dual licensed under the MIT and GPL licenses
* Compatibility with jQuery 1.2.6
* Removed zIndex parameter
* Subsequent $.jqm calls now update configuration
* AJAX target is now cleared before load
* Added ajaxText parameter

## r11 2007.08.17

* added toTop argument to break z-Index container restraints (<a href="toTop.html">demo</a>)
* improved focus method tolerance
* overlay now takes z-Index stacking order precedence


## r10 2007.07.30

* focus element re-calculated every modal click to prevent IE error
* ie6 sets body width to 100%
* Require fixed pushStack,$.browser.version -- jQuery 1.1.3.1 MINIMUM!
* compressible with a javascript packer
* HTTPS/SSL served iFrame content will not throw warnings in IE


## r9 2007.02.25, r8 2007.02.24

* Updated CSS, Sync up.
* Fixed IE crash when ajax loaded elements used as trigger(s)
* IE6 - overlay now covers dialog only, allowing page interaction when overlay: 0


## r7 2007.02.23

* Added $.jqmShow, $.jqmHide to manually hide/show dialogs
* Added $.jqmAddTrigger and $.jqmAddClose to bind show/hide to elements
* Added onLoad callback (called after ajax return)
* Added support for handling multiple dialogs @ once across ALL functions
* Removed auto-fire parameter, replaced via $(e).jqm().jqmShow()
* Removed $.jqmClose()
* Removed "wrapClass" parameter, updated base CSS
* CSS z-index value takes priority over "zIndex" parameter
* Triggers can hide, show, or hide AND show jqModals
* Overlays+IE6 iframe are now fixed positioned - support for ie6 quirks + standards mode
* Internal Improvements, no event data