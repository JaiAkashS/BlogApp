import { Routes , Route, Link} from "react-router-dom"
import Blog from "./Blog"
import Author from "./Author"


export default function BlogThumb({b}){
    
    return(
        <>
            <div>
                <Link to={`/blogs/${b.id}`}  ><h3>{b.title}</h3></Link>
                <Link to={`/authors/${b.author}`}><div>Author:{b.author}</div></Link>
            </div>               
        </>
    )
}