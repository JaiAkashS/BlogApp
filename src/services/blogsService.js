import axios from 'axios'

const baseUrl = 'http://localhost:6969/api/blogs'

const getAll = ()=>{
    let response = axios.get(baseUrl)
    return response.then(response=>response.data)
}
const getBlog= (id)=>{
    let response = axios.get(baseUrl)
    return response.then(response=>response.data[id-1])
}

const createBlog = async (newBlog) => {
    const response = await axios.post(baseUrl,newBlog)
    return response.data
}


export default {getAll,getBlog,createBlog}