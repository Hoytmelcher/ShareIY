import { Link } from "react-router-dom"
import './Post.css'


export default function Post(props) {
    return (
        <div className="post card" >
            <h2>{props.post.title}</h2>
            <img src={props.post.image} alt="" />
            {
                (props.hideLink) ?
                <p>{props.post.body}</p> :
                <></>
            }
            <p>{props.post.dateCreated?.toDate().toString()}</p>
            <p>Posted by: {props.post.username}</p>
            {
                (props.hideLink) ?
                <></> :
                <Link to={`/post/${props.post.id}`}>read more</Link>
            }
        </div>
    )
}