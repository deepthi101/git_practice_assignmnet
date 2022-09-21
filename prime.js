function Check_prime(num){
  
let factors=0;
for(let i=1;i<=num;i++){
  if(num%i==0){
    factors++;
  }
}if(factors==2){
  return true;
}
  return false;
}
let commit = Check_prime(24);
if (commit == true){
  console.log("is a prime no")
​
  
}else{
  console.log("is not a prime no");
}

