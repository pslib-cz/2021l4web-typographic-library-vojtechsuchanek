# Typography CSS library
**Author:** *Vojtěch Suchánek* <br>
![Introduction](docs/imgs/list.png)
## Demo site
Link to **[demo](https://pslib-cz.github.io/2021l4web-typographic-library-vojtechsuchanek/)** site for preview.
## Dependecies
### Include CSS and Javascript files in head
```js
<head>
    //Script for creating list of headings
    <script src="../src/classes.js"></script>
    
    //Stylesheet for default page look 
    <link rel="stylesheet" href="../src/style.css">
</head>
```
## Implementation
You have to create ```html
<div id="content"></div>
```
You need ti initialize script
```js
<script>
    let contentWindow = new content(document.getElementById("content"), [document.getElementsByTagName("h1"), document
        .getElementsByTagName("h2"), document.getElementsByTagName("h3")
    ])
</script>
```
## Usage
...
## Components
### First
### Second
