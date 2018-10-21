# Restaurant Reviews App - Front End Nanodegree Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

##Table of Contents

* [Overview](#overview)
* [Specification](#specification)
* [How to run](#How to run?)
* [Tools Used](#Tools Used)

## Overview

For the **Restaurant Reviews** projects, I have incrementally converted a static webpage to a mobile-ready web application. In **Stage One**, I got a static design that lacks accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I also have added a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

I was provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also did not include any standard accessibility features, and it did not work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality.

### How to run?

To run the project, download or clone the repository to your PC. and follow the steps bellow:

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

2. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). Using `<MAPBOX API KEY>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

### Tools Used
1. Service Worker
2. Cache API in the service worker
3. Mapbox
4. HTML
5. CSS
6. JavaScript

### Author
Vipin Maurya
