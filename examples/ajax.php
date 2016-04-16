
this message was loaded from server.

<br /><br />

<strong>Note</strong> the `closeOnEsc` parameter was passed as true,
allowing you to close this modal by pressing the <em>`Esc`</em> key.
<br /><br />

Loaded content also respects the <em>closeClass</em>, and will automatically
add classing behahvior to elements like this one: <button class="jqmClose">close me</button>
<br /><br />

<?php

echo (isset($_GET['timestamp'])) ?
  'timestamp value <strong>' . (int) $_GET['timestamp'] . '</strong>' :
  'no timestampe value received';

if(isset($_GET['sleep'])) {
    sleep(3);
}
