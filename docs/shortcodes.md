# Shortcodes available in Koralyte

There are a few extra shortcodes available in this theme.

## figure

This overrides Hugo's default `figure` shortcode with click-to-zoom, captions, and responsive images using `srcset` for
serving appropriately sized images based on the user's device and screen resolution.

You can also pass `default=true` to drop back to Hugo's default version of this shortcode.

```hugo
{{< figure src="image.jpg"
    alt="Alt text for this image"
    caption="Caption for this image"
>}}
{{< figure src="image.jpg" nozoom=true >}}
```

## katex

Enables KaTeX math rendering on the page. Place once anywhere in the content and then math rendering is enabled for the
page.

```hugo
{{< katex >}}

Inline: \(y = x^2\)

Block:
$$
\int_0^t x\,dx = \frac{t^2}{2}
$$
\[
\int_0^s e^{x}\,dx = e^{s} - 1
\]
```

## youtubeLite

A lightweight YouTube embed that is significantly faster than the official `<iframe>`.

```hugo
{{< youtubeLite id="abcdefghijk" >}}
```