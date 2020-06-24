---
title: Study Hugo
subtitle: Learn how to build a hugo website
summary: Learn how to build a hugo website
authors:
- Alex Lam
tags: []
categories: []
date: "2020-06-19T00:00:00Z"
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/CpkOjOcXdUY)'
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

# Set captions for image gallery.
gallery_item:
- album: gallery
  caption: Default
  image: theme-default.png
- album: gallery
  caption: Ocean
  image: theme-ocean.png
- album: gallery
  caption: Forest
  image: theme-forest.png
- album: gallery
  caption: Dark
  image: theme-dark.png
- album: gallery
  caption: Apogee
  image: theme-apogee.png
- album: gallery
  caption: 1950s
  image: theme-1950s.png
- album: gallery
  caption: Coffee theme with Playfair font
  image: theme-coffee-playfair.png
- album: gallery
  caption: Strawberry
  image: theme-strawberry.png
---
To using Hugo to build a website. First we need to install the Hugo framework.



## 1. Quick Start

1. Go to [our github](https://github.com/HACLLALEX/hugo-with-chartjs) and download the simple page. 
2. Unzip the file and run the **hugo.exe**.
3. Click the **preview.bat**. Then, open a browser and enter 'http://localhost:1313/'. Your hugo website set up now.


## 2. Install Hugo 

Go to [Install Hugo](https://github.com/gohugoio/hugo/releases) And download the .zip file like

> hugo_0.72.0_Windows-64bit.zip

Unzip to your hugo file and click the **hugo.exe**. The hugo set up now.


## 3. Add Themes

![png](./userGuide/add_themes_1.png)

1. Go to [Hugo Themes](https://github.com/gohugoio/hugo/releases) .
2. Click the **Themes**. 
3. Choose a Themes. 
4. Click the **Download** button. It will 

![png](./userGuide/add_themes_3.png)

1. Click the **Clone** button.
2. Click **Download ZIP**.
3. Unzip the file and put it into your hugo file **themes** folder.

![png](./userGuide/add_themes_5.png)

1. Go to the path and find the config file

> config/_default

2. edit the config file as a notepad.
3. find the **theme = " "** and change the name of theme. The name sould be the same with your theme folder. 
