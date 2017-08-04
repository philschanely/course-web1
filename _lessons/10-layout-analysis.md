---
title: "Lesson 10: Layout Analysis"
layout: lesson
---

### Overview

You now know a good bit about how to work with CSS. We've discussed how to select and apply styles to HTML elements, how to style content, work with the box model, and, finally, how to build some basic layouts with all these skills in combination with basic float and clear settings.

Now I'd like to outline for you a process you can follow for larger more complex layouts. It begins with layout analysis, where you first inspect your comp in order to plan the approach you'll use with CSS. We'll make identify rows and columns that will translate to specific CSS settings.

#### Definitions

* **Tiles** are discrete groups of elements that are laid out beside other groups of elements, or are grouped with elements that do. For the sake of layout analysis, I suggest highlighting tiles using a blue line or box.

* **Containers** are groups of tiles. For the sake of layout analysis, I suggest highlighting columns using a red line or box. While there are many elements that act as containers in a given document, *layout* Containers only need to be marked as such when they contain two or more tiles.

### Process

With a particular design comp open, follow this process in order to identify tiles and containers:

1. *Sketch*: Sketch your layout on paper in light pencil or light grey ink.
2. *Group*: Identify groups of elements and outline them with a dotted black box. Start by identifying small groups, and move outwards to larger groups or even groups that contain smaller groups.
3. *Identify tiles*: Identify either individual elements or groups that are presented beside other groups as tiles and highlight them with a blue box.
4. *Identify containers*: Identify containers for sets of related tiles by highlighting them with a red box. There are a few nuances to consider here:
    * The simplest container is one that neatly naturally wraps around an obvious set of tiles, such as a container around a list of product image thumbnails.
    * Sometimes the best container is a group that contains groups that you recognized as tiles and others that you didn't. In order for this container to be such a container, we'll have to realize that the groups we didn't call tiles before can actually be tiles, but just set to fill the container's width. *In this case, identify the other groups as tiles by adding a blue box around them as well.*
    * Finally, some containers are themselves tiles. They are tiles in that they themselves are presented beside other groups and part of a larger container. They are containers in that they contain nested tiles. *In this case, identify the tile as a tile/container combo by adding a dotted red box outside the blue box already in place.*

### Exceptions

Watch for the following exceptions as you analyze your comp:

| Description | Sample | 
|:--|:--|
| **Background layering** -- If you have a section in the comp where a set of text is laid out overlapping with the image as a background, the image should be seen as a background of an element and not as a tile for layout analysis. Just be certain that there is really one set of content with each element stacked on top of the other; otherwise, there might be tiles inside of a container that lay over the image. | ![](/images/la-x-faux-col.png) | 
| **Natural Float** -- If you have a section on your comp where an image or set of elements is hanging out on one side or the other of some text that is just flowing around it, you probably don't have a true tile, but, rather, just a natural float. Use the `float` property to create this effect on that element or group. | ![](/images/la-x-natural-float.png) |

