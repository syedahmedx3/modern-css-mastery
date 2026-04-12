Maintaining clean, modular codebases requires avoiding **specificity wars** and minimizing JavaScript-driven UI state. Modern CSS provides powerful, browser-native tools to handle UI logic, theming, and defaults efficiently.

> **The shift from JavaScript-driven UI state to declarative, browser-native logic.**

---

# 1. Relational UI Logic with `:has()`

## Goal

Enable parent-aware styling without JavaScript.

---

## The Problem

Traditionally, UI state is managed with JavaScript:

```js
fieldset.classList.toggle("error", hasInvalidInput);
```

### Issues

- Adds unnecessary JavaScript
- Increases main-thread workload
- Harder to maintain and debug

---

## The Solution: `:has()`

```css
.fieldset:has(input:invalid) {
  border: 1px solid red;
}
```

---

## What It Enables

- Parent-based styling
- Conditional UI logic in CSS
- Reactive interfaces without JS

---

## Practical Examples

### 1. Form Validation

```css
.form-group:has(input:invalid) {
  color: red;
}
```

---

### 2. Navigation Hover State

```css
.nav:has(.menu-item:hover) {
  background: #222;
}
```

---

### 3. Toggle UI Without JavaScript

```css
.card:has(input:checked) {
  background: #f0f0f0;
}
```

---

## Performance Considerations

- More expensive than simple selectors
- Use within scoped components
- Avoid global usage like `body:has(...)`

---

# 2. Dynamic Theming with OKLCH

## Goal

Move from static color values to **math-driven, perceptually accurate color systems**.

---

## The Problem

Traditional color systems:

```css
:root {
  --primary: #3b82f6;
}
```

### Issues

- Not perceptually uniform
- Hard to generate consistent shades
- Accessibility requires manual tuning

---

## The Solution: OKLCH + `color-mix()`

---

## 2.1 OKLCH Color Model

```css
:root {
  --primary: oklch(60% 0.15 250);
}
```

### Components

- **L** → Lightness
- **C** → Chroma (intensity)
- **H** → Hue

---

## Benefits

- Perceptually uniform scaling
- Predictable color adjustments
- Better accessibility by default

---

## 2.2 Dynamic Color Generation with `color-mix()`

```css
.button {
  background: color-mix(in oklch, var(--primary) 80%, white);
}
```

---

## What It Does

- Mixes colors in a perceptual color space
- Generates shades/tints dynamically
- Eliminates need for hardcoded palettes

---

## Practical Example

```css
:root {
  --primary: oklch(60% 0.15 250);
}

.button {
  background: var(--primary);
}

.button:hover {
  background: color-mix(in oklch, var(--primary) 80%, black);
}
```

---

## Performance Insight

- Calculated by browser engine
- No JavaScript required
- Reduces design system complexity

---

# 3. Weightless Defaults with `:is()` and `:where()`

## Goal

Create global styles that are easily overrideable without increasing specificity.

---

## The Problem

Traditional base styles:

```css
button {
  font-family: inherit;
  border: none;
}
```

Overriding them can become difficult in complex systems.

---

## The Solution: `:where()`

```css
:where(button) {
  font-family: inherit;
  border: none;
}
```

---

## Key Feature

👉 `:where()` has **zero specificity**

---

## Benefits

- Easily overridden by any component
- No need for `!important`
- Clean cascade management

---

## Using `:is()` for Consolidation

```css
:is(h1, h2, h3) {
  font-weight: bold;
}
```

---

## Combined Example

```css
:where(:is(h1, h2, h3)) {
  margin-bottom: 1rem;
}
```

---

## What This Achieves

- Consolidated selectors (`:is()`)
- Zero specificity (`:where()`)
- Clean, scalable base styles

---

# 4. Combining Native CSS State Techniques

## Example: Fully Declarative Component

```css
:where(.card):has(button:hover) {
  border-color: blue;
}

:where(.card) {
  background: oklch(95% 0.02 250);
}

:where(.card:hover) {
  background: color-mix(in oklch, oklch(95% 0.02 250) 90%, black);
}
```

---

## Result

- No JavaScript
- No specificity conflicts
- Fully reactive UI

---

# 5. Best Practices

## 1. Use `:has()` for UI Logic

- Form validation
- Hover/active states
- Toggle-based interactions

---

## 2. Use OKLCH for Design Systems

- Define base colors in OKLCH
- Generate variants dynamically
- Ensure accessibility consistency

---

## 3. Use `:where()` for Base Styles

```css
:where(*) {
  box-sizing: border-box;
}
```

---

## 4. Use `:is()` for Selector Efficiency

```css
:is(button, input, textarea) {
  font: inherit;
}
```

---

## 5. Keep Selectors Shallow

- Avoid deep nesting
- Scope components properly

---

# 6. Anti-Patterns

- Overusing `:has()` globally
- Hardcoding multiple color variants
- Using `!important` instead of `:where()`
- Reintroducing JS for simple UI states

---

# 7. Summary

## Core Philosophy

> Let the browser handle UI state, styling logic, and color computation.

---

## Key Tools

- `:has()` → relational UI logic
- `oklch()` + `color-mix()` → dynamic theming
- `:is()` + `:where()` → scalable styling

---

## Key Benefits

- Reduced JavaScript execution
- Cleaner, modular CSS
- Improved performance
- Scalable design systems

---

## Final Takeaway

Modern CSS is no longer just presentation—it is a **state management layer**.

By leveraging native browser capabilities, you can:

- Eliminate unnecessary JavaScript
- Avoid specificity conflicts
- Build dynamic, accessible UI systems

---
