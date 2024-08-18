import React from 'react';
import { Avatar } from './BlogCard';

export const Appbar = () => {
    const userName = 'Sameeha Mubeen'; // Example signed-in user name

    return (
        <div className="bg-gray-100 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-black-600">My Blogs</div>
                <nav className="flex items-center space-x-4">
                    <a href="/" className="text-black-600 hover:text-black-800">Home</a>
                    <a href="/about" className="text-black-600 hover:text-black-800">About</a>
                    <a href="/contact" className="text-black-600 hover:text-black-800">Contact</a>
                    <div className="ml-4">
                        <Avatar name={userName} />
                    </div>
                </nav>
            </div>
        </div>
    );
}
