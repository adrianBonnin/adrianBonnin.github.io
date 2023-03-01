document.getElementById('boton').onclick = function (){
    window.print();
  }

  document.getElementById('boton').onmouseover = function (){
    document.getElementById('boton').innerHTML="IMPRESIÓN";
  }

  document.getElementById('boton').onmouseout = function (){
    document.getElementById('boton').innerHTML="IMPRIMIR";
  } 


