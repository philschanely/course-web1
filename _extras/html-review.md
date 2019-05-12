---
layout: lesson
title: Markup Review
---
### Rules of Markup

As we take a quick survey of good practice with HTML, we should first establish a set of rules for creating valid markup.

**Rule One---The Element Rule**
: All tags must open and close correctly.

Here is the first basic rule of markup: *All tags must open and close correctly.*

Simple, right? Most of the tags you’ll learn are normal tags that must have an opening tag and a matching closing tag. The only exceptions are the self-closing tags listed above. And you’re limited to the specific set of tags that make up the HTML library; you can’t invent your own tags.

Tags that have an error of some kind are called *invalid*. So you have an invalid element if...

* You forget to include all required parts of the tag or accidentally add unnecessary spaces. Students sometimes leave off the `>` in opening or closing tags, omit the `/` in closing tags, or insert extra spaces after `<` in either tag.
* You forget an opening tag.
* You forget a closing tag.
* You mismatch an opening tag and closing tag.
* You use a tag that is not a true HTML tag either because you misspelled it or because it doesn’t exist to begin with. For example, I’ve seen several students over the years try to create tags such as `<p1>`, `<p2>`, `<p3>`, or `<h7>`, `<h8>`, or `<heading>`. These are not real HTML tags, so they are considered invalid markup.

**Rule Two---The Nesting Rule**
: Tags that contain other tags must open before the inner tag and close after the inner tag has closed.

Now note the second rule of markup: *Tags that contain other tags must open before the inner tag and close after the inner tag has closed.*

Put another way, tags inside tags must open and close before the outer tag closes. Here are examples of common problems:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
        <meta charset="UTF-8" />
    <body>
        Content goes here ...
    </body>
</html>
```

Here an inner tag was never closed. Can you find it? Seriously, take a close look at the markup. Can you find the missing closing tag?

Right! The `<head>` element never closed. Add a closing tag before `<body>` to fix this problem:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title goes here</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        Content goes here ...
    </body>
</html>
```

Here’s another problem; can you find it?

```html
<p>The problem here is <em>closing order</p></em>
```

Hopefully you caught that the `<em>` tag (the inner element) closed after the `<p>` tag (the outer element). It should go like this:

```html
<p>The problem here is <em>closing order</em></p>
```

Now consider this:

* When we place elements inside other elements we call this nesting. The inner elements are referred to as *nested* elements.
* Elements that wrap around other tags are called containers, or *parent* elements.
* Therefore, elements inside elements are considered *children* of the outer element.
* Furthermore, elements that share the same container or parent element are considered *siblings*.

Finally, as a best practice for creating clean code, it is customary to indent nested tags with either a single tab and then vertically align the parent’s closing tag with the opening tag. This keeps our code nice and neat and can make it easier to keep track of opening and closing tags. See examples above as a reference for how to do this.

**Rule Three---The Attribute Rule**
: Opening tags can contain specifically formatted attributes that provide additional settings for an element.

Let’s add one last rule: *Opening tags can contain specifically formatted attributes that provide additional settings for an element.*

Attributes are composed of a name and a value and are formatted like this:

```html
name="value"
```

They are placed inside an opening tag like this:

```html
<a href="http://www.example.com">Click me</a>
```

Note that you do not put an attribute in both opening and closing tags; only in the opening tag.

**Side note---The `id` and `class` Attributes...**
: ...can be placed on any element and are used to identify and categorize them beyond their basic use.

Some common attributes that can be used on all elements are...

`id` -- short for “identifier,” this attribute can be used to provided a unique name for the element. This is helpful for three uses:

* this attribute allows you to provide labels that help you distinguish one element from another of the same kind, specifically significant elements that are set apart from others in some way;
* we often want to apply styles to a specific element or its children, so this attribute is helpful for CSS;
* other technologies such as JavaScript make use of this unique identifier.

As you use `id` attributes, remember two rules:

