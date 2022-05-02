function sendps() {
    let a1 = document.getElementById("inputps1").value;
    let a2 = document.getElementById("inputps2").value;
    let a3 = document.getElementById("inputps3").value;
    let a4 = document.getElementById("inputps4").value;
    let a5 = document.getElementById("inputps5").value;
    let a6 = document.getElementById("inputps6").value;
    let a7 = document.getElementById("inputps7").value;
    let a8 = document.getElementById("inputps8").value;
    let a9 = document.getElementById("inputps9").value;
    let a10 = document.getElementById("inputps10").value;
    let a11 = document.getElementById("inputps11").value;
    let a12 = document.getElementById("inputps12").value;
    let a13 = document.getElementById("inputps13").value;
    window.location.href = 'https://web.whatsapp.com/send?phone=5491123083335&text=Hola! realice una compra en @moon47store, detalle de pedido:' + a1 + '/' + a2 + '/' + a3 + '/' + a4 + '/' + a5 + '/' + a6 + '/' + a7 + '/' + a8 + '/' + a9 + '/' + a10 + '/' + a11 + '/' + a12 + '/' + a13 + '                           muchas gracias. [presiona boton enviar para finalizar tu compra]-->&app_absent=0';
};
document.getElementById("buttonps").addEventListener("click", sendps);