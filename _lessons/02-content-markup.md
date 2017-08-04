---
layout: lesson
title: "Lesson 2: Essential Content Markup"
---
### Introduction to Intelligent Markup

With an overview of HTML under your belt from the last module, you should recall that HTML is simply a "language" we use for marking content with tags that provide structure and meaning to the content for the context of the World Wide Web.

The basic markup we've covered so far allowed us to create a valid HTML document:

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

But this is pretty boring, right? No interesting content here. So how do we get from here to something more interesting like, say, the content on this page, with headings, paragraphs, and lists?

Many people have learned basic HTML like we covered in the last module. But what separates the professionals from the newbies is attention to detail and a knack for fine-tuned ability to apply the most appropriate markup possible to the content at hand. Many people overlook these details because they are not complicated. And while they can become second nature to a trained expert, they are also taken for granted by many cursory content writers.

These crucial skills come down to this: can you distinguish a heading from a paragraph and a paragraph from a list?

### Block-level Content Markup

A small set of elements provide the backbone  for all other tags. These are the block-level content tags that include headings, paragraphs, lists, and block quotes. A larger set of inline elements provide the ability to mark more nuanced content.

#### Headings and Paragraphs

**2.1: Paragraphs and headings...** 
: ...form the backbone of well-structured web content. HTML offers the `<p>` tag for paragraphs and six levels of headings, `<h1>` -- `<h6>`.

***Read chapter 2 (pp.40-44, 52) and chapter 3 from Duckett.***

The author has introduced us to a number of tags that help us mark HTML content. He has also introduced the subject of semantic markup. Let’s review some important tags that were covered:
  
* `<p>` -- Paragraph -- This tag is the most basic of tags for text content. If you’re not sure what content is, start by marking it as a paragraph.
* `<h1>` -- Primary heading -- This tag is used to mark the single most important heading of a section or page. In most sites I build, I use this to mark the branding or site’s name.
* `<h2>` -- Secondary heading -- This tag is used to mark the direct subheadings under an `<h1>` tag. In other words, if I was to make an outline of the heading structure (headings, sub-headings, sub-sub headings, etc.) of my web page, `<h2>` tags would be the point in the outline directly underneath the `<h1>` tag.
* `<h3>` -- Tertiary heading -- Like the `<h2>` tag, this tag marks subheadings, but this time, subheadings that fall directly under the `<h2>` tags.
* `<h4>`, `<h5>`, `<h6>` -- Fourth-, Fifth- and Sixth-level headings -- These three tags each mark successive levels of subheadings each under the one higher in the “outline.”

It may be tempting when you’re learning to use a heading level in order to make a heading look larger or smaller. But this is not semantic! When we’re writing HTML we should be focused on the meaning of the content—the semantics of the content. We will affect the appearance of elements later with CSS (size, color, weight, spacing, font, etc.). 

#### Long Quotations

**2.2: Long quotations...**
: ...can be marked with the `<blockquote>` tag.

One final helpful tag to discuss is the `<blockquote>` tag, which is used to mark a long quotation. If a quotation takes up an entire sentence or more, use `<blockquote>` to identify it. Check it out:

```html
<blockquote>
    <p>A quiet answer 
       turns away wrath.</p> 
</blockquote>
```

Notice that the quote is wrapped with a paragraph first and then the paragraph is wrapped with a `<blockquote>`. If your quotation has several paragraphs, wrap the whole set with one `<blockquote>`:

```html
<blockquote>
    <p>When wickedness comes, contempt comes also, 
       and with dishonor comes disgrace.</p>
    <p>The words of a man’s mouth are deep waters; 
       the fountain of wisdom is a bubbling brook.</p> 
</blockquote>
```

#### Lists

**2.3: List markup...** 
: ...provides an excellent way to mark up related series of data. The `<ul>` and `<ol>`, and `<dl>` elements group series of `<li>` elements to form itemized lists and the `<dl>` element groups series of `<dt>` and `<dd>` to form definition lists. 

Headings and paragraphs add a good bit of structure to our content and account for a good majority of basic web content. Another set of tags to add to your library is the list markup tags. Lists should be used in HTML content any time you identify a group of items that follow a list-like pattern. Examples include the following:

* A set of step-by-step instructions
* A group of products
* A series of features or highlighted facts
* ... and much more!

You’ll discover when you really dig into it, that there are many more lists in our content than we often realize. In fact, one way to make web content more approachable is to break out those lists into structured markup using these tag sets.

There are two categories of lists:

1. Itemized lists: 
    1. Itemized lists are made of a group of list items, `<li>` tags grouped either as an ordered list `<ol>` or unordered list `<ul>`.
    2. Use ordered lists to mark a series of items that are presented in a specific and intentional order such as steps in a process. Items grouped in an ordered list `<ol>` will appear numbered by default, but CSS can adjust this.
    3. Use unordered lists to mark a series of items that form a list but don’t have a particular order to them such as a list of features or a list of products that aren’t sorted in any way. Items grouped in an unordered list `<ul>` will appear bulleted by default, but CSS can adjust this.
    4. `<ul>` and `<ol>` may only contain `<li>` elements as their direct children, but `<li>` elements can contain any other markup, including sub-lists. We’ll look at this more later in the course.
