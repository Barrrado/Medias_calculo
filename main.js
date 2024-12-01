
const notas = document.getElementById("nota1");
const atividade = document.getElementById("Atividades1");
const adicionar1 = document.getElementById("Adicionar");
const formulario = document.getElementById("form1");
let linhas = '';
const notas2 = []
const atividada2 = []
let Media2 = parseInt(prompt("Digite aqui qual a Media da sua Instituição: "))

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinhas();
    MediaFinal();
})

function adicionarLinhas(){
    if (atividada2.includes(atividade.value)){
        alert("Essa  atividade vai foi Inserida!!")
    } else {
    let linha = `<tr>`;
    linha +=  `<td>${atividade.value}</td>`;
    linha +=  `<td>${notas.value}</td>`;
    linha +=  `<td>${notas.value >= Media2 ? `<img src="./Aprovado.png" style="width: 20PX;">` : `<img src="./reprovado.png" style="width: 20PX;" `}</td>`;
    linhas += linha;
    
     document.getElementById('tabela1').innerHTML = linhas;
}}

function MediaFinal() {
    if (atividada2.includes(atividade.value)){
    } else {
    notas2.push(parseFloat(notas.value));
    atividada2.push(atividade.value);
    let somadasnotas = 0;
    for (let i = 0;  i < notas2.length; i++) {
      somadasnotas += notas2[i];
    }
    const media = somadasnotas/notas2.length;
    document.getElementById("MediaFim").innerHTML = `${media}.toFixed(2);`
   if (media >= Media2){
    document.getElementById("MensagemFinal").innerHTML = "Aprovado"
    document.getElementById("MensagemFinal").style.color = '#f5f5dc';
    document.getElementById("MensagemFinal").style.backgroundColor = '#09ac09';
   } else {
    document.getElementById("MensagemFinal").innerHTML = "Reprovado"
    document.getElementById("MensagemFinal").style.Color = '#f5f5dc';
    document.getElementById("MensagemFinal").style.backgroundColor= '#dd0f0f';
   }
}}

//notas.addEventListener("keyup", function(e){
//    console.log(e.target.value)
//})

//atividade.addEventListener("keyup", function(e){
//    console.log(e.target.value)
//})
