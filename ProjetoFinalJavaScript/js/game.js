var imagens = ['imgXis', 'imgCircle'];
var imgAtual = 0;
var matriz;
var jogadas=0;


function criarTabuleiro() {

    document.getElementById("p1").innerHTML = localStorage.getItem("jog1");
    document.getElementById("p2").innerHTML = localStorage.getItem("jog2");
    criarMatriz();
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            var div = document.createElement("div");
            div.setAttribute("class", "boxTabuleiro imgTabuleiro");
            div.setAttribute("id", `${l}_${c}`)
            div.addEventListener("click", inserirImg)
            document.getElementById("tabuleiro").appendChild(div);
            matriz[l][c] = "";
        }
    }
    document.getElementById("vez").innerHTML = localStorage.getItem("jog1");
}

function criarMatriz() {

    matriz = new Array(3);
    for (var i = 0; i < 3; i++) {
        matriz[i] = new Array(3);
    }

}

function inserirImg(evento) {
   
    document.getElementById(evento.currentTarget.id).classList.add(imagens[imgAtual]);
    
    vetIndices = evento.currentTarget.id.split("_");
    matriz[parseInt(vetIndices[0])][parseInt(vetIndices[1])] = String(imgAtual);
    console.table(matriz);
    (imgAtual >= 1) ? imgAtual = 0 : imgAtual++;
    jogador1 = localStorage.getItem("jog1");
    jogador2 = localStorage.getItem("jog2");

    if (imgAtual == 0) {
        document.getElementById("vez").innerHTML = jogador1;  
    } else {
        document.getElementById("vez").innerHTML = jogador2
    }
    checkGanhador();
    
}


function checkGanhador() {

    vitoria = [("000"), ("111")];
    jogadas;
    ganhador = 0;

    l1 = matriz[0][0] + matriz[0][1] + matriz[0][2];
    l2 = matriz[1][0] + matriz[1][1] + matriz[1][2];
    l3 = matriz[2][0] + matriz[2][1] + matriz[2][2];
    l4 = matriz[0][0] + matriz[1][0] + matriz[2][0];
    l5 = matriz[0][1] + matriz[1][1] + matriz[2][1];
    l6 = matriz[0][2] + matriz[1][2] + matriz[2][2];
    d1 = matriz[0][0] + matriz[1][1] + matriz[2][2];
    d2 = matriz[2][0] + matriz[1][1] + matriz[0][2];
    
    switch(l1){
        case "000": alertWifi("Jogador 1 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
        case "111": alertWifi("Jogador 2 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
    }

    switch(l2){
        case "000": alertWifi("Jogador 1 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
        case "111": alertWifi("Jogador 2 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
    }

    switch(l3){
        case "000": alertWifi("Jogador 1 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
        case "111": alertWifi("Jogador 2 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
    }

    switch(l4){
        case "000": alertWifi("Jogador 1 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
        case "111": alertWifi("Jogador 2 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
    }

    switch(l5){
        case "000": alertWifi("Jogador 1 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
        case "111": alertWifi("Jogador 2 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
    }

    switch(l6){
        case "000": alertWifi("Jogador 1 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
        case "111": alertWifi("Jogador 2 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
    }
    
    switch(d2){
        case "000": alertWifi("Jogador 1 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
        case "111": alertWifi("Jogador 2 ganhou", false, 0, "", 30);
        ganhador=1;
        break;
    }

    jogadas++;

    if(ganhador==0&&jogadas==9){
        alertWifi("Empate!!!", false, 0, "", 30)
    }
}