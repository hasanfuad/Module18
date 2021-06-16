
// const list = [20,99,32,47,33,39,92,12];

// function age(n){
//     if(n % 2 == 0){
//        return console.log(n+ " : is an even number.");
//     }
//     else{
//        return console.log(n*2+ " : is an odd number.");
//     }

// }

// for(let i=0; i<list.length; i++){
//     const element = list[i];
//     // age(element)
// }

// const friend_age = [20,42,53,92,22,33];

// for (let i = 0; i < friend_age.length; i++) {
//     const newAge = friend_age[i];
//     age(newAge);
// }

function evenify(num){

        if(num % 2 == 0){
            return num;
        }
        else{
            return num * 2;
        }
}

const numList = 23;

function evenifyAll(n){

    let evenBox = [];
    for (let i = 0; i < n.length; i++) {
        let element = n[i];
        if(element % 2 == 0){
            evenBox.push(element);
        }
        
    }
    return evenBox;
}

const numArr = [2,30,33,98,99,83,88,20];

const result = evenifyAll(numArr);
console.log(result);