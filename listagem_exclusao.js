function listar() {
    cap1 = document.getElementById('nome').value;
    cap2 = document.getElementById('email').value;
    cap3 = document.getElementById('cpf').value;
    cap4 = document.getElementById('telefone').value;
    cap5 = document.getElementById('cep').value;
    cap6 = document.getElementById('rua').value;
    cap7 = document.getElementById('numero').value;
    cap8 = document.getElementById('bairro').value;
    cap9 = document.getElementById('cidade').value;
    cap10 = document.getElementById('estado').value;
    var geral = [
        cap1,
        cap2,
        cap3,
        cap4,
        cap5,
        cap6,
        cap7,
        cap8,
        cap9,
        cap10
    ];
    document.write("<strong>" + "Nome: " + "</strong>" + geral[0] + "<hr>");
    document.write("<strong>" + "Email: " + "</strong>" + geral[1] + "<hr>");
    document.write("<strong>" + "CPF: " + "</strong>" + geral[2] + "<hr>");
    document.write("<strong>" + "Telefone: " + "</strong>" + geral[3] + "<hr>");
    document.write("<strong>" + "Cep: " + "</strong>" + geral[4] + "<hr>");
    document.write("<strong>" + "Rua: " + "</strong>" + geral[5] + "<hr>");
    document.write("<strong>" + "Numero: " + "</strong>" + geral[6] + "<hr>");
    document.write("<strong>" + "Bairro: " + "</strong>" + geral[7] + "<hr>");
    document.write("<strong>" + "Cidade: " + "</strong>" + geral[8] + "<hr>");
    document.write("<strong>" + "Estado: " + "</strong>" + geral[9] + "<hr>");

    document.write("<strong>" + " Total de dados: " + "</strong>" + geral.length + "<br>");
    var elementosRemovidos = geral.splice(1, 2);
    document.write("<strong>" + "Total de elementos excluidos: " + "</strong>" + elementosRemovidos.length + "<br>");
    document.write("<strong>" + "Elementos excluidos: " + "</strong>" + elementosRemovidos+ "<hr>");
   
    document.write("<h1>" + "Nova Lista" + "</h1>");
    
    document.write("<ul>" + "<li>" + geral + "</li>" + "</ul>");
}