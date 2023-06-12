import '../style/style.css'
import {  useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductListByid } from '../api'
import DetailSection from '../components/DetailSection'

const Details = () =>{
    const [product, setProduct] = useState([])

    const {id} = useParams()


    useEffect(() =>{
        getProductListByid(id).then(res =>{
            setProduct(res)
        })
    }, [id])



    return(
           <DetailSection product={product}/>
    )
}

export default Details;
