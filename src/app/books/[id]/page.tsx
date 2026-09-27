import ReadButton from '@/comonents/bookDetails/ReadButton';
import WishlistButton from '@/comonents/bookDetails/WishlistButton';
import { IBook } from '@/types/booksType';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsProps {
    params: Promise<{
        id: string
    }>
}




const getBooks = async () => {
   try{ 
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await res.json();
    return data;
}catch(error){
    console.error("Error fetching books data", error)
    return []
}
};


const BookDetailsPage = async ({ params }: IBookDetailsProps) => {

    const { id } = await params
    const booksData = await getBooks();

    const book = booksData.find((book: IBook) => book.bookId === Number(id)) as IBook

    console.log(book, 'book')
    return (
        <div className="mx-auto max-w-10/12 py-8">
            <div className="card card-side overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Book Image */}
                <figure className="relative w-1/3 min-w-[220px] bg-slate-100">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={500}
                        height={500}
                        className="h-full min-h-[400px] w-full object-cover"
                    />
                </figure>

                {/* Card Content */}
                <div className="card-body p-7">

                    {/* Category */}
                    <div>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                            {book.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-sm font-medium text-slate-500">
                        by {book.author}
                    </p>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-2">
                        <span className="text-lg text-yellow-500">★</span>

                        <span className="font-semibold text-slate-800">
                            {book.rating}
                        </span>

                        <span className="text-sm text-slate-400">
                            • {book.totalPages} pages
                        </span>
                    </div>

                    {/* Review */}
                    <p className="mt-4 line-clamp-4 max-w-3xl leading-7 text-slate-600">
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className="mt-2 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Extra Information */}
                    <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 sm:grid-cols-3">

                        <div>
                            <p className="text-xs text-slate-400">
                                Publisher
                            </p>
                            <p className="mt-1 text-sm font-semibold text-slate-700">
                                {book.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">
                                Published
                            </p>
                            <p className="mt-1 text-sm font-semibold text-slate-700">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">
                                Pages
                            </p>
                            <p className="mt-1 text-sm font-semibold text-slate-700">
                                {book.totalPages}
                            </p>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="card-actions mt-5 justify-end gap-3">
                       <ReadButton book={book}/>
                        <WishlistButton book={book}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;