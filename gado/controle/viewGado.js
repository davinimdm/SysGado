$(document).ready(function() {

    $('.btn-view').click(function(e) {

        e.preventDefault();

        $('.modal-title').empty();
        $('.modal-body').empty();
        $('.modal-footer').empty();


        var url = "gado/modelo/viewGado.php";
        var dados = 'id_cadastro=';
        dados += $(this).attr('id');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: dados,
            url: url,
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let gado = `
                        
                        <p>Brinco ` + dados[i].nmrBrinco + `</p>
                        <p>Nascimento ` + dados[i].datNasc + `</p>
                        <p>Entrada ` + dados[i].datEntrada + `</p>
                        <p>Procedencia ` + dados[i].procedencia + `</p>
                        <p>Sexo ` + dados[i].exampleRadios + `</p>
                        <p>Pelo ` + dados[i].pelagem + `</p>
                        <p>Raça ` + dados[i].raca + `</p>
                        <p>Mãe ` + dados[i].maeAnimal + `</p>
                        <p>Pai ` + dados[i].paiAnimal + `</p>
                    `;

                    $('.modal-title').append(dados[i].nomeGado);
                    $('.modal-body').append(gado);
                }

                $('#modalGado').modal('show');

            }
        });

    });
});