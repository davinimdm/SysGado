$(document).ready(function() {

    $('.btn-update').click(function(e) {

        e.preventDefault()

        var dados = $('#editGado').serialize()
        var url = "gado/modelo/updateGado.php"

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {

                if (dados.return == true) {

                    $('#modalGado').modal('hide')

                    Swal.fire({
                        title: 'SysGado!',
                        text: 'Alteração efetuado com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })

                    function atualizar() {
                        $('#conteudo').load('gado/visao/listaGado.html')
                    }
                    setTimeout(atualizar, 2000)

                } else {
                    Swal.fire({
                        title: 'SysGado!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tente novamente...'
                    })
                }
                $('#modalGado').modal('hide')
            }
        })

    })
})