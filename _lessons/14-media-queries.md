---
layout: lesson
title:  "Lesson 14: Media Queries and Overriding Styles"
---

### Media Queries

While this article was referenced in a reading from an earlier module, take another look at the simple process we follow to set up the pieces we need to make responsive sites:

***[Read Responsive Design in 3 Steps &raquo;](http://webdesignerwall.com/tutorials/responsive-design-in-3-steps)***

Note that step 2, which the author calls "HTML Structure" is one particular example. In your own sites, a design comp for some of the prominent breakpoints or "stops" will form a solid base for you to build your media queries.

This article demonstrates one approach to responsive design, where we start with a desktop comp and add media queries that allow us to scale down the design progressively through smaller breakpoints. The formula for this is as follows:

* At what point does the layout "break" due to the browser window being restricted? Evidence of this would be a sideways scrollbar in the window, or elements that appear crowded against the edges of the window. **This dimension provides the `max-width` breakpoint** for a responsive stop.
* At this breakpoint, which comp should be enacted? **This is likely the next device smaller than the previous breakpoint or styles, and should be a smaller layout than the breakpoint.**

So if we enact styles by default that set up a layout in a 1200px width `body` it is likely that a breakpoint will occur when the window is restricted below 1200px. This therefore forms a breakpoint, but it need not match 1200 precisely; we might find for aesthetic's sake that we want the breakpoint at a slightly larger size so that the 1200px width never actually touches the edges of the browser window. So in this code snippet I have `body` set to 1200px but I'm adding a media query breakpoint for just above this dimension and using it to enact styles for my *tablet* comp:

```css
/* Desktop comp settings such as...*/
body {
    width:1200px;
    margin:0 auto;
}
/* ... and others... */

@media screen and (max-width:1240px) {
    
    /* Tablet comp settings such as...*/
    body {
        width:720px;
        margin:0 auto;
    }
    /* ... and others... */
}

```

Now I can take this to the next step and consider where the next breakpoint occurs. When the browser is less than 1240px wide my `body` snaps to a width of 720px so its likely that I'll want the next breakpoint to occur around that dimension and then snap to my *smartphone* styles:

```css
/* Desktop comp settings such as...*/
body {
    width:1200px;
    margin:0 auto;
}
/* ... and others... */

@media screen and (max-width:1240px) {
    
    /* Tablet comp settings such as...*/
    body {
        width:720px;
    }
    /* ... and others... */
}

@media screen and (max-width:760px) {
    
    /* Smartphone comp settings such as...*/
    body {
        width:300px;
    }
    /* ... and others... */
}

```

Here's another way of visualizing these settings:

![](/images/responsive-artboard.png) 

#### Another Approach

While this is a valid approach, another approach is a little more common today. It is broadly referred to as a "mobile first" approach. With this approach, we start with the mobile styles as the default styles and then add breakpoints that scale our design *up* from there and use the `min-width` filter instead of `max-width`. 

We will learn about and implement this approach in future classes in the Web Curriculum. We use the desktop-first approach here so that you can work from your existing site and scale it down rather than refactor all your styles to reverse the flow. 

### Overriding Process

Also as you build your media query sections, most of the time you'll be overriding styles you've set elsewhere. With this in mind, it can be very helpful to work with a browser-based tool such as the developer tools available in Google Chrome. Consider this process:

1. With a browser resized to the correct zone for a given media query, identify an element that needs to be adjusted in the breakpoint, ideally, based on a pre-established design comp. 
2. Using the browser developer tools, determine the precise element that must be affected. If the element already has a set of styles applied to it from pre-existing styles, note the precise selector used; you'll want a matching or more specific selector. If no styles exist, then consider what simplest but precise selector will correctly target the element.
3. Investigate exactly what is different. If the difference involves a new setting altogether, you're in luck. However, if the different involves overriding an existing setting, then be careful to precisely override the desired setting or collection of settings. Refer to your comp to help with this precision.
4. Set up the necessary selector in your media query based on step 2 and provide new settings as identified in step 3. 

### Reversing CSS Effects

When we start getting into the details of a responsive build-out what we often deal with is setting up styles inside of media query blocks that attempt to override styles we've set up elsewhere. When the specificity of the selector matches and we're just providing a new value this can be very straight-forward. However, sometimes we find we need to cancel certain settings or revert them to the default settings. Here is a list of common defaults we often re-establish in our media queries, particularly for mobile stops:

| Property   | Default/revert settings |
|:===========|:========================|
| width      | `auto` or `100%`        |
| height     | `auto`                  |
| `float`    | `none`                  |
| `clear`    | `none`                  |
| `position` | `static`                |
| `display:flex` | Undo this by restoring the target element's default setting such as `display:block` for block-level or `display:inline` for inline elements |
| Other `display` settings | Make an element invisible using `display:none`. Or if you've already made it invisible and want to make it visible again use `display:inline` or `display:block` to restore its default nature. |

### Study Tools

Prepare answers to the following questions as you study for the exam covering this module:

1. What three steps are outlined in the provided article in order for a basic responsive site to be established?
2. What process can be followed in order to carefully apply the right styles in a media query?
3. What are some examples of common settings that are not just overridden, but often reset to default settings?