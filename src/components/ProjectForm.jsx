import { useContext, useState, useEffect } from "react";
import { storage } from "../firebase";
import './form.css'
import { getDownloadURL, ref, uploadBytes, getStorage } from "firebase/storage";
import { AuthContext } from "../contexts/AuthProvider";
import { DataContext } from "../contexts/DataProvider";

export default function ImageTest() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const { addPost } = useContext(DataContext)
    const {user} = useContext(AuthContext)
    const [imageUpload, setImageUpload] = useState(null)
    const storage = getStorage()
    /* const [galleryUpload, setGalleryUpload] = useState(null) */
    const uploadImage = async () => {
        if (imageUpload == null) return;
        console.log('test')
        const imageRef = ref(storage, `images/${user.uid}/${title}/${imageUpload.name}`)
        await uploadBytes(imageRef, imageUpload)
        const url = await getDownloadURL(imageRef)
            return url
        /* uploadBytes(imageRef, imageUpload).then(() => {
            getDownloadURL(imageRef).then((url) => {
                console.log(url)
                setImage(url)
                
            })
            
            alert("Image Uploaded")
        }) */
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const url = await uploadImage()
        const newPost = await addPost(title, body, url)
        setTitle('')
        setBody('')
        setImage(uploadImage)
        e.target.reset()
    }
    return (
        <form action="submit" method="post" onSubmit={handleSubmit}>
                <label >Title</label>
            <div>
                <input type="text" 
                name="title" 
                id="title" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title}/>
            </div>
                <label >Body</label>
            <div>
            <textarea 
                    name="body" 
                    id="body" 
                    cols="30" 
                    rows="10"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                ></textarea>
            </div>
                <label ></label>
            <div>
                <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}} />
            </div>
            <button type="submit">upload</button>
        </form>
    )
}