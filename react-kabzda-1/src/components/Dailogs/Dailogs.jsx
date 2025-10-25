import React from "react";
import s from './Dailogs.module.css';
import DailogItem from './DailogItem/DailogItem.jsx'
import Message from './Message/Message.jsx'







const Dailogs = (props) => {
    
    let dialogsElements = props.state.dialogs.map(d => 
    <DailogItem key={d.id} name={d.name} id={d.id} />
);

let messagesElement = props.state.messages.map(m => 
    <Message key={m.id} message={m.message} />
);
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
            {dialogsElements}  
           </div>
           <div className={s.messages}>
            {messagesElement}
           </div>
        </div>
    );
}

export default Dailogs;