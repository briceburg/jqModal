jqModal js
======
jqModal is a plugin for jQuery to help you display notices, dialogs, and modal windows in a web browser. It is flexible and tiny, akin to a "Swiss Army Knife", and makes a great base as a general purpose windowing framework. — Read more

Change log 
=======
* entirely rewritten; now human readable and compatible with latest jQuery versions (1.11.0, 2.1.0)
* bumped minimum jQuery version requirement to 1.2.3 (for jQuery.data())
* removed automatic IE6 activeX/iframe bleed-through fixes
* onShow callback is now responsible for displaying modal as well as overlay
* onHide callback is now responsible for removing the overlay as well as modal
* returning false in callbacks now halts behavior (e.g. stop the showing of a modal by returning false in onShow)
* moved to github to improve maintenance and community development

=========================
  jqModal Documentation
=========================

Work in progress. Refer to the jqModal website:

* http://jquery.iceburg.net/jqmodal
  

The jqModal website code is available on github -- please feel free to contribute examples and fix documentation.

* https://github.com/iceburg-net/jquery.iceburg.net/tree/master/www-1/jqModal

Report issues to the issue tracker. Support will be available through a google group(?)

