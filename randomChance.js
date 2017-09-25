"use strict";
var quarters = 37;

while (quarters > 0){
    quarters--;
    console.log(quarters);
    if(quarters===0){
        return 0;
    } else if(Math.floor(Math.random()*100)===1){
        quarters+=(Math.trunc(Math.random()*10)+51);
        console.log(quarters);
        return quarters;
    }
}