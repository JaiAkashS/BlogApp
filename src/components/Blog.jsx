import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import blogsService from "../services/blogsService"
import parse from 'html-react-parser'


const Blog = ()=>{
    const {id} = useParams()
    const [blog,setBlog] = useState({})

    useEffect(()=>{
        blogsService.getBlog(id).then(b => {
            setBlog(b)
        })
    },[id])
    if (!blog.content) return <p>Loading...</p>
    return(
        <>
            {blog.id}
            <br/>
            {blog.title}
            <br/>
            <br/>
            {parse(blog.content)}
            <h3>By {blog.author}</h3>
        </>
    )

}


export default Blog