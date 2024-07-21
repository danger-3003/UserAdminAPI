import React, { useState } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState({name:"",email:""});
    const values = (event) =>{
        setData({...data,[event.target.name]:event.target.value});
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(data);
        axios.post('http://localhost:3000/data/user/setUser',data)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" onChange={values}/>
            <input type="email" name="email" id="" onChange={values}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
