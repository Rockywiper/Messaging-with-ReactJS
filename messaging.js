import React from "react";
import pic1 from 'C:/Users/91938/Desktop/Axis-bank-JFS/React js/messages/messages/src/images/insta_img1.jpeg';
import pic2 from 'C:/Users/91938/Desktop/Axis-bank-JFS/React js/messages/messages/src/images/insta_img2.jpeg';
import pic3 from 'C:/Users/91938/Desktop/Axis-bank-JFS/React js/messages/messages/src/images/insta_img3.jpeg';
import pic4 from 'C:/Users/91938/Desktop/Axis-bank-JFS/React js/messages/messages/src/images/insta_img4.jpeg';

const Mes = () =>{
    return(
        <div className="box">
            <div className="messagebox">
                <p className="profile-name">Sneaky_Sri <i class="edit icon"></i></p>
                <hr></hr>
                <p className="profile-title">Messages</p>
                    <div className='friends-box'>
                        
                                <img src={pic1} alt='profile' style={{height:'48px', width:'50px', borderRadius:'50px', marginLeft:'20px', marginRight:'15px', marginBottom:'15px'}} />      
                                <div >
                                    <div className="friends-name" id='name'>Prasanth</div>
                                    <div className="friends-active" id='desc'>Active 1h ago</div>             
                                </div>
                        
                    </div>

                    <div className='friends-box'>
                        
                                <img src={pic2} alt='profile' style={{height:'48px', width:'50px', borderRadius:'50px', marginLeft:'20px', marginRight:'15px', marginBottom:'15px'}}></img>   
                                <div>
                                    <div className="friends-name">Thendral</div>
                                    <div className="friends-active">Active now</div>  
                                </div>      
                        
                    </div>

                    <div className='friends-box'>
                        
                                <img src={pic3} alt='profile' style={{height:'48px', width:'50px', borderRadius:'50px', marginLeft:'20px', marginRight:'15px', marginBottom:'15px'}}></img> 
                                <div>                       
                                    <div className="friends-name">Sriram</div>
                                    <div className="friends-active">Active 10h ago</div>
                                </div>
                        
                    </div>

                    <div className='friends-box'>
                        
                                <img src={pic4} alt='profile' style={{height:'48px', width:'50px', borderRadius:'50px', marginLeft:'20px', marginRight:'15px', marginBottom:'15px'}}></img>
                                <div>                        
                                    <div className="friends-name">keerthi</div>
                                    <div className="friends-active">Active 10h ago</div>
                                </div>
                        
                    </div>

                    <div className='friends-box'>
                        
                                <img src={pic2} alt='profile' style={{height:'48px', width:'50px', borderRadius:'50px', marginLeft:'20px', marginRight:'15px', marginBottom:'15px'}}></img>                        
                                <div>                        
                                    <div className="friends-name">Dharani</div>
                                    <div className="friends-active">Active a week ago</div>
                                </div>
                        
                    </div>

                    <div className='friends-box'>
                        
                                <img src={pic3} alt='profile' style={{height:'48px', width:'50px', borderRadius:'50px', marginLeft:'20px', marginRight:'15px', marginBottom:'15px'}}></img>                        
                                <div>                        
                                    <div className="friends-name">Ram chandu</div>
                                    <div className="friends-active">Active now</div>
                                </div>
                        
                    </div>

                    <div className='friends-box'>
                        
                                <img src={pic1} alt='profile' style={{height:'48px', width:'50px', borderRadius:'50px', marginLeft:'20px', marginRight:'15px', marginBottom:'15px'}}></img>                        
                                <div>                        
                                    <div className="friends-name">Rajasekhar Reddy</div>
                                    <div className="friends-active">Active now</div>
                                </div>
                        
                    </div>

                    <div className='friends-box'>
                        
                                <img src={pic4} alt='profile' style={{height:'48px', width:'50px', borderRadius:'50px', marginLeft:'20px', marginRight:'15px', marginBottom:'15px'}}></img>                        
                                <div>                        
                                    <div className="friends-name">Anu</div>
                                    <div className="friends-active">Active now</div>
                                </div>
                        
                    </div>
            </div>
             
        </div>
    )
}

export default Mes