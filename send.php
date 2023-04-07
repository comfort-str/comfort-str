<?php
$fio = $_POST['uname'];
$tel = $_POST["tel"];
$polt = $_POST["mess"];
$info = $_POST["info_file"];

$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$polt = htmlspecialchars($polt);

$fio = urldecode($fio);
$fio = trim($fio);
$tel = urldecode($tel);
$tel = trim($tel);
$polt = urldecode($polt);
$polt = trim($polt);
$info = htmlspecialchars($info);
$info = urldecode($info);
$info = trim($info);



$fd = fopen("textfile.txt",'w') or die ("Error");
$str = "Заявка с сайта ФИО: \r\n".$fio. ". Telephone: \r\n".$tel ."Messager:  \r\n".$polt. " Info - tovar:  ".$info;

$redirect_url = "/spaibe.html";
if (mail("relaxgorod@gmail.com", "Заявка с сайта", $str))
{     
    header('Location: http://'.$_SERVER['HTTP_HOST'].$redirect_url);
    exit();
} else {
    echo "при отправке сообщения возникли ошибки";
}?>