<?php

header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json");

$data = file_get_contents("php://input");

$scriptURL = "https://script.google.com/macros/s/AKfycbysVvVdkCHTq772jeLDOIqiwolmKH1AjlzCH-DGFFGIx3bwzRA0smuyeNvTNn099LLW/exec";
$ch = curl_init($scriptURL);
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

curl_close($ch);
