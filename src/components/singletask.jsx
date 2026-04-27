import React from "react";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gettheme } from "../hooks/usechangetheme";

export function Singletask(){
    const [singletask,setSingletask]=useState({});
    let tasks=useSelector((state)=>state.generalState.tasks)
    const theme=gettheme()
    
    let location=useLocation()
    const {state}=location
    //console.log(state)

    useEffect(()=>{
        const search=tasks.find(el=>String(el.id) === state)
        if(search){
            setSingletask(search)
        }
    },[])

    
    return(
        <section className={`singletask ${!theme?'lightback':''}`}>
            <article className={`singletask__content ${!theme?'lightback':''} ${!theme?'stc--light':''}`}>
                <h2 className={`${!theme?'lightfont':''}`} >Task:{singletask.name}</h2>

                <article className="singletask__tasks">

                    <div className="st" >
                        <p>Status:</p>
                        <p>{singletask.status}</p>
                    </div>
                    <div className="st">
                        <p className={singletask.priority}>Priority:</p>
                        <p className={`${singletask.priority} singletask_pri`}>{singletask.priority}</p>
                    </div>
                    <div className="st">
                        <p>Create on:</p>
                        <p>{singletask.createDate}</p>
                    </div>

                </article>

                <Link to='/'>
                    <button className="button">Return</button>
                </Link>
            </article>
        </section>
    );
}