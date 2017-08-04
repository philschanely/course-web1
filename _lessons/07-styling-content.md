---
title: "Lesson 7: Styling Content"
layout: lesson
---

### Introduction to Content Styles

**7.1: Working with type...**
: ...on web and in print have many similar components; technical logistics differ.

While we looked at an overview of CSS in the last module and learned about some technical logistics, it’s now time to get on to the fun part! We finally get to think beyond how our web pages are structured and on to actually altering how they look. 

We'll read more about working with type on the web when we read from the Miller text again later in the course. For now let's stay focused on the technical logistics.

***Read chapter 12 (pp. 264--270, 273--276, and 279--288) and chapter 14 (pp. 330--340) from Duckett.***

**7.2 CSS properties for controlling type...**
: ...include `color`, `font-family`, `font-size`, `font-weight`, `font-style`, `text-align`, `letter-spacing` (kerning), and `line-height` (leading) along with several other properties that come in handy for further style and finesse.

These provide an excellent summary of the CSS properties that affect many aspects of how text is presented on the web. Here is a table summarizing the most commonly used properties, what each does, and common values or settings:

| Property         | What it does | Value options | Examples |
|:=================|:===|:===|:===|
| `color`          | Sets the color of the text | Color keyword, hex, `rgb()`, `rgba()`, `hsl()`, or `hsla()` color code | `color:#ef4520;` |
| `font-family`    | Sets the typeface | Comma-separated list of font faces to use; first item is used, but if not available, next item is used, etc. | `font-family:Verdana, Arial, sans-serif;` |
| `font-size`      | Sets the size of text | Desired font size follow immediately by the abbreviation for the desired unit of measurement, likely either `em` or `rem` | `font-size:1.4rem;` |
| `font-weight` | Adds or removes boldface | `bold` \| `normal` | `font-weight:bold;` |
| `font-style` | Adds or removes italics | `italic` \| `normal` | `font-style:italic;` |
| `text-transform` | Sets the casing for text | `uppercase` \| `lowercase` \| `capitalize` | `text-transform:uppercase;` |
| `text-decoration` | Adds or removes underlines and other text decorations | `none` \| `underline` \| `overline` \| `line-through` \| `blink` | `text-decoration:underline;`
| `text-align` | Sets alignment | `left` \| `right` \| `center` \| `justify`	| `text-align:left;` |
| `text-indent` | Sets indentation | Desired indentation measurement followed immediately by the abbreviation for the unit of measurement, likely either `em` or `px`. | `text-indent:20px;` |
| `text-shadow` | Adds or removes a drop shadow on text. | See p.288 of Duckett text. | |
| `line-height` | Adjusts leading | Desired leading measurement followed immediately by the abbreviation for the unit of measurement, likely `em` or `%`. | `line-height:1.3em;` |
| `letter-spacing` | Adjusts kerning	 | Desired kerning measurement followed immediately by the abbreviation for the unit of measurement, likely `em` or `px`. | `letter-spacing:0.1em;` |
| `list-style` | Adds or removes bullets and other formatting options for list items | Three placeholders each separated from previous by a space that allows a short-hand version of `list-style-type`, `list-style-image`, and `list-style-image`. | Use `none` to remove any bullets or enumeration styling. See Duckett, pp.333--336. | `list-style:none;` |


Note that when working with basic typography we can really only work with fonts that most users will have on their computers already. These “web safe” fonts are listed on pages 269--270 in the Duckett text. Later in this module we’ll talk about how to diversify and use a wider selection of fonts.

Intentionality and appeal can be applied to typography by paying attention to the spacing within blocks such as kerning and leading. Note that in CSS, kerning is controlled by the letter-spacing property, but applies to the whole element selected; therefore, we don’t yet have as much control of kerning without some nasty JavaScript hacks at this point. Leading, on the other hand, is controlled by the line-height property and is a valuable property to apply to make text readable.

### Fine-Tuning Space around Type

**7.3 Space between blocks...**
: ...can be controlled using `margin-top` and `margin-bottom`.

In addition to the styles discussed in Duckett, I find two additional properties helpful when fine-tuning text: margin-bottom and margin-top. These both control white space, or margin (which we’ll look at in much more detail in an upcoming module). We use a number followed immediately by a unit (`px`, `em`, `%`, etc.) to specify the desired spacing. So while leading controls space inside blocks (space between lines of text in a block), margin controls space outside blocks (space between blocks).

Because browsers apply a default set of styles to content, I recommend that you get in the habit of reseting margin whenever you style a block of text, simply by setting `margin-bottom` and `margin-top` to `0`. This clears out the default spacing and gives you control over it which will make your typography much more consistent across browsers, which have different default settings.

So you start with `0` and specify the desired spacing from there, checking each adjustment in a browser to ensure the desired effect is taking place.

### Refining Selections with Pseudo-Class Selectors

**7.4: The `:hover` pseudo-class...**
: ...allows us to style links or other elements specifically when the user has hovered their mouse over them.

One last bit of content styling we want to consider is how to make links look one way by default and have a different look when the user hovers over them with their mouse cursor. This is accomplished simply by using two different CSS rules; one that styles just normal `<a>` tags and one that selects using the `:hover` pseudo-class like this:

```css
a { color:blue; text-decoration:none; }
a:hover { text-decoration:underline; }
```

