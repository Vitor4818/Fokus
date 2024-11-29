const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

const startBt = document.querySelector('.app__card-primary-button') //pegando elemento do botão de start
const timerBt = document.getElementById('timer') //pegando elemento do temporizador
const image = document.querySelector('.app__image') // pegando elemento da imagem que irá mudar
const titulo = document.querySelector('.app__title') // pegando elemento das frases

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 


function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    image.setAttribute('src', `/imagens/${contexto}.png`)
    switch(contexto){
        case 'foco':
            titulo.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>'
            break
        case 'descanso-curto':
            titulo.innerHTML =  `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>` 
            break
        case 'descanso-longo':
            titulo.innerHTML=`Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
            break
    }







}

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
}) 

curtoBt.addEventListener('click', ()  => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', ()=>{
    alterarContexto('descanso-longo')
})
