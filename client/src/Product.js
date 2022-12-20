import axios from 'axios'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { BookContext } from './Context/BookContext'
import { Link } from 'react-router-dom'

const ProductCard = styled.div`
background-color:red;
height:400px;
width:400px;
border-radius : 20px;
display: flex;
flex-direction:column;
justify-content:space-around;
margin:20px;
`

const ButtonHolder = styled.div`
display: flex;
margin:10px;
width:100%;
justify-content:space-around;
`

const Button = styled.button`
padding: 20px;
width: 150px;
border-radius:10px;
border:none;
font-size:20px;
`



const Product = ({book}) => {
    const {isbn,title,subtitle,pages} = book
    const {setBook,setBooks} = useContext(BookContext)

    const deleteHandler = async (isbn) =>{
      await axios.delete(`http://localhost:8000/book/${isbn}`)
      const data = await axios.get(`http://localhost:8000/book/`);
      console.log(data["data"]["message"])
      setBooks(data["data"]["message"]);
    }


  return (
    <ProductCard>
      <h1>{isbn}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <h4>{pages}</h4>
      <ButtonHolder>
        <Link to="updatebook">
          <Button onClick={() => setBook(book)}>Update</Button>
        </Link>
        <Button onClick={() => deleteHandler(isbn)}>Delete</Button>
      </ButtonHolder>
    </ProductCard>
  );
}

export default Product