$(document).ready(function(){
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url:'http://gilsonpolito-api.herokuapp.com/alunos',
            dataType:'json',
            success: function(data, textStatus, jqXHR){
              $.each(data, function(index, itemData){
                insereLinha(itemData.id, itemData.nome, itemData.site);
              });
              
            },
            error: function(jqXHR, textStatus, errorThrow){
                alert('Status: ' + textStatus + 
                '\nTipo:' + errorThrow + 
                '\nMensagem: ' + jqXHR.responseText);
            }
        })

    })

    function insereLinha(id, nome, site){

        let linha = '<tr>' +
                        '<td class=\'col-xs-2\'>' +
                            '<img src=\'imagens/editar.jpeg\'/>' + 
                            'img src=\'imagens/excluir.jpeg\' />' +
                        '</td>' +
                        '<td class=\col-xs-4>\'>' + 
                            nome + 
                        '</td>' +
                        '<td class=\'col-xs-6\'>' + 
                            site +
                        '</td>' +
                    '</tr>';
        $('#alunoTable') .append(Linha);
    }