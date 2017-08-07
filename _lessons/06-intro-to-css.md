---
title: "Lesson 6: Introduction to CSS"
layout: lesson
---
### Introduction

In this module we make a dramatic shift in our focus. Assuming we have solid, semantic markup formatting our content, we can now consider how to alter that content’s appearance to build functional and beautiful websites that meet our users’ needs. We take our first deep look at CSS on the technical side, and dive further into design principles by looking at elements of web design.

### Cascading Style Sheets

**6.1 CSS scripts are placed...**
: ...either in a `<style>` element in an HTML document or in a separate `.css` file and linked to an HTML document using the `<link/>` element.

***Read chapter 10 (pp. 226-236; 241) from Duckett*** for an explanation of CSS, its basic syntax, and two methods for creating style sheets and incorporating them into a web page. This chapter, “Introducing CSS,” does an excellent job illustrating the building blocks of working with CSS.

Remember that CSS, Cascading Style Sheet, is a different language from HTML; but the two work hand-in-hand. CSS is used to apply presentational adjustments to existing HTML. A script that contains only CSS is often called a “style sheet.” In order to apply CSS, you have to do at least two things:

1. Add CSS code to a web page either by…
    * embedding it directly into an HTML document in a `<style>` element, or
    * importing a separate style sheet using the `<link/>` element.
2. Write valid CSS code in one of the two locations mentioned above that selects HTML elements and applies modifications to their appearance.

Duckett explained sufficiently how to do both of these.

**6.2 Selectors...**
: ...are part of the CSS rule that allow us to select certain elements from an HTML document that we desire to style. The most common kinds of selectors are tag selectors, `class` selectors, `id` selectors, nested selectors.

***Read chapter 10 (pp. 237-240; 242-244) from Duckett*** for details about the different kinds of selectors we use to target specific HTML elements and apply styles to them and for an explanation of the concepts of the cascade and inheritance.

Duckett’s overview of selector types in this chapter provides a helpful introduction to the assortment of selectors with which you’ll be working. Part of the challenge here is to identify first what element or set of elements you want to style. Use these questions as a guide:

* Do I want to style one very specific element or a group of similar elements?
    * If one, use an `id` selector and ensure that a matching `id` attribute is entered on that element’s opening tag.
    * If more than one, keep asking...
* Do I want to style elements in a specific context, or, generally, all instances of a certain element?
    * If all of an element, such as all paragraphs or the `<body>` tag, use a single tag selector such as `p` or `body`.
    * If a more specific context is needed, keep asking...
* Do the elements I want to style have a common characteristic such as...
    * a common parent element? Use a nested selector such as...

        ```css
ul li {}
        ```

        (for all `<li>` tags inside a `<ul>` tag)

    * a common class applied? Use a class selector such as...

        ```css
.blog-summary {}
        ```

        (for all elements that have a class of blog-summary)

    * a combination of these? Use a combination of nested selectors, tag selectors, and `id` and/or `class` selectors as needed. For example...
        * to style all paragraphs inside a container that has a `class` of `blog-summary`, use:

            ```css
.blog-summary p {}
            ```

        * to style all `<a>` tags inside a `<nav>` tag that is inside the element that has an `id` of `masthead`, use:

            ```css
#masthead nav a {}
            ```

**6.3 Read selectors from the right to the left...**
: ...to ensure you grasp what element is selected and the context in which that element is expected to be.

The other challenge is being able to talk about selectors and to interpret selector prompts. The first funny thing about this is that we describe a selector from the right to the left, starting with the element that is being styled and moving back to its outer elements.

For example...

* this rule selects a paragraph:

    ```css
p {}
    ```

* this rule selects a paragraph that is inside a `<div>`:

    ```css
div p {}
    ```

* this rule selects a paragraph that is inside another element with a `class` of `blog-summary`:

    ```css
.blog-summary p {}
    ```

* this rule selects a paragraph with a `class` of `intro` and that is inside of another element with a `class` of `blog-summary`:

    ```css
.blog-summary p.intro {}
    ```

Do you see a pattern? First we describe that target element (and any attributes attached to it) and then move backward to describe outer elements. Also note that we describe each element fully before moving to another element. Let’s take apart the last example piece by piece and build the selector as we go.

**Prompt:** Select a paragraph with a `class` of `intro` that is inside of another element with a `class` of
`blog-summary`:

1. Select a paragraph...

    ```css
p {}
    ```

2. Select a paragraph with a `class` of `intro`...

    ```css
p.intro {}
    ```

3. Select a paragraph with a `class` of `intro` that is inside of another element (we’ll use `?` for now to represent “another element”)...

    ```css
? p.intro {}
    ```

4. Select a paragraph with a `class` of `intro` that is inside of another element with a `class` of
`blog-summary`...

    ```css
.blog-summary p.intro {}
    ```

