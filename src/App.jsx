import Blog from "./components/Blog"
import Home from "./components/Home"
import Login from "./components/Login"
import Author from "./components/Author"
import { Routes , Route, Link} from "react-router-dom"
import CreatePost from "./components/CreatePost"


function App() {
return (
    <>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/create' element={<CreatePost />}/>
      <Route path='/blogs/:id' element={<Blog />}/>
      <Route path='/authors/:id' element={<Author />}/>   
      <Route path='/login' element={<Login />}/>   
    </Routes>

    </>
  )
}

export default App
