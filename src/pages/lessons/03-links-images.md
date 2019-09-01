---
title: "Links and Images"
type: lessons
number: 3
cover: "https://source.unsplash.com/J90zM9OtBXY"
---
import { Subpage, Callout } from "../../course-components";

<Subpage slug="hyperlinks">

### Hyperlinks

<Callout number="3.1" term="Hyperlinks" color="alternate">

Hyperlinks are created with the `<a>` tag. This usually wraps some HTML content such as text or an image that acts as the anchor for the link.

</Callout>

Markup that gives structure to content provides a foundation for building web pages. But what makes web documents different from other documents is that web documents can include hyperlinks that connect them to each other.

<Callout lead={true} color="secondary">

Read pp. 74-80 and 85-90 in Ch.4 of Duckett

<small>to learn some of the basics about using the <code>&lt;a&gt;</code> tag and its attributes.</small>

</Callout>

Chapter 4 covers the `<a>` tag and how to link to websites and pages within your own website. To provide you additional practice with these concepts, let’s start by looking more at how to add `<a>` tags and configure them to point to a website on the Internet.

First of all, note that when we create hyperlinks we tend to call them just "links," and they are created with the `<a>` tag. This tag technically represents a "hyperlink anchor," since such a link is the launching point or anchor from which a user clicks to connect to another site, page, or document. However, there are a few other tags that could be confused with the `<a>` tag.

Compare the `<a>` tag to two other tags that you might mistake as hyperlinks:

| Tag | What it stands for | Purpose |
|:---|:---|:---|
| `<a>` | Hyperlink anchor	 | This creates actual hyperlink anchors, commonly referred to as "links." Usually when we talk casually about "links" we really mean hyperlinks, or `<a>` tags. |
| `<link/>` | Script link | This is placed in the `<head>` element in order to import resources such as CSS style sheets. This is NOT a hyperlink or used to create links in the `<body>` tag even though it seems obviously named as a "link." We will call these "Script Links" or "head link tags." |
| `<li>` | List item	 | This marks items in a list. It is NOT at all related to a link, even though it could appear to be an abbreviation for “link.” They represent “list item.” And for the record, we usually pronounce this tag as an an acronym "l-i" (or "el-eye") not "lee." |

So make sure you understand that when you want to create a link in your content you use the `<a>` tag, not
`<link/>` or `<li>`. These serve other purposes.
Observe each of these tags used correctly in the following code snippet:

```html
<html>
    <head>
        <title>Testing some tags</title>
        <link type="text/css" rel="stylesheet" src="styles.css" />
    </head>
    <body>
        <ol>
            <li>This is item 1 in a list.</li>
            <li>This is item 2 in a list.</li>
        </ol>
        <p><a href="http://cedarville.edu">This is a hyperlink
           to the Cedarville homepage.</a></p>   
    </body>
</html>
```

</Subpage>
<Subpage slug="paths">

### Pointing to Files with Paths

<Callout number="3.2" term="'href' and Paths" color="alternate">

The `href` attribute must be set in order for a hyperlink to point to the desired file or URL.

</Callout>

Now that you grasp the difference between `<a>` tags and other tags newbies often mistake for hyperlinks, let’s talk about how to configure them to point to websites using the href attribute. This stands for hyperlink reference and it indicates which website, page, or file our `<a>` tag should point to. The attribute value for the href attribute is referred to as a path as it indicates the address from here to some location on the Internet. So in this example...

```html
<a href="http://www.example.com">Click me</a>
```

...when the user clicks the link “Click me” they will be taken to `http://www.example.com`. As discussed in chapter 4 from Duckett, this is an absolute URL or absolute path, pointing outside of whatever site this link is actually in, to the default web page for the site `http://www.example.com`. Whenever we point to a website other than our own, make sure that...

* the path always begins with `http://`
* the domain name and any specific page is spelled correctly

A helpful tip to ensure you get the right path is to actually visit the desired website in a browser, and then copy and paste the URL into your href attribute. Then just ensure that it starts with `http://`.

