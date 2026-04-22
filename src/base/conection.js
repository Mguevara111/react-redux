import {USERS} from '../base/users'

export function conection(data){
    //console.log(data)
    const searched=USERS.find(el=>el.username === data.user)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!searched){
                reject(new Error('Incorrect user or password, try again'))
                return;
            }
            if(searched.password !== data.password){
                reject(new Error('Incorrect password'))
                return;
            }
            resolve(searched)
        },2000)
    })
}