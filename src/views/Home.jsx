import { useState, useEffect, useContext } from "react"
import { DataContext } from "../contexts/DataProvider"
import Post from "../components/Post"
import ImageTest from "../components/ProjectForm"



export default function Home() {
    const { posts } = useContext(DataContext)

    return(
        <div>
            <div><h1></h1></div>
            <h1>Home</h1>
            { posts.map((post) => <Post post={post} key={post.id}/>) }
            
        </div>
    )
}