<Callout number="3.3" term="Relative paths..." color="alternate">

...point from one file to another file within the same computer directory, be it further into a folder structure, or a few folders up from the current file.

</Callout>

<Callout lead={true} color="secondary">

Read pp. 81-84 and 91-92 in Ch. 4 of Duckett

<small>to learn more about linking to files using paths and to see a summary of this chapter on links.</small>

</Callout>

Duckett goes on in chapter 4 to describe relative URLs or relative paths which allow us to point to files within our own site. Examine the chart that follows for more details and examples.

* For files that reside in the same folder as the one from which we are pointing, we simply enter the file name and extension as the link path.

    Here, the path from `index.html` to `styles.css` is: `styles.css`

    ![](/images/path-direct.png)

* If the file is deeper inside a folder and that folder is inside the same folder as the one from which we are pointing, we start by naming that folder, then entering a `/` forward slash, then listing the name of the file in that folder.

    Here, the path from `index.html` to `list.html` is: `products/list.html`

    ![](/images/path-down.png)

* If the file is several folders in, just continue to list each progressive folder.

    Here, the path from `index.html` to `clogs.html` is: `products/men/shoes/clogs.html`

    ![](/images/path-multi-down.png)

* If the file is in a folder that is outside of the current file’s folder, start with `../` which moves out one folder. Continue to move out successive layers with more `../` if needed.

    Here, the path from index.html to list.html is: `../list.html`

    ![](/images/path-up.png)

* Finally, enter the folder name to begin moving back inward again. Continue adding folders until you reach the desired folder and then enter the desired file name as in the first point above.

    Here, the path from the `index.html` in the `men` folder to `catalogue.pdf` is: `../../docs/catalogue.pdf.	`

    ![](/images/path-up-and-down.png)

See paths explained in this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/jsh1m-34ieQ?list=PLuOViGmL7TfXlFl74Hf84NwSQPR_LDR0d" frameborder="0" allowfullscreen></iframe>

<Callout number="3.4" term="'id' references and placeholder links" color="alternate">

The `#` (pound sign) can be used in `href` attributes as a placeholder or to point to another element in the document using its `id` attribute.

</Callout>

We can also link within a document by pointing to elements that have an id value. Imagine you have document that has an `<h1>` at the very top with an id of brand. Also imagine it is a very long page. In order to help users quickly get back to the top of the page, you could put a hyperlink at the bottom like this:

```html
<a href="#brand">Back to top</a>
```

Notice that the href attribute here simply points to the element that has an id of brand. So when a user clicks this link, they'll be taken right back up to the top of the document where that `<h1>` is located. You can use this principle to link to any element in a document as long as it has an id set.

Note as well that if you want to enter a link to a file but you don't know where the file is yet or you haven't created it yet, the best thing to do is provide just a # as the href as a placeholder. The result is that the link appears in the browser, but when the user clicks on it, they're not taken anywhere. Just don't forget to come back later and provide an actual path!

</Subpage>
<Subpage slug="image-markup">

### Image Markup

#### Preparing Images for the web

Watch this short introduction to preparing images to use in a website.

<iframe width="560" height="315" src="https://www.youtube.com/embed/BQ3xQIR-j1c" frameborder="0" allowfullscreen></iframe>

#### The `<img/>` tag

<Callout number="3.5" term="Images" color="alternate">

Images are created with the `<img/>` tag and the desired image is indicating using the `src` attribute.

</Callout>

Our final area of focus is in creating markup that allows us to incorporate image files into our web pages.

<Callout lead={true} color="secondary">

Read Ch. 5 from Duckett.

</Callout>

So far we've talked about paths in the context of adding hyperlinks from one document to the next. Chapter 5 from Duckett elaborates on how to use paths and the `<img/>` tag in order to insert images into our markup. The `<img/>` tag is one of those tricky self-closing tags; so we DO NOT do this:

`<img></img>`

Instead we do this:

`<img/>`

