import {React,useState} from 'react';
import axios from 'axios'; 



const LoginForm = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
     const [error, setError] = useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const authObject={'Project-Id':"a2298206-205a-4be5-b27e-83064b3d1baf","USer-Name":username,"User-Secret":password}
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
      
            window.location.reload();
            setError('');
          } catch (err) {
            setError('Oops, incorrect credentials.');
          }
        

    }


    
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="username" required/>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <div className="error">{error}</div>
                </form>
            </div>
            
        </div>
    )
}

export default LoginForm;
