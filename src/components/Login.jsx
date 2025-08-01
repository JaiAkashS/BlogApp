// import { useState } from "react"

   
   
export default function Login(){
    // const [username,SetUserName] = useState("")
    // const [password,SetPasssword] = useState("")

    
    return(
        <>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}