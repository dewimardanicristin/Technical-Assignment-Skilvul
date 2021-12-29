/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
var sum = "";
for(let i=2;i<100;i++){
  let flag =0;
    for(let j=2;j<i;j++){
        if(i%j==0){
           flag = 1;
        } 
    }
  if(flag != 1){
      //console.log(i)
        sum += [i] + "," + " ";
  }
}
console.log(sum);

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 

/// EDIT HERE
let primeCounter = 0;
let fiftiethPrime = 2;
  while(primeCounter<50){
      let flag =0;
        for(let j=2;j<fiftiethPrime;j++){
            if(fiftiethPrime%j==0){
               flag = 1;
            } 
        }
      if(flag != 1){
        primeCounter++;
      }
      if(primeCounter==50){
        console.log(fiftiethPrime);
      }
      fiftiethPrime++;
  }
  
/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
 let oddCounter = 0;
 let fiftiethOdd= 0;

/// EDIT HERE
 do {
   if(fiftiethOdd%2!=0){
    oddCounter+=1;
   }
   if(oddCounter == 50){
     console.log(fiftiethOdd);
   }
   fiftiethOdd++;
 } while (oddCounter<50)