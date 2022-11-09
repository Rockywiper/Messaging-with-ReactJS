import React from 'react';
import ReactDOM from 'react-dom/client';
import Chat from './chatting';
import Mainform from './form';
import Mes from './messaging';

import './messaging.css'
import Signin from './signin';

const App = () =>{
  	return(
		<div>
			{/* <div style={{display:'flex', justifyContent:'center'}}>
				<Mes></Mes>
				<Chat></Chat>
			</div> */}
			{/* <Mainform></Mainform> */}
			<Signin></Signin>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

