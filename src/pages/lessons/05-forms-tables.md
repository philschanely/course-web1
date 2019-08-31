---
title: "Forms, Tables, and Other Elements"
type: lessons
number: 5
cover: "https://source.unsplash.com/PkbZahEG2Ng"
---
import { Subpage, Callout } from "../../course-components";

<Subpage slug="collecting-info-with-forms">

### Collecting Information with Forms

**5.1: We collect information from users through form markup.**
: This makes the most sense when it is paired with additional programming code that processes the information.

One last set of tags that is helpful to know is the set of tags that are used to mark online forms. These tags allow us to collect information from users. However, note up front that while these tags set us up to collect information, a form must be paired with additional programming in order for that information to be processed in a meaningful way. In this course, our focus will be on using semantic markup to format forms, and, later, in applying CSS to make them appear in a visually pleasing and usable way. The programming skills necessary to process forms is a large topic that falls outside of the scope of this course.

<Callout lead={true} color="secondary">

Read Ch. 7 from Duckett.

</Callout>

</Subpage>
<Subpage slug="form-semantics">

### Semantic Form Markup

**5.2: Semantic markup with forms...**
: is often accomplished through tasteful use of lists lists.

Having read from Duckett, you should now have a sense of the markup we use to create and contain form elements. This includes the container `<form>` tag and the form control tags such as `<input>`, `<select>`, `<option>`, and `<textarea>`.

But the book does not demonstrate the most semantic structure for marking up forms. Let’s think for a moment about the structure of the content we put in forms and the tags we have in our library to use. I’d like to pose the following:

* Most often, a form contains a list of fields the user should complete. Therefore, it makes sense for many forms to mark them as a list. This applies both to the overall set of fields in the form as well as to sub-lists such as checklist or radio buttons that are part of a set.
* In some cases, a field is better marked as a paragraph. Examples include submit button that could stand on its own apart from the other fields in the form, or a very short form that reads as a single sentence, such as one you’d use to subscribe to a newsletter.

So consider this as a prototype for how to mark up a simple form:

```html
<form method=”get” action=”confirm.html”>
    <p>
        <label for=”email”>Subscribe to our newsletter:</label>
        <input type=”text” name=”email” placeholder=”you@example.com” />
        <input type=”submit” name=”subscribe” value=”Subscribe” />
    </p>
</form>
```

Consider this as a prototype for how to mark up a more complex form in a meaningful way:

```html
<form method=”get” action=”confirm.html”>
    <ul>
        <li>
            <label for=”name”>Your name:</label>
            <input type=”text” name=”name” />
        </li>
        <li>
            <label for=”age”>Your age:</label>
            <input type=”text” name=”age” />
        </li>
        <li>
            <label for=”gender”>Your gender:</label>
            <ul>
                <li><input type=”radio” name=”gender” value=”male” /> Male</li>
                <li><input type=”radio” name=”gender” value=”female” /> Female</li>
            </ul>
        </li>
    </ul>
    <p><input type=”submit” name=”save” value=”Save Info” /></p>
</form>
```

There are many different structures forms could follow off of this and they can get quite complex. In this course, we’ll use mostly simple structures like these.

**NOTE:** Forms covered in this class really just touch the "tip of the iceberg" in that there is a lot more to learn about using the fields well and configuring things to work with a server processing script. In your activities in this course you will not need to understand all these nuances, including the fact that you will not necessarily have any processing script to send form data to through the `action` attribute. We return to work with forms more in future classes in our web program.

</Subpage>
<Subpage slug="tables">

### Marking Information with Tables

**5.3: Table markup was misused in the past...**
: ...for creating print-like layouts, but this method is no longer accepted as good practice. CSS should be used instead. Tables should be used only to mark up data in the forms of rows and columns.

Another set of markup that will be beneficial to know is table markup.

<Callout lead={true} color="secondary">

Read Ch. 6 from Duckett.

<small>The author does an excellent job describing table markup and when to use them to mark up tabular data. Remember that simple lists are better marked with unordered, ordered, or definition lists. Table markup makes it easy to create very clean and well-organized tables to present data or information that is multidimensional.</small>

</Callout>

It is important to note that a very outdated method for creating page layouts is still taught and in use throughout the web, but it is NOT acceptable in this course. In the past, table rows and cells were discovered to be helpful for creating column-based layouts like what we see in print designs. The trend hit big and really made a significant improvement for web designers. However, tables are NOT semantic representations of content. Today, we use CSS to construct our layouts, which allows us to use much more semantic structural markup instead of marking content in table rows and cells.

