$(document).ready(function() {

    $('.btn-delete').click(function(e) {

        e.preventDefault()

        var dados = 'id_cadastro='
        dados += $(this).attr('id')

        Swal.fire({
            title: 'SysGado',
            text: "Você tem certeza que deseja excluir o registro?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'Desistir da exclusão',
            cancelButtonColor: 'Confirmar a exclusão'
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    data: dados,
                    url: 'gado/modelo/deleteGado.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'SysGado!',
                            text: 'O arquivo será excluido',
                            type: 'success',
                            confirmButtonText: 'Feito!'
                        })

                        $('#conteudo').load('gado/visao/listaGado.html');

                    }

                })

            } else {
                Swal.fire({
                    title: 'SysGado!',
                    text: 'Operação cancelada com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!'
                })
            }
        })
    })
})