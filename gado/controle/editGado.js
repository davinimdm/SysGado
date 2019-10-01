$(document).ready(function() {

    $('.btn-edit').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()
        $('.modal-title').append('Edição de registro cadastrado')


        var url = "gado/modelo/viewGado.php"
        var dados = 'id_cadastro='
        dados += $(this).attr('id')

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: dados,
            url: url,
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let gado = `

                    <form class="mt-3" id="editGado">
            <div class="form-group row">

                <div class="col-3">
                    <label for="">Nome do Gado</label>
                    <input type="text" name="nomeGado" id="" class="form-control" value="` + dados[i].nomeGado + `">
                </div>

                <div class="col-3">
                    <label for="">Número de Brinco</label>
                    <input type="text" name="nmrBrinco" id="" class="form-control" value="` + dados[i].nmrBrinco + `">
                </div>

                <div class="col-3">
                    <label for="">Nascimento</label>
                    <input type="date" name="datNasc" id="" class="form-control" value="` + dados[i].datNasc + `">
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-4">
                    <label for="">Data de Entrada</label>
                    <input type="date" name="datEntrada" id="" class="form-control" value="` + dados[i].datEntrada + `">
                </div>

                <div class="col-sm-8">
                    <label for="">Procedência (De onde veio o Animal)</label>
                    <input type="text" name="procedencia" id="" class="form-control" value="` + dados[i].procedencia + `">
                </div>
            </div>

            <div class="form-group row">
                <div class="col-4">
                    <label for="">Sexo do Animal</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexo" id="exampleRadios1" value="` + dados[i].sexo + `" checked>
                        <label class="form-check-label" for="exampleRadios1">
                            Macho
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexo" id="exampleRadios2" value="` + dados[i].sexo + `" checked>
                        <label class="form-check-label" for="exampleRadios1">
                            Fêmea
                        </label>
                    </div>
                </div>

                <div class="col-4">
                    <label for="">Pelagem</label>
                    <input type="text" name="pelagem" id="" class="form-control" value="` + dados[i].pelagem + `">
                </div>

                <div class="col-4">
                    <label for="">Raça</label>
                    <input type="text" name="raca" id="" class="form-control" value="` + dados[i].raca + `">
                </div>
            </div>


            <h1>
                <h3 class="text-success">Genealogia</h3>
            </h1>

            <div class="form-group row">
                <div class="col-6">
                    <label for="">Mãe do animal</label>
                    <input type="text" name="maeAnimal" id="" class="form-control" value="` + dados[i].maeAnimal + `">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Mãe desconhecida
                        </label>
                    </div>
                </div>

                <div class="col-6">
                    <label for="">Pai do animal</label>
                    <input type="text" name="paiAnimal" id="" class="form-control" value="` + dados[i].paiAnimal + `">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Pai desconhecido
                        </label>
                    </div>
                </div>
            </div>
            <br>
            <input type="hidden" name="id_cadastro" value="` + dados[i].id_cadastro + `">
            <button class="btn btn-outline-warning btn-update"><i class="mdi mdi-content-save"></i> Salvar</button>
            <button class="btn btn-outline-danger"><i class="mdi mdi-content-save"></i>Cancelar</button>

        </form>

                    `


                    $('.modal-body').append(gado)
                }

                $('#modalGado').modal('show')
                $('body').append('<script src="gado/controle/updateGado.js"></script>')

            }
        })

    })
})