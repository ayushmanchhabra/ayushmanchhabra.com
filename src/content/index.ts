// Every src/content/<section>/<slug>.md file is picked up automatically.
// Metadata comes from the frontmatter block at the top of the file:
//
// ---
// title: Post title
// subtitle: One line summary
// author: Ayushman Chhabra
// date: 2026-10-01
// category: Essays
// draft: true   (optional, hides the post)
// ---

export type Post = {
    section: string;
    slug: string;
    title: string;
    subtitle?: string;
    author?: string;
    date: string;
    category?: string;
    draft?: string;
    body: string;
};

const files = import.meta.glob("./*/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
}) as Record<string, string>;

function parse(raw: string) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    if (!match) {
        return { meta: {} as Record<string, string>, body: raw };
    }
    const meta = Object.fromEntries(
        match[1]
            .split(/\r?\n/)
            .filter((line) => line.includes(":"))
            .map((line) => {
                const i = line.indexOf(":");
                return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
            }),
    );
    return { meta, body: raw.slice(match[0].length) };
}

export const posts: Post[] = Object.entries(files)
    .map(([path, raw]): Post => {
        const [, section, slug] = path.match(/^\.\/([^/]+)\/(.+)\.md$/)!;
        const { meta, body } = parse(raw);
        return { section, slug, title: slug, date: slug, ...meta, body };
    })
    .filter((post) => post.draft !== "true")
    .sort((firstPost, secondPost) => secondPost.date.localeCompare(firstPost.date));

export const sections = [...new Set(posts.map((post) => post.section))];
