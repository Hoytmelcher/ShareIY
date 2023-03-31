import { createContext, useState, useEffect, useContext } from "react";
import { getFirestore, getDocs, collection, getDoc, doc, addDoc, Timestamp } from '@firebase/firestore'
import { AuthContext } from "./AuthProvider";


export const DataContext = createContext()


export const DataProvider = function(props) {
    const {user} = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    const db = getFirestore()
    console.log(posts)
    useEffect(() => {
        async function getPosts() {
            const querySnapshot = await getDocs(collection(db, 'posts'))
            const loadedPosts = []
            querySnapshot.forEach((doc) => {
                loadedPosts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setPosts(loadedPosts)
        }
        getPosts()
    }, [])

    async function getPost(id) {
        const docRef = doc(db, 'posts', id)

        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
            throw new Error
        }

        return  docSnap.data()
    }

    async function addPost(title, body, image) {
        
        const newPost = {
            title,
            body,
            userId: user.uid,
            image,
            username: user.displayName,
            dateCreated: Timestamp.now()
        }

        const docRef = await addDoc(collection(db, 'posts'), newPost)

        newPost.id = docRef.id

        setPosts([
            newPost,
            ...posts
        ])

        return newPost
    }
    

    const value= {
        posts,
        getPost,
        addPost 
    }
    
    return(
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}