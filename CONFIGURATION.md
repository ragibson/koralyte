# Koralyte configuration settings

The default configuration is provided in [hugo.toml](hugo.toml). Override it in your site's
`config/_default/params.toml`.

A description of most options is provided below.

## `[params]`

| Key                             | Default      | Description                                                    |
|---------------------------------|--------------|----------------------------------------------------------------|
| `colorScheme`                   | `"koralyte"` | Color theme to use.                                            |
| `defaultAppearance`             | `"light"`    | Default website to `"light"` or `"dark"` mode.                 |
| `autoSwitchAppearance`          | `true`       | Follow OS dark mode preference, if provided by the browser.    |
| `enableSearch`                  | `true`       | Enable client-side search bar.                                 |
| `enableCodeCopy`                | `false`      | Enable copy buttons on code blocks.                            |
| `disableImageOptimization`      | `false`      | Skip Hugo's build-time image processing.                       |
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

## `[footer]`

| Key                      | Default |
|--------------------------|---------|
| `showMenu`               | `true`  |
| `showCopyright`          | `true`  |
| `showThemeAttribution`   | `true`  |
| `showAppearanceSwitcher` | `true`  |
| `showScrollToTop`        | `true`  |

## `[homepage]`

| Key                | Default     | Notes                                      |
|--------------------|-------------|--------------------------------------------|
| `showRecent`       | `false`     | Show recent articles on homepage.          |
| `showRecentItems`  | `5`         | Number of recent items to show on homepage |
| `showMoreLink`     | `false`     | Include "show more" link on homepage.      |
| `showMoreLinkDest` | `"/posts/"` | Destination of "show more" link.           |

## `[article]`

| Key                       | Default |
|---------------------------|---------|
| `showDate`                | `true`  |
| `showDateUpdated`         | `false` |
| `showAuthor`              | `true`  |
| `showDraftLabel`          | `true`  |
| `showHeadingAnchors`      | `true`  |
| `showPagination`          | `true`  |
| `invertPagination`        | `false` |
| `showReadingTime`         | `true`  |
| `showTableOfContents`     | `false` |
| `showTaxonomies`          | `false` |
| `showRelatedContent`      | `false` |
| `relatedContentLimit`     | `3`     |
| `externalLinkForceNewTab` | `true`  |

## `[list]`

| Key           | Default |
|---------------|---------|
| `showSummary` | `false` |
| `showCards`   | `false` |

## `[taxonomy]` / `[term]`

| Key                      | Default |
|--------------------------|---------|
| `taxonomy.showTermCount` | `true`  |

## `[sitemap]`

| Key             | Default                |
|-----------------|------------------------|
| `excludedKinds` | `["taxonomy", "term"]` |

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