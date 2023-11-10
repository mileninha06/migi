function tocaSomPom(seletorAudio){
     const elemento = document.querySelector(seletorAudio).play('');
     
     if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
     }else{
        alert('Elemento não encontrado')
     }
 }
 document.querySelectorAll('.tecla')
 
 const tecla= document.querySelectorAll('.tecla');
 
 tecla.onclick= function (){
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (){
    if(evento.code ==='Space' || evento.code === 'Enter'){
    tecla.classList.add('ativa');
  }
    }
     
 for (Contador = 0;contador < listaDeTecla.length; conatdor++){
    tecla[contador].onclick = tocaSomPom;

    const instrumento = listadeTeclas[contador]
    
    const tecla = listadeTeclas [contador]

const idAudio = `#som_${instrumento}`;
 
 }
 