jqModal
=======

jqModal is a plugin for jQuery to help you display modals, popups, and notices. It is flexible and tiny, akin to a "Swiss Army Knife", and provides a great base for your windowing needs.


Features
========

* Designer Frieldly - Use *your* HTML+CSS for Layout and Styling
* Translator/i18n friendly - No hardcoded English strings
* Developer friendly - Extensible through callbacks to make anything possible (gallery slideshows, video-conferencing, &c)
* Simple support for remotely loaded content (aka "ajax")
* Multiple Modals per page (including nested Modal-in-Modal)
* Supported by all browsers capable of running jQuery 1.2.3+


Usage
=====

markup
```html
<a 
  class="button" 
  data-modal="{{ video_id }}" href="$//www.youtube.com/embed/{{ video_id }}">
  Watch</a>

<div class="modal-dialog modal-video" data-modal="{{ video_id }}">
  <iframe 
    width="560" 
    height="315" 
    src="//www.youtube.com/embed/{{ video_id }}" 
    frameborder="0" 
    allowfullscreen></iframe>
</div>

```

script

```js
$('div.modal-dialog').each(function(){
    
  var modal_id = this.id || $(this).data('modal');
  var trigger = $('a.modal-trigger[data-modal="' + modal_id + '"]');
  
  $(this).jqm({
    toTop: true,
    trigger: trigger
  });

});

```

styling
```css
div.modal-dialog {
    display: none;
    position: absolute;
    left: 50%;
    margin-left: -288px;
    padding: 6px 0;
    position: fixed;
    text-align: center;
    top: 17%;
    width: 576px;
    background: #FFF;
}

div.modal-dialog.modal-video {
  background-color: transparent;
}

div.jqmOverlay {
    /* background-color: #FFF; */ /* lighten background */
    background-color: #000; /* darken background */
}

```


Read the documenttion and more at http://jquery.iceburg.net/jqModal

See [Examples / Demonstration](http://jquery.iceburg.net/jqModal/#examples)


Development
=============

Development of jqModal occurs in the -master branch on [jqModal.js](https://github.com/briceburg/jqModal/blob/master/jqModal.js). 
The [CHANGELOG.md](https://github.com/briceburg/jqModal/blob/master/CHANGELOG.md) is to be kept up to date with changes.


## Release Process

* Version jqModal.js `<semver> (YYYY.MM.DD +r<revision>)`
* Minify jqModal.js -> jqModal.min.js
* Update package.json, bumping <semver> version
* Ensure changelog is up to date
* Merge -master with -release
* Tag -release with <semver> : `git tag <semver> && git push origin --tags` to publish.
* `npm publish ./` (from -release checkout)

Get Involved
============

Report issues to the github issue tracker.

* https://github.com/briceburg/jqModal/issues


For *support*, please post to stackoverflow using the jqmodal tag:

* http://stackoverflow.com/questions/ask?tags=jqmodal


The jqModal website code is available on github -- please do contribute improvements.

* https://github.com/iceburg-net/jquery.iceburg.net/tree/master/www-1/jqModal


Author
======

Brice Burgess [@iceburgBrice](https://twitter.com/IceburgBrice)

Released under the MIT License: http://www.opensource.org/licenses/mit-license.php
