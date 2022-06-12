// Code your solutions in this file
function writeCards(names, eventName){
    let message = [];
    for(let i=0; i<names.length ; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return message;
}

function countDown(begNumber){
    while(begNumber>0){
        console.log(begNumber);
        begNumber--;
    }
    console.log(begNumber);
}