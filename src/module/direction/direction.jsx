import { Link } from "react-router-dom"
import arrow from '../../img/arrow.png'
import './direction.css'

export const Direction = () => {

    return (
        <div className="container direction">
            <Link className="arrow" to='/fanlar'>
                <img className="arrow-img" src={arrow} alt="img" />
                Orqaga
                </Link>
            <h2 className="register-heading">Blok testlar hush kelibsiz</h2>
        <div className='role'>
                <span className='role_num register-heading'>1</span>
                <span className='role_line'></span>
                <span className='role_num register-heading'>2</span>
                <span className='role_line'></span>
                <span className='role_num register-heading'>3</span>
            </div>
            
        </div>
    )
}