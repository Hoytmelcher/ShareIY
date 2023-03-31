import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"
import { AuthContext } from "../contexts/AuthProvider"
import Post from "../components/Post"
import ImageTest from "../components/ProjectForm"


export default function Profile() {
    const { user } = useContext(AuthContext)
    const { posts } = useContext(DataContext)
    

   return(
        <div>
            <h1>ggg</h1>
            <div>
                <h1>{user.displayName}</h1>
            </div>
            <div>
            { posts.map((post) => <Post post={post} key={post.id}/>) }
            </div>
            
        </div>
   )
}