* `id` attributes must follow the same rules that filenames follow: no spaces or special characters are allowed;
* a particular `id` attribute can only be used once in a document. In other words, if we add `id="masthead"` to an element, we cannot use `id="masthead"` again on any other element in that document.

`class` -- similar to the `id` attribute, the `class` attribute allows us to provide a label for an element. However, whereas the `id` attribute must be unique, the `class` attribute can be used several or even many times in a single document. This helps us provide more information about an element and what it is used to mark as well as identify it as part of a series of other similar items.

Many other attributes provide specific settings and may only be used on certain tags. Watch for these as you learn each new tag.

### Categories of Tags

Here is the most simple minimal required structure to start a valid HTML document:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title goes here</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        Content goes here ...
    </body>
</html>
```

What comes next are the following categories of markup:

- Content markup
  - Block-level
    - `h1`--`h6` -- use to create hierarchy and don't skip levels. Top heading should always be `h1` and every heading afterwards is either a direct subheading---`h2`---or the subheading of another heading, regardless of visual appearance.
    - `blockquote`
    - Lists:
      - `ul` and `ol` for unordered and ordered lists with `li` directly inside (no other tags allowed between them but you can put anything inside an `li`)
      - `dl` for definition lists with `dt` and `dd` allowed directly inside to create terms and descriptions
    - `p` -- catch all tag for any other block level content.
  - Inline
    - `em` and `i`
    - `strong` and `b`
    - `sup` and `sub`
    - `q` and `cite`
    - `mark`, `ins` and `del`
    - `pre` and `code`
    - `dfn` and `abbr`
    - `small`
    - `span`
- Hyperlinks -- just `a` here using `href` for the path to a file; use `#` as a placeholder path with the URL is unknown.
- Images -- `img` (standalone) with `src` to point to a file. [`http://placehold.it`](http://placehold.it) is a helpful tool for placeholder images. Note that `figure` and `figcaption` can be used when an image is indeed a figure with a caption in context.
- Organizers
  - Sectioning tags for **major sections** in the content
    - `section`
    - `article`
    - `header`, `footer`, and `main`
    - `aside`
  - `div` for generic or **minor divisions** in the content
- Forms and fields
    - `form` tag wrapped around a set of related fields for a given form.
    - Controls
      - `input` with a variety of types:
        - `radio` and `checklist` for a set of selection options
        - `text`, `tel`, `email`, `password`, `date`, etc. for various single line text controls that display different slightly differently widgets and keyboards on mobile devices
        - `button`, `submit`, and `reset` which render buttons with different functionality. Avoid these and use `button` instead.
      - `textarea` for multiline text
      - `select` for dropdown lists with `option` for each item in the list
      - `button` for actual buttons with `type` attribute set to `button` (generic/no functionality), `submit` (submits the form), etc.
- Tables -- use only for marking up data and **not** for building layouts. 
- Other
  - `br` (standalone) for soft returns within a block of content.
  - `svg` for embedding scalable vector graphics...

#### More information

More information from Web 1:

- [Content tags](http://web1.philschanely.comlessons/02-content-markup.html)
- [Hyperlinks and Image](http://web1.philschanely.comlessons/03-links-images.html)
- [Oranizers](http://web1.philschanely.comlessons/04-organizers.html)
- [Forms, Tables, and Other Markup](http://web1.philschanely.comlessons/05-forms-tables.html)


### Semantic Markup

Now for a note about semantic markup.

**Semantic markup...**
: ...means using the best possible markup for the content at hand. While the tags are easy to memorize, it takes practice and input from an expert to develop this skill, but it sets the professional apart from the novice.

Even monkeys can apply these basic tags to content. What makes the difference for us is an intelligent application of tags that don’t just affect appearance, but rather, tags that add meaning that matches what the content actually is.

*Semantic markup* is markup that adds meaning to content. In other words, true web professionals think critically about the markup they use rather than just throwing this tag or that tag around content. Instead of shortcuts, they strive to use the most appropriate tag. Note that this definition differs from the one Duckett provided on pages 49--50. In the past, authors defined a series of tags as “semantic” and others as “non-semantic” or “presentational.” I’ve come to conclude that what is more core to the ideal of semantic markup is not as much defining some tags as semantic and others as not, but rather, in how and when tags are used. It’s simple: figure out what a block or chunk of content is and apply the best possible tag to match that content’s meaning.

What usually gets in the way is that many automated website creation tools use WYSIGYG (what you see is what you get) editors that separate the content editing from the actual markup. While this is helpful for people who don’t understand HTML, many of these tools automate the markup and add programmed best-guess markup instead of intentional human markup.

Another factor that compounds the problem is that many users don’t think about content semantically. They’re used to applying formatting to make things look good, and the most common method is to change the font, change the size, change the color, add bolding or italics, or add an underline. But on the web, all of these presentation changes result in more markup unless one understands CSS and HTML well. The result otherwise is messy, unwieldy code. As a budding web professional, you should strive for clean, flexible code. When it comes to semantics, here are some things to watch out for:

1. *Use specific tags to mark content rather than generic ones.* In your journey you’ll see `<div>` tags and `<span>` tags marking blocks that really ought to be paragraphs and headings or other more refined tags.
2. *Adjust headings to ensure strong hierarchy.* You may be tempted to apply a heading specifically for the way it looks. That’s silly. CSS allows you to alter the way any tag looks, so you should apply a heading that makes sense for the hierarchy of the document instead.
3. *When appropriate, use headings instead of bolded paragraphs.* Since people are used to creating their own headings by changing a paragraph’s font size and making it bold, you may be tempted to do the same. If you bold an entire paragraph, consider whether you ought instead to just make it a heading. But do make sure it really is a heading first and that it really needs to be bolded.
4. *Use appropriate inline markup instead of more generic presentational markup.* The `<i>` and `<b>` tags are short and sweet, but have limited semantic value. `<em>` and `<strong>` are better choices when emphasis or strong emphasis is needed. For example, use `<i>` to mark a book title (where italics are typically employed, but emphasis is not necessary added), but use `<em>` to add emphasis (as in the phrase, “I hate lima beans”). Both result in text that is italicized, but `<em>` is a better choice in the second example because it marks actual emphasized text whereas `<i>` simply adds italics.

#### Steps for Applying Semantic Markup

To actually apply the concept of semantic markup in context, follow this process:

* Assume all blocks are paragraphs to start and apply the `<p>` tag to each distinct block of text.
* Read the content you’re intending to markup and analyze its structure. Consider which elements might become headings and plan the heading structure.
* Based on your analysis, revise the markup to add the appropriate headings.
* Then consider if any elements form a list. Consider which list type is best, then revise the markup to apply this structure.
* Finally, take a detailed look to add appropriate inline markup, block quotations, and other semantic markup to enhance the content’s meaning and structure.

As you get to know HTML better, you’ll begin to see the world differently. Instead of just seeing a web page you might begin to wonder what HTML markup is actually being used. And if you dig in and look at what others have done, you might be horribly surprised to find a tangled ugly mess. Having taken this course, you are capable of writing much better markup!

### Markup from Comp to Code

Watch how to add markup to content based on a design comp:

<iframe width="560" height="315" src="https://www.youtube.com/embed/TSABgnKPoxc?list=PLuOViGmL7TfXlFl74Hf84NwSQPR_LDR0d" frameborder="0" allowfullscreen></iframe>

### Exercises

Now lets put these new skills to use with a few exercises. 

Create the minimal essential markup for the following screen shots based on the tags, principles, and processes covered in this overview. Note: There may be ellipses added to these screen shots to indicate that the actual site has more content; I've trimmed these down in order to obtain good samples of a variety of markup.

**Figure 1: A List Apart Article**

![](/images/extra-markup-alistapart.png)


**Figure 2: DockYard's Why DockYard Page**

![](/images/extra-markup-why-dy.png)
