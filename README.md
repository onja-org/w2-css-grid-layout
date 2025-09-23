# CSS Grid Layout Lab - Overview

## Learning Objectives

This lab teaches you **CSS Grid fundamentals** through hands-on exercises. By the end, you'll be able to:

- Create responsive grid layouts using CSS Grid
- Position elements using grid lines and grid areas
- Build complex layouts with named grid areas
- Implement responsive breakpoints for mobile-first design
- Debug and test grid layouts effectively

---

## Lab Structure

### **Lesson Materials** (`lesson/`)
1. **`grid-container-lesson.md`** - Comprehensive guide to CSS Grid containers
   - Grid terminology (lines, tracks, areas, cells)
   - Container properties (`display: grid`, `grid-template-columns/rows`, `gap`, etc.)
   - Layout alignment and positioning

2. **`css-grid-items-full-lesson.md`** - Deep dive into grid item positioning
   - `grid-column` and `grid-row` properties
   - Using `span` keyword for multi-column/row items
   - Grid area positioning techniques

### **Hands-on Exercises**
1. **Container Basic** (`lab/Grid/container-basic/`)
   - **Focus**: Grid containers, responsive layout
   - **File to edit**: `style-grid.css`
   - **Skills**: Basic grid setup, positioning with grid lines

2. **Grid Area** (`lab/Grid/grid-area/`)
   - **Focus**: Named grid areas, complex layouts
   - **File to edit**: `style-grid-area.css`
   - **Skills**: `grid-template-areas`, semantic layout naming

---

## Getting Started

### Setup Steps
```bash
cd lab
# 1. Install dependencies
npm install

# 2. Start with lessons (use VS Code preview)
# Read lesson/grid-container-lesson.md first
# Then read lesson/css-grid-items-full-lesson.md

# 3. Run exercises with live server
npm run container-basic    # Exercise 1
npm run grid-area         # Exercise 2
```

---

## Learning Workflow

### Phase 1: Study
1. **Read lessons first** - Use VS Code markdown preview
2. **Take notes** on key Grid concepts:
   - Grid container vs grid items
   - Grid lines, tracks, areas, cells
   - `fr` units vs fixed units
   - Named grid areas

### Phase 2: Practice
1. **Exercise 1: Container Basic**
   - Uncomment CSS properties as instructed
   - Set up 3-column, 6-row grid layout
   - Position header, menu, main content, ads, footer
   - Test responsive breakpoints (850px, 500px)

2. **Exercise 2: Grid Area**
   - Define semantic grid areas
   - Use `grid-template-areas` for layout
   - Position elements using `grid-area` property

### Phase 3: Validate
```bash
cd lab
# Test individual exercises
npm run test:basic    # Tests container-basic
npm run test:area     # Tests grid-area

# Test everything
npm test              # Run all tests

# Continuous testing
npm run test:watch    # Auto-run tests on file changes
```

---

## Common Issues & Solutions

| **Problem** | **Solution** |
|-------------|--------------|
| Grid not displaying | Add `display: grid` to container |
| Items not positioning | Check grid-area name spelling |
| Responsive not working | Verify media query syntax |
| CSS not loading | Check file paths in HTML |
| Overlapping elements | Review grid line numbers (start at 1) |
| Tests failing | Ensure exact property values match requirements |

---

## Responsive Design Patterns

### Desktop First → Mobile
1. **Desktop**: Complex multi-column layouts
2. **Tablet**: Reorganized content prioritizing readability
3. **Mobile**: Single-column stack for touch interaction

### Content Priority Order
1. Header (branding/navigation)
2. Main content (primary focus)
3. Navigation menu
4. Supplementary content (ads, sidebar)
5. Footer (secondary info)

---

## Success Criteria

### Technical Mastery
- [ ] All automated tests pass (`npm test`)
- [ ] Clean, commented CSS code
- [ ] Proper use of Grid properties
- [ ] Responsive breakpoints working correctly

### Understanding Check
- [ ] Can explain grid lines vs grid tracks vs grid areas
- [ ] Understands `fr` units and their benefits
- [ ] Can implement responsive grid layouts from scratch
- [ ] Knows when to use CSS Grid vs Flexbox

---

## Next Steps

After completing this lab:
1. **Practice**: Build your own grid layouts
2. **Explore**: Advanced Grid features (subgrid, masonry)
3. **Combine**: Use Grid with Flexbox for complex designs
4. **Real-world**: Apply to actual projects

### Additional Resources
- [CSS Grid Garden](https://cssgridgarden.com/) - Interactive game
- [Grid by Example](https://gridbyexample.com/) - Practical examples
- [Learn CSS Grid](https://learncssgrid.com/) - Comprehensive guide

---

**Happy Grid Learning!**

*Remember: CSS Grid is about structure and layout. Start with the big picture, then refine the details.*
