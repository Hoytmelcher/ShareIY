import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"
import { AuthContext } from "../contexts/AuthProvider"
import Post from "../components/Post"
import ImageTest from "../components/ProjectForm"


export default function Profile() {
    const { user } = useContext(AuthContext)
    const { posts } = useContext(DataContext)
    const filteredPosts = posts.filter((post) => post.userId === user.uid);

    return (
        <div>
            <div>
                <h1></h1>
            </div>
            <h1>{user.displayName}</h1>
            {/* Map through the filteredPosts array to render only relevant posts */}
            {filteredPosts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
            
        </div>
    )
}