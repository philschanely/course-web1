---
layout: lesson
title:  "Lesson 1: Introduction to HTML"
---
### Getting Started with Technical Details

To cover many of the technical logistics, we’ll use a second textbook, John Duckett’s beautiful book *HTML & CSS*. I’ll supplement this with video demonstrations and some written additions. We’ll always focus each module around practical application—immediately, as you apply skills to a simulated activity in the module, and collectively, as you build your first complete website throughout the course.

***Read the 'Introduction' chapter from Duckett.***

Now, try answering these questions on your own:

* What is the purpose of HTML?
* What is the purpose of CSS?
* How does the author define the terms web browser, web server, device, and screen reader?
* How do HTML5 and CSS3 relate to HTML and CSS?
* What steps occur when a user accesses a web page?

### Categorizing Web File Types

Now let’s spend a little time talking about the different kinds of files used to create websites and how to categorize them.

**1.1: File extensions...**
: ...establish the format or type of a given file. They are placed after the name of the file and begin with a `.` (period).

Ever since you first learned to use a computer, you’ve been working with different kinds of files. Think about the programs you use often. What kinds of files are you aware of that you work with frequently? A few that come to my mind are Microsoft Word files, Microsoft Excel files, Adobe Acrobat PDF files, and JPEG image files. Do you know how to distinguish each of these file types? If you look at a folder of files on your computer you should see that there are two or three parts to each file:

* *The icon or thumbnail of the file:* Many modern operating systems such as Microsoft Windows and Apple’s Mac OSX first present a small icon for a general file type or a smaller thumbnail version of the actual content of the file.
* *The name of the file:* The way we distinguish one file from another is by giving it a name. This helps us remember what we put in the file. In this module we’ll talk about how to name files specifically to use on the web as there are some rules we must follow so that our files will work consistently in different settings.
* *The file extension:* Each different kind of file is distinguished by a unique two- to four-letter acronym that is added after a file name and separated from it by a period. When we refer to a file extension, we’ll usually express it with the period, such as `.doc` or `.pdf`.

**1.2: Common file types on the web**
: The most common files on the web are categorized as documents, scripts, and images. It is important to recognize documents we use most often such as `.html`, scripts such as `.js`, `.css`, and images such as `.png`, `.gif`, and `.jpg`.

Recognizing common web file extensions is key to distinguishing between different file types and understanding the files that make up a website. 

These file types can be grouped into one of three categories:

* *Documents:* Content that users access and view is contained in a document. HTML and XML files are two examples of web documents. Other file types such as PDF and Word are also considered documents. Note however, that HTML and XML files are built with code that you manage directly in any text editor, whereas PDF and Word are made of proprietary code and can only be viewed and edited in their corresponding applications or through browser plugins.
* *Scripts:* Files that contain non-content code such as CSS scripts or JavaScript programs are called scripts and are used to provide instructions for software to follow. For example, CSS provides instructions to browsers regarding how content should be displayed and JavaScript provides instructions for how browsers should respond when users interact with elements on the page. These can also be edited in a text editor, but they are not accessed directly by the user. Instead, HTML files link to them to enhance their appearance (CSS) or to add functionality (JavaScript).
* *Images:* Files that contain visual graphics such as line art or photographs are called images.

As you collect and create files to use on the web, they should typically be one of the formats from the previous table. However, linked documents can also be saved in other standard formats, especially PDF or any Microsoft Office formats (`.doc`, `.xls`, `.ppt`, etc.) since a vast majority of users will be able to open these kinds of files. Avoid specialized file formats unless you are sure that the website’s audience will know which program to use to open them.

Here are some common files you will encounter when working with the web:

| File type  | Category | Extension | How it’s used |
|:-----------|:---------|:----------|:--|
| HTML       | Document | `.html`   | Web pages are saved in this format and we introduce it later in this lesson. An HTML file will contain markup and references to other files such as CSS style sheets, JavaScript files, images, and other documents hyperlinked in the content. |
| CSS        | Script   | `.css`    | Cascading Style Sheets (covered in later this course) |
| JavaScript | Script   | `.js`     | Code for JavaScript interactions (covered in another course) are placed in these files. You might use some tools in this course that use `.js` files. |
| XML        | Document | `.xml`    | Extensible Markup Language (XML) files allow a more generic way to share content. HTML is based on this format and some tools you run into may use this format. |
| GIF        | Image    | `.gif`    | A raster-based image file format you’ll learn more about later in this course in the module that covers images for the web. |
| JPEG       | Image    | `.jpg`    | A raster-based image file format you’ll learn more about later in this course in the module that covers images for the web. |
| PNG        | Image    | `.png`    | A raster-based image file format you’ll learn more about later in this course in the module that covers images for the web. |
| SVG        | Image    | `.svg`    | A vector-based image file format you’ll learn more about later in this course in the module that covers images for the web. |	

