# W2 CSS Grid Layout

Learn CSS Grid through hands-on exercises and responsive design practices.

## 🚀 Setup Instructions

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Basic HTML/CSS knowledge
- Node.js and npm installed

### Installation
1. Open the project folder in your code editor
2. Run `npm install` from the root directory to install dependencies
3. You're ready to start!

### How to Run the Code
**Option 1: Live Server (Recommended)**
```bash
# Run container-basic exercise
npm run container-basic

# Run grid-area exercise  
npm run grid-area
```

**Option 2: Manual**
- Navigate to `Grid/container-basic/` or `Grid/grid-area/`
- Open `index.html` in your browser

## 📁 Project Structure

```
w2-css-grid-layout/
├── lesson/                     # Read these first
│   ├── css-grid-items-full-lesson.md
│   └── grid-container-lesson.md
├── lab/
│   ├── assets/
│   │   ├── container/
│   │   └── items/
│   ├── Grid/
│   │   ├── container-basic/        # Exercise 1
│   │   │   ├── index.html
│   │   │   ├── style-grid.css      ← YOU EDIT THIS
│   │   │   └── styles-core.css
│   │   ├── grid-area/              # Exercise 2
│   │   │   ├── index.html
│   │   │   ├── style-grid-area.css ← YOU EDIT THIS
│   │   │   └── styles-core.css
│   │   └── tests/
│   │       ├── container-basic.test.js
│   │       └── grid-area.test.js
│   └── congrats-reporter.js
├── package.json
└── README.md
```

## 📚 Learning Steps

### Step 1: Read the Lessons
1. Go to the root `lesson/` folder
2. **Preview** `grid-container-lesson.md` first (use VS Code preview or markdown viewer)
3. Then **preview** `css-grid-items-full-lesson.md`
4. Take notes on key concepts while reading

**💡 Tip**: In VS Code, right-click the .md file and select "Open Preview" for better formatting

### Step 2: Complete Exercises

#### Exercise 1: Container Basic
- **File**: `Grid/container-basic/style-grid.css`
- **Learn**: Grid containers, columns/rows, responsive design
- **Task**: Uncomment code, modify properties, test in browser
- **Run**: `npm run container-basic` (live server)

#### Exercise 2: Grid Area
- **File**: `Grid/grid-area/style-grid-area.css`  
- **Learn**: Named grid areas, complex layouts
- **Task**: Define grid areas, position elements
- **Run**: `npm run grid-area` (live server)

### Step 3: Test Your Work

#### Manual Testing
- Resize browser window to test responsiveness
- Check layouts on different screen sizes

#### Automated Testing
**After completing each exercise, run these commands to test your code:**

```bash
# Test container-basic exercise
npm run test:basic

# Test grid-area exercise
npm run test:area

# Test all exercises
npm test

# Watch mode (runs tests automatically on file changes)
npm run test:watch
```

## 🧪 Testing Guidelines

**Screen Size Testing**:
- Desktop: > 800px wide
- Tablet: 480px - 800px wide
- Mobile: < 480px wide

**Visual Checklist**:
- ✅ Grid items properly aligned
- ✅ Responsive breakpoints work
- ✅ No overlapping elements
- ✅ Mobile-friendly layout

## 🔧 Common Issues

| Problem | Solution |
|---------|----------|
| Grid not displaying | Add `display: grid` to container |
| Items not positioning | Check grid-area name spelling |
| Responsive not working | Verify media query syntax |
| CSS not loading | Check file paths in HTML |

## 💻 Browser Support
Chrome 57+, Firefox 52+, Safari 10.1+, Edge 16+

## 🎯 What You'll Learn
- CSS Grid fundamentals
- Responsive grid layouts  
- Grid area positioning
- Mobile-first design
- Layout debugging

---

**Remember**: Read lessons first → Complete exercises → Test your work

Happy coding! 🎉

💡 **Additional Resources**  
 For more comprehensive CSS Grid lessons, visit: [learncssgrid.com](https://learncssgrid.com/#grid-container)