var X = '<img src="X.png" class="simb">';
var O = '<img src="O.png" class="simb">';
var atual = X;
var pontosX = 0;
var pontosO = 0;
 
function joga(casa){
    clicado = document.getElementById(casa).innerHTML;
   if(clicado == ''){
        document.getElementById(casa).innerHTML = atual;
        if (atual == X){
            atual = O;
        }else{
            atual = X;
        }
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
        alert('X ganhou!');
        novo();
    }, 50);
    }

    else if(((c1 == O) && (c2 == O) && (c3 == O))
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
        alert('O ganhou!');
        novo();
    }, 50);
    }

    else if((c1 != '') && (c2 != '') && (c3 != '') && (c4 != '') && (c5 != '') && (c6 != '') && (c7 != '') && (c8 != '') && (c9 != '')){
    setTimeout(function(){
        alert('Empate');
        novo();
      }, 50);
   }
    
}

function novo(){
    for (i=1; i<=9; i++){
      nomecasa = 'casa' + i;
      document.getElementById(nomecasa).innerHTML = '';
      
    }
}
 
 
