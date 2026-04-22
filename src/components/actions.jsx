import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage } from "../app/conterslice";
import { deleteAll } from "../app/conterslice";

export function Actions({activemodal, deactivemenu}){
    const tasks=useSelector((state)=>state.generalState.tasks)
    const dispatch=useDispatch()

    const handleaddtask=()=>{
        deactivemenu(false)
        activemodal(true)
    }

    const handledeletetasks=()=>{
        if(!tasks.some(el=>el.selected)){
            dispatch(setMessage({
                message:'You must select a task to delete',
                color:'orange'
            }))
            return
        }
        dispatch(deleteAll())
        dispatch(setMessage({
                message:'Tasks deleted sucessfully',
                color:'green'
        }))
        deactivemenu(false)
    }

    return(
        <section className="actions">
            <h2>Admin Actions</h2>
            <div className="actions__option">
                <button className="button" onClick={handleaddtask} >
                    Add Task
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                </button>
                
            </div>
            <div className="actions__option">
                <button className="button" onClick={handledeletetasks}>
                    Delete selected tasks
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
                </button>
                
            </div>
            <div className="actions__option">
                <button className="button">
                    Change Status
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"/></svg>
                </button>
                
            </div>
        </section>
    );
}