import React from "react";
import s from './Dailogs.module.css';
import { NavLink } from "react-router-dom";

const DailogItem = (props) => {
    let path = '/dialogs/'+props.id
    return <div className={s.dialog + "" + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Messages = (props) => {
    return <di className={s.dialog}>{props.messag}</di>
}

let dialogsData= [
    {id: 1, name: 'Daniil'}, 
    {id: 2,name: 'Nekita'},
    {id: 3, name: 'Timur'}, 
    {id: 4,name: 'Sasha'},
]

let massagesData= [
    {id: 1, messag: "Hi"}, 
    {id: 2, messag: "idi na"},
    {id: 3, messag: "sam idi"}, 
]

const Dailogs = () => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <DailogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
               <DailogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
               <DailogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
               <DailogItem name={dialogsData[3].name} id={dialogsData[3].id}/>     
           </div>
           <div className={s.massages} >
            <Messages messag= {massagesData[0].messag}/>
            <Messages messag={massagesData[1].messag}/>
            <Messages messag={massagesData[2].messag}/>
           </div>
        </div>
    )
}

export default Dailogs;