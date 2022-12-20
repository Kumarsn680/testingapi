import React, { useContext } from 'react'
import { BookContext } from './Context/BookContext'
import { AddButton } from "./Home";
import axios from "axios";
import { Link } from "react-router-dom";
import { AddBookCardContainer, AddBookCard,InputDetail,InputDetailContainer } from "./AddBook";



const UpdateBook = () => {
    const {book,setBook,setBooks} = useContext(BookContext)
    const {isbn,title,subtitle,pages} = book

    const updateHandler = async () => {
      await axios({
        method: "put",
        url: `http://localhost:8000/book/${isbn}`,
        data: book,
      });
      const data = await axios.get("http://localhost:8000/book");
      setBooks(data["data"]["message"]);
    };

  return (
    <AddBookCardContainer>
      <AddBookCard>
        <h1>Update Book</h1>
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
        <Link to="/">
          <AddButton onClick={updateHandler}>Update Button</AddButton>
        </Link>
      </AddBookCard>
    </AddBookCardContainer>
  );
}

export default UpdateBook