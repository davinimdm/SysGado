<?php
include ('../../conexao/conexao.php');

$id_cadastro = $_POST['id_cadastro'];
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


$nomeGado = utf8_decode($nomeGado);
$nmrBrinco = utf8_decode($nmrBrinco);


$sql = "UPDATE gado
        SET nomeGado = '".$nomeGado."',
            nmrBrinco = '".$nmrBrinco."',
            datNasc = '".$datNasc."',
            datEntrada = '".$datEntrada."',
            procedencia = '".$procedencia."', 
            sexo = '".$sexo."',
            pelagem = '".$pelagem."',
            raca = '".$raca."', 
            maeAnimal = '".$maeAnimal."',
            paiAnimal = '".$paiAnimal."'
        WHERE id_cadastro = ".$id_cadastro."
";

    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }


echo json_encode($data);







//$data = array("return" => "O gado ".$nomeGado.", foi cadastrado com sucesso!");
//echo json_encode($data);

?>