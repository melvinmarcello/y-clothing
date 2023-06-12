import axios from 'axios'

export const getProductList = async () =>{
    const products = await fetch(`https://fakestoreapi.com/products/`)
    .then(res=>res.json())

    return products
}

export const getProductListByid = async (dataId) =>{
    const product = await fetch(`https://fakestoreapi.com/products/${dataId}`)
    .then(res=> res.json()
    )
    return product
}

export const loginUser = async  (username, password) =>{
    const data =  await axios.post('http://localhost:6969/login',{
      username, password 
    })

      return data
}

export const registerUser = async (nama, username, email, password) =>{
    const register = await axios.post('http://localhost:6969/register', {
      nama, username, email, password
    })

      return register
}
export const logoutUser = async  () =>{
  const data =  await axios.get('http://localhost:6969/logout')

    return data
}
