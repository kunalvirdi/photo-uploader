import {useEffect, useState} from "react";
import styles from './form.module.css'

const Form=()=>{
    const [image,setImage]=useState(null);
    const [className,setClassName]=useState("active");
    const [message,setMessage]=useState('');
    const [previewImage,setPreviewImage]=useState({url:"",name:""});
    const [loader,setLoader]=useState('');
    useEffect(()=>{
        if(image){
            setPreviewImage({url: URL.createObjectURL(image), name: image.name});
        }
    },[image])

    const imageHandler=(e)=>{
        setImage(e.target.files[0]);
    }
    const submitHandler= async (e)=>{
        e.preventDefault();
        setLoader('Sending to server!....')
        setImage(null);
        setPreviewImage({url:"",name:""})
        const formData=new FormData();
        formData.append('image',image);
        try{
            const response = await fetch(`http://52.203.214.42:5000/post`,{
                method:"POST",
                body:formData
            });
            const d=await response.json();
            setLoader('')
            if(d.body.status=='ok'){
                setClassName("success");
            }else{
                setClassName("error")
            }
            setTimeout(()=>{
                setClassName('active')
            },2000)
            setMessage(d.body.message);

        }catch (error){
            console.log(error.body.message)
        }
    }
    return(
        <>
            <div className={styles[className]}>{message}</div>
            <div>{loader}</div>
            <form onSubmit={submitHandler}>
                <input type="file" hidden onChange={imageHandler} id="file-upload"/>
                <label className={styles.label} htmlFor="file-upload">Upload</label>
                <br/> <br/>
                {(image && previewImage) && <img src={previewImage.url} alt={previewImage.name} className={styles.img}/>}
                {(image && previewImage) && <button className={styles.label} type="submit">Submit to the Server</button>}
            </form>
        </>
    )
}
export default Form