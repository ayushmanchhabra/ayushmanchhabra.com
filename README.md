# ayushmanchhabra.com

Official website of Ayushman Chhabra.

## Adding a post

Create `src/content/<section>/<slug>.md` (e.g. `src/content/cyber/2026-11-01.md`) with frontmatter:

```md
---
title: Post title
subtitle: One line summary
author: Ayushman Chhabra
date: 2026-11-01
category: Essays
---
```

It is served at `#/<section>/<slug>` and listed at `#/<section>`. Add `draft: true` to hide it. Images go in `src/assets/` and are referenced by file name, e.g. `![alt](2026-11-01_1.png)`.
