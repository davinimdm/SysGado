<?php

include('../../conexao/conexao.php');


$id_cadastro = $_POST['id_cadastro'];

$sql = mysqli_query($conecta, "SELECT * FROM gado WHERE id_cadastro = ".$id_cadastro."");

while ($resultado = mysqli_fetch_assoc($sql)) {
    $gado[] = array_map('utf8_encode', $resultado);
}

echo json_encode($gado);

?>

