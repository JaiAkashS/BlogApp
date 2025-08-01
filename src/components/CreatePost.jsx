import {useState} from 'react'
import blogsService from '../services/blogsService'
import {  useNavigate } from 'react-router-dom'

export default function CreatePost(){
    const [content,setContent] = useState("")
    const [author,setAuthor] = useState("")
    const [title,setTitle] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        
        let newBlog = {
            id:4,
            title:"hello",
            content:content,
            author:author,
            slug:"autor"
        }
        blogsService.createBlog(newBlog).then(res =>{
            console.log(res)
        })
        navigate('/')
    }

    return (
        <>
        <form onReset={()=>{setContent("")
            setAuthor("")
        }} onSubmit={handleSubmit}>
            <label htmlFor="AuthorInput">AuthorName:</label>
            <input type="text" name="AuthorInput" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
            <label htmlFor="TitleInput">Title:</label>
            <input type="text" name="TitleInput" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea name="inputfield" id="inputfield" value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <button type="submit">Create Post</button>
            <button type="reset">Discard</button>
        </form>
        </>
    )
}