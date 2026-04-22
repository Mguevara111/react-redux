import React from "react";
import { useState } from "react";
import { addTask } from "../app/conterslice";
import { setMessage } from "../app/conterslice";
import { useDispatch } from "react-redux";

const initialform={
    id:'',
    name:'',
    status:'',
    priority:'',
    createDate:'',
    selected:''
}

export function Addtaskmodal({deactivemodal}){
const [forminfo,setForminfo]=useState(initialform)

const dispatch=useDispatch();

const verifyformdata=(formcontent)=>{
        let flag=true
        const regex = /^[a-z0-9 ]*$/i;;
        if(!formcontent.name || !formcontent.priority){
            flag=false
            return flag
        }
        if(formcontent.name === '' || formcontent.priority === ''){
            flag=false
            return flag
        }
        if(!regex.test(formcontent.name)){
            flag=false
            return flag
        }
        return flag

}

     const handleformchange=(e)=>{
        setForminfo({
            ...forminfo,
            [e.target.name]:e.target.value
        })
     }


    const handlesubmit=(e)=>{
        e.preventDefault();
        let toid=crypto.randomUUID()
        let todate=new Date().toLocaleDateString();
        
    
        if(!verifyformdata(forminfo)){
            dispatch(setMessage({
                message:'Name or Priority cant be empty, name dont allow special characters',
                color:'yellow'
            }))
            return;
        }

        
        dispatch(addTask({
            ...forminfo,
            id:toid,
            createDate:todate,
            status:'pending',
            selected:false
        
        }))

        dispatch(setMessage({
                message:'New Task added successfully',
                color:'green'
        }))

        setForminfo(initialform)
        deactivemodal(false)
    }

    return(
        <section className="addtaskmodal">
            <article className="addtaskmodal__content">
                <div className="addtaskmodal__closebtn">
                    <button className="button" onClick={()=>deactivemodal(false)}>X</button>
                </div>
                <div className="addtaskmodal__form">
                    <form className="addtaskmodal__form"  action="" onSubmit={handlesubmit}>
                        <p>Task name:</p>
                        <input type="text" name="name" onChange={handleformchange}/>
                        <p>Choose Priority:</p>
                        <div>
                            <span>High</span><input type="radio" name="priority" value="high" onChange={handleformchange}/>
                            <span>Medium</span><input type="radio" name="priority" value="medium" onChange={handleformchange}/>
                            <span>Low</span><input type="radio" name="priority" value="low" onChange={handleformchange}/>
                        </div>
                        <button className="button" type="submit">Add</button>
                    </form>
                </div>
            </article>
        </section>
    );
}