CSS is a major topic, and our transition into this component of the technical side of web design cannot be stressed enough. We’re definitely moving from thinking just about the nature of the content on our page to how that content looks. Selecting what we want and in order to provide the desired appearance is crucial to moving forward.

### Specificity

**6.4 When selectors conflict...**
: the rules of *specificity* determine which styles get applied. The more specific selector will win over less specific selectors.

Duckett discusses several crucial CSS concepts on pages 239-240. The concepts of cascade and inheritance are discussed. Under cascade Duckett introduces the subject of specificity, which addresses how conflicts in style settings between two rules are resolved based on which rule has a more specific selector.

Basically, the more specific the selector, the more power the rule has in any conflicts. Specificity is governed by the number of tags, classes, and ids used in a selector.

First, a selector with more parts of a certain type wins over one with fewer parts. So the following selectors begin simple and get more specific just because we add more parts tot he selector—but all three style `<p>` tags:

* This selects all `<p>` tags in the document:

    ```css
p {}
    ```

* This selects all `<p>` tags that are somewhere inside a `<div>` tag:

    ```css
div p {}
    ```

* This selects all `<p>` tags that are somewhere inside `<div>` tags that itself somewhere inside a
`<section>` tag:

    ```css
section div p {}
    ```

**6.5 Specificity is determined...**
: by counting the number of tags, `class`es and `id`s in a selector. `id`s overpower `class`es, and `class`es overpower tags. If these simple power levels don’t make a clear winner, the more of a power level a selector has, the greater specificity it possesses.

Second, `id` selectors trump `class` selectors, which in turn trump tag selectors.

Consider this markup:

```html
<p>Line 1</p>
<article class="main-article">
    <div id="intro">
        <p>Line 2</p>
    </div>
    <p>Line 3</p>
</article>
```

Consider this set of styles:

```css
div p { color:blue; }
.main-article p { color:green; }
#intro p { color:red; }
```

All three of these affect paragraphs, but each gets more specific—even though they all have two parts. The `#intro` context is much more specific than the `.main-article` context, which is itself more specific than just the `div` context. Remember the rules for when we can use `class` attributes versus `id` attributes: `class` attributes can be applied to any number of elements, but `id` attributes can only be applied to a single element. Therefore, when we use an `id` selector we can be sure we’re dealing with a very specific element or its children. On the other hand a `class` selector might apply to several contexts. Finally, tags can be used infinitely in a document and no `id` or `class` is required on them, so a tag selector is the least specific of all.

So how will this render? Here’s what the browser shows:

![](/images/specificity.png)

Can you figure out why each line is colored the way it is?

Here’s an explanation:

* Line 1 is not in any `<div>` or contained by anything with a `class` or `id`, so it gets the default black color.
* Line 2 is inside a `<div>` and could be blue thanks to the `div p` selector. It is also inside the element that has a `class` of `main-article` so it could also be green thanks to the `.main-article p` selector. But it is also inside of an element that has an `id` of `intro`. Since the selector `#intro p` is the most specific and applies to this line, it is colored red.
* Line 3 is not in a `<div>`, so it will not be blue, but it is inside an element that has a `class` of `main-article` so it is styled green.
* There are no paragraphs inside a `<div>` that is not styled more specifically, so no paragraphs are blue.

Andy Clarke drew a memorable metaphor in [this article](http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html). Make sure you enlarge the image near the bottom for a chart with memorable examples of specificity.

### Planning Style

Before we get busy building out design comps we benefit from thinking broadly about the style of our website. Through moodboards and style tiles we can begin to flesh out potential directions for the site's visual style.

***Read Chapter 1, pp.44--49 from Miller.***

### Elements of Style Used in Planning

For sake of our style tiles, let's jump over to another chapter from Miller to investigate elements of web design that relate. We'll read a portion of chapter 5 now but save the rest for another module when we're thinking about more details for our full comps.

***Read Chapter 5, pp.146--157 from Miller.***

### Web Typography

We have a lot to take in as we plan typography for our websites. Miller devotes an entire chapter to this crucial element, and we benefit from thinking thoroughly about our typography options even now at this planning point in our process.

***Read Chapter 6 from Miller.***

### Prepare to Apply

This module’s application activity gives you the opportunity to finish a simple website reconstruction by adding the correct selectors to an existing style sheet. 

Ensure that you can…

* Create and attach style sheets to HTML documents.
* Use various kinds of selectors to target elements to which you intend to apply CSS styles.
* Preview CSS changes to a web page in a browser.

### Study Tools

Review the key takeaways from this module. Memorize each of the following tags or attributes and understand what they are used for:

* `<link/>`
* `<style>`

Prepare answers to the following questions as you study for the exam covering this lesson:

* What are mood boards and style tiles? Compare and contrast their purposes and components.
* What role do metaphors play in planning site style?
* What elements of web design come into play when planning design style?
* What are some of the crucial features of working with typography on the web?
