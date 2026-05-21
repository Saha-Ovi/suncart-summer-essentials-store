'use client'
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#0A0806] flex items-center justify-center p-6 overflow-hidden relative">
                
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F5A623]/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-700/10 rounded-full blur-[120px] animate-pulse delay-700" />

                <div className="relative z-10 max-w-2xl w-full text-center">

                    <div className="relative mb-4">
                        <h1 className="text-[12rem] md:text-[18rem] font-black text-[#F5A623]/5 leading-none select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 tracking-tighter">
                                Lost?
                            </span>
                        </div>
                    </div>


                    <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                            This page seems to have melted away.
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg max-w-md mx-auto leading-relaxed">
                            The link might be broken, or this product collective has moved elsewhere.
                            Don't worry—our checkout lines are still open.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="w-full sm:w-auto px-8 py-4 bg-[#F5A623] hover:bg-[#E09415] text-black font-bold rounded-2xl transition-all active:scale-95 text-center shadow-lg shadow-[#F5A623]/10"
                            >
                                Back to Shop
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>

                   
                    <div className="mt-12 flex justify-center gap-8 opacity-20">
                        <div className="h-px w-12 bg-linear-to-r from-transparent to-[#F5A623]" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5A623]">SunCart Terminal</span>
                        <div className="h-px w-12 bg-linear-to-l from-transparent to-[#F5A623]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;