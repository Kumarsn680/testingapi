import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="addbook" element={<AddBook />}></Route>
        <Route path="updatebook" element={<UpdateBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
