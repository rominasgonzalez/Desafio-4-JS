function precio(){
    parseFloat((prompt("Ingrese el precio")));
  }
  
  function iva(){
    precio() * 1.21;
  };
  
  function total(){
     precio() + iva();
  }
  
  alert( "El total a pagar es $" + total() + " más IVA");