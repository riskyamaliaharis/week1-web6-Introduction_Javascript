const printSegitiga = 5

if (typeof printSegitiga == 'number'){
    let cetak = '';
    for(let i =1 ; i<=printSegitiga; i++){
        for(let j=1; j<=(printSegitiga-(i-1)); j++){        
            cetak = cetak + " " + j;
            
        }
       cetak = cetak + '\n'     
    }
    console.log(cetak) 
}

else{
    console.log("Data harus number")
}

