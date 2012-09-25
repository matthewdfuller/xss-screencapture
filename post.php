<?php

$data = $_POST['data'];

$fp = fopen("page.html", 'w');  
fwrite($fp, $data);  
fclose($fp);

?>