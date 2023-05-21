import {useEffect, useState} from "react";
import Grid from './Grid'
import './image.css'
const Images=()=>{
    const [images,setImages]=useState(null);
    const [message,setMessage]=useState('');
    const url=process.env.API_URL || 'https://photo-uploader-api.vercel.app'
    useEffect(()=>{
        if(!images){
            setMessage('Loading images from the server....')
            fetch(`${url}/post`,{method:'GET'}).then((res)=>{
                return res.json()
            }).then(data=>{
                setImages(data);
                setMessage('')
            }).catch(e=>console.log(e));
        }
    },[images,url])
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