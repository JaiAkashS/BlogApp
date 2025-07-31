import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import blogsService from "../services/blogsService"



const Blog = ()=>{
    const {id} = useParams()
    const [blog,setBlog] = useState({})

    useEffect(()=>{
        blogsService.getBlog(id).then(b => {
            setBlog(b)
        })
    },[id])

    return(
        <>
            <h1>{blog.id}</h1>
            <h2>{blog.content}</h2>
            <h3>By {blog.author}</h3>
        </>
    )

}


export default Blog