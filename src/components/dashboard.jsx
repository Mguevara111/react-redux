import React from "react";
import { Filterbar } from "./filterbar";
import { Statsinfo } from "./statsinfo";
import { gettheme } from "../hooks/usechangetheme";
import { useDashboard } from "../hooks/usedashboard";
import { Actions } from "./actions";
import { Addtaskmodal } from "./addtaskmodal";
import { toggleselectiontask } from "../app/conterslice";
import { useState } from "react";


export function Dashboard(){
    const [activemodal,setActivemodal]=useState(false)      //activa modal de agregar tarea

    const [activehamburger,setActivehamburger]=useState(false);
    const {filtertasks,selector,filters,isloading,userlogged,dispatch,updateTaskStatus,navigate}=useDashboard();
    const theme=gettheme()

    const handleactivehamburger=()=>{
        setActivehamburger(!activehamburger)
    }

    const handlegototask=(e)=>{
        const search=selector.find(el=>String(el.id) === e.target.dataset.id)
        if(search){
            navigate('/task',{
                state:e.target.dataset.id
            })
        }
    }

    const handleselect=(e)=>{
        //console.log(e.currentTarget.dataset.id)
        if(e.target.matches('.button')){
            return;
        }
        if(userlogged){
            dispatch(toggleselectiontask(
                e.currentTarget.dataset.id
            ))
        }
        
    }

    const handlechangestatus=(e)=>{
        dispatch(updateTaskStatus(e.target.dataset.id))
    }

    
    const filtercontent=filtertasks.length === 0 ?selector:filtertasks
    return(
        <>
        <section className={`dashboard ${activemodal?'dashboard--inactive':''} ${!theme?'lightback':''}`}>
            {/* *****************hamburger ************************** */}
            <button className={`hamburger hamburger--emphatic ${activehamburger?'is-active':''}`} onClick={handleactivehamburger} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

    
            <h1 className={`${!theme?'lightfont':''}`}>Dasboard</h1>
            <Statsinfo></Statsinfo>

            {/* *****************menu options***************** */}
            <article className={`dashboard__menu ${activehamburger?'dashboard__menu--show':''}`}>
                <Filterbar></Filterbar>
                {userlogged&&<Actions activemodal={setActivemodal} deactivemenu={setActivehamburger}></Actions>}
            </article>
           
           
           <article className="dashboard__taskcards">
            {filtercontent.map(el=>
                        <div className="dashboard__task" key={el.id} data-id={el.id} onClick={handleselect}>
                            <div className={`dashboard__taskbox ${el.selected?'dashboard__taskbox--show':''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                            </div>
                            <h2 className={`${!theme?'lightfont':''}`}>{el.name}</h2>
                            <p className={`${!theme?'lightfont':''}`}><b className={`${!theme?'lightfont':''}`} >Status:</b>{el.status}</p>
                            <div className="dashboard__priority">
                                <p className={`${el.priority} ${!theme?'lightfont':''}`}><b className={`${!theme?'lightfont':''}`}>Priority:</b>{el.priority}</p>
                                {el.priority === 'high'&&el.status==='pending'&&
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                        <path d="M449.5-85Q435-91 423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6q-16 0-30.5-6Zm30.5-74 321-321-321-321-321 321 321 321Zm-40-281h80v-240h-80v240Zm68.5 108.5Q520-343 520-360t-11.5-28.5Q497-400 480-400t-28.5 11.5Q440-377 440-360t11.5 28.5Q463-320 480-320t28.5-11.5ZM480-480Z"/>
                                    </svg>
                                }
                                
                            </div>
                            <button className="button" data-id={el.id} onClick={handlegototask}>Go to task</button>
                            {userlogged&&<button  data-id={el.id} className="button" onClick={handlechangestatus} >Change Status</button>}
                        </div>
                    )
            }
            </article>
        </section>

        {activemodal&&<Addtaskmodal deactivemodal={setActivemodal}></Addtaskmodal>}
        </>
        
    );
}