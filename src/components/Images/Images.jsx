import {useEffect, useState} from "react";
import Grid from './Grid'
import './image.css'
const Images=()=>{
    const [images,setImages]=useState(null);
    const [message,setMessage]=useState('');
    useEffect(()=>{
        if(!images){
            setMessage('Loading images from the server....')
            fetch(`http://52.203.214.42:5000/post`,{method:'GET'}).then((res)=>{
                return res.json()
            }).then(data=>{
                setImages(data);
                console.log(data)
                setMessage('')
            }).catch(e=>console.log(e));
        }
    },[images])
    return(
        <>
            <h1>Images from the Server</h1>
            <h2>{message}</h2>
            {images?.body?.data.length===0 && <h3 >Images not found...Please upload some Images</h3>}
            {images && <Grid images={images.body.data}/>}
        </>
    )
}

export default Images