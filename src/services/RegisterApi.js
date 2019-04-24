

export function RegisterApi(userData){
    return new Promise((resolve,reject)=>{
    fetch("https://ohq8qauxv8.execute-api.us-east-1.amazonaws.com/dev/api/users/nativesignup", {
        method:'POST',
        mode:'no-cors',
        headers:{
            'ContentType':'application/json'
           
        },
        body:JSON.stringify(userData)

    } )
    .then((response)=>
    response.json)
    .then((responseJson)=>{
        
      resolve(responseJson)
    })
    .catch((error)=>{
      reject(error)
    })
    });
}