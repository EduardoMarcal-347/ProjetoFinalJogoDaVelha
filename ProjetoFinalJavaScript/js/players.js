function validaNomes() {

    p1 = document.getElementById("p1").value;
    p2 = document.getElementById("p2").value;

    if (!p1) {
        alertWifi(`Informe o nome do jogador 1`, false, 0, "", 30);
        p1.focus();
    } else if (!p2) {
        alertWifi(`Informe o nome do jogador 2`, false, 0, "", 30);
        p2.focus();
    } else {
        localStorage.setItem("jog1", p1);
        localStorage.setItem("jog2", p2);
        window.open('game.html', '_self');
    }

}