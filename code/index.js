let musicas = [
  {titulo:'True Friends', artista:'Bring Me The Horizon', source:'../audio/Audio/True_Friends.mp3', album:'../image/Musicas/bmth/thatsTheSpirit.jfif'},
  {titulo:'Can You Fell My Heart', artista:'Bring Me The Horizon', source:'../audio/Audio/Can_You_Feel_My_Heart.mp3', album:'../image/Musicas/bmth/sempiternal.jfif'},
  {titulo:'Nihilist Blues', artista:'Bring Me The Horizon', source:'../audio/Audio/nihilist blues.mp3', album:'../image/Musicas/bmth/amo.jpg'},
  {titulo:'Blasphemy', artista:'Bring Me The Horizon', source:'../audio/Audio/Blasphemy.mp3', album:'../image/Musicas/bmth/thatsTheSpirit.jfif'},
  {titulo:'Empire', artista:'Bring Me The Horizon', source:'../audio/Audio/Empire.mp3', album:'../image/Musicas/bmth/sempiternal.jfif'},
  {titulo:'Doomed', artista:'Bring Me The Horizon', source:'../audio/Audio/Doomed.mp3', album:'../image/Musicas/bmth/thatsTheSpirit.jfif'},
  {titulo:'Happy Song', artista:'Bring Me The Horizon', source:'../audio/Audio/Happy_Song.mp3', album:'../image/Musicas/bmth/thatsTheSpirit.jfif'},
  {titulo:'in the dark', artista:'Bring Me The Horizon', source:'../audio/Audio/in the dark.mp3', album:'../image/Musicas/bmth/amo.jpg'},
  {titulo:'Mantra', artista:'Bring Me The Horizon', source:'../audio/Audio/MANTRA.mp3', album:'../image/Musicas/bmth/amo.jpg'},
  {titulo:'Run', artista:'Bring Me The Horizon', source:'../audio/Audio/Run.mp3', album:'../image/Musicas/bmth/thatsTheSpirit.jfif'}, 
  {titulo:'Shadow Moses', artista:'Bring Me The Horizon', source:'../audio/Audio/Shadow Moses.mp3', album:'../image/Musicas/bmth/sempiternal.jfif'},
  {titulo:'Sleepwalking', artista:'Bring Me The Horizon', source:'../audio/Audio/Sleepwalking.mp3', album:'../image/Musicas/bmth/sempiternal.jfif'},
  {titulo:'The House Of Wolves', artista:'Bring Me The Horizon', source:'../audio/Audio/The House Of Wolves.mp3', album:'../image/Musicas/bmth/sempiternal.jfif'},
  {titulo:'Throne', artista:'Bring Me The Horizon', source:'../audio/Audio/Throne.mp3', album:'../image/Musicas/bmth/thatsTheSpirit.jfif'},
  {titulo:'What You Need', artista:'Bring Me The Horizon', source:'../audio/Audio/What_You_Need.mp3', album:'../image/Musicas/bmth/thatsTheSpirit.jfif'},
  {titulo:'Wonderful Life', artista:'Bring Me The Horizon', source:'../audio/Audio/wonderful life.mp3', album:'../image/Musicas/bmth/amo.jpg'},
  {titulo:'Heavy metal', artista:'Bring Me The Horizon', source:'../audio/Audio/heavy metal.mp3', album:'../image/Musicas/bmth/amo.jpg'},
]