</Subpage>
<Subpage slug="other-markup">

### Other Markup: Past, Present and Future

You might have noticed to this point that several other tags have been identified or used in the Duckett textbook that were not specifically addressed in these guides. You might also run into other markup as you explore existing sites. There a number of reasons for this:

* The world wide web is in many ways a living garden whose caretakers are constantly trimming, redressing, arranging, and replanting. This means that some tags we used to use a lot are at times replaced with new elements. Others are recognized as detrimental to the development of the web and are deprecated, being discouraged from common use. We’re also continuing to find new tags that the original creators of HTML never imagined would be useful. The World Wide Web Consortium, AKA, the W3C is the formal body that reviews and approves new specifications for many things on the web, including the tags that are acceptable to use in HTML. We keep an eye on this and update our content as needed over time.
* I’ve called out the most common useful and meaningful elements that I believe are essential for budding web designers to memorize and use. Others may not be covered here for reasons discussed above, such as that they are not used anymore, of little practical use, or are new enough that they are not fully used or even understood. Again, we keep an eye on what’s happening in the web community and update as needed.
Should you decide you enjoy this field and move into it for a career, you too will learn to keep a pulse on what’s happening to stay current.

</Subpage>
<Subpage slug="information-architecture">

### Information Architecture and Structural Planning

In our last set of readings from Miller we looked at the early planning and research stages involved in building a website, and took a bird's-eye look at the study of usability.

Now we return to Chapter 1's overview of the planning process to look at the next steps in which we begin to conceptualize the site's organization and to envision components of the pages.

<Callout lead={true} color="secondary">

Read pp. 30–41 in Ch. 1 of Miller.

</Callout>

While Miller gave many contextual examples of deliverables that are helpful in this phase, let's debrief on each of them:

* **Site maps** can be very straightforward and simple, but many of the examples Miller provided were complex. At the least, site maps should simple visualize the physical pages that will make up a site and their hierarchical relationship one to another. This provides a first stab at what could form the persistent navigation as well as an exercise in clear labeling for those pages. Remember; keep the user in mind.
* **Wireframes** as depicted by Miller might look at little more like poorly-design website prototypes. But in real practice these are very useful. At the least, wireframes are black-and-white outlines of elements to be included on a given page, ideally, with simulations of actual content (although we rarely go as far as to include actual images, icons, or colors). They should not attempt to reflect the style of the site, and if any thought is given to precise placement, this should be called out. Instead, their focus is on being a communication tool. With solid wireframes, you can clearly communicate with your clients what will compose each of the pages or page templates of the site. You can also do early user testing to find out if the components are understood by users and match their needs. Finally, they are excellent communication tools for the design and development teams. Designers can get busy building mockups from wireframes while developers can base rough build outs of a site's structure and overall markup at the same time.
* **Usability Diagrams** are also often referred to as use case flow charts or task diagrams. They might look like site maps, but their focus is to imagine the process an actual user would walk through in order complete a particular task on the website. If you build these early in the process you can focus solely on the natural process a user might expect to walk through and then aim to match this process in the site's structure through the site map and wireframes. If you build these later, they can become a feedback tool to evaluate whether the sitemap and wireframes you've built are simple and effective for accomplishing the user's goals.

</Subpage>
<Subpage slug="anatomy-of-webpage">

### Anatomy of a Webpage

With user goals, and a sitemap in mind we can begin to flesh out wireframes for the layouts of particular pages or page templates in our sites. Miller's fourth chapter outlines the elements of a typical webpage, which are helpful to consider as conventions upon which to base our plans.  

<Callout lead={true} color="secondary">

Read pp. 112--137 in Ch. 4 of Miller.

</Callout>

</Subpage>
<Subpage slug="study-tools">

### Study Tools

Before continuing with this module’s exercises, make sure you understand how to:

* use the `<form>`, `<input>`, `<select>`, and `<textarea>` tags.
* use semantic markup to provide structure to forms.
* use table markup to format data into rows and columns.


Review the key takeaways from this module. Memorize each of the following tags or attributes and understand what they are used for:

* `<form>`
* `<input/>` and `type` attribute and what each value accomplishes: `text`, `password`, `submit`, `radio`, `checkbox`
* `<select>` and `<option>`
* `<textarea>`
* `<table>`
* `<th>`
* `<td>`
* `<tr>`

Prepare answers to the following questions as you study for the exam covering this lesson:

* Describe the purpose of site maps, wireframes, and usability diagrams/task flow diagrams.
* Describe each of the common components of webpages.

</Subpage>
