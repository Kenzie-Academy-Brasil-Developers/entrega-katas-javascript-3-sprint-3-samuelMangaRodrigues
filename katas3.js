const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

 
// function showResults(arrays){
   const body=document.querySelector("body")
function showResults(katas){
    console.log(katas)
   let div=document.createElement("p")
   div.innerText=katas
   body.appendChild(div)
    
}
function title(valor){
    
    let titulo=document.createElement("h1")
    titulo.innerText=valor
    titulo.className="titulo"
    body.appendChild(titulo)
}
function kata1() {
    title("Kata 1:")
    let kata1=[]
    
    for(let i=1; i<=25;i++){
        kata1.push(+i)
    }
    showResults(kata1)
}
kata1()

function kata2() {
    title("Kata 2:")
    let kata2=[]
    
    for(let i=25 ; i>=0 ; i--){
        kata2.push(i)
        
    }
    return kata2;
}
showResults(kata2())
    
function kata3() {
    title("Kata 3:")
    let kata3=[]
    
    for(let i=-1;i>=-25;i--){
        kata3.push(i)
    }

    return kata3;
}
showResults(kata3())

function kata4() {
    title("Kata 4:")
    let kata4=[]
    
    for(let i =-25;i<=-1;i++ ) {
      kata4.push(i)  
    
}
     return kata4;
}
showResults(kata4())


function kata5() {
    title("Kata 5:")
    let kata5=[]    
    for(let i=25;i>=-25;i--){
        kata5.push(i)
    }        
    return kata5;
}
showResults(kata5())

function kata6() {
    title("Kata 6:")
    let kata6=[]
    for(let i=3;i<100;i++){
        if (i%3===0) {
            kata6.push(i)
            
            
        }
        
    }
    return kata6
    
}
showResults(kata6())
function kata7() {
    title("Kata 7:")
    let kata7=[]
     for(let i=7;i<100;i++){
        if (i%7===0) {
            kata7.push(i)
        
            
        }
        
    }
    return kata7;
}
showResults(kata7())

function kata8() {
    title("Kata 8:")
 let kata8=[]
    for(let i=3;i<100;i++){
        if (i%3===0||i%7===0) {
            kata8.push(i)
       
            
        }
        
    }
    return kata8;

}
showResults(kata8())

function kata9() {
    title("Kata 9:")
    let kata9=[]
    
    for(let i=5;i<=100;i++){
        if (i%5===0) {
            kata9.push(i)
        
        
            
        }
        
    }
    return kata9;
}
showResults(kata9())

function kata10() {
    title("Kata 10:")
    
    for(let i=0;i<sampleArray.length;i++){
        sampleArray[i]
    }
    return sampleArray
}
showResults(kata10())

function kata11() {
    title("Kata 11:")
    let pares=[]
    for(let i=0;i<sampleArray.length;i++){
        if (sampleArray[i]%2===0) {
            pares.push(sampleArray[i])   
        } 
    }
    return pares;
}
showResults(kata11())
function kata12() {
    title("Kata 12:")

    let pares=[]
    for(let i=0;i<sampleArray.length;i++){
        if (sampleArray[i]%2!==0) {
            pares.push(sampleArray[i])
        }
        
    }
    return pares;
}
showResults(kata12())

function kata13() {
    title("Kata 13:")
    let divisiveis=[]
    for(let i=0;i<sampleArray.length;i++){
        if (sampleArray[i]%8===0) {
            divisiveis.push(sampleArray[i])
        }
        
    }
    return divisiveis;
}
showResults(kata13())
function kata14() {
    title("Kata 14:")
    let result=[]
    // implemente o código do kata 14 aqui
    for(let i=0;i<sampleArray.length;i++){
        result.push(sampleArray[i]*sampleArray[i])
           
        
        
    }
    return result;
}
showResults(kata14())


function kata15() {
    title("Kata 15:")
    let soma=0
    for( let i=0;i<=sampleArray.length;i++){
        
      soma+=i
    

    }
    return soma
}
showResults(kata15())

function kata16(){
    title("Kata 16:")
    let soma=0
    for(let i =0;i<=sampleArray.length;i++){
        if (sampleArray[i]>2) {
            soma+=sampleArray[i]      
        }
      
     
           
              
    }
   return soma;
}
showResults(kata16())

function kata17() {
    title("Kata 17:")
    // implemente o código do kata 17 aqui
    let menor=400;
    for(let i=0;i<=sampleArray.length;i++){
      if (sampleArray[i]<menor) {
          menor=sampleArray[i]
      }       
    }
    return menor;
}
showResults(kata17())

function kata18() {
    title("Kata 18:")
    let maior=0;
    for(let i=0;i<=sampleArray.length;i++){
      if (sampleArray[i]>maior) {
          maior=sampleArray[i]
      }       
    }
    return maior;
}
showResults(kata18())


// /**
//  * Daqui em diante são os bônus, por sua conta e risco
//  */

// function kataBonus1() {
//     // implemente o código do kata bonus 1 aqui
// }

// function kataBonus2() {
//     // implemente o código do kata bonus 2 aqui
// }

// function kataBonus3() {
//     // implemente o código do kata bonus 3 aqui
// }

// function kataBonus4() {
//     // implemente o código do kata bonus 4 aqui
// }

// function kataBonus5() {
//     // implemente o código do kata bonus 5 aqui
// }
