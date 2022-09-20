function Checkprime(num){
  
let factors=0;
for(let i=1;i<=15;i++){
  if(num%i==0){
    factors++;
  }
}if(factors==2){
  console.log(num,"is a prime no");
}else{
  console.log(num,"is not a prime no");
}
}
Checkprime(15);