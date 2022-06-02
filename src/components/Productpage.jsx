import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export const Productspage = () =>{
    const params = useParams()

    const [data,setData] = useState([])

    useEffect(()=>{
       getdata()
    },[]) 

    const getdata = ()=>{
        const {id}= params
        return   axios(`http://localhost:8080/products/${id}`)
        .then((res)=>setData(res.data))
    }
    console.log(data)

    return (
    <div>
        
            <div key={data.id}>
                <h3>ID:{data.id}</h3>
                <h3>Name:{data.name}</h3>
                <h4>Price:{data.price}</h4>
            </div>    
    </div>)
}