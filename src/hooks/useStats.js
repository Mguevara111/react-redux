import React from "react";
import { useEffect} from "react";
import { useSelector } from "react-redux";
import { setStats } from "../app/conterslice";
import { useDispatch } from "react-redux";


export const useStats=()=>{
    let tasks=useSelector((state)=>state.generalState.tasks)
    const dispatch=useDispatch();
    
    useEffect(()=>{

        const totals=tasks.reduce((acum,el)=>{
            if(el.status === 'pending'){
                acum.totalpending+=1
            }
            if(el.status === 'realiced'){
                acum.totalrealiced+=1
            }
            if(el.priority === 'low'){
                acum.totallow+=1
            }
            if(el.priority === 'medium'){
                acum.totalmedium+=1
            }
            if(el.priority === 'high' && el.status === 'pending'){
                acum.totalhigh+=1
            }
            acum.totaltasks+=1
            return acum;
        },{totaltasks:0,totalmedium:0,totalhigh:0,totallow:0,totalpending:0,totalrealiced:0})
        //console.log(totals)

        dispatch(setStats(totals))
        
    },[tasks])

    
    
}
