import React, { useContext } from 'react'
import styled from 'styled-components'
import { AddButton } from './Home'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BookContext } from './Context/BookContext'

export const AddBookCardContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
width: 100%;
height: 100vh;
`

export const AddBookCard = styled.div`
display: flex;
background-color:red;
flex-direction:column;
justify-content:space-around;
align-items:center;
padding: 20px;
height: 500px;
border-radius:10px;
`

export const InputDetail = styled.input`
padding: 15px;
border-radius:10px;
width: 200px;
border: none;
outline: none;
`

export const InputDetailContainer = styled.div`
display: flex;
justify-content:space-around;
align-items:center;
width:  400px;
font-size:30px;
`


const AddBook = () => {
    const {book,setBook,setBooks} = useContext(BookContext)
    const {isbn,title,subtitle,pages} = book

    const addHandler = async() => {
        await axios({
            method:'post',
            url:"http://localhost:8000/book",
            data:book
        });
        const data = await axios.get("http://localhost:8000/book");
        setBooks(data["data"]["message"])
    };


  return (
    <AddBookCardContainer>
      <AddBookCard>
        <h1>Add Book</h1>
        <InputDetailContainer>
          <label htmlFor="isbn">isbn</label>
          <InputDetail
            id="isbn"
            type="text"
            value={isbn}
            required
            onChange={(e) => setBook({ ...book, isbn: e.target.value })}
          ></InputDetail>
        </InputDetailContainer>
        <InputDetailContainer>
          <label htmlFor="title">title</label>
          <InputDetail
            id="title"
            type="text"
            value={title}
            required
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          ></InputDetail>
        </InputDetailContainer>
        <InputDetailContainer>
          <label htmlFor="subtitle">subtitle</label>
          <InputDetail
            id="subtitle"
            type="text"
            value={subtitle}
            required
            onChange={(e) => setBook({ ...book, subtitle: e.target.value })}
          ></InputDetail>
        </InputDetailContainer>
        <InputDetailContainer>
          <label htmlFor="pages">pages</label>
          <InputDetail
            id="pages"
            type="text"
            value={pages}
            required
            onChange={(e) => setBook({ ...book, pages: e.target.value })}
          ></InputDetail>
        </InputDetailContainer>
        <Link to='/'>
          <AddButton onClick={addHandler}>Add Button</AddButton>
        </Link>
      </AddBookCard>
    </AddBookCardContainer>
  );
}

export default AddBook