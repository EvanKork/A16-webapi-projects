<?php

$recepient = "alex.shepel.it@gmail.com";
$sitename = "DATA.GOV.UA";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);

$pagetitle = "Нове повідомлення з сайту \"$sitename\"";
$message = "Ім'я: $name \nТелефон: $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");