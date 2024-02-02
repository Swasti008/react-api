import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Books() {
    const [booksData,setBooksData]=useState({books:[]});
    const getData =()=>{
        Axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
        .then((response)=>{
            console.log(response.data)
            setBooksData(response.data)}
        )
        .catch((error)=>{
            console.error("Error:",error)
        })

    }
    useEffect(()=>{
       getData()
    },[])

  return (
    <>
      <h1>📖 BOOKSHELF 📖</h1>
      <div>{booksData.books.map((book)=>{
return( 
    <div key={book.title} className='outerDiv'>
        <div className='flex-column'>
            <h2>{book.title}</h2>
        <div className='flex-row'>
            <img src={book.imageLinks.smallThumbnail} alt="booksImage" className='Image'/>
            <p>{book.description}</p>
        </div>
            <h4>Author : {book.authors}</h4>
        </div>
        </div>
    )} )}
    </div>
    
  </>
  )
}
