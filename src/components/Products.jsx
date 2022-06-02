import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Products = () =>{

    const [data,setData] = useState([])

    useEffect(()=>{
       getdata()
    },[]) 

    const getdata = ()=>{
        return   axios("http://localhost:8080/products")
        .then((res)=>setData(res.data))
    }
    console.log(data)

    return (
    <div>
          {data.map(e=>
            <div key={e.id}>
                <h3>Name:{e.name}</h3>
                <h4>Price:{e.price}</h4>
                <Link to={`/products/${e.id}`}>See More</Link>
            </div>)}      
    </div>)
}