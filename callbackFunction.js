

function callBack(name,age,task){
    console.log(name, "is my name");
    console.log("I'm ",age,"years old");
    task();
}

function eating(){
    console.log("I'm eating");
}

function shower(){
    console.log("taking shower");
}

callBack("fuad", 25,eating)
callBack("hasan", 27, shower)