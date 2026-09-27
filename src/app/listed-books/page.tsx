'use client'
import BookCard from '@/comonents/shared/BookCard';
import ListedBookCard from '@/comonents/shared/ListedBookCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/booksType';
import React, { useContext, useState } from 'react';


const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);

    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating)
        } else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
        }
        else if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)

        }
        
        return sortedBooks
    }

        const sortedReadBooks = sortBooks(readBooks)
        const sortedWishlist = sortBooks(wishlist)

        return (
            <div className="w-10/12 mx-auto">
                <h2 className="my-7 bg-amber-100 py-16 rounded-3xl font-bold text-4xl text-center">
                    Listed Books
                </h2>


                <div className='text-center'>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                        className="select select-success">
                        <option disabled={true}>Short by</option>
                        <option value={"rating"}>Rating</option>
                        <option value={"pages"}>Number of Pages</option>
                        <option value={"year"}>Published Year</option>
                    </select>
                </div>


                <div className="tabs tabs-border">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        {sortedReadBooks.length > 0 ?
                            sortedReadBooks.map((book: IBook) => <ListedBookCard key={book.bookId} book={book} />) : (
                                <p className='text-center text-lg font-semibold'>
                                    No read books found.
                                </p>
                            )
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label={`Wishlist (${wishlist.length})`} defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        {sortedWishlist.length > 0 ?
                            sortedWishlist.map((book: IBook) => <ListedBookCard key={book.bookId} book={book} />) :
                            (
                                <p className='text-center text-lg font-semibold'>
                                    No wishlist books found.
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    };

export default ListedBooks