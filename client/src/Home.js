import { useContext, useEffect, useState } from "react";
import "./App.css";
import Product from "./Product";
import styled from "styled-components";
import { BookContext } from "./Context/BookContext";
import axios from "axios";
import { Link } from "react-router-dom";

const BooksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
`;

const SearchBar = styled.input`
  margin: 50px;
  height: 20px;
  width: 400px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #dadce0;
  font-size: 30px;
  padding: 30px;
`;

export const AddButton = styled.button`
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
`;

const SearchButton = styled.button`
  padding: 20px;
  background-color: #79c8ed;
  font-size:30px;
  border-radius:10px;
`;

function Home() {
  const { books, setBooks,searchTerm,setSearchTerm } = useContext(BookContext);

  const dataFetch = async (searchTerm) => {
    const data = await axios.get(`http://localhost:8000/book/${searchTerm}`);

    // set state when the data received
    setBooks(data["data"]["message"]);
  };

  useEffect(() => {
    dataFetch(searchTerm);
  }, []);

  const handleChange = async (e) =>{
    setSearchTerm(e.target.value);
    console.log(searchTerm)
    dataFetch(searchTerm)
  }

  console.log(books);
  return (
    <div className="App">
      <SearchBar
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        placeholder = "Search..."
      ></SearchBar>
      {/* <SearchButton onClick={()=>{handleSearch(searchTerm)}}>Search</SearchButton> */}
      <BooksContainer>
        {books.length === 0 ? (
          <div>{books.length}</div>
        ) : (
          books.map((book) => <Product key={book.isbn} book={book}></Product>)
        )}
      </BooksContainer>
      <Link to="addbook">
        <AddButton>Add Book</AddButton>
      </Link>
    </div>
  );
}

export default Home;
