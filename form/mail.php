<?
$pos = strpos($_SERVER['HTTP_REFERER'],getenv('HTTP_HOST'));
if($pos===false)
	die('Restricted access');
$emailto = "deemkaster@gmail.com";
$return_arr = array();
$name= $_POST["fio"];   
$phone = $_POST["phoneWinTimer"];    
$email = $_POST["emailWinTimer"];    
$service = $_POST["service"];    
if(!empty($phone)) {
	$return_arr["error"] = 0;
	$message = "ФИО: ".$name." Телефон: ".$phone." e-mail: ".$email." service: ".$service;
	$ifMail = (int)mail($emailto, "Заявка на скидку", $message);
	if ($ifMail) {
		$return_arr["text"] = "Заявка успешно отправлена! Я свяжусь с Вами в ближайшее время."; 
	}else {
		$return_arr["text"] = "Отправка почты отключена на бесплатном хостинге! Пожалуйста перейдите по <a href='https://t.me/d33mk4' target='_blank'>ссылке</a> для отправки сообщения."; 
	}
} else {                
    $return_arr["error"] = 1;
    $return_arr["text"] = "Заполните поле телефон.";
}
echo json_encode($return_arr); 
?>