But just like this, we have no idea which image is to be inserted. So we use the `src` attribute to provide the path to the desired image:

`<img src="images/logo.png" />`

This assumes that in the current folder there is another folder called `images` and in it is an image, `logo.png`.

#### The `alt` Attribute

<Callout number="3.6" term="The 'alt' attribute..." color="alternate">

...is used on images particularly to provide plain text explanations of the image or text content in the image.

</Callout>

While Duckett discusses `<img/>` elements and their attributes in more detail, one you should note in particular is the `alt` attribute. This allows us to provide alternate text for an image. There are several instances where this is necessary:

* Provide a caption for an image if the image’s surrounding content does not provide this. This also allows search engines to discover content of images in case this is relevant for your users.
* Provide fallback text for an image that contains text so that if the image is not available, the user will see text rather than just a broken image icon.
* It is a best practice to provide the `alt` attribute for every image you insert. The only common exceptions are when the image is purely decorative (it adds no content to the page, but adds a visual embellishment) or when surrounding text provides a clear enough caption for the image.

#### Content in Images

<Callout number="3.7" term="Images with text content" color="alternate">

When choosing which images to include in your markup versus apply using CSS, distinguish between images that contribute content vs. embellishment. Ensure that images with significant text content are marked semantically and be sure to record the text content of the image using the `alt` attribute.

</Callout>

We can do a lot today with CSS, especially when it comes to creating graphical layouts. We'll learn more about this later in the course. But now, as you learn how to include images in your content, it is important to consider what images you should include in your markup versus leave out with the intent of applying with with CSS later.

As you study a document to mark up and encounter images, ask yourself whether the image contributes to the content or embellishes through decoration. Leave out any images that might be consider decoration or could be part of the background (textures, patterns, large background images, etc.).

Be on the watch specifically for text content in images. As mentioned earlier, the `<img/>` tag allows text content to be recorded in the alt attribute. But why would text be in an image to begin with? Sometimes web designers prefer to create heading text as images so as to have more control of the font and related properties. When that information is frozen as pixels in an image (or line art in an SVG graphic) the the designer can maintain control of kerning, color, and font properties. This is not recommended today since we have access to many more fonts that we used to.

One very common set of content to include as an image is the company's logo or wordmark, since this is often desired to be 100% consistent for branding reasons. This will also often be the worthy name of the site, so it might be best marked with an `<h1>` tag. The `<img/>` tag can go inside the `<h1>`. Then be sure to provide the text content of the logo in the alt attribute of the `<img/>` tag. Consider this markup for the Cedarville University website's masthead as a pattern that is used in many sites:

![](/images/cu-masthead.png)

```html
<header id="site-masthead">
    <h1>
        <img src="images/logo.png"
             alt="Cedarville University" />
    </h1>
    <nav id="nav-main">...</nav>
</header>
```

#### Other Image Attributes and Markup

Here are a few more comments on content from chapter 5:

* Be sure to check out the `<figure>` and `<figcaption>` elements Duckett discusses near the end of chapter 5 for a modern example of how to provide captions for images.
* I consider it helpful to leave off any `width` or `height` attributes on images. This allows you to instead control its dimensions with CSS, making it flexible to scale and resize on different devices. At the time this module was written the field was in a transitional period regarding best practice for flexible images.

#### Placeholder Images

<Callout number="3.8" term="Placeholders for images" color="alternate">

If you don't have an actual image yet, you can provide a `src` path of `#` for a placeholder or make use of the service provided at `http://placehold.it`.

</Callout>

Sometimes we want to add an image placeholder in our markup because either we don’t know where the image we want is, or we simply haven’t generated it yet. In such cases, there are two approaches you can use. The simplest is to use a hash for the source instead of a valid path:

```html
<img src="#" alt="Candid shot of the kids at the pool" />
```

If we look at this in a browser we’ll see an icon representing a broken link, but that is OK; we’ll be placing the actual image path in later. We’d certainly want to replace this `#` before we send anything to a client.

