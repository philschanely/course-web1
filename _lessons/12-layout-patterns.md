---
title: "Lesson 12: Layout Patterns"
layout: lesson
---

### Introduction

Most layouts on the web can be created easily with the flex box settings. There are a relatively small number of patterns that can be applied to such situations. 

First conduct layout analysis in order to identify rows and columns. Then, consider which of the patterns that follow fits each row the best. Apply the overall settings but customize the particular values as needed.

### Pattern A: Row on its own

The simplest pattern to build out is a row of content that contains no actual columns; all elements inside the row stack on top of each other according to default behavior. In such a case **DO NOT** use `display:flex` on the row; I'm calling these out to show you many things that can be done without flex box.

#### A1: Row spanning full width of outer container

A row on its own might simply span all or most of the width of its container:

![](/images/layout-patterns-A1.png)

**HTML:**

```html
<div class="intro">
    <h2>Lorem Ipsum Dolor Sit Amet.</h2>
    <p>Duis vel fermentum tortor...</p>
</div>
```

**CSS:** only add settings for border and spacing if needed. DO NOT use `display:flex;` on such a row.

#### A2: Row with restricted width

A row on its own might also have a restricted width but nothing on either side of it:

![](/images/layout-patterns-A2.png)

**HTML:**

```html
<div class="followup-1">
    <h2>Sed mollis, diam vitae</h2>
    <p>Suspendisse vel dui lobortis...</p>
    <p>Suspendisse potenti. Mauris...</p>
</div>
```

**CSS:** Set the restricted width and spacing as needed. In this case:

```css
.followup-1 {
    margin:0 0 20px 120px;
    width:760px;
    padding:30px 0 20px;
}
```

#### A3: Centered row with restricted width

A row on its own with a restricted width might be intended to appear "centered" inside its overall container. Such a setup is simpler:

![](/images/layout-patterns-A3.png)

**HTML:**

```html
<div class="followup-2">
    <img src="images/followup-2.png" />
    <h2>Integer tincidunt, sem pharetra</h2>
    <p>Sapien lectus vestibulum...</p>
</div>
```

**CSS:** Simply set the restricted width and then use `auto` for the left and right `margin` such as:

```css
.followup-2 {
    margin:20px auto 40px auto;
    width:760px;
}
```

You'll often see me use a width plus `margin:0 auto` to center a layout element.

#### A4: Row on its own with background image

Another common variation of the row on its own is the "faux column" we discussed earlier. Here there is still only content inside the row stacked one on top of the other, but it feels different because there is also a background image that adds the impression of another column or other content. Whether the content is centered or offset in some way, we'll have to use padding to create the offset. We **cannot** use `auto` with `padding` as we did with `margin` but must instead use a valid dimension using pixels or percentage. Sometimes a `height` setting also comes in handy.

![](/images/layout-patterns-A4a.png)

**HTML:**

```html
<div class="followup-3">
    <h2>Integer id sapien a ipsum faucibus</h2>
    <p>Integer dapibus nibh quis...</p>
    <ul>
        <li>Ut et mauris accumsan...</li>
        <li>Nullam et velit quis enim...</li>
        <li>Duis congue ligula sem, sit...</li>
        <li>Cras condimentum ut quam...</li>
        <li>Duis congue ligula sem, sit...</li>
    </ul>
</div>
```

**CSS:** Here we assume `width` is either `100%` or the default `width` value and just adding `padding` and a `height` setting. `box-sizing:border-box` also often proves useful here.

```css
.followup-3 {
    background:black 
        url(images/followup-3.png)
        left top no-repeat;
    box-sizing:border-box;
    padding:30px 20px 0 520px;
    height:360px;
}
```

![](/images/layout-patterns-A4b.png)

**HTML:**

```html
<div class="hero">
    <h2>Sed rutrum ligula.</h2>
    <a href="#">Ac lacus mattis &raquo;</a>
</div>
```

**CSS:** Here as in the previous example we use `padding` and `height` with the background settings to achieve the overall offset. But we've also center-aligned the text for the `<h2>` and the `<a>`.

