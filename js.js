function capturarDatos() {
    let valorUsuario = document.getElementById("valorUsuario").value
    let divisasUsuario = document.getElementById("divisas").value;
    
    const valorAureo = 266.66;
    const valorDenario = 10.66;
    const valorSestercio = 2.66;
    const valorDenarii = 0.11;

    const valorUsuarioFl = parseFloat(valorUsuario);
    if(valorUsuario == '') {
        document.getElementById("resultado").value = "Por favor introduzca un valor";
    } else {
        if(divisasUsuario == 'aureo') {
            let resultado = (valorUsuarioFl*valorAureo);
            document.getElementById("resultado").value = resultado+"€";
        }else if(divisasUsuario == 'denario') {
            let resultado = (valorUsuarioFl*valorDenario);
            document.getElementById("resultado").value = resultado+"€";
        } else if(divisasUsuario == 'sestercio') {
            let resultado = (valorUsuarioFl*valorSestercio);
            document.getElementById("resultado").value = resultado+"€";
        } else if(divisasUsuario == 'denarii'){
            let resultado = (valorUsuarioFl*valorDenarii);
            document.getElementById("resultado").value = resultado+"€";

        } 
    }
    
}

function load() {
    window
}
const button = document.getElementById("enviar");
button.addEventListener("click", capturarDatos);