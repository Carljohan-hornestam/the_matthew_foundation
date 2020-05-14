<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = "Meddelande från hemsidan";
        $msg = $_POST['msg'];

        $mailTo = "carlis.hornestam@hotmail.com";
        $headers = "From: " .$mailFrom;
        $txt = "Du har fått mail från " .$name. ".\n\n".$msg;

        mail($mailTo, $subject, $txt, $headers);
        headers("Location: http://filmtropolis.se/tmf/contact/?mailsent");
    }
?>