'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/booksType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({book}: {book: IBook}) => {

    const {wishlist, setWishlist} = useContext(BooksContext)

    const handleWishlist = () => {
        setWishlist([...wishlist, book])
        toast.success(`You added ${book.bookName}`)
    };


    return <button className="btn btn-outline rounded-xl px-6" onClick={()=> handleWishlist()}>
        Wishlist
    </button>

};

export default WishlistButton;