import Markdown from "react-markdown";
import { useParams } from "react-router-dom";

import { posts } from "../content/index";

const images = Object.fromEntries(
    Object.entries(
        import.meta.glob("../assets/**/*.{png,jpg,jpeg}", {
            eager: true,
            query: "?url",
            import: "default",
        }) as Record<string, string>,
    ).map(([path, url]) => [path.split("/").pop()!, url]),
);

export default function Post() {
    const { section, slug } = useParams();

    const sectionPosts = posts.filter((post) => post.section === section);
    const post = sectionPosts.find((post) => post.slug === slug);

    return (
        <div>
            <nav>
                <ul className="w-full flex items-center justify-end gap-3 sm:gap-6 lg:gap-10 pt-2 sm:pt-4 lg:pt-[30px] pr-4 sm:pr-8 lg:pr-[80px] h-auto lg:h-[50px]">
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
                            href="#/tech"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
                            href="#/poetry"
                        >
                            Poetry
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

            <section className="flex flex-col items-start">
                <div className="w-full text-left">
                    <div className="p-[40px] pt-0 text-gray-800 leading-relaxed space-y-4">
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
                                h2: ({ children, ...props }) => (
                                    <h2 {...props} className="text-3xl font-bold text-gray-900 mt-6">
                                        {children}
                                    </h2>
                                ),
                                h3: ({ children, ...props }) => (
                                    <h3 {...props} className="text-2xl font-semibold text-gray-900 mt-4">
                                        {children}
                                    </h3>
                                ),
                                a: ({ children, ...props }) => (
                                    <a {...props} className="text-[#247BA0] underline hover:text-blue-700 transition-colors">
                                        {children}
                                    </a>
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
                            {post?.body ?? ""}
                        </Markdown>
                    </div>
                </div>
            </section>

            <section className="p-[40px] pt-0">
                <ul className="flex flex-col gap-4">
                    {sectionPosts.map((post) => (
                        <li key={post.slug}>
                            <a href={`#/${post.section}/${post.slug}`} className="group block">
                                <time className="text-sm text-gray-500">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric", month: "long", day: "numeric",
                                    })}
                                </time>
                                <h3 className="mt-0.5 text-lg font-semibold text-gray-800 group-hover:text-[#247BA0] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="mt-0.5 text-gray-600">{post.subtitle}</p>
                                <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-wide text-[#247BA0]">
                                    {post.category}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            {/* TODO: add footer section with linkedin and github */}
            {/* TODO: factor out into components */}
        </div>
    );
}
