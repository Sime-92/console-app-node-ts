
  
    
  export  const multiplicacion =  ( numero:number = 5, resultado:number = 0) => {
        const cabecera:void = console.log('================================' + '\n'
            + '         tabla del 5        ' + '\n' + '================================'  + '\n');
        for(let i:number = 1; i <= 10 ; i++ ){
            resultado = numero*i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }
        return cabecera; 
    }
    

    



