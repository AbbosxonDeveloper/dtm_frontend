import './fanlar.css'
import { GetFetch } from '../../lib/getfetch'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../lib/useAuth'
import host from '../../lib/host'

export const Fanlar = () => { 
    let fanlar = GetFetch('fanlar')
    let [fan1 , setFan1] = useState(null)
    let [fan2 , setFan2] = useState(null)
    let {setBlock1 , setBlock2} = useAuth()
    let { setFaculties} = useAuth()

    let filterFan1 = fanlar
    var filterFan2 = fanlar

    
    useEffect(() => {
        fetch(`http://${host}:5000/faculties?block1=${fan1}&block2=${fan2}`,
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    } , [ setFaculties , fan1 ,fan2])
    if(fan1){
        filterFan2 = fanlar.filter(fan => Number(fan.fan_id) !== fan1)
        setBlock1(fan1)
    }
    if(fan2){
        filterFan1 = fanlar.filter(fan => Number(fan.fan_id) !== fan2)
        setBlock2(fan2)
    }




    console.log(filterFan2 , fan2);

    return (
        <div className='container blok'>

            <h2 className="register-heading">Assosiy Imtihonga hush kelibsiz</h2>
            <div className='role'>
                <span className='role_num register-heading'>1</span>
                <span className='role_line'></span>
                <span className='role_num register-heading'>2</span>
                <span className='role_line'></span>
                <span className='role_num register-heading'>3</span>
            </div>
            <div>
                <p className='block_heading'>Birinchi fan</p>
                <select onChange={(e) => setFan1(Number(e.target.value))} className="block_select">
                    {!fan1 ?<option >fan tanlang</option> : ""}
                    {filterFan1 && filterFan1.map(val => {
                        return (
                            <option key={val.fan_id} value={val.fan_id}>{val.fan_name}</option>
                        )
                    })}
                </select>
                <p className='block_heading'>Ikkinchi fan</p>
                <select onChange={(e) => setFan2(Number(e.target.value))} className="block_select">
                    {!fan1 || !fan2 ?<option >fan tanlang</option> :""}
                    {filterFan2.map(val => {
                        return (
                            <option key={val.fan_id} value={val.fan_id}>{val.fan_name}</option>
                        )
                    })}
                </select>

                <br />
                <br />
                <Link className='block_click' to='/direction'>Davom Ettirish</Link>
            </div>
        </div>
    )
}