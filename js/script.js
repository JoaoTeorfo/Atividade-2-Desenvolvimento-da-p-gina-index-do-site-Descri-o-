//efeito do botão voltar ao Topo
function Topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}
//Validação de Login
function login(){
    varlogado = 0;
    var usuario = document.getElementById("usuario").Value;
    var senha = document.getElementById("senha").Value;

    if(usuario == 'admin'&& senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if(logado == 0){
        alert("Acesso Negado.Dados incorretos");
    }
}

//Ativar alert no botão cadastrar


function cadastrar() {
    alert("cadastro com sucesso!");
    window.location.href = "index.html";
}