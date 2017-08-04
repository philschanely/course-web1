---
title: "Lesson 11: Layout Build"
layout: lesson
---

### Building Tiles and Containers

Once you've completed the Layout Analysis you are ready to move into building out the comp, a phase I call Reconstruction. 

The rows and columns you identified in Layout Analysis can be built out by applying the following style sets to each corresponding element:

**Containers:**

```css
[container selector] {
    display:flex;
    /* 
        Other settings optional such as 
        - justify-content
        - flex-flow
        - align-items    
    */
}
```

**Tiles:**

```css
[tile(s) selector] {
    box-sizing:border-box;
    /* width setting */
    /* margin and padding as needed */
}
```

We'll look at a series of common layout patterns in Lesson 12.

### Transitioning From Analysis to Build

With this basic understanding of the CSS you need in order to build rows and columns you must also note that the they don't just invent themselves in your markup. As you work to create the markup your layout demands, start with content markup as we discussed in Lessons 1--3, and 5. Then use the sectioning tags and `<div>` tags we learned in Lesson 4 to add groups wherever they're needed. If a row or column includes multiple elements, consider using the most semantic grouping element you can in order to create such a group.

#### Suggested Process
Use this process to complete the reconstruction in a methodical, efficient way:

1. First, create simple, clean, semantic HTML based on the content in your comp. You might also benefit from some simple grouping with `<div>` tags. Use the `class` attribute to distinguish such a group from other groups.
2. Through Layout Analysis you identified tiles and containers. With basic HTML in place you must now ensure that your simple, semantic HTML is also compatible with the tile and container structure you identified.
    * **Tiles** should alway be a single element. This means that you will need to ensure that each thing you marked as a tile in your analysis is either already a single element or is a collection of elements grouped together by a single `<div>` or other more semantic option. 
    * **Containers** should be the direct parent element of the set of tiles you mean to display as tiles. Often these will naturally be the closest grouping element, but if a simple single element does not wrap around your tiles, you might consider adding such an element. `<div>` with a meaningful class is usually a safe option here.

    Bottom line here is that you must have markup that matches your analysis: Tiles must be a single element and the container must be the direct parent of all the related tiles.

3. For each container you identified, you must select it and turn on `display:flex`. You might also benefit from one or more of the following *also set on this container*:
    * `flex-flow` -- if your set of tiles spans more than one "row" in the layout turn this setting on, and set it to `row wrap`. There are other settings for this property, but this is the most common. You'll likely want to control such an element's width to ensure tiles it contains wrap in the desired space.
    * `justify-contents` -- this setting helps with *some* spacing scenarios. You can experiment with the following to see if the desired results fit your comp closely enough:
        * `center` -- helpful for creating a center-aligned flow for the set of elements. 
        * `space-between` -- helpful when you have a few items in a single row and want the outer two hugging the outer bounds and the inner ones spaced evenly from each other.
        * `space-around` -- helpful when you have an even gutter between each tile and space on the outside gutters that is half of the inner gutter.

        If these do not suffice, you may need to move on to specify spacing on the tiles themselves. 
    
4. Move to the tiles inside this container and, if needed, specify a `width` setting to ensure they each occupy the desired space. In addition, if some of the flex box settings from the container do not have the desired effect for spacing these elements, add margin and/or padding and other box model settings as needed.

Continue to refine styles overall to ensure all aspects match the desired style.