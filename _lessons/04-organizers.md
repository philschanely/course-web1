---
title: "Lesson 4: Grouping and Structural Markup"
layout: lesson
---
### Introduction to Grouping and Structural Markup

Another crucial set of new tags to discuss in this module is a set of structural tags that allow us to further organize our markup. This includes the traditional `<div>` tag as well as a new set of sectioning tags that are available thanks to HTML5.

### HTML5 Structure

**4.1: The <section> tag...**
: ...is used to create a significant group composed of one or more elements. Its derivates, `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, and `<footer>`,  can be used for more specific kinds of groups.

It’s an appropriate time now to discuss the new structural elements that have enhanced how we can organize and group content, and that we will use later to construct layouts: they all relate to the concept of sectioning.

***Read chapters 8 and 17 from Duckett.***

Sectioning means dividing our content up into distinct groups of related content. `<section>` tags (or their derivatives) should be used when…

* A set of content works as a semantic group, and, ideally, begins with a heading
* A set of content fills a particular or important role in the context of the site or page and is worth calling out as a significant section of the site

The basic sectioning tag is the `<section>` tag. Use this tag to create a section if one of the more specific tags (covered shortly) does not seem appropriate. It is also fine to put section tags within section tags to further subdivide content.

The following are derived from the `<section>` tag and provide more specific ways to group content:

* `<main>` -- Almost as open and vague as the `<section>` itself, this tag can be used to contain a typical site's central content that comes between its masthead and footer. More on this to come below...
* `<article>` -- Use this instead of `<section>` when the group of content you’re marking could stand completely on its own without surrounding content. Like the name suggests, a blog entry or article in an online newspaper are good examples of when to use this.
* `<aside>` -- Use this specifically to mark sidebar content or groups of content inside an `<article>` or `<section>` that are not critical, but tangential content. If the surrounding content would be just fine without the group in question, an `<aside>` is a good sectioning tag to use.
* `<header>` – Use this to mark the heading and any other content that forms the overall `<header>` or masthead for a particular set of content. It is common to have an `<article>` grouping its content, and then inside it to have a `<header>`, `<section>`, and `<footer>` dividing the `<article>` content into distinct subsections.
* `<footer>` -- Use this to mark content that provides additional information or resources relating to a section of content. Note as well that `<footer>` and `<header>` can be applied at the page level to mark persistent site masthead (`<header>`) and site information (`<footer>`).
* `<nav>` – Use this to mark groups of important navigation links. Every site that has multiple pages should have at least one `<nav>` section. Note, however, that this should be reserved for important or high-level link groups; it is not necessary for marking links in content.

### Common Page Structure

**4.2: Many sites follow a common structure...**
: ...that includes the following three components: a masthead, a main content area, and a footer.

Consider the following design:

![](/images/organizers-3-parts.png)

What kind of overall structure could this page have? Allow me to suggest a structure that fits it and could be used with small modifications for many other sites:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>[Site/page title goes here]</title>
        <link type="text/css" rel="stylesheet" src="styles.css" />
    </head>
    <body>
        <header id="site-masthead">
            <h1>[site name/brand/logo]</h1>
            <nav id="nav-main">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>[... other page names wrapped in a link]</li>
                </ul>
            </nav>
        </header>
        <section id="site-content">
            <h2>[Page name]</h2>
            [Miscellaneous content; markup will vary based on site]
        </section>
        <footer id="site-info">
            [Miscellaneous footer content; markup will vary based on site]
        </footer>
    </body>
</html>
```

Notice how we have three core groups directly inside `<body>`:

* **A masthead.** The site's branding is the minimum to include here, very often as the `<h1>` for the site. This also often contains the site's navigation. In some cases the `<nav>` is placed outside the `<header>` but this is a very common convention to group them together collectively as the masthead.
* **A main content area.** This has in the past been marked with `<div>` or `<section>` but today the `<main>` tag is the best to use for this large and diverse area between the masthead and the footer. The page name is often directly inside this area as well as any content specific to that page grouped further as needed.
* **A footer.** This often contains a secondary navigation, copyright information, and other content that supports or explains the site itself.

### Distinguish "head..." terms

**4.3: Distinguishing "head..." terms**
: Be sure you can distinguish between the `<head>` tag, the `<header>` tag and the `<h1>` -- `<h6>` tags from each other.

In reference to the `<header>` tag, it is helpful to differentiate this tag from similarly-named but very different tags:

* `<head>`: the required tag that provides information about the whole HTML document. This one goes right inside the root `<html>` element before the `<body>` element. Remember, “every HTML document needs a HEAD and a body.”
* `<h1>` -- `<h6>`: the tags used to mark actual heading text. These can only be placed inside `<body>` and nested inside other container tags like `<div>` tags and sectioning tags. Remember, “headINGS label text.”
* `<header>`: the sectioning tag used to group headings and other content that marks the start of a section or other group. This must also always be inside the `<body>` tag or nested within other tags that are inside `<body>`. Remember “headERS group headings and other frontmatter.”

### Sections vs. Divs

**4.4: Distinguish between when to use `<div>` and when to use `<section>`**
: It is best to use `<div>` for everyday grouping of elements; the `<section>` tags are best reserved for significant groups of content. When in doubt, use a `<div>`.

Many students struggle to know when they should use sectioning tags and when to use <div> tags. In a nutshell, `<section>`, `<main>`, `<article>`, `<aside>`, `<nav>`, `<header>`, and `<footer>` should be used to identify significant groups of content that match their grouped intention. On the other hand, the `<div>` tag can be used to provide less significant grouping. Exactly how browsers interpret these tags is an advanced topic you can explore later in your studies. For now, ask yourself, “is this a major *section* or a minor *div*ision?” If your answer is a, “a major *section*,” then consider further the specific content you are grouping to further choose between `<section>`, `<article>`, `<aside>`, `<nav>`, `<header>`, and `<footer>`. And don’t be afraid to experiment. The activities that accompany this module provide an opportunity for you to practice and get feedback; solutions can be rather subjective.

