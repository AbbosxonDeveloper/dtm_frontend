// import { useEffect, useState } from "react";

// let host = '192.168.100.28:5000'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Direction, Signup, Tests } from "./module";
import { CheckToken }  from "./lib/checkToken";
import { Login } from "./module/";
import { Fanlar } from "./module/";


function Error (){
    
    return(
        <div>
            <h1>404 Error page not found ...</h1>
            <a href="/login">login</a>
            <br />
            <a href="/register">register</a>
        </div>

    )
}

function App() {
let res = CheckToken()
    if(!res){
            return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/register" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )}
    else {
        return (
         <BrowserRouter>
                <Routes>
                    <Route path="*" element={<h1>404 Page not found </h1>}/>
                    <Route path="/fanlar" element={<Fanlar />}/>
                    <Route path="/direction" element={<Direction />} />
                    <Route path="/tests" element={<Tests />}/>
                    <Route path="/result" element={<div>Result</div>}/>
                </Routes>
         </BrowserRouter>        
         )
    }
}

export default App