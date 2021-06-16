
const list = [20,99,32,47,33,39,92,12];

function age(n){
    if(n % 2 == 0){
       return console.log(n+ " : is an even number.");
    }
    else{
       return console.log(n*2+ " : is an odd number.");
    }

}

for(let i=0; i<list.length; i++){
    const element = list[i];
    // age(element)
}

const friend_age = [20,42,53,92,22,33];

for (let i = 0; i < friend_age.length; i++) {
    const newAge = friend_age[i];
    age(newAge);
}