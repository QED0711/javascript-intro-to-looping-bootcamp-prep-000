function forLoop (array){
  for(i=0; i<25; i++){
    array.push(`"I am ${i} strange loop${i === 0 ? '' : '2'}."`);
    }
  return array;
}

function whileLoop(n){
  while (n>0){
    console.log(--n);
  }
  return 'done';
}

function doWhile(array){
  function maybeTrue(){
    array.length > 0;
  }
  do{
    
  } while (maybeTrue())
}
