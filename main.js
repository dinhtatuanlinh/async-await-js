const axios = require('axios')

// promise handle async
let asynchronous = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(b > 2){
                reject("error b greater than 2")
            }
            let sum = a + b
            resolve(sum)

        }, 1000)
    })
}

// handle request api async
let getData = (url) => {

    let config = {
        method: 'get',
        url: url,
        responseType: 'json'
    }
    return axios(config)
}

(async function (){
    let result = await asynchronous(1, 2)
    console.log(result)
    result = await getData("https://reqres.in/api/users")
    console.log(result.data)
    console.log("1234")
})()
let errCode = [
    new Error("error b greater than 5"),
    new Error("error x less than 0")
]

let sum = (a, b )=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(b>5){
                reject(1)
            }
            let s = a + b
            resolve(s)
        }, 1000)
    })
}

let multiple = (x)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (x <= 0){
                reject(2)
            }
            let m = x*2
            resolve(m)
        }, 2000)
    })
}
let execute = async()=>{
    try{
        let sumResult = await sum(1,3)
        let multipleResult = await multiple(sumResult)
        return multipleResult
    } catch(err){
        if(err == 1){
            console.log(errCode[err-1].message)
        }else if(err == 2){
            console.log(errCode[err-1].message)
        }
    }
}

execute().then(result=>console.log(result))