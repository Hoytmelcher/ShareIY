import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import Post from "../components/Post"
import { DataContext } from "../contexts/DataProvider"


export default function PostCategory() {
    const { category } = useParams()
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(false)
    const { getPosts } = useContext(DataContext)

    useEffect(() => {
        async function handleLoad() {
            try {
                const data = await getPosts()
                const filteredPosts = data.filter(post => post.category === category)
                setPosts(filteredPosts)
            } catch(err) {
                setError(true)
            }
        }
        handleLoad()
    }, [category])

    return(
        <div>
            {
                error ?
                <>
                    <h2>404 not found</h2>
                    <p>No posts found for category {category}</p>
                </>:
                <>
                    <h1>Posts for category {category}</h1>
                    { posts.map((post) => <Post post={post} key={post.id}/>) }
                </>
            }
        </div>
    )
}
