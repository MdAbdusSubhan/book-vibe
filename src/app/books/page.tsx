
import React from 'react';

import { IBook } from '@/types/booksType';
import BookCard from '@/comonents/shared/BookCard';

const getBooks = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching books data", error)
        return []
    }
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="mx-auto max-w-6xl px-4 py-12">


            <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-medium text-green-600">
                    Explore our collection
                </p>

                <h2 className="text-3xl font-bold text-slate-900">
                    Featured Books
                </h2>

                <p className="mt-2 text-slate-500">
                    Discover something new to read.
                </p>
            </div>

            {/* Books */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.map((book: IBook, ind: number) => <BookCard key={ind} book={book} />)}
            </div>
        </section>
    );
};

export default Books;