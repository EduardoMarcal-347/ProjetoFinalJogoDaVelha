function validate() {
    user = document.getElementById("user");
    pwd = document.getElementById("pwd");

    if (!user.value) {
        alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "", 30);
        user.focus();
    } else if (!pwd.value) {
        alertWifi(`Senha em branco. Informe uma senha`, false, 0, "", 30);
        pwd.focus();
    } else console.log(readJSON(user.value, pwd.value));
}

function readJSON(user, pwd) {

    file = "json/users.json";

    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, user, pwd))
        .catch(err => alertWifi(`Problemas na leitura do JSON!`, false, 0, "", 30));
}

function checkUser(content, user, pwd) {
    var achou = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == user) && (content.usuarios[i].pwd == pwd)) {
            achou = true;
            break;
        }
    }
    if (achou) { 
        window.open("players.html", "_self");
    }
    else alertWifi(`Esse usuário não existe. Que pena!`, false, 0, "", 30);
}