import BlogThumb from './BlogThumb'
import blogsService from '../services/blogsService'
import { Link, Route , Routes } from 'react-router-dom'
import { useEffect , useState} from 'react'


export default function Home(){
    const [blogs,setBlogs] = useState([])
      useEffect(() => {    console.log('effect')
                blogsService.getAll().then(initialBlogs =>setBlogs(initialBlogs))           
            })
    return(
        <>
            <div><Link to="/create">New Post</Link></div>
            <div>
                {
                    blogs.map(blog=>{
                     return(                        <BlogThumb key={blog.slug} b={blog} ></BlogThumb>
                    )
                    })
                }
            </div>
        </>
    )
}