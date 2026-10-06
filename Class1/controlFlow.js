let age=10
if(age>10){
    console.log("you are not a kid")
}else{
    console.log("sybau kiddo")
}


marks=65

if(marks>=70){
    console.log("first class")
}else if(marks>=60 && marks<70){
    console.log("upper second class")
}else if(marks>=50 && marks<60){
    console.log("lower second class")
}else{
    console.log("third class")
}

let a = 10;
let b = 5;
let op = "+";

if (op === "+") {
  console.log(a + b);
} else if (op === "-") {
  console.log(a - b);
} else if (op === "*") {
  console.log(a * b);
} else if (op === "/") {
  console.log(a / b);
} else {
  console.log("Unknown operator");
}

// 

let menu=1

switch(menu){
    case 1: console.log("chicken momo"); break;
        case 2: console.log("mojito"); break;
            case 3: console.log("noodles"); break;
                case 4: console.log("veg momo"); break;
                    case 5: console.log("coke"); break;
                        case 6: console.log("fried mango"); break;
                            case 7: console.log("boiled coke"); break;
default: console.log("ghar gayera kha")
}