<?php

//$data = array(
//    
//    ["idControle" => 1,"nomeControle" => "Ana", "nmrBrinco"  => "3", "datNasc"  => "12/07/2019", "datEntrada" => "13/09/2019", "procedencia" => "Fazenda", "exampleRadios" => "Femea", "pelagem" => "Lisa", "raca" => "Giro", "maeAnimal" => "Lua", "paiAnimal" => "Rei"],
//    ["idControle" => 1,"nomeControle" => "Ana", "nmrBrinco"  => "3", "datNasc"  => "12/07/2019", "datEntrada" => "13/09/2019", "procedencia" => "Fazenda", "exampleRadios" => "Femea", "pelagem" => "Lisa", "raca" => "Giro", "maeAnimal" => "Lua", "paiAnimal" => "Rei"],
//    ["idControle" => 1,"nomeControle" => "Ana", "nmrBrinco"  => "3", "datNasc"  => "12/07/2019", "datEntrada" => "13/09/2019", "procedencia" => "Fazenda", "exampleRadios" => "Femea", "pelagem" => "Lisa", "raca" => "Giro", "maeAnimal" => "Lua", "paiAnimal" => "Rei"],
//    ["idControle" => 1,"nomeControle" => "Ana", "nmrBrinco"  => "3", "datNasc"  => "12/07/2019", "datEntrada" => "13/09/2019", "procedencia" => "Fazenda", "exampleRadios" => "Femea", "pelagem" => "Lisa", "raca" => "Giro", "maeAnimal" => "Lua", "paiAnimal" => "Rei"],
//    
//);
//
//    echo json_encode($data);

include('../../conexao/conexao.php');


$id_Usuario = 1;

$sql = mysqli_query($conecta, "SELECT * FROM gado WHERE id_Usuario = ".$id_Usuario."");

while ($resultado = mysqli_fetch_assoc($sql)) {
    $gado[] = array_map('utf8_encode', $resultado);
}

echo json_encode($gado);

?>

