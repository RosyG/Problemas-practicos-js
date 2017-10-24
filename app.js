var  removerDuplicado=function (array){
  var arregloNuevo=[];
  for (var i=0;i<array.length ;i+=1){
    if (arregloNuevo.indexOf(array[i])===-1){
      arregloNuevo.push(array[i]);
    }
  }
return arregloNuevo
}
var arreglo=[4,5,5,6,7,8,9];
console.log(removerDuplicado(arreglo));
