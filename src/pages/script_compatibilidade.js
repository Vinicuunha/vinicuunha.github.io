const form = document.getElementById('formulario_dados');
const resultado_analise = document.getElementById('resultado_analise');

form.addEventListener('submit',(event) =>{
    event.preventDefault();

    const dados_preenchido = new FormData(form);

    const valores = Object.fromEntries(dados_preenchido.entries());

    console.log(valores);

    if(valores.jogo_desejado === "gta6"){
        resultado_analise.innerHTML = '<img id="check" src="./src/imagens/check.png" alt="" width="60px">';
        resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#4caf50;">O jogo roda no seu computador</span>';
    }else{
        resultado_analise.innerHTML = '<img id="check" src="./src/imagens/cancelar.png" alt="" width="60px">';
        resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';

    }
})

const slider = document.getElementById('sliderFonte');
const valor = document.getElementById('valorFonte');

slider.addEventListener('input', () => {
  const tamanho = slider.value + 'px';
  document.body.style.fontSize = tamanho; // altera o tamanho da fonte do body
  valor.textContent = tamanho; // atualiza o número exibido
});