```css
.hero {
    background:url(images/hero.png) 
        top center no-repeat;
    box-sizing:border-box;
    padding:520px 420px 0;
    height:720px;
}
.hero a {
    border:1px solid white;
    display:block;
    text-align:center;
}
.hero h2 {
    text-align:center;
}
```


### Pattern B: Row with columns

Building off of the basics or working with rows, we next examine patterns that make use of columns in various forms.

#### B1. Equal-sized columns

When all the columns inside a row are the same size the solution can be very simple, especially if all the items are the same element or have a class in common. Just use a nested selector in order to provide styles for the whole set of elements. 

![](/images/layout-patterns-B1a.png)

**HTML:**

```html
<ul class="categories">
    <li>
        <a href="#">
            <img src="images/category-1.png" />
            <h3>Sed convallis magna</h3>
            <p>Sit amet orci finibus...</p>
        </a>
    </li>
    <li>
        <a href="#">
            <img src="images/category-2.png" />
            <h3>Ut non condimentum</h3>
            <p>Proin finibtus eros risus.</p>
        </a>
    </li>
    <li>
        <a href="#">
            <img src="images/category-3.png" />
            <h3>Ut dignissim in odio</h3>
            <p>Aliquam vehicula quis arcu...</p>
        </a>
    </li>
</ul>
```

**CSS:** The `flex:1` setting is a flexible way to set them all to the same size but feel free to set a pixel or percentage value instead if you like. 

```css
.categories { 
    display:flex;
    justify-content:space-around;
    margin:0;
    padding:0;
}
.categories li {
    flex:1; /* or a width setting */
    margin-bottom:20px;
    list-style:none; /* disables bullets */
}
```

Sometimes you might find that you need to adjust either the first item in the set or the last item in the set (such as to cancel a border or some spacing). Keep in mind that you can set up the overall settings with a broad selector as described above but then provide an override setting using the :first-child or :last-child pseudo-class selectors.

![](/images/layout-patterns-B1b.png)

**HTML:**

```html
<div class="leaders">
    <div class="lead">
        <h3>Curabitur augue libero</h3>
        <p>Pellentesque eget ultrices...</p>
        ...
    </div>
    <div class="lead">
        <h3>Praesent id purus</h3>
        <p>Nec sem bibendum bibendum at...</p> 
        ...
    </div>
    <div class="lead">
        <h3>Suspendisse maximus</h3>
        <p>Tempor felis in volutpat...</p>
        ...
    </div> 
</div>
```

**CSS:** Here we put a border on the right side of most elements but cancel it on the `:last-child`. As a result we have reverted to using `padding` to space the items side-to-side instead of `justify-contents` on the container.

```css
.leaders { display:flex; }
.lead {
    flex:1; /* or a width setting */
    padding:20px 20px 0;
    margin:20px 0;
    border-right:1px solid #869396;
}
.lead:last-child { border-right:none; }
```


#### B2: Uneven columns

On the other hand, if the columns inside the row are different sizes, its best to target each individually and set the desired size.

![](/images/layout-patterns-B2.png)

**HTML:**

```html
<div class="features">
    <div class="feature left">
        <img src="images/feature-left.png" />
        <p><a href="#">...</a></p>
    </div>
    <div class="feature right">
        <img src="images/feature-right.png" />
        <p><a href="#">...</a></p>
    </div>
</div>
```

**CSS:**

```css
/* Key settings for the layout */
.features { 
    display:flex; 
    justify-content:space-between;
}
.features .left {
    width:480px;
}
.features .right {
    width:680px;
}
/* Other settings you might find helpful here */
.features a {
    padding:20px;
    display: block;
    color:white;
}
.features img { display:block; }
.features .left a { background-color:#a2e500; }
.features .right a { background-color:#6e00ff; }
```


#### B3: Spacing columns

Adding onto B1 and B2, if you need spacing (whitespace) between columns, your solution should depend on whether the columns have a background image or color, or if there’s a border between the columns.

