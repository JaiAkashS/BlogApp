import BlogThumb from './BlogThumb'
import blogsService from '../services/blogsService'
import { Link, Route , Routes } from 'react-router-dom'
import { useEffect , useState} from 'react'


export default function Home(){
    const [blogs,setBlogs] = useState([])
      useEffect(() => {    console.log('effect')
                blogsService.getAll().then(initialBlogs =>setBlogs(initialBlogs))           
            }, [])
    blogsService.getBlog(1).then(blog=>console.log(blog))
    console.log(blogs)
    return(
        <>
            <div><Link to="/create">New Post</Link></div>
            <div>
                {
                    blogs.map(blog=>{
                     return(<>
                        <BlogThumb b={blog}></BlogThumb>
                        </>   
                    )
                    })
                }
            </div>
        </>
    )
}