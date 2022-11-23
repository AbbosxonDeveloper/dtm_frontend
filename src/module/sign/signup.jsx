import { useRef, useState } from "react"
import './sign.css'
import host from "../../lib/host"
import { useNavigate } from "react-router-dom"


export const Signup = () => {
    let [data , setData] = useState(null)
    const [error , setError] = useState(false)
    let FullNameRef = useRef(null)
    let GmailRef = useRef(null)
    let PasswordRef = useRef(null)
    let nav = useNavigate()
    

    const SignupForm = async(e) => {

        e.preventDefault()
        const obj = {
            full_name: FullNameRef.current.value,
            gmail: GmailRef.current.value,
            password: PasswordRef.current.value,
        }
        let res = await fetch(`http://${host}:5000/users/signup` , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
        if(res.status === 201){
            console.log(data);
            localStorage.setItem('token' , res.token)
            nav('/fanlar')
        }else {
            setError(true)
        }
    }

    return (
        <section>
            <div className="register">
        <form onSubmit={(e) => SignupForm(e)} className="register-form">
                <h2 className="register-heading">Royhatdan otish</h2>
                <input ref={FullNameRef} className="inputs" type="text" required placeholder="Full Name" />
                <input ref={GmailRef} className="inputs" type="email" required placeholder="Gmail" />
                <input ref={PasswordRef} className="inputs inputs-l" required type="password" placeholder="Password" />
                {error ? <span className="error-span">error</span> : null}
               <button type="submit" className="register-btn">Royhatdan Otish</button>

                <a href="/login" className="register-hisob">
                Hisobingiz bormi? Kirish
                </a>
        </form>
            </div>
        </section>
    )
}