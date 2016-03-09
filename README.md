# Description
Simple jQuery Plugin for adding, removing and checking classes on SVG elements

# Installation
Just include svgclasses.js to your HTML file.

# Usage
Adding class to SVG element:
```javascript
$('#element').addClassSVG('className');
```

Checking if element has class
```javascript
if($('#element').hasClassSVG('className')) {
  // your stuff here
}
```

Removing class from SVG element
```javascript
$('#element').removeClassSVG('className');
```
