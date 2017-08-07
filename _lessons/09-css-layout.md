---
title: "Lesson 9: CSS Layout Tools and Layout Analysis"
layout: lesson
---

### Float and Clear

**9.1: Float and clear...**
: Are helpful CSS properties that begin to assist with multi-column layouts. The "natural float" is the best use for floats today.

***Read chapter 15 from Duckett*** for a survey of techniques used to recreate layouts with HTML and CSS. This chapter surveys a number of topics that relate to how to build layouts with HTML and CSS. However, many things have changed in the last year or so with which this book has not yet caught up.

The most meaningful use for the float property today is to accomplish a "natural float:" simple effect of have an image or box set off to the side of a container while the surrounding text flows around it, as in traditional print media.

![](/images/natural-float.png)

Simply select the target image or group and set it to `float:left` or `float:right`. Likewise, if something is floating that you want to instruct not to float anymore, cancel that setting with `float:none`. Finally, if you want some element after the floating element NOT to wrap around it, set that other element to `clear:both`.

### Layouts with Flexbox

**9.2: Flexbox...**
: ...is an emerging tool we can use to create multicolumn layouts for elements inside a container.

An emerging and stable tool to use for creating multi-column layouts today is the flexbox technology.

***Read a very nice explanation of Flexbox [from Chris Coyier at CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).***

Here is a basic process for using flex box:

* Ensure that a container exists around all the "columns" and set it to `display:flex`.
Each item directly inside that container will now tile up side-by side.
* Control dimensions of the items using one of the following:
    * Set an explicit `width` such as `300px`.
    * Set a relative `width` such as `50%`.
    * Set a flex box size ratio instead of width using the `flex` property and a value such as `1`, `2`, `5`, etc. More on this below.
* Add other settings to further tweak the configuration (see section below).

#### Flexbox `flex` sizing

**9.3: `flex` sizing...**
: ...is powerful and can be simple, but might not always be practical to calculate.

The flex box `flex` property is the most flexible and simple way to provide width settings for elements in a single row. The idea is to provide a ratio that describes each element's size compared to the others. Here's the idea:

* If all elements are supposed to be the same size set them to `flex:1`
* If there are two elements and one is 1/3 of the overall width while the other is 2/3 of the overall width, set the smaller one to `flex:1` and the larger one to `flex:2`.

In the second example above you can see how the ratio of thirds led to the flex setting: one was `1` third and the other was `2` thirds.

If your elements are a more complex ratio than this or if there are more than two elements that are not all the same size you might be better off using percentages or pixels. Otherwise you need a more complex process:

1. Measure the width of the overall row and write it down.
2. Measure the width of each element and write them down.
3. Calculate each element's ratio of the total size by dividing its width by the overall width from step 1. For example if the overall width is 900 pixels and one element inside that width is 400 pixels its ratio is 0.444.
4. Refer to this table to see if all elements can be rounded closely to one of the columns and use the corresponding flexible ration number. If not, then multiply all the ratios by one hundred and round them to the nearest whole number. In our case, 0.444 becomes 44. Use this for the `flex` value.

#### Other Flexbox settings

**9.3: Flexbox includes many other settings...**
: ...but `flex-flow` and `justify-content` provide settings for two very common situations.

While there are many helpful ways to configure flex box elements, here are some you might find commonly useful:

* `flex-flow`: Set this to `row wrap` or to easily create tiling elements. In this case, it will be best to set the size of the individual items using pixel or percentage widths rather than `flex`.
* `justify-content`: Use this to align a set of flex elements...
    * to the left with `flex-start`.
    * to the right with `flex-end`.
    * centered with `center`.
    * with equal space separating them with `space-between`. This is great for when you want elements on outer edges of a row flush with the outer edges and even spacing between elements otherwise.
    * with equal space around them with `space-around`. In contrast to `space-between` this adds even spacing between elements, but by ensuring the same space is added on both sides of the elements, creating a gutter between them and half that gutter on the outer elements in a given "row".
