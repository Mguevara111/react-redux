import React from "react";
import { conection } from "../base/conection";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setMessage,toggleLoading,setUserloged } from "../app/conterslice";
import { Loader } from "./loader";
import { useNavigate } from "react-router-dom";
import { gettheme } from "../hooks/usechangetheme";
import logo from '../assets/images/logonbg.png'

const initialform={
    user:'',
    password:''
}

export function Login(){
    const [formdata,setFormdata]=useState(initialform)

    const isloading=useSelector((state)=>state.generalState.isloading)
    const theme=gettheme();

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handlechange=(e)=>{
        setFormdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try {
            dispatch(toggleLoading())
            let res=await conection(formdata)
            //console.log('se logeo')
            dispatch(toggleLoading())
            dispatch(setUserloged(
                res.username
            ))
            dispatch(setMessage({
                message:`Welcome ${res.username}`,
                color:'green'
            }))
            navigate('/')
        } catch (error) {
            dispatch(setMessage({
                message:error.message,
                color:'red'
            }))
            dispatch(toggleLoading())
            setFormdata(initialform)
        }
    }

    if(isloading){
        return(
            <Loader></Loader>
        )
    }

    return(
        <section className={`login ${!theme?'lightback':''}`}>
            <h2 className={`${!theme?'lightfont':''}`}>Login</h2>
            <img src={logo} alt="logo" />
            <p className={`${!theme?'lightfont':''}`}>for testing use user , user</p>
            <article className="login__content">
                <form action="" onSubmit={handlesubmit}>
                    <p><b className={`login__b ${!theme?'lightfont':''}`}>User</b></p>
                    <input type="text" name="user" value={formdata.user} onChange={handlechange} autoComplete="off"/>
                    <p><b className={`login__b ${!theme?'lightfont':''}`}>Password</b></p>
                    <input type="password" name="password" value={formdata.password} onChange={handlechange} autoComplete="off"/>
                    <br />
                    <button className="login__btn" type="submit">Submit</button>
                </form>
            </article>
            <Link to='/'>
                <button className="login__btn"  >Return</button>
            </Link>
        </section>
    );
}