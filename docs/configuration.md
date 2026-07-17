# Koralyte configuration settings

The default configuration is provided in [hugo.toml](../hugo.toml). Override it in your site's
`config/_default/params.toml`.

A description of most options is provided below.

## `[params]`

| Key                             | Default      | Description                                                    |
| ------------------------------- | ------------ | -------------------------------------------------------------- |
| `colorScheme`                   | `"koralyte"` | Color theme to use.                                            |
| `defaultAppearance`             | `"light"`    | Default website to `"light"` or `"dark"` mode.                 |
| `autoSwitchAppearance`          | `true`       | Follow OS dark mode preference, if provided by the browser.    |
| `enableSearch`                  | `true`       | Enable client-side search bar.                                 |
| `enableCodeCopy`                | `false`      | Enable copy buttons on code blocks.                            |
| `disableImageOptimization`      | `true`       | Skip Hugo's build-time image processing.                       |
| `disableImageZoom`              | `false`      | Disable zoom-to-click on images.                               |
| `disableTextInHeader`           | `false`      | Hide site title text in page title (browswer tab).             |
| `enableStyledScrollbar`         | `true`       | Enable custom Tailwind scrollbar.                              |
| `fingerprintAlgorithm`          | `"sha512"`   | SRI hash algorithm for CSS/JS bundles.                         |
| `mainSections`                  | `["posts"]`  | List of content sections used for recent articles on homepage. |
| `description`                   | -            | Site meta description and schema description.                  |
| `keywords`                      | -            | Site meta keywords and schema keywords.                        |
| `robots`                        | -            | Site-level robots meta tag.                                    |
| `smartTOC`                      | `false`      | Use smart table of contents that scrolls with the page.        |
| `smartTOCHideUnfocusedChildren` | `false`      | Collapse inactive nested table-of-contents entries.            |
| `showAppearanceSwitcher`        | `true`       | Show light/dark mode toggle in header.                         |

## `[footer]`

| Key                    | Default | Description                      |
| ---------------------- | ------- | -------------------------------- |
| `showMenu`             | `true`  | Show footer tags link.           |
| `showCopyright`        | `true`  | Show author copyright notice.    |
| `showThemeAttribution` | `true`  | Show "Hugo & theme" attribution. |
| `showScrollToTop`      | `true`  | Show scroll-to-top button.       |

## `[homepage]`

| Key                | Default     | Notes                                      |
| ------------------ | ----------- | ------------------------------------------ |
| `showRecent`       | `false`     | Show recent articles on homepage.          |
| `showRecentItems`  | `5`         | Number of recent items to show on homepage |
| `showMoreLink`     | `false`     | Include "show more" link on homepage.      |
| `showMoreLinkDest` | `"/posts/"` | Destination of "show more" link.           |

## `[article]`

| Key                       | Default | Description                                 |
| ------------------------- | ------- | ------------------------------------------- |
| `showDate`                | `true`  | Show publication date.                      |
| `showDateUpdated`         | `false` | Show last-updated date.                     |
| `showAuthor`              | `true`  | Show author info in article.                |
| `showDraftLabel`          | `true`  | Show "Draft" badge on draft articles.       |
| `showHeadingAnchors`      | `true`  | Show anchor links on headings.              |
| `showPagination`          | `true`  | Show previous/next article links.           |
| `invertPagination`        | `false` | Reverse previous/next order.                |
| `showReadingTime`         | `true`  | Show estimated reading time.                |
| `readingSpeed`            | `200`   | Words per minute for reading time estimate. |
| `showTableOfContents`     | `false` | Show table of contents in articles.         |
| `showTaxonomies`          | `false` | Show taxonomy terms (tags) in articles.     |
| `showRelatedContent`      | `false` | Show related articles at end of post.       |
| `relatedContentLimit`     | `3`     | Max number of related articles to show.     |
| `externalLinkForceNewTab` | `true`  | Open external links in a new tab.           |

## `[list]`

| Key           | Default | Description                         |
| ------------- | ------- | ----------------------------------- |
| `showSummary` | `false` | Show content summary in list views. |
| `showCards`   | `false` | Display list items as cards.        |

## `[taxonomy]` / `[term]`

| Key                      | Default | Description                                     |
| ------------------------ | ------- | ----------------------------------------------- |
| `taxonomy.showTermCount` | `true`  | Show number of items per term in taxonomy list. |

## `[sitemap]`

| Key             | Default                | Description                            |
| --------------- | ---------------------- | -------------------------------------- |
| `excludedKinds` | `["taxonomy", "term"]` | Content kinds to exclude from sitemap. |

## Author and social links

In your site's configuration, you can also set your personal information to be used across the website.

```toml
[params.Author]
name = "Your Name"
headline = "A short tagline"   # optional
image = "img/author.jpg"       # optional, relative to assets/ or a URL
links = [
    { github = "https://github.com/yourname" },
    { email = "you@example.com" },
    # and so on
]
```

`links` entries render with the icons in `assets/icons`. You can add more in `assets/icons/`.

- **Social:** `bluesky`, `envelope`, `github`, `google-scholar`, `ko-fi`, `linkedin`, `orcid`, `researchgate`,
  `x-twitter`, `youtube`
- **UI:** `bars`, `chevron-down`, `moon`, `search`, `sun`, `xmark`

## Extension hooks

There are a few files that you can override in your website and the theme will automatically use them.

- **`layouts/partials/extend-head.html`** is appended to the website header if it exists.
- **`assets/css/custom.css`** is appended after the theme's CSS if it exists.
