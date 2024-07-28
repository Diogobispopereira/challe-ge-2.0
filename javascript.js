let textArea = document.querySelector(".conteudo__input");
let mensagem = document.getElementById("outputTexto");

function btnEncriptar() {
    let textoEncriptado = encriptar(textArea.value);
    localStorage.setItem("textoCriptografado", textoEncriptado);
    textArea.value = "";
    window.location.href = "descriptografar.html";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "re"],
        ["i", "ime"],
        ["a", "ari"],
        ["o", "ober"],
        ["u", "ufa"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let nomesMatriz = 0; nomesMatriz < matrizCodigo.length; nomesMatriz++) {
        if (stringEncriptada.includes(matrizCodigo[nomesMatriz][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[nomesMatriz][0], matrizCodigo[nomesMatriz][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDescriptado = desencriptar(textArea.value);
    localStorage.setItem("textoDesencriptado", textoDescriptado);
    textArea.value = "";
    window.location.href = "index.html";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "re"],
        ["i", "ime"],
        ["a", "ari"],
        ["o", "ober"],
        ["u", "ufa"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    console.log("Antes da desencriptação:", stringDesencriptada);
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    const textoCopiado = document.getElementById("outputTexto").value;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            alert('Texto copiado para a área de transferência');
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

window.onload = function() {
    const url = window.location.href;
    if (url.includes('descriptografar.html')) {
        const textoCriptografado = localStorage.getItem('textoCriptografado');
        if (textoCriptografado) {
            document.querySelector(".conteudo__input-secundario").value = textoCriptografado;
        } else {
            document.querySelector(".conteudo__input-secundario").value = "";
        }
        localStorage.removeItem('textoCriptografado'); // Limpa o localStorage após carregar o conteúdo
    } else if (url.includes('index.html')) {
        const textoDesencriptado = localStorage.getItem('textoDesencriptado');
        if (textoDesencriptado) {
            document.getElementById("inputTexto").value = textoDesencriptado;
        } else {
            document.getElementById("inputTexto").value = "";
        }
       mensagem.innerText = ""; // Limpa a mensagem na página index.html
        localStorage.removeItem('textoDesencriptado'); // Limpa o localStorage após carregar o conteúdo
    }
};

/*let textArea = document.querySelector(".conteudo__input");
let mensagem = document.getElementById("outputTexto");

    function btnEncriptar() {
        let textoEncriptado = encriptar(textArea.value);
        localStorage.setItem("textoCriptografado", textoEncriptado);
        textArea.value = "";
        window.location.href = "descriptografar.html"
    }

      function encriptar (stringEncriptada) {
        let matrizCodigo = [
            ["e", "re"],
            ["i", "ime"],
            ["a", "ari"],
            ["o", "ober"],
            ["u", "ufa"]
        ];
           stringEncriptada = stringEncriptada.toLowerCase();
            
              for(let nomesMatriz = 0; nomesMatriz < matrizCodigo.length; nomesMatriz++){
                 if(stringEncriptada.includes(matrizCodigo[nomesMatriz][0])){
                    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[nomesMatriz][0], matrizCodigo[nomesMatriz][1])
                 }
                }
                return stringEncriptada
            }
               
                    function btnDesencriptar(){
                        const textoDescriptado = desencriptar(textArea.value);
                        localStorage.setItem("textoDescriptado", textoDescriptado);
                            textArea.value = "";
                            window.location.href = "index.html";
                    }

                                function desencriptar(stringDesencriptada) {
                                    let matrizCodigo = [
                                        ["e", "re"],
                                        ["i", "ime"],
                                        ["a", "ari"],
                                        ["o", "ober"],
                                        ["u", "ufa"]
                                    ];
                                    stringDesencriptada = stringDesencriptada.toLowerCase();

                                      for(let i = 0; i < matrizCodigo.length; i++) {
                                        if(stringDesencriptada.includes(matrizCodigo[i][1])){
                                            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
                                        }
                                    }
                                    return stringDesencriptada;
                                }
                            function copiarTexto(){ 
                                const textoCopiado = document.getElementById("outputTexto").value;
                                navigator.clipboard.writeText(textoCopiado)
                                .then(() => {
                                    alert('Texto copiado para a área de transferência');
                                })
                                .catch(err => {
                                    console.error('Erro ao copiar texto: ', err);
                                });
                            }    


                            window.onload = function() {
                                const url = window.location.href;
                                if (url.includes('descriptografar.html')) {
                                    const textoCriptografado = localStorage.getItem('textoCriptografado');
                                    if (textoCriptografado) {
                                        document.querySelector(".conteudo__input-secundario").value = textoCriptografado;
                                    } else {
                                        document.querySelector(".conteudo__input-secundario").value = "";
                                    }
                                    localStorage.removeItem('textoCriptografado'); // Limpa o localStorage após carregar o conteúdo
                                } else if (url.includes('index.html')) {
                                    const textoDesencriptado = localStorage.getItem('textoDesencriptado');
                                    if (textoDesencriptado) {
                                        document.getElementById("inputTexto").value = textoDesencriptado;
                                    } else {
                                        document.getElementById("inputTexto").value = "";
                                    }
                                    mensagem.innerText = "Nenhuma mensagem encontrada"; // Limpa a mensagem na página index.html
                                    localStorage.removeItem('textoDesencriptado'); // Limpa o localStorage após carregar o conteúdo
                                }
                            };

                            
// codigo 2 

/*let textArea = document.querySelector(".conteudo__input");
let mensagem = document.getElementById("outputTexto");

function btnEncriptar() {
    let textoEncriptado = encriptar(textArea.value);
    localStorage.setItem("textoCriptografado", textoEncriptado);
    textArea.value = "";
    window.location.href = "descriptografar.html";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "re"],
        ["i", "ime"],
        ["a", "ari"],
        ["o", "ober"],
        ["u", "ufa"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let nomesMatriz = 0; nomesMatriz < matrizCodigo.length; nomesMatriz++) {
        if (stringEncriptada.includes(matrizCodigo[nomesMatriz][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[nomesMatriz][0], matrizCodigo[nomesMatriz][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDescriptado = desencriptar(textArea.value);
    localStorage.setItem("textoDesencriptado", textoDescriptado);
    textArea.value = "";
    window.location.href = "index.html";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "re"],
        ["i", "ime"],
        ["a", "ari"],
        ["o", "ober"],
        ["u", "ufa"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    const textoCopiado = document.getElementById('outputTexto').value;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            alert('Texto copiado para a área de transferência');
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

window.onload = function() {
    const url = window.location.href;
    if (url.includes('descriptografar.html')) {
        const textoCriptografado = localStorage.getItem('textoCriptografado');
        if (textoCriptografado) {
            document.querySelector(".conteudo__input-secundario").value = textoCriptografado;
        } else {
            document.querySelector(".conteudo__input-secundario").value = "";
        }
        localStorage.removeItem('textoCriptografado'); // Limpa o localStorage após carregar o conteúdo
    } else if (url.includes('index.html')) {
        const textoDesencriptado = localStorage.getItem('textoDesencriptado');
        if (textoDesencriptado) {
            document.getElementById("inputTexto").value = textoDesencriptado;
        } else {
            document.getElementById("inputTexto").value = "";
        }
        mensagem.innerText = "Nenhuma mensagem encontrada"; // Limpa a mensagem na página index.html
        localStorage.removeItem('textoDesencriptado'); // Limpa o localStorage após carregar o conteúdo
    }
};*/