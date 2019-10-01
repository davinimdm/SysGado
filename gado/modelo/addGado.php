<?php
include ('../../conexao/conexao.php');

$nomeGado = $_POST['nomeGado'];
$nmrBrinco = $_POST['nmrBrinco'];
$datNasc = $_POST['datNasc'];
$datEntrada = $_POST['datEntrada'];
$procedencia = $_POST['procedencia'];
$sexo = $_POST['sexo'];
$pelagem = $_POST['pelagem'];
$raca = $_POST['raca'];
$maeAnimal = $_POST['maeAnimal'];
$paiAnimal = $_POST['paiAnimal'];

$id_Usuario = 1;

$nomeGado = utf8_decode($nomeGado);
$nmrBrinco = utf8_decode($nmrBrinco);


if(strlen($nomeGado) > 1 && strlen($nmrBrinco) > 1 && strlen($maeAnimal) > 1){

$sql = "INSERT INTO gado (nomeGado, nmrBrinco, datNasc, datEntrada, procedencia, sexo, pelagem, raca, maeAnimal, paiAnimal, id_Usuario)
        VALUES ('".$nomeGado."', '".$nmrBrinco."', '".$datNasc."', '".$datEntrada."', '".$procedencia."', '".$sexo."', '".$pelagem."', '".$raca."', '".$maeAnimal."', '".$paiAnimal."', ".$id_Usuario.")";
    
    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }



}else{
    $data = array("return" => "Os campos nome e número de brinco são obrigatório...");
}

echo json_encode($data);



?>