2. Definition lists:
    1. Definition lists contain a series of term-and-definition pairs marked by definition term `<dt>` and definition description `<dd>` tags and grouped by a definition list `<dl>` tag.
    2. Use definition lists when you have a set of terms and descriptions such as a vocabulary list or reference list.
    3. `<dl>` tags can only contain `<dt>` and `<dd>` tags as their direct children.

### Inline Content Markup

**2.4: Inline content markup...**
: ...allows for finesse in structuring smaller chunks of content. This larger library of tags add meaning and structure to your content usually inside of block-level elements. A short list of additional tags to know is: `<em>`, `<strong>`, `<q>`, `<cite>`, `<abbr>`, `<sup>`, `<sub>`, `<i>`, and `<b>`.

Now that you have a basic library of typographical markup including headings, paragraphs, and lists, there are a number of tags that add additional finesse.

***Read chapter 2 (pp. 45–48; 51–60) from Duckett.*** Note that p.50 introduces semantic markup, which we discuss in more detail later in this module. My definition differs slightly from the author’s definition.

Here is a small set of useful tags that allows you to add more nuanced meaning to your content:

* `<em>` -- Add emphasis to content. The result by default is for text to be italicized.
* `<strong>` -- Add strong emphasis to content. The result by default is for text to be bolded.
* `<q>` -- Mark a short quotation.
* `<cite>` -- Identify the citation or source for a quotation or reference.
* `<abbr>` -- Mark an abbreviation or acronym.
* `<sup>` -- Mark superscript text such as the “nd” in 2^nd.
* `<sub>` -- Mark subscript text such as the “2” on O<sub>2</sub>.
* `<i>` -- Add italics to content without adding emphasis, such as marking the title of a book. Remember that `<em>` is better to use when italics are added for actual emphasis.
* `<b>` -- Add boldface to content without adding emphasis. Most times, you’ll probably want to use `<strong>` since bolding is often used to mark content that has strong emphasis. But for cases where you simply want to portray a slightly different voice or style through bolding, this tag can be helpful.

Others you may want to look up include `<br/>`, `<hr/>`, `<span>`, `<ins>`, `<del>`, `<dfn>`, `<pre>`, and `<code>`.

### Semantic Markup

**2.5: Semantic markup...**
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

### Block-level vs. Inline Tags

**2.6: Block-level vs. Inline elements**
: Block-level elements such as `<h1>`--`<h6>`, `<p>` fill 100% of their container and allow contents to wrap inside of them. Inline elements such as `<a>`, `<em>`, `<strong>` and others only take up the space their content requires.

As we've covered a lot of tags so far it is important to call out one more way we categorize them. All tags are considered either block-level or inline. 

*Block-level* tags fill 100% of their container's width regardless of how much content they contain. So a paragraph will technically span the width of its container even if the content in that paragraph does not fill that space. But if the content does fill that space, the browser knows to wrap the text from line to line. 

Block-level tags we've covered so far include:

```html
<h1> <h2> <h3> <h4> <h5> <h6> <p> <blockquote> <ul> <ol> <li> <dl> <dt> <dd> 
```

And a few more we'll cover later in the course are:

```html
<div> <header> <footer> <article> <aside> <nav> <section>
```

*Inline tags* only occupy the width that their content requires. So an `<em>` tag only takes up as much space as the words inside that tag take up; an image will naturally take up as much space as needed based on its pixel width and height. 

Inline tags covered so far are:

```html
<b> <i> <em> <strong> <q> <cite> <abbr> <sub> <sup>, etc.
```

And others we'll cover later in the course are:

```html
<a> <img/>
```

This distinction is important to note because it will have an impact on the CSS properties that can be used with these elements, which we will discuss later in the course. For now, ensure you can can categorize tags as they've been distinguished in this module. 

### Prepare to Apply

The application activity that accompanies this module challenges you to apply typography and faux hyperlinks to content from static design comps. Review the first video in this module for a demonstration of this process, and ensure that you can do the following:

* Recognize the difference between paragraphs, headings, and lists.
* Analyze the structure of a set of content, particularly the structure of headings from primary to secondary, to tertiary and beyond.
* Recognize lists in unusual formats such as inline or in grids.
* Apply inline markup to add more refined meaning to content.

### Study Tools

Review the key takeaways from this module. Memorize each of the following tags or attributes and understand what it is used for: 

#### Block-level Content Tags

* `<p>`
* `<h1>` -- `<h6>` (each one counts as a separate tag here)
* `<blockquote>`
* `<ol>`
* `<ul>`
* `<li>`
* `<dl>`
* `<dd>`
* `<dt>`

#### Inline Content Tags

* `<abbr>`
* `<q>`
* `<cite>`
* `<i>`
* `<b>`
* `<em>`
* `<strong>`
* `<sup>`
* `<sub>`

#### Standalone Tags

* `<br/>`
* `<hr/>`