let podcasts = [
  {titulo:'Ele esta Descontrolado', artista:'NerdCast', source:'../audio/Podcasts/ELE ESTÁ DESCONTROLADO_.mp3', album:'../image/Podcast/Nerdcast.jpg'},
  {titulo:'Meus Primeiros 5 Anos', artista:'Akitando', source:'../audio/Podcasts/Meus Primeiros 5 Anos _ 1990-1995.mp3',album:'../image/Podcast/Akitando.jpg'},
  {titulo:'Duelo de Titãs', artista:'NerdCast', source:'../audio/Podcasts/DUELO DE TITÃS.mp3', album:'../image/Podcast/Nerdcast.jpg'},
  {titulo: 'Bonde do Ratatouille', artista:'NerdCast', source:'../audio/Podcasts/BONDE DO RATATOUILLE.mp3', album:'../image/Podcast/Nerdcast.jpg'},
  {titulo:'O Diário de Henry Jones', artista:'Akitando', source:'../audio/Podcasts/Motivação_ O Diário de Henry Jones.mp3', album:'../image/Podcast/Akitando.jpg'},
  {titulo:'Fisgada Mortal', artista:'NerdCast', source:'../audio/Podcasts/FISGADA MORTAL.mp3', album:'../image/Podcast/Nerdcast.jpg'},
  {titulo:'Devo Fazer Faculdade?', artista:'Akitando', source:'../audio/Podcasts/Dúvida_ Devo Fazer Faculdade.mp3', album:'../image/Podcast/Akitando.jpg'},
  {titulo:'Nerd no Karaoke', artista:'NerdCast', source:'../audio/Podcasts/NERD NO KARAOKE.mp3', album:'../image/Podcast/Nerdcast.jpg'},
  {titulo:'Seja Generalista', artista:'PrimoTech', source:'../audio/Podcasts/SEJA GENERALISTA.mp3', album:'../image/Podcast/PrimoTech.jpg'},
  {titulo:'O que é DAO?', artista:'PrimoTech', source:'../audio/Podcasts/O QUE É DAO.mp3', album:'../image/Podcast/PrimoTech.jpg'},
  {titulo:'O Misterio do Bandeclay', artista:'NerdCast', source:'../audio/Podcasts/O MISTÉRIO DO BANDECLAY.mp3', album:'../image/Podcast/Nerdcast.jpg'},
  {titulo:'NerdCast', artista:'NerdCast', source:'../', album:'../image/Podcast/PrimoTech.jpg'},
  {titulo:'Inteligencia Artigicial', artista:'PrimoTech', source:'../audio/Podcasts/O QUE É INTELIGÊNCIA ARTIFICIAL_ _ PrimoTech 02(MP3_160K)_1.mp3', album:'../image/Podcast/PrimoTech.jpg'},
  {titulo:'O Perigo da tecnologia', artista:'PrimoTech', source:'../audio/Podcasts/O PERIGO DA TECNOLOGIA.mp3', album:'../image/Podcast/PrimoTech.jpg'},
  {titulo:'Seu Francisco', artista:'NerdCast', source:'../audio/Podcasts/SEU FRANCISCO.mp3', album:'../image/Podcast/Nerdcast.jpg'},
  {titulo:'Procure o que você Ama', artista:'Akitando', source:'../audio/Podcasts/Procure o que você Ama ... SÓ QUE NÃO.mp3', album:'../image/Podcast/Akitando.jpg'},
  {titulo:'Projetos_ Aprendendo a Priorizar', artista:'Akitando', source:'../audio/Podcasts/Projetos_ Aprendendo a Priorizar.mp3', album:'../image/Podcast/Akitando.jpg'},

]



let audio = document.querySelector('audio');
let duracaoTotal = document.querySelector('.fim');
let indexMus= 0;
let indexPod = 0;
let nomeMusica = document.querySelector('.nomeMusica');
let artista = document.querySelector('.banda');
let album  = document.querySelector('.album');
let leftScroll = document.getElementById('leftScroll');
let rightScroll = document.getElementById('rightScroll'); 
let leftScrollPod = document.getElementById('leftScrollPod'); 
let rightScrollPod = document.getElementById('rightScrollPod'); 
let surpreenda_musicas = document.getElementsByClassName('surpreenda_musicas')[0]
let podcastsRound = document.getElementsByClassName('podcastsRound')[0]
let musicasAle= [];
let podcastsAle =[];
let teste1 = 0;


indexMusicasAleatoria();
atualizarMusicas();
indexPodAleatoria();
atualizarPodcasts();





if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "../pages/login.html";
}



  for (let i = 1; i < 10; i++) {
    document.querySelector(`.aletoria${i}`).addEventListener('click', () => {
      const indiceMusica = musicasAle[i - 1]; 
      renderizarMusica(indiceMusica);
      tocar()
      document.querySelector('.botaoPlay').style.display = 'none';
      document.querySelector('.botaoPause').style.display = 'block';
    });
    
  }

  for (let i = 1; i <10; i++) {
    document.querySelector(`.podcast${i}`).addEventListener('click', () => {
      const indicePodcasts = podcastsAle[i - 1]; 
      renderizarPodcast(indicePodcasts);
      tocar()
      document.querySelector('.botaoPlay').style.display = 'none';
      document.querySelector('.botaoPause').style.display = 'block';
    });
  }




leftScroll.addEventListener('click', () => {
  surpreenda_musicas.scrollLeft -=230;
})

rightScroll.addEventListener('click', () => {
  surpreenda_musicas.scrollLeft+=230;
})

leftScrollPod.addEventListener('click', () => {
  podcastsRound.scrollLeft -=230;
})

rightScrollPod.addEventListener('click', () => {
  podcastsRound.scrollLeft+=230;
})


