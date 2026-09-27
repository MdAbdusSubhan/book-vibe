
import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assests/hero_img.jpg';

const Banner = () => {
    return (
        <section className="py-10 md:py-16">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-slate-100 px-6 py-10 shadow-sm md:grid-cols-2 md:px-10 lg:px-14">

                {/* Content */}
                <div className="space-y-6">
                    <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Discover Your Next Read
                    </span>

                    <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                        Books to freshen up{' '}
                        <span className="text-green-600">
                            your bookshelf
                        </span>
                    </h2>

                    <p className="max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
                        Explore our collection of inspiring stories, timeless
                        classics, and exciting new reads for every kind of reader.
                    </p>

                    <button className="btn btn-success rounded-full px-7 text-white shadow-md transition hover:scale-105">
                        View The List
                    </button>
                </div>

                {/* Image */}
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src={bannerImg}
                            alt="A collection of books"
                            className="h-auto w-full object-cover"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;
