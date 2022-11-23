import { useState, useEffect, } from "react";
import host from "./host";

export const GetFetch = (url) => {
    let [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://${host}:5000/${url}`, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [url])

    return data
}