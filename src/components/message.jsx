import React from "react";
import { useSelector } from "react-redux";


export function Message(){
    let messagereceive=useSelector((state)=>state.generalState.message)


    if(!messagereceive.message){
        return;
    }


    return(
        <section className="message" style={{backgroundColor:`${messagereceive.color}`}}>
            <h2>{messagereceive.message}</h2>
        </section>
    );
}