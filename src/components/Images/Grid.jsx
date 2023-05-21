import styles from './grid.module.css'
import {useState} from "react";
const Grid=({images})=>{
    console.log(images)
    const [message,setMessage]=useState('');
    const [classname,setClassname]=useState('hidden')
    const url=process.env.API_URL || 'https://photo-uploader-api.vercel.app'

    const clickHandler= async (e)=>{
        const formData=new FormData()
        formData.append('imageUrl',e.target.className);
        setMessage('Deleting Image...')
        setClassname('')
        const response=await fetch(`${url}/delete`,{
            method:'POST',
            body:formData
        })
        const body=await response.json();
        console.log(body);
        setClassname('hidden')
        await setTimeout(()=>{
            window.location.reload()
        },3000)
    }

    return(
        <>
            <h2 className={styles[classname]}>{message}</h2>
            <div className={styles.images}>
                {images.map(image=>{
                    return(
                        <div key={image._id} className={styles.image} >
                            <img className={image.imageUrl} src={`${image.imageUrl}`} onClick={clickHandler} alt={image.name} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Grid