* **No backgrounds** -- in this case it is simplest to use `padding` to enforce the spacing. Thanks to `box-sizing: border-box` you can keep the `width` set at the total space a column occupies and add padding inside of that space. See how spacing is established in the example provided with B1a. above. Alternatively, set `justify-content:space-between` on the row instead to make this even simpler.
* **No backgrounds but a border in-between** -- you can actually follow the same pattern as above and use padding in combination with `width`, `border settings`, and `box-sizing:border-box`. See how spacing is established in the example provided with B1b above. It might not be helpful to use `justify-content:space-between` in this situation.
* **Backgrounds, with or without border** -- in this situation, you need to use `padding` to provide the desired inset spacing between the text content and the outer edges of the background. This is much simpler if you’re also using `box-sizing:border-box` since this allows both padding and border to be included in the width setting. But spacing outside the edges needs to be accomplished with `margin`. See how spacing is established in the example provided with B2 above. Here the `justify-content:space-between` setting is once again very helpful.

#### B4: Centered columns

Flexbox makes centering columns very easy. The `justify-content:center` setting achieves this affect. In this case `flex:1` on the items will lead them to all be the same width but fill the whole row. If this is not desired use a `width` setting on the items instead.

![](/images/layout-patterns-B4.png)

**HTML:** Here the `header ul` gets treated like a row as opposed to the whole `<header>`. We're showing the larger context for your benefit.

```html
<header>
    <h1>Lorem Ipsum</h1>
    <nav>
        <ul class="row">
            <li><a href="#">Cras Diam</a></li>
            <li><a href="#">Vel Dolor</a></li>
            <li><a href="#">Egestas</a></li>
            <li><a href="#">Protitor</a></li>
        </ul>
    </nav>
</header>
```

**CSS:** Here we use the very helpful `center` setting for `justify-content` to quickly ensure the `li` elements align on the center axis. Note that instead of `flex:1` though we need a `width` value to ensure the items don't just fill the container. We use `auto` to just allow the elements to be as wide as their contents demand. We then use `margin` to enforce even spacing between the items.

```css
header ul { 
    justify-content:center;
}
header li {
    width:auto;
    list-style:none;
    margin:0 20px;
    padding:0;
}
```


#### B5: Restricted-width row with columns

Building off of the other patterns so far, sometimes you’ll have a row that has a restricted width that also has columns in it. In such a case, you should first set up the restricted width settings on the row using the patterns described above in A1--4, then treat the columns as needed inside of the resulting space as described in B1--3. Also be careful where you apply the `.row` so that it is on the direct parent element for the columns.

### Pattern C: Tiles

Tiles can be implemented where a set of elements form a predictable series of rows and columns, typically where all items occupy the same width and height, such as in a product thumbnail list.

This is easy to achieve with flex box by setting `flex-flow:row wrap` on the row. In this case you should be sure to use `width` settings on the items rather than `flex` settings.

![](/images/layout-patterns-C.png)

**HTML:**

```html
<ul class="row products">
    <li>
        <a href="#">
            <img src="..." />
            <b class="name">Sed convallis</b>
            <span class="price">$5.99</span>
        </a>
    </li>
    ...
</ul>
```

**CSS:**

```css
.products {
    justify-content:space-between;
    flex-flow:row wrap;
}
.products li {
    width:300px;
    margin-bottom:30px;
    list-style:none;
}
```

Note as well that the items inside each of these tiles can be set up using flex box tiling. The three items---image, name, price---have a predictable pattern of size. The image fills the "row" while the name and price sit beside each other. Check out the simple settings to achieve this:

```css
.products li {
    width:300px;
    margin-bottom:30px;
    list-style:none;
    display:flex;
    justify-content:space-between;
}
.products img {
    width:100%;
    margin-bottom:20px;
}
.products .name {
    margin-left:10px;
    width:195px;
}
.products .price {
    margin-right:85px;
}
```

#### Centered tiles

Following the same idea as in B4, tiles inside can easily be centered  by placing `justify-content:center` on the row. 

#### Tile exceptions

Chances are that the item at the beginning or end of each row will need some overrides applied in order to achieve the desired effect. First apply desired overall tile settings for width, height, margin, and padding.

In order to affect the first item on each row in the tile set you can use this formula for the pseudo-class selector...

```css
[tile item selector]:nth-child(xn+1) 
```

...where *x* is the number of items in a row. 

To affect the last item in each row in the tile set use this formula for the pseudo-class selector...

```css
[tile item selector]:nth-child(xn) 
```

...where *x* is the number of items in a row.