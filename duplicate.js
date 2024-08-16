const names = ['abul', 'babul', 'kuddus','tanveen','opu','babul','rafi','tanveen','noyon','pakhi','opu'];

const unique = [];

function duplicate(names){
    for(let i=0; i< names.length ; i++ ){
        const name = names[i];
        if(unique.includes(name)=== false){
            unique.push(name);
        }
     
    }
    return unique;
}

const uniqueNames = duplicate(names);
console.log(uniqueNames);