document.querySelector('.botaoPlay').addEventListener('click', tocar)
document.querySelector('.botaoPause').addEventListener('click', pausar)
audio.addEventListener('timeupdate', atualizarBarra);
duracaoTotal.textContent = conversãoTempo(Math.floor(audio.duration));

document.querySelector('.botaoAnt').addEventListener('click', () => {
  let num =  Math.floor(Math.random() *10000)
  if(num % 2 === 0){
    indexMus--; 
    if (indexMus < 0){
        indexMus = musicas.length-1;
    }
    renderizarMusica(indexMus);
   
  } else{
    indexPod--; 
    if (indexPod < 0){
        indexPod = podcasts.length-1;
    
  }
  document.querySelector('.botaoPlay').style.display = 'block';
  document.querySelector('.botaoPause').style.display = 'none';
  renderizarPodcast(indexPod)
}
});


document.querySelector('.botaoProx').addEventListener('click', () => {
  let num =  numeroAleatorio()
  if(num % 2 === 0){
    indexMus++; 
    if (indexMus < 0){
        indexMus = 0;
    }
    renderizarMusica(indexMus);
    
   
  } else{
    indexPod++; 
    if (indexPod< 0){
        indexPod = 0;
    renderizarPodcast(indexPod)
  }
  renderizarPodcast(indexPod)
  document.querySelector('.botaoPlay').style.display = 'block';
  document.querySelector('.botaoPause').style.display = 'none';
}
});



function numeroAleatorio() {
  return Math.floor(Math.random() *17);
}


function atualizarMusicas() {
  for (let i = 0; i < 10; i++) {
    const titulo = document.querySelector(`.titulo${i + 1}`);
    const album = document.querySelector(`.album${i + 1}`);
    titulo.textContent = musicas[musicasAle[i]].titulo;
    album.src = musicas[musicasAle[i]].album;
  
  }
}

function indexMusicasAleatoria() {
 
  while (musicasAle.length < 10) {
    let indexAleatorio = numeroAleatorio();
    if (!musicasAle.includes(indexAleatorio)) {
      musicasAle.push(indexAleatorio);
    }
  }
  return musicasAle;
}


function renderizarMusica(index){
  audio.setAttribute('src', musicas[index].source);
  audio.addEventListener('loadeddata', () => {
      nomeMusica.textContent = musicas[index].titulo;
      artista.textContent = musicas[index].artista;
      album.src = musicas[index].album;
      duracaoTotal.textContent = conversãoTempo(Math.floor(audio.duration));
  });
  document.body.append(audio);
}



function tocar(){
  audio.play();
  document.querySelector('.botaoPlay').style.display = 'none';
  document.querySelector('.botaoPause').style.display = 'block';
}


function pausar(){
  audio.pause();
  document.querySelector('.botaoPlay').style.display = 'block';
  document.querySelector('.botaoPause').style.display = 'none';

}

function atualizarBarra(){
  let barra = document.querySelector('progress');
  let duração = Math.floor((audio.currentTime / audio.duration)*100) + '%';
  barra.style.width = duração;
  let tempo = document.querySelector('.inicio');
  tempo.textContent = conversãoTempo(Math.floor(audio.currentTime));
}


function conversãoTempo(segundos){
  let Minutos = Math.floor(segundos / 60);
  let Segundos = segundos % 60;

  if (Segundos < 10){
      Segundos = '0'+ Segundos;
  }
  return `${Minutos}:${Segundos}`;
}


function atualizarPodcasts() {
  for (let i = 0; i < 10; i++) {
    const titulo = document.querySelector(`.tituloPod${i + 1}`);
    const album = document.querySelector(`.capa${i + 1}`);
    titulo.textContent = podcasts[podcastsAle[i]].titulo;
    album.src = podcasts[podcastsAle[i]].album;
  }
}

function indexPodAleatoria() {
 
  while (podcastsAle.length < 10) {
    let indexAleatorio = numeroAleatorio();
    if (!podcastsAle.includes(indexAleatorio)) {
      podcastsAle.push(indexAleatorio);
    }
  }
  return podcastsAle;
}


function renderizarPodcast(index){
  audio.setAttribute('src', podcasts[index].source);
  audio.addEventListener('loadeddata', () => {
      nomeMusica.textContent = podcasts[index].titulo;
      artista.textContent = podcasts[index].artista;
      album.src = podcasts[index].album;
      duracaoTotal.textContent = conversãoTempo(Math.floor(audio.duration));
  });
  document.body.append(audio);
}





function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("usuarioLogado");
  window.location.href = "../pages/login.html";
}

