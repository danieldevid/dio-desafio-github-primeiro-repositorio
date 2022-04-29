function getadmins(map) {
    let admin = [];
    for([key,value] of map) {
        if(value == 'admin') {
          admin.push(key);
        }
    }
    return admin;
}

const usuarios = new Map();

usuarios.set('Daniel', 'admin');
usuarios.set('Carlos', 'admin');
usuarios.set('Alana', 'User');
usuarios.set('Cassio', 'admin');

console.log(getadmins(usuarios)); 

const meuArray = [30,30,40,5,223,2049,3034,5]

function valoresUnicos(arr) {
    const mySet = new Set(arr)
    return [...mySet]
}




function declarandoArray(arr, num){
    try {
        if(!arr && num) throw new ReferenceError("Envie os parâmatros");

        if ( typeof arr !== 'object') throw new TypeError(" Array precisa ser do tipo object");
    
        if ( typeof arr !== 'number') throw new TypeError(" Array precisa ser do tipo number");
    
        if  ( arr.length !== num ) throw new RangeError ("O tamanho invalido");

        return arr;
    } catch(e) {
        if( e instanceof ReferenceError) {
            console.log("Este erro é um ReferencerError!")
            console.log(e.menssage)
            
        }else  if( e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.menssage)
            
        }else  if( e instanceof RangeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.menssage)
            
        } else{
            console.log("Tipo de erro não esperado: " + e);
        }
    
    } 
        
    }

    console.log(declarandoArray()); 

    function validaArrays(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

        if (typeof arr !== 'object')
            throw new TypeError('Envie um elemento do tipo Array!');

        if (typeof num !== 'number')
            throw new TypeError('Envie um elemento do tipo Number!');

        if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

        return arr;
    } catch (e) {
        if (e instanceof RangeError) {
            console.log('RangeError!');
            console.log(e.stack);
        } else if (e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.stack);
        } else {
            console.log('Outro tipo de erro!');
            console.log(e.stack);
        }
    }
}

console.log(validaArrays()); 


