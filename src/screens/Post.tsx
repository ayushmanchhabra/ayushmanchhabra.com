import Markdown from 'react-markdown';
import { useParams } from "react-router-dom";

import {
    IMG_20251001_1,
    IMG_20251001_2,
    IMG_20251001_3,
    IMG_20251001_4,
    IMG_20251001_5,
    IMG_20251001_6
} from '../assets/index';
import {
    POST_20241228,
    POST_20250401,
    POST_20250801,
    POST_20250901,
    POST_20251001,
    postsInfo,
} from "../content/cyber/index";

export default function Post() {
    const { date } = useParams();

    const posts: Record<string, string> = {
        '2024-12-28.md': POST_20241228,
        '2025-04-01.md': POST_20250401,
        '2025-08-01.md': POST_20250801,
        '2025-09-01.md': POST_20250901,
        '2025-10-01.md': POST_20251001,
    };

    const images: Record<string, string> = {
        '2025-10-01_1.jpeg': IMG_20251001_1,
        '2025-10-01_2.jpeg': IMG_20251001_2,
        '2025-10-01_3.jpeg': IMG_20251001_3,
        '2025-10-01_4.jpeg': IMG_20251001_4,
        '2025-10-01_5.jpeg': IMG_20251001_5,
        '2025-10-01_6.jpeg': IMG_20251001_6,
    };

    return (
        <div>
            <nav>
                <ul className="h-[50px] w-full flex items-center justify-end gap-10 pt-[30px] pr-[80px]">
                    <li>
                        <a
                            className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
                            href="#"                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
                            href="https://github.com/ayushmanchhabra"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
                            href="https://www.linkedin.com/in/ayushmanchhabra/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
                            href="#/blog/post"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
                            href="mailto:ayushmxn@outlook.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <section className="flex flex-col items-start p-[40px] lg:p-[80px]">
                <div className="w-full text-left">
                    <div className="text-gray-800 leading-relaxed space-y-4">
                        <Markdown
                            components={{
                                h1: ({ children, ...props }) => (
                                    <h1
                                        {...props}
                                        className="text-4xl sm:text-5xl font-bold text-gray-900"
                                    >
                                        {children}
                                    </h1>
                                ),
                                img: ({ src, alt, ...props }) => {
                                    const resolvedSrc = images[src as string];
                                    if (!resolvedSrc) {
                                        console.warn(`Image not found: ${src}`);
                                    }
                                    return (
                                        <img
                                            {...props}
                                            src={resolvedSrc || src}
                                            alt={alt}
                                            className="max-h-[400px] max-w-full border border-gray-300"
                                        />
                                    );
                                },
                            }}
                        >
                            {posts[date + '.md']}
                        </Markdown>
                    </div>
                </div>
            </section>

            <section className="p-[40px] lg:p-[80px] pt-0">
                <ul className="flex flex-col gap-2">
                    <li>
                        <a
                            data-testid="posts-backtomainpage"
                            href="/"
                            className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
                        >
                            Home
                        </a>
                    </li>
                    {postsInfo.map((post) => (
                        <li key={post.date}>
                            <a
                                href={`#/blog/post/${post.date}`}
                                className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
                            >
                                {post.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
