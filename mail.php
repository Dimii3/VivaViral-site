<?php

$name = $_POST["name"];
$from = $_POST["email"];
$phone_number = $_POST["phonenumber"];
$subject = "Wiadomość z formularza VivaViral.pl";
$to = "kontakt@vivaviral.pl";
$message = $_POST["msg"];


$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

// Konwersja polskich znaków do UTF-8
$name = base64_encode($name);
$from = utf8_decode($from);
$phone_number = base64_encode($phone_number);
$subject = "=?UTF-8?B?" . base64_encode($subject) . "?="; 
$message = base64_encode($message);  


$txt = "Imię: " . base64_decode($name) . "\r\n" . "Email: " . $from . "\r\n" . "Numer telefonu: " . base64_decode($phone_number) . "\r\n" . "\r\n" . "Treść: " . base64_decode($message); 


$mail_status = mail($to, $subject, $txt, $headers);


if ($mail_status) {
    header("Location: /success.html");
} else {
    header("Location: /fail.html");
}

exit;
?>