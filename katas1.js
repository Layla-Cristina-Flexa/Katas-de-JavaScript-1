function oneThroughTwenty() {
  
  let meuRetorno = [];
      for (let i = 1; i <= 20; i++) {
          meuRetorno.push(i)
      }
      return meuRetorno;
  }
  console.log(oneThroughTwenty());

 
 function evensToTwenty() {
     
  let meuRetorno = [];
  for (let i = 2; i <= 20; i= i+2) {
      meuRetorno.push(i)
  }
  return meuRetorno;
}
console.log(evensToTwenty());

 
 function oddsToTwenty() {

  let meuRetorno = [];
  for (let i = 1; i <= 20; i= i+=2) {
      meuRetorno.push(i)
  }
  return meuRetorno;
}
console.log(oddsToTwenty());
 
 function multiplesOfFive() {

    let meuRetorno = [];
    for (let i = 5; i<= 100; i+=5){
      meuRetorno.push(i)
    } 
    return meuRetorno
 }
 console.log(multiplesOfFive())

 
 function squareNumbers() {
   
  for (let i =1 ; i <= 10; i++){
        let result= i * i;
  
  console.log(result);
  
  }
     
  }console.log(squareNumbers()); 
 
 
 function countingBackwards() {

  let meuRetorno = [];
  for (let i = 20 - 0; i >= 1; i--){
    meuRetorno.push(i)
  } 
  return meuRetorno
}
console.log(countingBackwards())

 
 function evenNumbersBackwards() {
     
  let meuRetorno = [];
  for (let i = 20 - 0; i >= 1; i-= 2){
    meuRetorno.push(i)
  } 
  return meuRetorno
}
console.log(evenNumbersBackwards())
 
 
 function oddNumbersBackwards() {
     
  let meuRetorno = [];
  for (let i = 19; i > 0; i -= 2){
    meuRetorno.push(i)
  } 
  return meuRetorno
}
console.log(oddNumbersBackwards())
 
 
 function multiplesOfFiveBackwards() {
     
  let meuRetorno = [];
  for (let i = 100 - 0; i >= 5; i-=5){
    meuRetorno.push(i)
  } 
  return meuRetorno
}
console.log(multiplesOfFiveBackwards())
 
 
 function squareNumbersBackwards() {

  for (let i = 10 - 0; i >= 1; i--){
    let result= i * i;

console.log(result);

}
 
}console.log(squareNumbersBackwards()); 

     

