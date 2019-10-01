$(document).ready(function() {

    $('tboby').empty()

    var url = "gado/modelo/listaGado.php"

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: url,
        async: true,
        success: function(dados) {
            for (var i = 0; i < dados.length; i++) {
                let gado = `
                <tr>
                <td class="text-center" width="5%">` + dados[i].id_cadastro + `</td>
                <td class="text-center" width="5%">` + dados[i].nomeGado + `</td>
                <td class="text-center" width="5%">` + dados[i].nmrBrinco + `</td>
                <td class="text-center" width="5%">` + dados[i].datNasc + `</td>
                <td class="text-center" width="5%">` + dados[i].datEntrada + `</td>
                <td class="text-center" width="5%">` + dados[i].procedencia + `</td>
                <td class="text-center" width="5%">` + dados[i].sexo + `</td>
                <td class="text-center" width="5%">` + dados[i].pelagem + `</td>
                <td class="text-center" width="5%">` + dados[i].raca + `</td>
                <td class="text-center" width="5%">` + dados[i].maeAnimal + `</td>
                <td class="text-center" width="5%">` + dados[i].paiAnimal + `</td>
                    <td class="text-center" width="15%">
                        <button id="` + dados[i].id_cadastro + `" class="btn btn-outline-primary btn-sm btn-view"><i class="mdi mdi-eye mdi-18px"></i></button>
                        <button id="` + dados[i].id_cadastro + `" class="btn btn-outline-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                        <button id="` + dados[i].id_cadastro + `" class="btn btn-outline-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                    </td>
                </tr>
                `

                $('tbody').append(gado)
            }
            $('body').append('<script>$(".btn-new").click(function(){ $("#conteudo").load("gado/visao/addGado.html")})</script>')
            $('body').append('<script src="gado/controle/viewGado.js"></script>')
            $('body').append('<script src="gado/controle/editGado.js"></script>')
            $('body').append('<script src="gado/controle/deleteGado.js"></script>')

        }

    })

})