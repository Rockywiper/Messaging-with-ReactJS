import React from "react";
import pic1 from 'C:/Users/91938/Desktop/Axis-bank-JFS/React js/messages/messages/src/images/insta_img1.jpeg';

const Chat = () =>{

    var str='';

    function send(){
        
        var chat=document.getElementById('c1').value;
        var text=document.getElementById('t1');
        var chatText=chat;

        str=str+'<br/>'+chatText;
        text.innerHTML=str;

    }
    return(
        <div className="chatbox">
            
            <div className="chat-header">
            <img src={pic1} className='chat-image'></img>
                Prasanth
            </div>
            <hr></hr>

            <div className="messaging" id='t1' >

            </div>

            <div >
                <div class="ui large icon input">

                    <input type="text" placeholder="Message" id='c1' style={{ width:'413px', marginLeft:'8px'}}/>
                    <button onClick={send}><i class="paper plane icon"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Chat