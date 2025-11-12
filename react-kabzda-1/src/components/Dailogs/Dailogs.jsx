import React from "react";
import s from './Dailogs.module.css';
import DailogItem from './DailogItem/DailogItem.jsx'
import Message from './Message/Message.jsx'
import {updateNewMessageBodyCreator,sendMessageCreator} from "../../redux/state.js"






const Dailogs = (props) => {
    
    let state = props.store.getState()

    let dialogsElements = state.messagesPage.dialogs.map(d => 
    <DailogItem key={d.id} name={d.name} id={d.id} />
);

let messagesElement = state.messagesPage.messages.map(m => 
    <Message key={m.id} message={m.message} />
);

let newMessageBody = state.messagesPage.newMessageBody
let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
}
let onNewMessageChenge = (e) =>{
    let body = e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
}

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
            {dialogsElements}  
           </div>
           <div className={s.messages}>
            <div>{messagesElement}</div>
            <div>   
                <div><textarea value={newMessageBody} onChange={onNewMessageChenge} placeholder="Enter yor messsage"></textarea></div>
                <div> <button onClick={onSendMessageClick}>send</button>  </div>
            </div>
           </div>
        </div>
    );
}

export default Dailogs;