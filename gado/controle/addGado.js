$(document).ready(function() {

    $('.btn-add').click(function(e) {

        e.preventDefault()

        var dados = $('#addGado').serialize()
        var url = "gado/modelo/addGado.php"

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {

                if (dados.return == true) {
                    Swal.fire({
                        title: 'SysGado!',
                        text: 'Cadastro efetuado com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })
                } else {
                    Swal.fire({
                        title: 'SysGado!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tente novamente...'
                    })
                }
                $('#addGado input').val("")
            }
        })

    })
})