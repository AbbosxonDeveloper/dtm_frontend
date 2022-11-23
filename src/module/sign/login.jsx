import { useRef, useState } from "react"
import './sign.css'
import host from "../../lib/host"
import { useNavigate } from "react-router-dom"


export const Login = () => {
    // const [data , setData] = useState(null)
    const [error , setError] = useState(false)
    let FullNameRef = useRef(null)
    let PasswordRef = useRef(null)
    let nav = useNavigate()
    

    const LoginForm = async(e) => {
        e.preventDefault()
        const obj = {
            full_name: FullNameRef.current.value,
            password: PasswordRef.current.value,
        }
        let res = await fetch(`http://${host}:5000/users/login` , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
        if(res.status === 201){
            let data = await res.json()
            localStorage.setItem('token', data.token)
            nav('/fanlar')
        }else {
            setError(true)
        }
    }
    
    return (
        <section>
            <div className="register">
        <form onSubmit={(e)=> LoginForm(e)} className="register-form">
                <h2 className="register-heading">Royhatdan otish</h2>
                <input ref={FullNameRef} className="inputs" type="text" placeholder="Full Name" />
                <input ref={PasswordRef} className="inputs inputs-l" type="password" placeholder="Password" />
                


                {error ? <span className="error-span">error</span> : null}
                <button type="submit" className="register-btn">Kirish</button>
                <a href="/register" className="register-hisob">
                    Account yoqmi ? Yangi Account ochish ...
                </a>
        </form>
        
        </div>
        </section>
    )
}