This sets a blue color and removes underlines from links in their default state. But when a user hovers over the link, an underline appears. You can use this model to create any kind of variation for the style of the hovered link.

**Note:** The `:hover` pseudo-class can be used on any HTML element, not just `<a>` tags. But use it with caution.

### Using Custom Fonts

**7.5: We can specific additional fonts in our websites...**
: ...thanks to open licensing and the `@font-face` declaration in CSS.

Our browsers allow much more flexibility with fonts today than they used to.

***Read chapter 12 (pp. 271--272) from Duckett*** for a survey of some methods for implementing creative typography.

***Read chapter 12 (pp. 277--278) from Duckett*** for more information about the @font-face declaration and how to use custom fonts in your style sheets.

Note, however, that font usage is a complicated issue—much more than we have time to get into, but here are the key logistics. Computers must “install” a font in order for software to implement and render it in some fashion. Most fonts are prepared with a very specific use in mind and have licenses that restrict it accordingly. This is to protect the creative work of typographers from illegitimate copies that rob them of profit for their work.

So while we can simply place a font on our server and link to it in our style sheets, this could be a breech in the font’s license and thus a form of piracy. Therefore, while we have the @font-face property and can use it to import and use more fonts than the typical web safe set, we CANNOT just use any font we have on our computer. We must be sure to use only fonts that have licenses that allow use on websites.

There are many sites and options for obtaining web fonts such as fontsquirrel.com and fonts.com. But now large companies like Adobe and Google are beginning to make web fonts available as well and advocate for their licenses with type foundries. You’ll notice that Adobe Creative Cloud has a whole web font feature for members, and Google is building a repository of free fonts you can browse and implement. It might appear to cost an arm and a leg, but better typography means a better web.

While the code demonstrated on pages 277-278 from Duckett is acceptable, we’ve found the following simpler code to work well in many browsers (note that you must have a web font in both a TTF and EOT format):  

```css
@font-face {
    font-face: "Cabin";
    src: url(path/to/font/cabin.eot);
    src: local("Cabin"), url(path/to/font/cabin.ttf) format("truetype");
}
```

Note that you must use valid paths to the `.eot` and `.ttf` versions on lines 3 and 4 respectively. And, of course, you can choose the name you want to use for the font (“Cabin” in this case), but just make sure you match precisely the name you enter on line two and the same name on line 4. With this in place (preferably at the top of a style sheet) we can then use this font by the name we gave it in our styles with the font-face property:

```css
h1 {
    font-face:"Cabin";
}
```

### The Google Fonts API

**7.6 Google makes working with custom fonts easier...**
: ...thanks to the services available at fonts.google.com.

Specifying our own custom fonts requires understanding licensing and ensuring we have all the proper formats and correct syntax in our `@font-face` declarations. More than a few have found this challenging. Thankfully, some great work is being done at Google to make open license fonts easier to use. Visit [fonts.google.com](http://fonts.google.com) to browse a large library of fonts, many of which can be downloaded and installed during your design phase, or linked into your website. 

Here is a suggested process for choosing and using fonts from this service:

1. Visit [fonts.google.com](http://fonts.google.com).
2. Search for fonts that might work for your design and click the plus icon for any such font to add it to a collection. 
3. Find the Collection panel in the lower portion of the screen and click "arrow" icon in the upper right to see all your fonts side-by-side. 
4. Back in the Collection panel for more options for using fonts:
    * Click the "download" icon in the upper right to download the fonts in your collection. Install them on your system (using Font Book on a Mac) in order to use them in design software such as Sketch.
    * On the "Customize" tab you can select specific weights and styles for reach font you'd like to use in a website. Note these weights as well for use in the `font-weight` CSS setting.
    * On the "Embed" tab you can use either the "Standard" `<link>` tag to link to your styles as external stylesheets from an HTML document. I prefer to switch to the `@import` option and place the `@import url...` bit directly into a stylesheet.
    * With a Google Fonts stylesheet linked you can then use the provided settings under "Specify in CSS" to set an element to a particular font. 

While the library may be somewhat limited, there are still a large number of quality fonts. You will find this much easier to use while you're getting used to web design early on.

### Matching Font Sizes to Your Comp

**7.7 Match font sizes in CSS...**
: ...with points from a comp by setting the `font-size` on html to 10px. Then the font size on an element can be the font size in the comp divided by 10 (move the decimal one digit to the left).

In CSS we strongly prefer using the flexible `em` unit. However, browsers now support an even better unit called `rem`. Where `em` units were sized relative to the closest parent element, `rem` sizes based on the *root* size. 

But if you are working from a design comp in software such as Sketch you will likely be using points or pixels for fonts. Converting to `em`s can be a bit of a pain, unless you use this little trick:

* Set the `font-size` on `html`, the root element, to `10px`.
* Set the `font-size` for elements using the `rem` unit to the font size in your comp divided by 10. So a font size of `14pt` in your comp would be set to `1.4rem` in your CSS; just move the decimal one digit to the left. 

### Study Tools

Memorize each of the following CSS properties or values: 

* `font-family`
* `font-size`
* `font-weight`
* `font-style`
* `text-transform`
* `text-decoration`
* `line-height`
* `letter-spacing`
* `text-align`
* `text-indent`
* `text-shadow`
* `list-style`