### Creating Web Files

Now that you have learned a set of common files used on the web, the next thing to consider is how to appropriately name files for the web.

**1.3: Rules for naming files** 
: We must follow specific rules when we name files for the web, including that we must avoid spaces and special characters and not start file names with numbers or capital letters.

What makes file names for the web different from file names for any other purpose? People access web files from a web server from anywhere in the world. Web servers all have different standards for how they access files, and some are pickier than others. Therefore, to ensure your files will work on any server, it is best to use the most restrictive context for how we name our files.

Here are the rules:

* File names *are allowed to contain...*
    * lowercase and uppercase letters
    * numbers
    * underscores
    * hyphens
* File names *are not allowed to contain...*
    * Special characters or symbols. Characters such as `@`, `$`, `#`, `&` should not be used in filenames. Instead, spell out the symbol, use an alphabetical equivalent for such a symbol, or come up with a different file name altogether.
    * Spaces characters. Instead, use `-` (hyphens), `_` (underscores), or capital letters to separate words (we’ll talk more about these methods soon).
* File names *should start with a lowercase letter* rather than a capital letter, a number, a hyphen, or an underscore.

**1.4: Avoiding spaces in filenames**
: Instead of spaces in filenames we can use hyphens, underscore or conventions such as camelCase to separate words.

Here are some common ways to deal with replacing spaces in file names:

* *Hyphen method:* Replace all spaces with hyphens and use all lowercase letters:
`hiking in Switzerland.html` becomes `hiking-in-switzerland.html`
* *Underscore method:* Replace all spaces with underscores and use all lowercase letters: 
`my favorite books.html` becomes `my_favorite_books.html`
* *camelCase method:* Remove all spaces and capitalize the first letter of each new word after the first word:
`cookie recipes handout.pdf` becomes `cookieRecipesHandout.pdf`

Each of these methods is acceptable for this course and for use on the web. Choose the one you prefer and use it consistently.

So as we’re approaching files that we want to use in a website, we have two scenarios to consider:

* *Working with existing files:* Quite often we will need to take existing files such as images, PDFs, and Word documents and link to them from within a web page.
    * Remember to evaluate each file’s name and rename any that are not valid for use on the web.
    * Sometimes the client will provide file types that are not best to use for the web. We will need to convert the file to a format that is more appropriate to use on the web. For example, if a client provides a Photoshop file for an image to use in a web page, we should convert that image to one of the web-appropriate file formats and name it with a web-safe filename.
* *Creating new files:* As we build a site we will most likely also create a series of new files such as images, HTML documents, and CSS scripts. In each case, we must remember two things: first we must provide a valid file name, and second, we must apply the appropriate file extension. 

### Creating a Site File and Folder Structure

**1.5 Root folder and homepage**
: A valid website will contain at least a single homepage named `index.html` along with any other files needed. All these will be contained in a single root folder and subfolders as needed. 

Now that you know how to name files and ensure that they are in the appropriate format for the web, let’s talk about how to set up the files and folders commonly used in a website.

* All website files for a given site must be contained by one folder. We call this the site’s root folder. You can organize into subfolders inside the root folder. The point is that any files that are a part of your site must be placed inside this folder or its subfolders.
* A website’s home page file is always called index.html. In fact, any file that you want to be the default file inside a folder can be called index.html. But as we set up a new website structure we’ll assume there will be a home page inside the root folder and create this file right away.
* A site’s style sheet can be called styles.css to start. We won’t talk much about CSS until later in the course, but go ahead and create this file so it’s there when you need it. Over time you might name it something else or create several style sheets, but this is at least a start.
* All images for a site are placed inside a folder called images. Create this folder from the start and place any images you create in this folder.
* All linked documents should be placed inside a folder called docs. Also create this folder from the start so you can place any linked documents therein.
* All HTML documents that make up the site should be placed in the root folder or organized into subfolders as necessary.

