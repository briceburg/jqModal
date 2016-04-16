jqModal Changes By Release
==========================

## 1.4.2 (2016.04.16 +r27)

* restore parsing and assigning closeClass behavior in ajax loaded content
  * update examples/ajax.php to include a closeClass element
* linting love


## 1.4.1 (2015.09.07 +r26)

* remove legacy jquery.plugin.json
* release on npm

## 1.4.0 (2015.08.16 +r25)

* new convention: use 'e' for event, 'm' for modal element, 80 cols max.
* preventDefault to cancel click behavior in trigger functions, thanks @ayyash
* strict javascript linting, thanks @paladox
  * add travis-ci integration

## 1.3.0 (2015.04.15 +r24)

* immediately show ajax modals

## 1.2.1 (2015.04.01 +r23)

* fix: allow focus in active modals
* improve example, include modal:true demo

## 1.2.0 (2015.02.26 +r22)

* new: pass event to $.jqm.focusFunc
* fix: pass active modal DOM object to $.jqm.focusFunc

## 1.1.0 (2014.07.03 +r21)

* allow modification of a signle option with subsequent $.jqm() calls -- do not extend with default $.jqm.params.
* simplify addTrigger method and ensure subsequent calls don't append additional click events to triggers.

## 1.0.3 (2014.07.02 +r20)

* subsequent calls to $.jqm() extend options as expected - thanks @earbash
* added ajax and option overriding to examples

## 1.0.2 (2014.04.10 +r19)

* fixed registration / jQuery NoConflict - thanks @mitja-p

## 1.0.1 (2014.03.27 +r18)

* strict mode fix - thanks @Piokaz

## 1.0.0 (2014.01.30 +r17)

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
