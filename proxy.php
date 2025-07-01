<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = file_get_contents("php://input");

$payload = json_decode($data, true);
$cliente = urlencode($payload['cliente']);
$ch = curl_init("https://script.google.com/macros/s/AKfycbwADm0DIHEoqlSyEZIhX9tmPX9y25t_F_fxy8FXIxDrCkVyh1AxUG3cuS3otXA3sD7-/exec?cliente={$cliente}");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Segue redirecionamentos!
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Content-Length: " . strlen($data)
]);
$response = curl_exec($ch);

if ($response === false) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro ao contactar o Apps Script", "detalhe" => curl_error($ch)]);
} else {
    echo $response;
}
curl_close($ch);␍␊
