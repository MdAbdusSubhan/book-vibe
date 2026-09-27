'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/booksType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}: {book: IBook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext)

    const handleReadBook = () => {
        setReadBooks([...readBooks, book])
        toast.success(`You have read ${book.bookName}`)
    };


    return <button className="btn btn-outline rounded-xl px-6" onClick={()=> handleReadBook()}>
        Read
    </button>

};

export default ReadButton;