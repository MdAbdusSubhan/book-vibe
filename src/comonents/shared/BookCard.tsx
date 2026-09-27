import { IBook } from '@/types/booksType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IbookCardProps {
    book: IBook
}

const BookCard = ({ book }: IbookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
        >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={600}
                    height={400}
                    className="object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                    {book.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">

                <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                        {book.author}
                    </span>

                    <span className="flex items-center gap-1 text-sm font-semibold text-slate-800">
                        ★ {book.rating}
                    </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {book.bookName}
                </h3>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                    <span>{book.totalPages} pages</span>

                    <span>{book.yearOfPublishing}</span>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='mt-2'>
                    <Link href={`/books/${book.bookId}`}>
                        <button className="btn btn-success">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;