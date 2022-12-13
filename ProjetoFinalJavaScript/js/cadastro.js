function validaCadastro() {
    var user = document.getElementById("user");
    var senha = document.getElementById("pwd");
    var confirmSenha = document.getElementById("pwdConfirm");

    if (!user.value) {
        alertWifi(`Usuario em Branco`, false, 0, "", 30);
        user.focus();
    } else if (!senha.value) {
        alertWifi(`Senha em branco`, false, 0, "", 30);
        senha.focus();
    } else if (!confirmSenha.value) {
        alertWifi(`Confirme a senha`, false, 0, "", 30);
        confirmSenha.focus();
    } else if (senha.value != confirmSenha.value) {
        alertWifi(`Senhas diferentes`, false, 0, "", 30);
        confirmSenha.focus();
    } else {
        readJSON(user.value, senha.value);
    }
}

function readJSON(user, password) {
    file = "json/users.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, user, password))
        .catch(err => alertWifi(`Erro na leitura do JSON`, false, 0, "", 30));
}

function checkUser(content, user, password) {
    var achou = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if (content.usuarios[i].user == user) {
            achou = true;
            break;
        }
    }

    if (achou) {
        alertWifi(`Usuário já existente`, false, 0, "", 30);
    } else {
        document.getElementById("cadastro").submit();
    }
}