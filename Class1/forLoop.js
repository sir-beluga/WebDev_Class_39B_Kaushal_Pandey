for (let i = 10; i > 0; i--){
    console.log(i)
}

const info={"name":"Nigay","age":12,"gender":'transwoman'}
console.log(info.gender)

const sathis=["italian",'french','korean','japanese']
for(let i=0; i<sathis.length; i++){
    console.log(sathis[i])
}
console.log(sathis[1])

const house={"name":"ichigo","age":17,"address":null}
console.log(house?.address)
console.log(house?.address?.city)


let i=0
while(i<=100){
    console.log(i)
    i++
}

let x=0
do{
    console.log(x)
    x++
}while(x<=1000)