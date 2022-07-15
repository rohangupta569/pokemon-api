import React ,{useEffect, useState} from "react";
import img from "./pokemonball.jpg";
function Loading()
{
    const [countloading,setCountloading]=useState(0)
    const [loading,setLoading]=useState('.');
    setTimeout(()=>{
        setCountloading((countloading+1)%4);
        //console.log(countloading);
    },1000);
    //console.log(id);
    useEffect(()=>{
        
        var str="Loading";
        for(var i=0;i<countloading;i++)
        {
            str+=".";
            
        }
        setLoading(str);
       
    },[countloading]);
    
        
    
    return(
        <div className="loading">
            <img src={img} className="rotate"/>
            <h1>{loading}</h1>
        </div>
    )

}
export default Loading;