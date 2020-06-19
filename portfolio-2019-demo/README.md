# Documentation for Jekyll

## Install Jekyll

Run in your terminal `gem install jekyll bundler`

## Install Jekyll in your project

Create a new folder. Open it in terminal and run `bundle init`. Then open the Gemfile created and write `gem "jekyll"`. Create your first page. All set!

## Build for production

Open the folder in the terminal and type `bundle exec jekyll build`

## Run website

Open the folder in the terminal and type `bundle exec jekyll serve`. This automatically build the site and creates a host at the address [http://localhost:4000/](http://localhost:4000/)

## Add modifications to content

### Add project

To add a project add a file in `/_projects/` with `name-of-file.md`. In the front matter (between ---) add:
```
---
layout: projects
title: name of project
number: "n" (n being the order in the projects list)
cover: name_of_image.jpg
company: Name of the company
type_company: Type of the company
city: City of the company
position: Position in the company
desc: Short description for metas
next_project: name_of_name_project
images:
 - path: name_of_image.jpg
   col: n (n being the number of columns in the row)
   text: Title on the image
   orientation: landscape | portrait
   alt: Text alt image
   link: http://www.link-to-project.com (not mandatory)
   mockup: true | false
   video: https://www.youtube.com/embed/CsGauHXioos **Copy the link when you share an embed video** (not mandatory)
---
```
For help writing the `.md` file go here: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
To add a class to the generated element add `{:.class}` before the line. To add it in a `li` add this at the beginning of the line `* {:.revealLeft} `

### Edit order in the projects list

In the file `_config.yml` add:
```
collections:
    projects:
        output: true
        order:
            - b.md
            - a.md
            - c.md
```

### Add experience

To add an experience open the file `/about.md` and write in the list `experiences`:
```
 - title: Job title
   company: Name of company
   city: City of company
   date: Start date - End date
   job_description: "Short description of the job."
   skills: Skill 1, Skill 2
```

### Add an education item

To add an experience open the file `/about.md` and write in the list `educations`:
```
 - title: Title of the diploma
   date: Start date - End date
   school: Name of school
   city: City of school
   description: "Short description of the diploma."
```

### Add a skill

To add a skill put the logo in SVG or PNG centered in a transparent square (on Illustrator / Sketch / any design software) with dimensions 150x150px and add the file to `assets/images/`. **Use SVG logos when possible**. Then open the file `/about.md` and write in the list `skills`:
```
 - link: https://www.link-to-brand-website.com/
   logo: name-of-logo.svg
```

### Add a language

To add a language open the file `/about.md` and write in the list `languages`:
```
 - title: Language level
```

### Social links and resume

#### In header and footer

Open the file `/_data/social.yml` and write:
```
- name: name-of-social-link
  icon: icon_name-weight
  link: https://www.link-to-website.com/
```

#### In the contact page

Do the header / footer step. Then open the page `/_layouts/contact.html` and add in the section `ul class="list-links"` 
```
{% if item.name == 'name-of-social-link' and item.link %}
<li class="revealLeft">
    <a href="{{ item.link }}" target="_blank" class="link-find" id="link-name-of-social-link">Nam<span></span></a>
</li>
{% endif %}
```
**Do not write the name in the li with its last letter.**

Then open the file `/_sass/main.scss` write in `.link-find`:
```
&#link-name-of-social-link::after {
    content: "last_letter";
}
```

### Add navigation item

Open `/_data/nav.yml` and write:
```
- title: Title displaying in the menu
  link: /path/to/page.html
```

## Edit layout

### General

Open the page `/_layouts/default.html` and edit this page. You can add other CSS or JS inside this one.

### Homepage

Edit the page `/index.html`

### Project page

Edit the page `/_layouts/projects.html`

### About & Contact page

#### Big title in these pages

Edit the page `/_layouts/all.html`

#### About page

Edit the page `/_layouts/about.html`

#### Contact page

Edit the page `/_layouts/contact.html`

### Header

Edit the page `/_includes/header.html`

### Footer

Edit the page `/_includes/footer.html`

### Social icons list

Edit the page `/_includes/social.html`

## Edit design

### SCSS files

SCSS files are located in the folder `/_sass/`, and are automatically compiled to a minified CSS. To add a new SCSS file to the website add this in the `head` of your HTML in `/_layouts/default.html`:
```
<link rel="stylesheet" href="assets/css/name_of_file.css" />
```

### CSS files

CSS files are located in the folder `assets/css/`. To add it to your website add this in the `head` of your HTML in `/_layouts/default.html`:
```
<link rel="stylesheet" href="assets/css/name_of_file.css" />
```

### CDN CSS files


To add it to your website add this in the `head` of your HTML in `/_layouts/default.html`:
```
<link rel="stylesheet" href="https://www.link-to-cdn.com/name_of_file.css" />
```