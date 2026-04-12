Modern responsiveness is shifting from the global viewport to **local component boundaries**. Instead of reacting to screen size, components now adapt based on the size of their **parent container**.

This enables true modular design—where components are reusable, predictable, and independent of the overall layout.

---

# 1. The Shift: Viewport → Container

## Traditional Approach (Viewport-Based)

```css id="k0p9d2"
@media (min-width: 768px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

### Problems

- Tied to global screen size
- Breaks when reused in different layouts
- Not truly component-driven

---

## Modern Approach (Container-Based)

```css id="l2x8vn"
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

---

## Key Idea

> A component should respond to **its available space**, not the entire viewport.

---

# 2. Enabling Container Queries

## Step 1: Define a Container

```css id="0s3g7z"
.card-container {
  container-type: inline-size;
}
```

### Options

- `inline-size` → responds to width
- `size` → responds to both width and height

---

## Step 2: Apply Query

```css id="5n7c0h"
@container (min-width: 400px) {
  .card-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

---

## How It Works

- The browser checks the container's width
- Applies styles when condition matches
- No dependency on viewport

---

# 3. Benefits of Container Queries

## True Component Reusability

- Works in sidebars, grids, modals, dashboards
- No need for multiple breakpoint overrides

---

## Predictable Behavior

- Component adapts based on its context
- Eliminates layout bugs from global media queries

---

## Cleaner Architecture

- Removes global CSS dependencies
- Encourages modular design systems

---

## Performance Insight

- Evaluated during layout phase
- No JavaScript required
- Offloaded to browser engine

---

# 4. Practical Examples

## 4.1 Responsive Card Component

```css id="ozq2r1"
.card-container {
  container-type: inline-size;
}

.card {
  display: block;
}

@container (min-width: 500px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

---

## 4.2 Adaptive Sidebar

```css id="7v8p2y"
.sidebar {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .nav {
    flex-direction: row;
  }
}
```

---

## 4.3 Nested Components

```css id="s6r8nx"
.parent {
  container-type: inline-size;
}

.child {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .child-content {
    display: flex;
  }
}
```

---

# 5. Container Query Units

CSS also introduces container-based units:

```css id="kz1s9w"
.title {
  font-size: 5cqw;
}
```

## Units

- `cqw` → 1% of container width
- `cqh` → 1% of container height
- `cqi` → inline size
- `cqb` → block size

---

## Benefits

- Fully fluid, container-relative scaling
- Works seamlessly with `clamp()`

---

# 6. Combining with Modern CSS

## Container Queries + `clamp()`

```css id="l0z7fd"
.title {
  font-size: clamp(1rem, 2cqw, 2rem);
}
```

---

## Container Queries + Grid

```css id="v3b6rx"
@container (min-width: 600px) {
  .layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Container Queries + `:has()`

```css id="3k7qpl"
.card:has(img) {
  padding: 16px;
}
```

---

# 7. Best Practices

## 1. Define Containers Strategically

- Avoid making everything a container
- Use logical layout boundaries

---

## 2. Prefer `inline-size`

```css id="9w2lzm"
.container {
  container-type: inline-size;
}
```

- Covers most responsive needs
- More predictable than full `size`

---

## 3. Keep Queries Simple

Avoid overly complex conditions:

```css id="d4n7yf"
@container (min-width: 400px) and (max-width: 800px) {
}
```

Prefer:

```css id="u8q3md"
@container (min-width: 400px) {
}
```

---

## 4. Combine with Existing Layout Systems

- Grid
- Flexbox
- Clamp-based scaling

---

# 8. Anti-Patterns

- Overusing container queries everywhere
- Nesting too many containers
- Mixing container and media queries unnecessarily
- Ignoring fallback strategies for older browsers

---

# 9. Summary

## Core Philosophy

> Components should adapt to their **environment**, not the viewport.

---

## Key Concepts

- `@container` → local responsive logic
- `container-type` → defines query scope
- Container units (`cqw`, etc.) → fluid scaling

---

## Key Benefits

- True modular design
- Improved reusability
- Reduced CSS complexity
- Better performance (no JS required)

---

## Final Takeaway

Container queries unlock the next evolution of responsive design:

- From page-level → component-level
- From breakpoints → constraints
- From global CSS → modular architecture

---
