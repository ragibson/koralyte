# Koralyte

An elegant, minimalist Hugo theme for creating clean websites and blogs. It is designed to be simple and have a strong
focus on clean code and maintainability.

This theme was visually inspired by the Blowfish Hugo theme (which is itself a fork of Congo), but Koralyte is ~0.4% the
size (~225x smaller) and produces smaller, faster pages. I migrated away from Blowfish as concerns rose over its broken
functionality, declining code quality, and questionable content practices.

This theme powers my personal website: <https://ryanagibson.com/>.

## Features

- Dark/light mode with system preference detection
- Client-side search
- Tailwind CSS v4
- Smart scrolling table of contents
- Code blocks with copy buttons
- Responsive figures with click-to-zoom
- KaTeX math rendering
- YouTube video embeds
- Google Analytics support

See [docs/shortcodes.md](docs/shortcodes.md) for a list of available shortcodes.

## Requirements

- Hugo Extended v0.158.0+
- Node.js 22+ (only if you need to rebuild CSS)
- pnpm 11+ (only if you need to rebuild CSS)

## Installation

### Option 1 - Git submodule

```bash
git submodule add --depth 1 https://github.com/ragibson/koralyte.git themes/koralyte
echo 'theme = "koralyte"' >> hugo.toml
```

### Option 2 - Hugo module

```bash
hugo mod init github.com/ragibson/koralyte
```

Then set the theme in `hugo.toml` and fetch the module.

```toml
[[module.imports]]
path = "github.com/ragibson/koralyte"
```

```bash
hugo mod get github.com/ragibson/koralyte
hugo server
```

## Configuration

The default configuration is provided in [hugo.toml](hugo.toml). Override it in your site's
`config/_default/params.toml`.

See [docs/configuration.md](docs/configuration.md) for a complete reference of the theme's configuration options.

## Development

The repository contains everything needed to build the theme. If you need to rebuild CSS or work on the theme itself,
see [docs/maintaining.md](docs/maintaining.md).