Here is a visual example of what a folder structure and file set for a website should look like:

![](/images/basic-site.png)

### Introduction to HTML

***Now read chapter 1 from Duckett to learn more about HTML and basic file structure.***

**1.6 Markup (tags)...**
: are sets of characters that add structure to plain text and result in formatting in a web browser.

Having read about markup in the Duckett text, allow me to suggest a definition of a crucial term:

> *Markup* is a set of special characters called *tags* that allow web designers to add structure to plain text content so that web browsers can apply visual formatting to the content.

**1.7 Elements...**
: ...are complete sets of markup that include an opening tag, closing tag, and content in-between.

Content that has been marked with tags correctly is considered an element in HTML. Elements tend to have the following structure:

![](/images/html-element.svg)

This applies to most HTML tags, but there are a few exceptions. These are called self-closing tags. They look like this:

`<br/>`

Self-closing tags include the tags listed below and are allowed to do this because they don’t have any text content:

* `<meta/>` – metadata settings for the current HTML document
* `<link/>` – references to external scripts such as CSS
* `<br/>` – soft returns or line breaks
* `<hr/>` – horizontal rules
* `<img/>` – images

### Required Document Structure

**1.8 Three tags every HTML document should contain**
: A valid HTML document contains one `<html>` element that contains one `<head>` (for information about the page) followed by one `<body>` (for actual content of the page).

HTML documents must all contain the following basic structure to be considered valid documents:

* `<html>` -- This tag wraps around the entire HTML document and is called the root element.
* `<head>` -- This tag goes directly inside the html tag and contains invisible information about the document, links to additional scripts, and sometimes embedded scripts. The `<title>` element is also placed here to provide the formal title of the document. Other tags such as `<meta/>`, `<link/>`, `<script>`, and `<style>` will be discussed later in the course.
* `<body>` -- This tag follows the head tag directly inside `<html>` and contains all visible content for the document. You’ll spend most of your time with markup inside this element.

These three elements are really the essential backbone of HTML documents. For completeness, note that you’ll often see the following:

* `<!DOCTYPE html>` -- This is placed before the opening HTML tag and is a picky setting that tells the browser this is indeed an HTML document. It is optional, but good to include. 
* `<meta charset="UTF-8" />` -- This is one of many meta tag settings allowed inside the `<head>` tag and specifies what set of text characters this document should expect to use. It is also optional but recommended.

Therefore, a complete document structure is...

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

### Rules of Markup

**1.9: Rule One---The Element Rule**
: All tags must open and close correctly.

Here is the first basic rule of markup: *All tags must open and close correctly.*

Simple, right? Most of the tags you’ll learn are normal tags that must have an opening tag and a matching closing tag. The only exceptions are the self-closing tags listed above. And you’re limited to the specific set of tags that make up the HTML library; you can’t invent your own tags.

Tags that have an error of some kind are called *invalid*. So you have an invalid element if...

* You forget to include all required parts of the tag or accidentally add unnecessary spaces. Students sometimes leave off the `>` in opening or closing tags, omit the `/` in closing tags, or insert extra spaces after `<` in either tag.
* You forget an opening tag.
* You forget a closing tag.
* You mismatch an opening tag and closing tag.
* You use a tag that is not a true HTML tag either because you misspelled it or because it doesn’t exist to begin with. For example, I’ve seen several students over the years try to create tags such as `<p1>`, `<p2>`, `<p3>`, or `<h7>`, `<h8>`, or `<heading>`. These are not real HTML tags, so they are considered invalid markup.

**1.10: Rule Two--The Nesting Rule**
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

**1.11: Rule Three---The Attribute Rule**
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

**1.12: The `id` and `class` Attributes...**
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

### Prepare to Apply

Now you’re ready to apply what you’ve learned. Before beginning this module’s application activity, make sure you can do the following:

* Create the basic files and folders that make up a conventional website.
* Create the basic document structure in an HTML file.

### Study Tools

Review the key takeaways from this module. Memorize each of the following tags or attributes and understand what they are used for: 

* `<!DOCTYPE html>`
* `<html>`
* `<head>`
* `<meta charset="utf-8" />`
* `<body>`
* `id`
* `class`