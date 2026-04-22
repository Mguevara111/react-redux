import { createSlice } from '@reduxjs/toolkit'
import { base } from '../base/info'

export const myslice=createSlice({
    name:'tasks',       //nombre que identifica
    initialState:base,        //estado inicial
    reducers:{
        addTask:(state,action)=>{
            //console.log(action.payload)
            state.tasks.push(action.payload)
        },
        updateTaskStatus:(state,action)=>{
            const newtasks=state.tasks.map(el=>{
                if(String(el.id) === action.payload){
                    return{
                        ...el,
                        status:el.status==='pending'?'realiced':'pending'
                    }
                }else{
                    return el
                }
            })
            state.tasks=newtasks
        },
        deleteAll:(state)=>{
            const newtasks=state.tasks.filter(el=>!el.selected)
            state.tasks=newtasks
        },
        setSearch:(state,action)=>{
            //pone que elemento se busca
            let name=action.payload
            const search=state.tasks.find(el=>el.name === name)
            if(search || name===''){
                state.filter.search=name
            }
            
        },
        setPriority:(state,action)=>{
            //filtro de prioridad
            let priority=action.payload
            if(priority === '---'){
                state.filter.priority=''
                return
            }
            state.filter.priority=priority

        },
        resetfilters:(state)=>{
            state.filter.priority='',
            state.filter.search='',
            state.filter.sortbydate={datebegin:'',dateend:''}
        },
        toogleTheme:()=>{

        },
        setDate:(state,action)=>{
            //filtro de fecha
            state.filter.sortbydate.datebegin=action.payload.datebegin
            state.filter.sortbydate.dateend=action.payload.dateend
        },
        setMessage:(state,action)=>{
            state.message.message=action.payload.message
            state.message.color=action.payload.color
        },
        toggleLoading:(state)=>{
            state.isloading=!state.isloading;
        },
        setUserloged:(state,action)=>{
           // state.userLogged=action.payload
           state.userLogged=action.payload
        },
        setStats:(state,action)=>{
            state.stats=action.payload
        },
        toggleselectiontask:(state,action)=>{
            /******change seleted on task *********/
            let idtofind=Number(action.payload)
            const search=state.tasks.find(el=>el.id === idtofind)
            if(!search){
                console.log('no hay id para select')
                return
            }
            const newstate=state.tasks.map(el=>{
                if(el.id === idtofind){
                    return{
                        ...el,
                        selected:!el.selected
                    }
                }else{
                    return el
                }
            })
            state.tasks=newstate
        }
    }
})
//este amigo myslice.action o (nombre del createslice.actions se crea con las funciones)
export const {addTask,
            updateTaskStatus,
            deleteAll,
            setSearch,
            toogleTheme,
            setDate,
            setPriority,
            resetfilters,
            setMessage,
            toggleLoading,
            setUserloged,
            setStats,
            toggleselectiontask
            }=myslice.actions;

//el reducer es la funcion reductora que se manda al store
export const tasksReducer = myslice.reducer

