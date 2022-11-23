import { 
    useState,
    useEffect  
} from "react"

export  function CheckToken (){
    let token = localStorage.getItem('token') || ""
    let [data , setData] = useState(null)
    useEffect(() => {
        fetch('http://192.168.100.28:5000/users/account', {headers: {token}})
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err))
    } , [token])
    
    return data
}
