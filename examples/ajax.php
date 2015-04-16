
this message was loaded from server.

<br /><br />

We additionally passed the `closeOnEsc` option as true, allowing you to close this modal by pressing the `Esc` key.
<br /><br />

<?php

echo (isset($_GET['timestamp'])) ?
  'timestamp value <strong>' . (int) $_GET['timestamp'] . '</strong>' :
  'no timestampe value received';

if(isset($_GET['sleep'])) {
    sleep(3);
}