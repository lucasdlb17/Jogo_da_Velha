var X = '<img src="X.png" class="simb">';
var O = '<img src="O.png" class="simb">';
var atual = X;
var pontosX = 0;
var pontosO = 0;
var r = 0;
var s = 0;
var fim = 0;


var c1, c2, c3, c4, c5, c6, c7, c8, c9;
 
function joga(escolha_do_jogador){

  if(document.getElementById(escolha_do_jogador).innerHTML == ''){
    var escolha_do_computador = 'casa' + getRandom();
    while(((document.getElementById(escolha_do_computador).innerHTML != '') || (escolha_do_computador == escolha_do_jogador)) && (fim == 0)){
        if((c1 != '') && (c2 != '') && (c3 != '')){
          r = 3;
          if((c4 != '') && (c5 != '') && (c6 != '')){
            r = 6;
            if(((c7 != '') && (c8 != '')) || ((c8 != '') && (c9 != '')) || ((c9 != '') && (c7 != ''))){
              fim = 1;
            }
          }
          else if((c7 != '') && (c8 != '') && (c9 != '')){
            s = 3;
            if((c4 != '') && (c5 != '') || (c5 != '') && (c6 != '') || (c6 != '') && (c4 != '')){
              fim = 1;
            }

          }
        }
        else if((c7 != '') && (c8 != '') && (c9 != '')){
          s = 3;
          if((c4 != '') && (c5 != '') && (c6 != '')){
            s = 6;
            if(((c1 != '') && (c2 != '')) || ((c2 != '') && (c3 != '')) || ((c3 != '') && (c1 != ''))){
              fim = 1
            }
          }
          else if((c1 != '') && (c2 != '') && (c3 != '')){
            r = 3;
            if((c4 != '') && (c5 != '') || (c5 != '') && (c6 != '') || (c6 != '') && (c4 != '')){
              fim = 1;
            }

          }
        }
        
      var escolha_do_computador = 'casa' + getRandom();
      
      
      
    }
    if(document.getElementById(escolha_do_computador).innerHTML == ''){
      document.getElementById(escolha_do_jogador).innerHTML = X;
      document.getElementById(escolha_do_computador).innerHTML = O;
    }
    else if(fim == 1){
      document.getElementById(escolha_do_jogador).innerHTML = X;

    }
  }
  else{
    alert('Clique em uma casa válida');
  }
}
 
function verif(){

   c1 = document.getElementById('casa1').innerHTML;
   c2 = document.getElementById('casa2').innerHTML;
   c3 = document.getElementById('casa3').innerHTML;
   c4 = document.getElementById('casa4').innerHTML;
   c5 = document.getElementById('casa5').innerHTML;
   c6 = document.getElementById('casa6').innerHTML;
   c7 = document.getElementById('casa7').innerHTML;
   c8 = document.getElementById('casa8').innerHTML;
   c9 = document.getElementById('casa9').innerHTML;
   
   if (((c1 == X) && (c2 == X) && (c3 == X))
    || ((c4 == X) && (c5 == X) && (c6 == X))
    || ((c7 == X) && (c8 == X) && (c9 == X)) 
    || ((c1 == X) && (c4 == X) && (c7 == X)) 
    || ((c2 == X) && (c5 == X) && (c8 == X)) 
    || ((c3 == X) && (c6 == X) && (c9 == X)) 
    || ((c1 == X) && (c5 == X) && (c9 == X)) 
    || ((c3 == X) && (c5 == X) && (c7 == X))){
    setTimeout(function(){
      pontosX++;
      document.getElementById('pX').innerHTML = pontosX;
      fim = 0; s=0; r=0;
      alert('Você ganhou!');
      novo();
    }, 50);
   }
   else if (((c1 == O) && (c2 == O) && (c3 == O))
   || ((c4 == O) && (c5 == O) && (c6 == O))
   || ((c7 == O) && (c8 == O) && (c9 == O)) 
   || ((c1 == O) && (c4 == O) && (c7 == O)) 
   || ((c2 == O) && (c5 == O) && (c8 == O)) 
   || ((c3 == O) && (c6 == O) && (c9 == O)) 
   || ((c1 == O) && (c5 == O) && (c9 == O)) 
   || ((c3 == O) && (c5 == O) && (c7 == O))){
    setTimeout(function(){
      pontosO++;
      document.getElementById('pO').innerHTML = pontosO;
      fim = 0; s=0; r=0;
      alert('Você Perdeu');
      novo();
    }, 50);
   }
   else if((c1 != '') && (c2 != '') && (c3 != '') && (c4 != '') && (c5 != '') && (c6 != '') && (c7 != '') && (c8 != '') && (c9 != '')){
    setTimeout(function(){
      fim = 0;
      alert('Empatou');
      novo();
    }, 50);
   }
  fim = 0;
}
function getRandom(){
  min = 1+r;
  max = 10-s;
  return Math.floor(Math.random() * (max - min)) + min;

}

function novo(){
  for (i=1; i<=9; i++){
    nomecasa = 'casa' + i;
    document.getElementById(nomecasa).innerHTML = '';
    
 }
}
 
 