Some prefer a more intentional look, so another option is to use a service such as placehold.it like this:

```html
<img src="http://placehold.it/300x200"
     alt="Candid shot of the kids at the pool" />
```

In this case, we’re linking to a dynamic image from another website that shows a grey box with the text `300x200` and sized by default at 300 pixels wide and 200 pixels high. Learn more about this service and how to use it at [placehold.it »](http://placehold.it/).

#### Choosing Image Types

<Callout number="3.9" term="Which Images Types to Use" color="alternate">

JPEG and PNG are great image types for the web, depending on whether or not you need transparency in an image. GIF is another good option when an image has only a few colors.

</Callout>

Later in the course we'll talk more about the process by which we export images or "slices" from a design comp in Sketch which we call "slicing." As you learned about several image formats in the Duckett text, let me suggest a quick process you can walk through when choosing image types:

* Does the image require transparency?
    * If yes, does the image require either smooth colors such as in photography or gradients, or smooth transparency where some pixels are semitransparent?
        * If yes to any of these, choose the PNG format.
        * If no to all, choose the GIF format.
    * If no, does the image require smooth colors such as in photography or gradients?
        * If yes use either PNG or JPEG.
        * If no consider GIF.

Bottom line: I typically use either PNG or JPEG depending on whether transparency is needed. Only when an image has just a few colors will I opt to use a GIF.

</Subpage>
<Subpage slug="planning-research-discovery">

### Website Planning, Research, and Discovery

As part of our course's purpose is to discuss contemporary practices in web design, we'll use Brian Miller's fantastic text, *Above the Fold* as a primary source. We begin our in-depth study with an excerpt from Chapter 1. In this chapter, Miller lays out the overall process we go through to plan a website. We'll read just the section related to understanding a given website project.

<Callout lead={true} color="secondary">

Read pp. 22–29 in Ch. 1 of Miller.

</Callout>

Let's leave this chapter for now in order to look more closely at what can go into understanding a website's needs or requirements from the user's standpoint.

</Subpage>
<Subpage slug="elements-of-usability">

### Elements of Usability

A major initiative in contemporary web design is to focus on the user's needs and represent them in any business discussion. This often takes a concerted effort on our part, because, ironically, business owners are often thinking about their own needs, preferences, or interests for their company's website. Chapter 2 from Miller provides an excellent overview of the study of usability. When we plan in this fashion, we can think beyond the day-to-day grind of building sites and instead show a care for the actual experience users have when visiting a site.

<Callout lead={true} color="secondary">

Read Ch. 2 from Miller.

</Callout>

We benefit greatly from determining the business goals for a website. We benefit even more from understanding how those goals line up with actual user needs.

Think back to the deliverables covered in your reading from Chapter 1. SWOT Analysis can bring both of these elements together, reflecting those strengths, weaknesses, opportunities, and threats from both the business and the user's perspective. A Creative Brief is a great way to outline your understanding and expectations for a project to ensure you and your client are on the same page before starting.

</Subpage>
<Subpage slug="study-tools">

### Study Tools

Ensure that you can do the following:

* Create valid relative paths
* Add placeholder images
* Add images to content with correct paths
* User `alt` attributes correctly

Review the key takeaways from this module. Memorize each of the following tags or attributes and understand what they are used for:

* `<a>` and `href`
* `<img/>`, `src`, and `alt`

Prepare answers to the following questions as you study for the exam covering this lesson:

* Describe the nature and purpose of SWOT Analysis.
* Describe the nature and purpose of a Creative Brief in the context of web design.
* Miller outlines seven broad factors that usability professionals consider. List and describe them in your own words.
* What is persistent navigation and what are some things Miller describes that we can do to make them clear and usable?
* What purpose do breadcrumbs navigation play in usability?
* What are some principles Miller describes for making buttons and links usable?
* What factors are involved in making site search features usable?
* How do form submissions, error messages, and the use of surprise and delight relate to each other in relation to user experience?

</Subpage>
