# Press.css
Press.css is a flat, lightweight, scalable, no bullshit button library for your projects that is heavily influenced by [Google's Material Design](https://www.google.com/design/) guidelines. It's markup is simple, easy to use, predictable, and helps ensure a uniform button experience across all pages of your site or app.

## Ways to Use


### Link It Up
Download Press.css and add a link to the stylesheet in the `head` of your document.

```html
<link rel="stylesheet" href="press.css" />
```

### NPM
Press.css was just added to the NPM registry.

```shell
npm install press-css
```

```shell
yarn add press-css
```

## The Markup

At the very minimum, press requires two classes, `press` and `press-[color]`, to create a working button.


```html
<button class="press press-red">Square Button</button>
```

Want more features? You can have more fun with it as well:

```html
<button class="press press-bluegrey press-round press-ghost press-xl">Round Button</button>
```

You can even use anchor elements to make a link look like a Press.css button:

```html
<a href="#" class="press press-green press-circle">21</a>
```

## Features

**Check out the [Press.css](https://press-css.io) to see these features in action.**

### [Button Shapes](https://press-css.io/#shapes)

*(default)* - If you do not specify a shape, Press.css will create a squared button.

*.press-round* - A button with rounded corners.

*.press-pill* - A button that looks like a pill.

*.press-circle* - Perfect for glyphicons or numbers. Too much content will be hidden.

### [Button Sizes](https://press-css.io/#sizes)

*.press-sm* - Equivalent of `font-size:.8em;`

*(default)* - Equivalent of `font-size:1em;`

*.press-lg* - Equivalent of `font-size:1.25em;`

*.press-xl* - Equivalent of `font-size:1.5em;`

### [Button Effects](https://press-css.io/#effects)

*.press-raised* - Adds a slight border-shadow to the button

*.press-ghost* - Inverts the button so background is transparent, and button border/text are the specified color.

*:disabled* - Press.css uses the disabled attribute on `button` elements.

### [Button Colors](https://press-css.io/#colors)

Press.css borrows heavily from the design specs of Google's Material Design. All the [color names](https://press-css.io/#colors) in their style guide are used by default in Press.css.

**Note:** There is a `.press-yellow` and a `.press-white` class that defaults to `color: #FFF`. Overwrite this class anywhere below where you add Press.css to give the text a contrasting color.

## Adding/Removing Colors

Press.css is now extendable without the need for using or compiling with Sass! In addition to the default colors, you can create your own custom classes with the `press-[class]` format and a special CSS custom property. ([CodePen Demo](https://codepen.io/codyogden/pen/pwXXQG))
```css
.press-love {
	--p: pink;
        color: red;
}
```

As long as the button has the base `.press` class, you can use any CSS selector to extend Press.css and customize a button. [(CodePen Demo)](https://codepen.io/codyogden/pen/eRqgba)
```css
.btn-main {
	--p: #6967AB;
	color: #FFF;
}
```

## Accessibility First

I wanted to ensure that Press.css adheres as close as possible to web accessibility standards. My goal was to keep all 21 colors from version 1, but ensure color contrast guidelines are met. In order to do that, I evaluate each color as a background with white text, and if the color ratio falls below a 4.5 (AA), then the text color will be black. You can learn more about color contrast in [this handy introductory guide](https://usecontrast.com/guide).

Fear not! If you would like for all colors to default to white, use this handy class in your CSS to override that assumption.
```css
.press:not(.press-ghost) {
    color: #FFF;
}
```

## Browser Support
I have tested the library as is in modern Chrome, Safari, and Firefox.
