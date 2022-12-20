const express = require('express')
const router = express.Router()
const { getBookById, getAllBooks, updateBookById, addBook, deleteBook } = require('./functions')
router.use(express.json());
router.use(express.urlencoded());

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods","*");
  res.setHeader("Access-Control-Allow-Headers","*");
  next();
});

// read all
router.get('/',async (req,res)=>{
    const requestedBook = await getAllBooks();
    res.json({
      message: requestedBook
    });
})


// find a  book
router.get("/:id", async(req, res) => {
    const requested_id = req.params.id
    const requestedBook = await getBookById(requested_id)
    res.json({
        message : requestedBook
    })
});

// create
router.post('/',async (req,res)=>{
    const bookToBeAdded = req.body
    await addBook(bookToBeAdded);
    res.json({
      message: bookToBeAdded,
    });
})

// update
router.put("/:id", async (req, res) => {
    const id = req.params.id
  const updatedBook = req.body
  await updateBookById(id,updatedBook)
  res.json({
    message: updatedBook,
  });
});

// delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id
  await deleteBook(id)
  res.json({
    message: "deleted",
  });
});

module.exports = router