* `align-items`: Use this to adjust the default setting that can result in stretching items to the same height. Set it to `flex-start`, for example, to ensure all elements hang from a common top line but are otherwise as tall as they naturally would be without flex box.

### Future of Layouts

As the web grows and designers and developers desire new, easier ways to accomplish things we can expect the techniques and technologies themselves to change.

On the horizon for full adoption by the browser developers is the CSS Grid Module, which will radically change the way we build layouts in a positive way. Professor Schanely's MFA thesis project explored this topic and a process to use it well. Since the technology is not fully operational we'll teach a similar process that makes use of flex box in the following modules after some guided practice with it in this module.

As a head's up for how we handle the many changes in the web during your time studying here, our web curriculum at Cedarville includes a class dedicated to catching up on current trends: Web Design III. As one interested in this field it will serve you well to develop a mindset for being a lifelong learner.

### Layout Analysis

You now know a good bit about how to work with CSS. We've discussed how to select and apply styles to HTML elements, how to style content, work with the box model, and, finally, how to build some basic layouts with all these skills in combination with basic float and clear settings.

Now I'd like to outline for you a process you can follow for larger more complex layouts. It begins with layout analysis, where you first inspect your comp in order to plan the approach you'll use with CSS. We'll make identify rows and columns that will translate to specific CSS settings.

#### Definitions

* **Tiles** are discrete groups of elements that are laid out beside other groups of elements, or are grouped with elements that do. For the sake of layout analysis, I suggest highlighting tiles using a blue line or box.

* **Containers** are groups of tiles. For the sake of layout analysis, I suggest highlighting columns using a red line or box. While there are many elements that act as containers in a given document, *layout* Containers only need to be marked as such when they contain two or more tiles.

#### Process

With a particular design comp open, follow this process in order to identify tiles and containers:

1. *Sketch*: Sketch your layout on paper in light pencil or light grey ink.
2. *Group*: Identify groups of elements and outline them with a dotted black box. Start by identifying small groups, and move outwards to larger groups or even groups that contain smaller groups.
3. *Identify tiles*: Identify either individual elements or groups that are presented beside other groups as tiles and highlight them with a blue box.
4. *Identify containers*: Identify containers for sets of related tiles by highlighting them with a red box. There are a few nuances to consider here:
    * The simplest container is one that neatly naturally wraps around an obvious set of tiles, such as a container around a list of product image thumbnails.
    * Sometimes the best container is a group that contains groups that you recognized as tiles and others that you didn't. In order for this container to be such a container, we'll have to realize that the groups we didn't call tiles before can actually be tiles, but just set to fill the container's width. *In this case, identify the other groups as tiles by adding a blue box around them as well.*
    * Finally, some containers are themselves tiles. They are tiles in that they themselves are presented beside other groups and part of a larger container. They are containers in that they contain nested tiles. *In this case, identify the tile as a tile/container combo by adding a dotted red box outside the blue box already in place.*

#### Exceptions

Watch for the following exceptions as you analyze your comp:

| Description | Sample |
|:--|:--|
| **Background layering** -- If you have a section in the comp where a set of text is laid out overlapping with the image as a background, the image should be seen as a background of an element and not as a tile for layout analysis. Just be certain that there is really one set of content with each element stacked on top of the other; otherwise, there might be tiles inside of a container that lay over the image. | ![](/images/la-x-faux-col.png) |
| **Natural Float** -- If you have a section on your comp where an image or set of elements is hanging out on one side or the other of some text that is just flowing around it, you probably don't have a true tile, but, rather, just a natural float. Use the `float` property to create this effect on that element or group. | ![](/images/la-x-natural-float.png) |

### Study Tools

Memorize each of the following CSS properties or values:

* `float` and `clear` and when they are helpful.
* `display:flex` and where to apply it. The following allow us to further customize a flex box implementation and are applied to the same element to which `display:flex` is applied:
    * `justify-contents`
    * `flex-flow`
    * `align-items`