When the sectioning tags discussed above were released, the `<div>` tag took a much-needed vacation. Before the sectioning tags, the `<div>` was over-worked and underpaid and was used to mark all the different kinds of sections and groups that the `<header>`, `<footer>`, `<aside>`, `<article>`, `<nav>`, and `<section>` tags better represent. As a result, many developers began to replace all `<div>` tags with their more appropriate counterparts in the sectioning tags.

However, `<div>` still has its uses. The key is that sectioning tags should mark significant sections of content—sections that contribute to the overall structure of the document. Imagine you needed to represent your document in an outline form. What would be the main points in the outline? These things should be marked with sectioning tags. Any sub-points in the outline could also be marked with sectioning tags.

There are still many cases where you want to group related content, but that group is not as significant in the scope of the document. In such cases, the `<div>` tag---which stands for “division”---is completely acceptable.

### Lists as Structural Markup

**4.5: List markup can also be used to create structure.**
: While `<ol>` and `<ul>` tags can only contain `<li>` tags as direct children, `<li>` tags can contain any other kind of tag. This can be very useful for creating complex lists with beautiful, semantic structure.

One additional structural markup element is the un-intimidating `<li>` element. Remember `<li>` tags in the context of marking ordered (`<ol>`) or unordered (`<ul>`) lists? While `<ul>` and `<ol>` tags can only contain `<li>` elements, `<li>` tags can contain just about any other tag, from headings and paragraphs to sections and `<div>` tags. Therefore, if a group of content is to be marked that follows a repeating pattern to form a larger list of content, consider using a list.

For example, the homepage of many blog websites presents a list of blog posts, as seen in the image on the following page. Each item in that list includes the name, post date, and an excerpt from the entry.

![](/images/organizers-blog-list.png)

In such cases, markup like this could be used:

```html
<h2>News</h2>
<ul class="blog-feed">
    <li>
        <div class="blog-head">
            <h3>That’s Right, I Said Bootie.</h3>
            <p>Posted on ...</p>
        </div>
        <img src="images/bootie.png" alt="Booties" />
        <div class="blog-short">
            <p>I have a new favorite in the house ...</p>
        </div>
        <div class="blog-foot">
            <p>Posted in ...</p>
            <p>Tagged ...</p>
        </div>
    </li>
    <li>
        <div class="blog-head">
            <h3>First Things First</h3>
            <p>Here in Bredebro ...</p>
        </div>
        <img src="images/fall-boots.png" alt="Fall boots" />
        <div class="blog-short">
            <p>I have a new favorite in the house ...</p>
        </div>
        <div class="blog-foot">
            <p>Posted in ...</p>
            <p>Tagged ...</p>
        </div>
    </li>
    <li>
        <div class="blog-head">
            <h3>Fall 2012 Preview</h3>
            <p>Posted on ...</p>
        </div>
        <img src="images/bootie.png" alt="Booties" />
        <div class="blog-short">
            <p>One of my favorite brands ...</p>
        </div>
        <div class="blog-foot">
            <p>Posted in ...</p>
            <p>Tagged ...</p>
        </div>
    </li>
</ul>
```

Another example on a smaller scale is a product list, where several pieces of information about a product are presented in a repeatable pattern:

![](/images/organizers-product-list.png)

```html
<h2>Products</h2>
<h3>Dress</h3>
<ul>
    <li>
        <img class="thumb" src="images/products/boot-1451.jpg" />
        <h4 class="name">Birgmingham Plain Toe Boot GTX</h4>
        <p class="price">$230.00</p>
    </li>
    <li>
        <img class="thumb" src="images/products/slipon-2954.jpg" />
        <h4 class="name">Pedroso Slip On</h4>
        <p class="price">$230.00</p>
    </li>
    <li>
        <img class="thumb" src="images/products/shoe-453278.jpg" />
        <h4 class="name">Pedroso Tie</h4>
        <p class="price">$230.00</p>
    </li>
</ul>
<h3>Casual</h3>
<ul>
    <li>
        <img class="thumb" src="images/products/shoe-3684.jpg" />
        <h4 class="name">Turn GTX Tie</h4>
        <p class="price">$190.00</p>
    </li>
    <li>
        <img class="thumb" src="images/products/shoe-4965875.jpg" />
        <h4 class="name">Street Luxe</h4>
        <p class="price">$180.00</p>
    </li>
    <li>
        <img class="thumb" src="images/products/shoe-9464246.jpg" />
        <h4 class="name">Walker 2.0 Tie</h4>
        <p class="price">$180.00</p>
    </li>
</ul>
<h3>Outdoor</h3>
<ul>
    <li>
        <img class="thumb" src="images/products/shoe-8466.jpg" />
        <h4 class="name">Turn GTX Tie</h4>
        <p class="price">$230.00</p>
    </li>
    <li>
        <img class="thumb" src="images/products/shoe-34586.jpg" />
        <h4 class="name">Track II Low</h4>
        <p class="price">$210.00</p>
    </li>
</ul>
```


### Prepare to Apply

This module’s application activity challenges you to see the invisible structures that group content into layout and conventional elements. Ensure that you can do the following:

* Recognize and label common layout conventions in design comps.
* Use `<div>` tags and the various sectioning tags to organize and group layout elements.

### Study Tools

Review the key takeaways from this module. Memorize each of the following tags or attributes and understand what they are used for:

* `<div>`
* `<section>`
* `<main>`
* `<nav>`
* `<header>`
* `<footer>`
* `<article>`
* `<aside>`
