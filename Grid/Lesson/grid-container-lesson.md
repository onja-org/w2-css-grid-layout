# 🧱 CSS Grid: The Container

## 🔹 What is Grid?
**CSS Grid** is a layout system that helps you design web pages using **rows and columns**. It gives you full control over the placement of items on the page.

---

## 🔹 When to Use Grid
Use CSS Grid when:
- You need to layout elements in **both rows and columns**
- You want to create a **structured layout** (like a website with a header, sidebar, main content, and footer)
- You need a layout that adjusts easily on different screen sizes

---

## 🔹 What is a Grid Container?
A **grid container** is any HTML element that has `display: grid` or `display: inline-grid`.

🔸 It becomes the **parent** of all the grid items.

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: grid; /* This makes it a grid container */
}
```

---

# 🎯 Grid Container Properties

Below are **all the main properties** you can apply to a grid container, with beginner-friendly explanations and examples:

---

## ✅ `display: grid` / `display: inline-grid`
Turns the element into a grid container.

```css
.container {
  display: grid;       /* Block-level grid */
  /* OR */
  display: inline-grid; /* Inline-level grid */
}
```

---

## ✅ `grid-template-columns`
Defines the number and size of **columns**.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
}
```

➡️ Creates 3 columns, each 100px wide.

You can also use `fr` units:

```css
grid-template-columns: 1fr 2fr;
```

➡️ 2 columns, one takes 1 part, the other 2 parts of available space.

---

## ✅ `grid-template-rows`
Defines the number and size of **rows**.

```css
.container {
  grid-template-rows: 50px 100px;
}
```

➡️ Creates 2 rows, first is 50px, second is 100px.

---

## ✅ `gap`, `row-gap`, `column-gap`
Sets spacing **between** grid items.

```css
.container {
  gap: 10px; /* Both rows and columns */
}
```

You can also use separately:

```css
row-gap: 10px;
column-gap: 20px;
```

---

## ✅ `justify-items`
Aligns items **horizontally** (left to right) **inside their cells**.

```css
.container {
  justify-items: start;
  justify-items: center;
  justify-items: end;
  justify-items: stretch; /* Default */
}
```

---

## ✅ `align-items`
Aligns items **vertically** (top to bottom) **inside their cells**.

```css
.container {
  align-items: start;
  align-items: center;
  align-items: end;
  align-items: stretch;
}
```

---

## ✅ `justify-content`
Aligns the **entire grid** horizontally inside the container.

```css
.container {
  justify-content: start;
  justify-content: center;
  justify-content: end;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

---

## ✅ `align-content`
Aligns the **entire grid** vertically inside the container.

```css
.container {
  align-content: start;
  align-content: center;
  align-content: end;
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
}
```

---

## ✅ `grid-template-areas`
Lets you name areas and arrange them visually.

```css
.container {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto auto;
}
```

---

## ✅ `grid-auto-rows` and `grid-auto-columns`
Defines default sizes for rows/columns **not explicitly defined**.

```css
.container {
  grid-auto-rows: 100px;
}
```

---

## ✅ `grid-auto-flow`
Controls how items are placed: **row** (default) or **column**.

```css
.container {
  grid-auto-flow: row;
  grid-auto-flow: column;
}
```

---

## ✅ `place-items`, `place-content`
Shorthand for `align-*` and `justify-*`.

```css
.container {
  place-items: center;   /* align-items + justify-items */
  place-content: center; /* align-content + justify-content */
}
```

---

## 💡 Why Are Grid Containers Important?

- They create a **flexible layout structure**
- Let you organize content clearly using rows and columns
- Make your design **cleaner and more responsive**
- Help you avoid using too many nested `div`s or float-based layouts

---

## 🎓 Teaching Tip

Use visuals or draw a simple grid on the board:

```
+---+---+---+
| 1 | 2 | 3 |
+---+---+---+
```

Then show how a container holds these items and how changing the grid rules affects the layout.

---

# 🧩 Understanding the Grid Structure

## 🔸 Grid Container
The element on which `display: grid` is applied. It’s the **direct parent** of all the grid items.

```html
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

```css
.container {
  display: grid;
}
```

---

## 🔸 Grid Lines
These are the **dividing lines** that make up the structure of the grid.

- **Vertical lines** = column grid lines  
- **Horizontal lines** = row grid lines

Think of them as invisible lines that divide the container into rows and columns.

> 🟡 The yellow line in diagrams often shows an example of a **column grid line**.

---

## 🔸 Grid Track
The **space between two grid lines** (either two column lines or two row lines).

- A grid track is like a single **row** or **column** in your layout.

For example, between column lines 1 and 2 is one **column track**.

---

## 🔸 Grid Area
A **grid area** is the space surrounded by **four grid lines** (top, bottom, left, and right).

- It can contain **multiple grid cells**.
- Grid areas are used with the `grid-area` and `grid-template-areas` properties.

> For example, between row lines 1 and 3, and column lines 1 and 3 is a square-shaped **grid area**.
