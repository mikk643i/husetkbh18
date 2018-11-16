<?php
    $navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];
$besked=$_REQUEST['besked'];
    $gem="$navn \n$email \n$besked \n\n";
    file_put_contents("test.txt", $gem, FILE_APPEND);
    echo "Mange tak, $navn, nu er du tilmeldt";
?>
