
# CSS Grid Items – Full Lesson for Beginners

In a CSS Grid layout, once a container has been set up using `display: grid`, the direct children of that container become **grid items**. You can control how each item is placed and sized inside the grid using special properties.

---

## 1. grid-column

The `grid-column` property defines where an item starts and ends **horizontally** (left to right).

Example:

```css
.item {
  grid-column: 2 / 4;
}
```

This means:
- The item **starts at column line 2**
- Ends **before column line 4**
- So it covers columns **2 and 3**

---

![line-grid](/assets/items/line.png)

### Understanding `span` in grid-column

You can also use the `span` keyword to make an item **span (cover)** multiple columns without specifying the exact end line.

Example:

```css
.item {
  grid-column: 2 / span 3;
}
```

This means:
- Start at column line 2
- Span across **3 columns** (columns 2, 3, and 4)

---

![line-grid](/assets/items/span.png)

### Using `grid-column-start` and `grid-column-end`

You can set the start and end lines separately:

```css
.item {
  grid-column-start: 2;
  grid-column-end: 5;
}
```

This means the same as `grid-column: 2 / 5`.

---
![start-end-grid-column](/assets/items/span.png)
## 2. grid-row

The `grid-row` property works just like `grid-column` but controls vertical placement (top to bottom).

Example:

```css
.item {
  grid-row: 1 / 3;
}
```

This means:
- Start at row line 1
- End before row line 3
- So it covers rows **1 and 2**

---

![grid-row](/assets/items/grid-row.png)

### Understanding `span` in grid-row

Example:

```css
.item {
  grid-row: 2 / span 2;
}
```

This means:
- Start at row line 2
- Span across **2 rows** (rows 2 and 3)

---

![grid-row-span](/assets/items/grid-row-span.png)

### Using `grid-row-start` and `grid-row-end`

```css
.item {
  grid-row-start: 2;
  grid-row-end: 4;
}
```

This means the same as `grid-row: 2 / 4`.

---

![grid-row-start-end](/assets/items/grid-row-span.png)

## 3. grid-area (using line numbers)

The `grid-area` property is a shorthand to set all four lines: **row start / column start / row end / column end**.

Example:

```css
.item {
  grid-area: 1 / 2 / 3 / 4;
}
```

This means:
- Row start: line 1
- Column start: line 2
- Row end: line 3
- Column end: line 4

This is equivalent to:

```css
.item {
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-column-end: 4;
}
```
![grid-area](/assets/items/grid-area.png)
---

## 4. grid-area (using named areas)

You can use `grid-area` to place an item into a **named grid area** — but only if the container defines those names using `grid-template-areas`.

---

### Step 1 – Define named areas on the container:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
```

---

### Step 2 – Assign grid-area names to items:

```css
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

Each item appears exactly in the position of its matching area name in the layout.

---

## 5. justify-self

Controls how the item aligns **horizontally** inside its own grid cell.

Values:
- `start`: align left
- `end`: align right
- `center`: center horizontally
- `stretch` (default): fill the entire width of the cell

Example:

```css
.item {
  justify-self: center;
}
```

---

## 6. align-self

Controls how the item aligns **vertically** inside its own grid cell.

Values:
- `start`: align top
- `end`: align bottom
- `center`: center vertically
- `stretch` (default): fill the entire height of the cell

Example:

```css
.item {
  align-self: start;
}
```

---

## Summary of lines and `span`

- **Grid lines** are the lines between rows or columns, numbered from 1 to the number of lines +1.
- When you say `grid-column: 2 / 4;` you mean from line 2 to line 4 (not including line 4).
- Using `span` means "start at this line, and span this many tracks."
- Example: `grid-column: 2 / span 3;` means start at line 2 and cover 3 columns (columns 2, 3, 4).

---

That wraps up our full lesson on CSS Grid Items! You’ve now learned how to control the position and alignment of grid items using powerful properties like grid-column, grid-row, grid-area, and alignment tools like justify-self and align-self. These tools help you place items exactly where you want them inside a grid layout. Keep practicing, and you’ll be able to build clean, responsive layouts with confidence. Great job making it to the end! 🎉