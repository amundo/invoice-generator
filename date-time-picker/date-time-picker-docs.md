---
lang: en
title:  \<date-time-picker\> docs
css: date-time-picker.css
---

<main>

<strong style=color:red>Not completed.</strong>

I haven’t figured out the Timezone stuff yet.

## Overview

The `DateTimePicker` is a custom web component designed for capturing both date
and time, and it outputs an ISO datetime string as its value.

## Installation

Include the JavaScript file that contains the `DateTimePicker` class definition
in your HTML file.

```html
<script src="path/to/DateTimePicker.js"></script>
```

## Usage

To use the `DateTimePicker`, simply include the custom element in your HTML.

```html
<date-time-picker value="2023-10-01T12:00"></date-time-picker>
```

### Attributes

- `value`: An ISO datetime string in the format `YYYY-MM-DDTHH:MM`.

### Methods

There are no public methods for this component.

### Events

There are no custom events for this component.

## JavaScript API

### Get the value

To get the ISO datetime string, you can access the `value` property of the
element.

```javascript
const picker = document.querySelector("date-time-picker")
console.log(picker.value) // Will return the ISO datetime string
```

### Set the value

To programmatically set a new value, you can update the `value` property.

```javascript
picker.value = "2023-10-02T13:00"
```

## Example

HTML:

```html
<date-time-picker value="2023-10-01T12:00"></date-time-picker>
```

JavaScript:

```javascript
const picker = document.querySelector("date-time-picker")
console.log(picker.value)

// Update the value
picker.value = "2023-10-02T13:00"
```

## Browser Support

This component uses native HTML5 date and time input elements and should be
supported in most modern browsers. However, `type="datetime-local"` is not fully
supported in all browsers, such as Firefox.

</main>
