
this message was loaded from server.

<br /><br />

<?php 

echo (isset($_GET['timestamp'])) ?
  'timestamp value <strong>' . (int) $_GET['timestamp'] . '</strong>' :
  'no timestampe value received';