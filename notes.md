Front-End Web Ui Frameworks: Bootstrap 4: 

Course overview:

We can split the development of a new web application into two distinct parts:

Design: 
	- User Interface (UI) and User Experience (UX) design 
	- Visual Design
	- Prototyping 
	- Color palettes, Graphics and Animations. 

Development and Deployment
	- Web UI/UX frameworks - BootStrap 
	- JavaScript Frameworks/Libraries  - Angular (FW), React (Lib)
	- Hybrid Mobile Frameworks - Ionic/React Native/Cordova
	- Server - side developments: Node + Express + MongoDB

This course focuses completely on the Development side of building a web app.
The design's used will be cookie cutter/basic because Design is a completely different speciality.

Full Stack Web Development:

Presentation Layer - 
		   - UI Framework (Bootstrap 4/Angular Materical)
		   - JS Framework and/or Library (Angular/React)

Business Logic Layer -
		     - BAAS
		     - NodeJS adn NodeJS Modules

Data Access Layer - MongoDB

# UI Framework development and BOOTSTRAP:

Bootstrap (specifically Bootstrap 4) is an open-source UI. framework. 
A framework is typically defined as a component library (collection of resources) 
combined with a methodology for implementing a design. 

Bootstrap's core features are:
1. Extensive pre-built and open source components to develop all kinds of HTML/CSS/JS
2. Designed to allow users to quickly prototype ideas. 
3. Sass Variables and Mixins
4. Powerful plugins built on jQuery. 

BootStrap makes money by selling premium themes/plugins and support services. 

In particular, we'll look at how to use the BootStrap Grid System 
to implement responsive design 
We'll use Bootsrap CSS and JavaScript Components. 

Web Tools:
	- Git
	- Node.js and NPM
	- Grunt and Gulp (Task running tools) 

What is Full Stack Web Development? 

Front end - 
definition - areas in stack/application where we deliver content to user
other names - this is often called client-side development
technologies - HTML, CSS and JavaScript. 

Back end - 
definition - areas in app that store, create and update content. 
other names - server side development
technologies - PHP, Java, ASP.NET, Ruby, Python 

The Traditional three Tier Architecture:

The Three Tier Architecture is a model for decomposing the layers 
in a web application. 

In the traditional model, the Presentation layer is only responsible 
for delivery content and has limited client side business logic and
content generation. 

The primary method for generating new content is to send requests 
to web servers who process new HTML and send it up to Presentation
layer to render. 

Presentation Layer - delivers content to user. 
 	|	   -  HTML, CSS, JS 
	|
	|
Business Logic Layer - generates content/data validation/dynamic content processing
	|	     - Ruby/Python/PHP
	|
Data Access Layer - data access/data persistence/api management. 
		  - Relational DB, SQL, XML/Text files



There's an increasing trend to using a single language to 
implement the entire stack, almost always, JavaScript. 

JavaScript Three Tier stack: 

Presentation Layer - single page apps 
 	|	   -  Javascript frameworks/libraries 
	| REST API - JSON 
	|
Business Logic Layer - generates content/data validation/dynamic content processing
	|	     - Node JS + Node JS modules 
	|
Data Access Layer - MongoDB
		  - JSON DOCUMENTS and JSDOCS structure. 


Laurence Gellert has broken the stack into 7 layers. 

All 'layers' are ways of breaking down all the tasks and probelms 
that come with building a web application. You can cut them any which
way but Gellert argues that any layer model should take related 
concerns as the basis. 

Gellert's model:

Bottom --- 

1. Server set-up, Network and Hosting Env.
 concerns - resource management, cloud storage, networking, file systems 
	    hardware constraints, application scale, race conditions, development machines

2. Data Modelling -
	- The data model is an often neglected side of back end dev
	- however bad data models lead to strange/ugly code 	
	  in higher-layers, particularly in the Business logic layer
	- common problem that people don't take the time to resolve	
	  corner cases. 
3. Business Logic -	
	The main value the application provides to the user
	Defines the user-data relationship, product and restrictions. 
	Requires solid OO skils. May need Framework skills dep on requirements.
4. API Layer/Action Layer/MVC - 
	How the outside world operates against the business logic and data model
	Frameworks are crucial to this layer
	Requires a full stack dev to write clear, consistent and simple use interfaces
	Convulated API's are the sure sign of bad developers.
5. User Interface 
	Goes beyond 'how the content is delivered to user'
	Mastery of HTML5/CSS REQUIRED.
6. User Behaviour/Experience
	How is the user expected to use the app? 
	How are they actually using it?
	Error messages, fall backs, logging.
	Mantra - user's just want things to work. 
	       - how many clicks/pages/steps to get what I need
7. Customer and Business requirements 
 	Understanding the business model and customer requirements. 
	Adapting to changes in either over time
	Predicting or at least coding in flexibility. 

# GIT
GIT was designed by Linus Torvalds (lead creator of GIT) as a tool
for managing Linux Kernel Development. 

GIT then expanded to being an open-source technology for all
code projects.

Required for working with node ecosytem for whole specilisation. 

# Notes on Git commands:
git init - init git repo. Branch created is the master branch
git status - tells you the state of alls files (changes, commit status..).
git add - add files/folding to staging area - defines a snap short to commit
git commit - commit changes to the git repository. 
git log - reveal log of all commits 
git checkout - checkout from an older commit 
	     - git checkout <commit id> <file or folder name>
git reset HEAD <file/folder> - reset file/folder to most recent commit.
git reset - reset whole staging area to last commit without disturbing working dir. 
git checkout -- <file/folder> - undo changes to file back to head

Online Git Repos

Online git repositories are repositories of code that are held 
in cloud storage by a provider - usually either BitBucker or GitHub.

Each person has to create an account and clone the repository. 

Each repository has restrictions on who can clone the repository and
who/how someone can modify the source code.

Online git repos allow multiple users to work on the same git 
repo. It also allows for controls to be put on the repo 
to restrict access to or editing of the source code.

All famous libraries are managed through online git repos.
Most allow all users to clone the repo but almost all prevent
users from committing changes to master repo.

All users with the cloned repos can edit the code but they cannot
save those changes to the central repo. They can, however,create
their own repo.

Git commands about managing online repos:
git pull  <file/folder> - pull down changes to file made on source
git push - push changes in latest commit to source


Node.js and NPM:

Javascript was initially created as a browser-based scripting language.
Node.js has allowed JS to run server side operations.

Node.js is based on JS runtime built on Chrome V8 JS Engine. 
Chrome's V8 JS Engine has been 'ported' from browser to desktop.
This means that JS programs can be executed outside the browser (desktop/server)

Node.js is built around event-driven, non-blocking I/O model.

Initially, we'll look at Node.js power as javascript runtime for
desktop. In the last course, we'll use the other powerful
features of node.js to run code on a webserver.

Being able to run JS progams to run on desktop led to
developers to see JS as a possible JS on server-side. 

Node Architecture:

top

Node Core/ Standard Libraries (JS)

Node Bindings (C++)

Chrome V8 (C++) and Libuv (C) 

Desktop's Computing Systems. 

bottom 

NPM - Node pacakage manager 

Manages ecosystem of node modules/packages 
A package contains JS files + package.json files 

package.json files are the manifest for the bootstrap app:
They do the following:
1. serves as documentation for what packages your
   project depends on 
2. allows you to specify the versions of packages 
3. makes build reproducible, allowing other devs 
   to quickly get all packages project requires. 

Using Node.js
 - setup package.json file for git repo 
 - setup node-module called lite-server to server content
 - launch lite-server 
 - browse a index.html in browser.
 - see updates to browser window as we make changes to index.html

Setting up a new Node.js env and installing lite-server:

We use the Node Package Manager to initiate and set up
our node js env. 

Command line - npm init - will take user through some questtions
                          that will be added to package.json file

             -  npm install lite-server --save-dev

             
             
        
             This installs the package lite-server and saves the package
             as a requirement to package.json file.
             
Note: you'll see a lot more sub-folders in the node modules folder than the lite-server package.
 This is because all primitive packages for Node.js AND the packages
lite-server needs have been added as requirements also.

# launching lite-server and looking at index.html 

update the package.json file - 
    under the scripts key add a new keypair for start
    and add lite to the command lite-server. 
```json
"scripts": {
    "start":"npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server"
  },
```

Front-end Web UI frameworks: 

what are Front-end web ui framework: 

Collection of ready-to-use HTML, CSS 
and JavaScript templates for UI components. 

Web UI frameworks developed naturally out of the 
desire to re-use blocks of CSS, HTML and JS
across web applications. 

Prior to the open-source movement, every company 
ended up developing their own set of CSS classes,
HTML patterns and JS functions and re-using them
across their products. 

This led to third-parties offering these components 
and eventually to widely used open-source frameworks. 

The typical components of a framework are:
*Typography - consistent across website design
*Forms
*Buttons,
*Tables,
*Navigations
*Dropdowns
*Alerts
*Modals
*Tabs
*Accordion
*Carousel. 

Frameworks also come with a philosophy and set of patterns
that let developers use their tools, across versions,
to quickly implement a scaffolding. 

Popular front-end frameworks:
1. Bootstrap
2. Semantic-Ui
3. Foundation
4. Material UI
5.Materialize
6. UIKit. 

why use them? 
1. increased productivity - easy to use and reuse
    across multiple webpages and sites. 
2. Cross-browser compatibiltiy 
    many frameworks handle the differences between
    different browsers/devices/versions
3. Responsive web design
   Framework elements adapt to mobile vs desktop
   Bootstrap, like many, has a "Mobile First"
4. Pre-built consistency - Bootstrap org has spent
    millions ensuring that even their niche 
    components fit into the framework.
5. Community support 
6. Can purchase really specific support or 
   additional products (scalability.)

Getting started with Bootstrap:

retrieve the course package.json from 
https://www.coursera.org/learn/bootstrap-4/supplement/kXErq/exercise-instructions-getting-started-with-bootstrap

move to git repo working directory and npm install.

We'll use specific versions in this course to avoid any versioning issues.
execute the following commands to install the right npm packages. 

 npm install bootstrap@4.0.0 --save
 npm install jquery@3.3.1 popper.js@1.12.9 --save
 
 Note: bootstrap doesn't install it's companion libraries (jQuery and Popper)
by default and this is good because we need specific versions. 

Look in node_modules/bootstrap/dist/css and node_modules/bootstrap/dist/js
these are all the components we get for free with bootstrap 4.00 distribution.

Two files are of particular interest for now -
 node_modules/bootstrap/dist/css/bootstrap.css.min
  node_modules/bootstrap/dist/css/bootstrap.js.min
  
We'll include these in our index.html file to run every time we start
a lite-server. 

# Running basic bootstrap when web site launches - 

insert the following between the <head> tags in index.html
```html
<!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```
meta tags - 

charset: setting the unicode that will be used
viewport: when our webpage is being rendered by browser, set the 
          screen width assumed in HTML to the device width.
          This is key to designing websites that are responsive to 
          user's viewport. 
http-equiv: 

and one <link> tag - 

This link tag is linking the webpage to a css sytle sheet
and telling the browser where to find the style sheet. 

We also need to reference the bootstrap JS elements.
Like most JS elements, we reference in the body AFTER 
the webpage HTML is defined. 

Insert this as the final code before the closing body tag </body>

```html
 <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

This tells the browser to load the following JS libraries:
jQuery,
Popper
Bootstrap JS plugins 

Note: the order is important because Bootstrap depends on jQuery and Popper
and may fail when it loads.

Why load the CSS at start and JS libs at the end of the page?

1. We load the CSS at the start, head tags render first, because 
we only want the user to see the web page with styling applied. 
This is crucial to the user experience.

2. We load JS last because they take a while and we don't want
the user waiting for content while libs, that probably aren't
required for the first rendering of the page, to get their
source code. 

# Building up the webpage styling with Bootstrap

So far, we've only implemented bootstrap.css.min and bootstrap.js.min.
bootstrap.css.min changes the font styling, list styling and header styling. 

This web page still isn't "pretty" 

#Responsive design and 'mobile first' approach.

#Responsive Design 

Traditionally, developers assumed all websites were being accessed from
a computer. However, the one size fits approach is no longer possible.

Now, developers have to be aware that users will be accessing their 
website from browsers running on tablets, phones, phablets, televisions etc.

Each one comes with its own screen dimensions, resolution etc. 

Responsive design: designing content that's responsive to the user's "viewport"

You can see any website being rendered across viewports by accessing
the developer console/devices.

Example: a navigation bar will often convert to a button when 
the accessed from a mobile device. The button, when clicked, will then
show the navigation bar. 

# Mobile First:

Designing content as if the viewport was a mobile device.
This approach assumes that web page will be viewed by mobile devices so 
shows only a subset of content by default. 

The developer then determines what content will be shown as the 
viewport expands. 

# Foundations of Responsive Design 

* Grid System - specifically Bootstrap's grid system - method of dividing the page. 
* Fluid images - automatically adapting images
* CSS Media queries - query size of media and appropriately change CSS
                      classes to fit size of screen

# Bootstrap Grid System

CSS flexbox grids lets developer perform easy vertical alignment 
within a parent element. 
CSS flexbox grids allow for easy reordering of content across
devices and screen resolutions, with the help of media queries. 

How Bootstrap grid works:

Bootstrap grid works by applying a container class to a section of 
the web page or the whole page.

The container can be set to resize (width/length) in response to 
media queries telling the container what the device screen size is. 

Within the container - content is ordered in rows.

Within rows - content is divided into 12 columns.
Developer then specifies, for each screen width, how many columns each 
piece of content will occupy with a row. 

The number of columns is often defined in reference to a screen size 
by linking a column class (see below) to a number of columns. 


Bootstrap makes available 5 classes for defining screen sizes.
1. default - all screen sizes from ex small to ex large
2. sm for small
3. md for medium
4. lg for large
5. xl for extra large. 

```html
<div class="container"></div>
    <div class = row > </div>
        <div class = "col-sm-5"></div>
        <div class = "col-sm-7"></div>
    <div class = row > </div>
    <div class = row > </div>
```
This is saying that the first piece of content will occupy 5 columns for 
all screen sizes that are AT LEAST SMALL (sm - XL.
Furthermore, the second piece of content will occupy the remaining 7 
columns iff the screen size is at least 'small' size. 

Alternatively, we can leave the col size blank and allow the browser
to fill the content in the remaining size. For example - 


```html
<div class="container"></div>
    <div class = row > </div>
        <div class = "col-sm"></div>
        <div class = "col-sm-6"></div>
        <div class = "col-sm></div>
```

This is saying, within the first row, if the screen is at least small 
(>540px) make the middle content fill up 6 columns. Allow the other two
pieces of content to fill the other spaces. Typically, this 
would be 3 columns width on each size. 

Gutter width: default is 30px: white space that's automatically 
applied between content in neighbouring cols.
This can be overriden to whatever the dev requires. 
You can think of gutter width as the spaces between articles in 
a newspaper. 

Using column size and order -- 
```html
<div class = "col-sm-5 order-sm-last"></div>
<div class = "col-sm-7 order-sm-first"></div>
```

For the above content, on ex small screens, div1 content
will be stacked ontop of div 2.
on sm> screens, div 2 content will be displayed to the left
of div tag 2. 

On  extra small screens: 
Bootstrap will automatically reorder the content so that
the content is stacked in order of div tags. 

Why stack content? 
This is because we've provided no speicifcation for the width,
of each content for ex small screens.
both pieces of content have speec that applies to > sm only.

On sm > screens, 
The order attribute refers to content when displayed 
NEXT TO EACH OTHER.

So on sm> screens, the second div tag's content will be displayed
to the the LEFT.

You can also use order numericalaly (1-12). This range is set
because there's only 12 columns and content cannot compromise
less than one col. You can however nest content within other content.

Nesting:

within a col div tag, you can set another row 
with another set of col tags. This provides 
additional flexibility to content layout. 




# Media queries - 
CSS tech to apply some styles based on size of viewport
```css
@media(min-width:992px){
.container{
 width: 540px;
 max-width:100%;
    }
}
```
This tells the browser - perform a media query (get info about view port)
and only display the container css iff it meets min width. 


# Navigation:

Websites are rarely signle pages, so developers have to 
think about how users can intuitively get around 
different web pages.

Information Architecture: 
Structure of a system with a respect to the way info is
*organised
*labeled
*navigation methods. 

This tends to fall into the speciality of website design.
Web designers put a lot of thought into what 
info the website is trying to offer the user and how
the user is expected to find and navigate it. 

We'll keep toa simple ifnformation architecture throughout
this course without much design thought, focusing on
the implementation of navigation

Information architecture is traditionally modelled 
hierarchically using a website tree.
 

                                           Home
                                            |
                                            |
               About                    Menu                          Contact
    History  Key Players     Appetizers  Mains  Desserts Specials 

Home is the top level of the website architecture 


Methods for implementing navigation:

# Navigation Bars:
Most common navigation device 

A page spannning content element containing 
links to various pages within your webstie. 

Do's and Don'ts of nav bars:

+ simple, user-friendly terms
+ standardize navigation across website heirachy 
    always know how to go up/down/across heirachy. 
+ provide indication of the location within 
    nav heirarchy 
+ use standard web conventions
    e.g. clicking on logo takes back to home page. 

-- Don't have too many items
-- Use generic labels 

# Breadcrumbs - 

These are typically provided somewhere in web page 
usually near top/edge of the web page. 

Breadcrumbs indicate navigational heir within which
the user is currently in.

This is a secondary navigation option other than
nav bars. 

Could indicate where the user is/where they have visited
and how to get to next level. 

Other nav tools: 

Tabs,
Pills
Accordions
Pagination,
Dropdowns,
Affix,
Taxs,
Scrollspy. 

Icon Fonts:

Icon fonts are sets of tiny images/symbols/glpyhs
that are styled like text. 

They can be styled with an css text styles and so 
there's a good cohesion between text and image. 

These give users a nice visual que next to text 
to indicate common features like returning to home.

Furthermore, icon fonts are often sen as lightweight
replacements for simple graphics.

Lastly, icon packs create consistency across websites
allowing users to recognise across sites/pages
ques for navigation.

Font Awesome -
    - very popular icon font 
    - free and widely used.
    
To use Font Awesome, and most icon packs, all you 
have to do is download the .css files and 
apply a class to either an <i> or <span> tag.

Social buttons:
These are just a set of icon fonts that link
users to a companies specific social profiles. 

How to get Font Awesome and Bootstrap social .css files - 

We can use Node Package Manager to get both sets of 
icon fonts. 

 npm install font-awesome --save
 npm install bootstrap-social@5.1.1 --save
 
 * installs font awesome and bootstrap-social
   and saves both as package dependencies. 
 
 Next we have to add both to every webpage that will use
 them 
 ```html
   <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
   <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
 ```
 
 Then we have to make use of these icons - see index.html
 
 # user input:
 
 * filling in forms (login/sign up)
 * typing into text boxes (search)
 * clicking on buttons or prompts 
 
 history of user interaction:
 
 early interaction was mostly <a> tags to provide hyperlinks
 
 However, the invention of buttons (<button>) and forms (<form>)
 have added new methods of user-interaction.
 
 <button> is general, loosely defined, tag that provides a wide
 range of interactiontivity.
 
 buttons inside forms almost always submit or amend the form
 buttoms outside of forms  have much wider 
 users but often change webpage content or redirect the user.
 
 The core form elements are:
 
 <input> - type - text/password/submit/radio/search/url/date
 <textarea>
 <button> - usually used to change/submit form
 <select> 
 
 Displaying content 
 
 # Presenting Tabular content 
 Tables (<table>) was originally implemented as a way of displaying 
 tabular table, say a .csv file. 
 
 However Devs hijacked tables as a way of displaying content.
 Now that BS grid and other similar UI framework tools have offered 
 a new, better, way of organising content, most modern websites that 
 use tables employ them as intended, displaying tabular data.
 
 We'll only look at displaying tabular data using table in this course, 
 it's worth noting that table has a much wider use in older websites.
 
 - How tabular content is implemented in HTML with BS.
 
 1. employ standard HTML <table> tag. 
 2. Wrap content with BS table classes 
 
 html <table> tags:
 ```html
<table class="table-striped">
    <thead class="thead-dark">
        <tr>
            <th>&nbsp;</th>
            <th>2013</th>
            <th>2014</th>
            <th>2015</th>
        </tr>
    </thead>
     <tbody>
        <tr>
            <th>Employees</th>
            <td>15</td>
            <td>30</td>
            <td>40</td>
        </tr>
        <tr>
     </tbody>
 </table>
```
A standard HTML table is constructed using a tree of tags. 

The top level of the tree is just the <table> tag.
The next two levels are the table headings and table body 

<thead> defines all the headings for the table 
<tbody> defines all the table content. 

<tbody> is divided itself into rows <tr> 
each row has a row heading <th> and cell values <td> 

overall the tree looks like:

                                 <table>
           <thead>                        <tbody>
           <th> <th>....          <tr>              <tr>
                              <th> <td> <td>     <th> <td> <td> 
      
We then wrap bootstrap stylings around the table tag to
define - style, responsivness etc. 
 
 
 BS table classes:
 
 table-scripted - zebra style tables
 table - bordered - for borders to table cells
 table-sm for cutting cell padding in half
 table-responsive - responsive design table. 
 
 # Cards
 Cards are a versatile BS components that  allows devs to display 
 content in millions of ways. 
 
 # Image and media content:
 
 Images follow the same basic UI framework as other content.
 
 We use the standard <img> tag provided to us by HTML and 
 wrap layers of BS classes ontop. 
 
 ```html
<img src="./images/image1.png" class="img-fluid">
```
BS image classes:

img-fluid: for responsive images that scale with parent element
img-thumbnail: thumbnail image: 

A common way to BS images is to use a media class
This combines images and text content into one container 
caled the media object. This is helpful if when you
need to relate images to text. 

```html
<div> class="media"
    <img class="d-flex mr-3 img-thumbnail align-self-center"
     src="img/alberto.png"
     alt="Alberto Somayya">
    <div class="media-body">
        <h2 class="media-body"> </h2>
        <h4>Executive chef </h4>
    </div>
</div>
```

Embed and Responsive Embed - 

You can apply a embed responsive item to 
<embed> <iframe> <object> to display and adjust content
depending on the user's viewport. 

# Alerts -
alerts are used to inform users of changes to content, of the internal workings
of the side (e.g. a file export being ready) etc. 

alert mechanisms:

badges: draw attentions to recent updates to web page or to parts of the site. 
alert/error/warning messages: gives user feedback on their actions
progress bars: keep users informed on the internal workings of site. 

```html
<h2 class="media-heading"> Uthappizza 
    <span class="badge badge-danger"> HOT </span>
    <span class="badge badge-pill badge-secondary"> $4.99 </span>
</h2>
```
#badges - 

we create badges by applying 'badge' BS class to span tags. 
We're effectively wrapping the span text within an image.

badge-danger: color th badge red and give it very sharp edges
badge-pill: grey, pill shape wrapper to text. 

#Alert 
Alerts created using the alert class (apply to div class)
Alerts can be different cols, include links and be dismissable 

BS class:
alert: base BS alert class 
alert-warning 
alert-dismissible - user can click x to remove alert 

#Progress bar: 
apply the progress class to the div and then apply 'progress bar' to inner div
base class: 'progress'

```html

<div class="progress"></div>
    <div class="progress-bar progress-bar-striped bg-danger"
    role="progressbar", style="width:80%"></div>
</div> 
```

#Tabs and Pills

A big improvement on earlier web pages is the ability for web pages to 
selectively show content. Content is withheld and revealed through 
the use of Tabs and Pills. 

Tabs and Pills provide new content WITHOUT having to reload the page. 

Tabular navigation:

Identical in concept to how tabs work in browser, content is hidden
behind a tab until the tab is selcted by the user.

Content is organised into tab panes and the user navigates using 
tab navigation elements. 

We'll use the <nav> class and further qualify with 
nav-tabs class. 

# Accordion and the collapse plugin 

The collapse plugin provides a quick way of revealing and hiding
content 

Toggling of content reuqires the use of a button or link to trigger
the toggle

An example of the collapse plugin is when we set the navigation
bar to collapse on xsm 

We use a button that has data-toggle = collapse attribute 
and an id that refers to the content. 

Accordion is very similar to a tab however it uses cards to house each
individual piece of content and the collapse plugin to hide/display content.

# Tooltips, Popovers and modals 
All three are tools for revealing content upon interacting with 
an element on the web page

Information displayed using an overlay 

There's a flexibility/difficulty tradeoff 

tooltip (least flexibile, easiest to implement)
popover 
modal (most flexible, hardest to implement)

tooltips display a small amount of info if user hovers a
selected area (e.g. a button) 

popovers - user has to explicitly click on button/area 
user must then click again to continue. 

modal  - more detailed than tool tip/popovers
        - contains header, body, footer,
        - you can use bootstrap gird in body. 
        
For example, a login form could be implemented with a login 
by displaying a login form that captures the required info

# How Bootstrap interacts with Jquery
1. Bootstrap's JavaScript support is through JS plugins
2. These JS plugins are almost all based on JQuery. 
3. Plugins can be individually or collectively included. 

JS components can be used either directly (by writing custom JS code) or
, as we have used so far, by calling data-* attributes. 

These data-* attributes allow devs to call JS components without
having to write any JS. 

Examples: data-toggle, data-spy, data-manipulate 

# JQUERY - 
* lightweight JS library
* Feature rich -
    * HTML/DOM manipulation
    * CSS manipulation
    * HTML event methods
    * effects/animations
    * AJAX (interact with backend servers)
    
    + Bootstrap JS components are built upon JQuery. 
    
JQuery syntax:

$(selector).action()

$: always called in JS scripts using the $.The global variable name for the 
library is $.
selector:  used to query and find HTML page within DOM that you want 
to apply manipulations. 
action: now HTML is selected, what action do you want to perform? 

how to specify selectors:

1. refer to elements within specific HTML tags - "p" - refers to all p tags 
2. refer to elements by id - "#something" - refers to a specific element with id 'something'
3. refer to elements by classes applied to it - ".btn" - all elements that have had BS btn button 
                                                          class applied to it. 
4. by attribute value  - '[data-toggle="tooltip"]' - refers to all elements that have data-toggle attribute
                                                     set to the value 'tooltip'
5. current element - $(this) - for the current element that's already selected
6. by keyword - document, header - known words that refer to specific 
                                   sections of DOM. 


```js
$("p").hide();
$("#mycarousel").carousel('pause');
```
1. select all html elements that are paragraph elements (<p>) and hide them.
2. select the html content tagged as 'id=mycarousel' and pause it.
   
# Tooltip example 

```html
<script >
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
</script>
```

The selector in this example is the document as a whole (all elements in DOM)
The action is ready, or 'execute this function when the document is ready'

The input to any function defined on the fly like this is the selector.
In this case, the function is being applied to whole DOM.

Select those elements in DOM with an attribute called data-toggle 
that is set to tool tip. For those elements, perform the action
called tooltip.

tooltip() just turns tooltips on. 

JQuery Events:
User interactions on web page cause DOM events 
where JQuery picks up on user event and manipulates DOM in response. 

user events:
* mouse: click, mouseleave, mousemove
* keyboard: keypress, keyup/down
* form: submit, change
* Document, Window: load, resize, scroll 

Jquery common event methods - 
ready(), click(), dbclick(), mousedown(), on()

#controlling a property of an element in JQuery 
```js
$('.carousel').carousel({interval:2000});
$('.carousel').carousel('cycle');
```

Find the elements with BS class carousel applied. 
Apply this carousel action to it. 
Set the interval sliding to be 2000ms (2seconds)


# CSS preprocessors: Less and Sass
CSS is great for defining styles and repeatedly 
reapplying styles to various html elements. 

CSS code is limited in its syntax because its 
not a scripting programming language. 

For example - no easy way of defining variables,
              nesting selections, expressions,
              functions

This limits what you can do with basic CSS and 
also writing CSS cumbersome and hard to maintain. 

CSS preprocessors expand CSS functionality. You
write in Sass or Less and when the scripts, which 
are then compiled into traditional CSS syntax
automatically before use in web page. 

Bootstrap4 is built using Sass as it's source. Bootstrap3
used Less but migrated to SASS when upgrading.  

If you want to customize BS, you have to work with
SASS code. 

Core featues that preprocessors add:
1. variables
2. nesting
3. mixins
4. functions/conditionality 

Scss is a flavour of SASS and it's a smaller, simplified 
version of SASS. 

# variables 

```scss
$lt-gray:#ddd;
$background-dark: #512DA8;
```
We can then apply the two variables lt-grey and 
background color to any relevant CSS classes. 
If we need to change the value, we only need 
to change the variable value. 

# Nesting 

```scss

.carousel{
background:$background-dark;
    .carousel-item {
    height: $carousel-item-height;
    .img{
      top:0;
      min-height: 300px;
    }
  }
 }

```

# mixins - 

mixins hold multiple css declarations unlike variables 

```scss
@mixin zero-margin{
  margin:0px auto;
  background:$white;
}
```
# Compilling css preprocessors 

To use a CSS preporcessor(SASS, LESS), we have to install
a compiler that will take our .scss or .less files and convert
them to css. 

We'll use NPM packages for both. 

For less - 
 npm install -g less@2.7
 Installs lessc compiler. 
 
 compile less to css by running on cmd - 
 lessc syles.less syles.css 
 lessc <less file> <name of new css file> 
 
for SASS:
npm install --save-dev node-sass@4.7.2 

because we'll be using SASS going forward, we'll implement 
the compile them in a more formal way than running 
some cmd code.

1. write .scss or .sass script
2. update package.json scripts section to include  "scss":"node-sass -o css/ css/"
3. run on cmd: npm run css 
this should convert all .scss into css files with the same name but 
different file ext. 

# building and deployment 

Once all the web pages have been written, there's another set of issues to tackle.

- how do we build the website? 
    - ensure that css preprocessors are compiled before page is displayed 
    - ensure JS scripts/packages are available 
    - ensure cross-browser and platform support 
    - define and install all server side dependencies 
    - concatenation of various script files 
    - error handling 
    - versioning and deploying changes 
   
- how do we deploy it to a web server so as to make it publically available

Web development and deployment involves a lot of repetitive tasks.
A series of patterns and software have been developed to automate these
 deployment tasks because of the DRY principle (don't repeat yourself)

# deploying CSS 

CSS preprocessors need to be compiled into a .css file BEFORE the web page
is loaded. 

We may need to do vendor prefixes - compiling that depends on the browser - 
and this is were autoprefixers come in. 

# minification - 
Removing any unnecessary characters (white lines, new lines, comments)
from source code without compromising functionality. 

There's a general rule in web development that production files should
contain the minimum number of characters possible while retaining all
functionality. 

This has several benefits - web pages are loaded faster because there's less
char for the browser to read etc. 

#Concatenation 

Often .css and .js files are split between different files. 
Often developers will use deployment tools to 
concatenate these scripts together into one file before the web site
is deployed. This reduces loading time as the browser doesn't have
to read different files. 

# JS code error handling 
JSHint: checking javascript code for error and potential problems. 

# uglification: minification + mangling (reducing local variables to single letters)

# other tasks:
image optimization: optimizing files to reduce size and ensure that 
                     images are displayed correctly across browsers/viewports 

watch: watching for changes in files and automatically rerunning tasks 
       such as concatenation, uglification, error checking. 
       
server and live-reload: ensure code is being server up so we can 
view changes to the code. The lite-server being used in this course 
is one example of software that has live-reload functionality. 

# task runners - automating tasks using npm scripts 

we can short-hand command line prompts for npm by using scripts within
our package.json file 

"node-sass -o css/ css/" is a very basic npm script for compiling our 
SASS into a .css file.  We can then execute this "script" by typing npm run scss

  
```json
"scripts": {
    "start": "npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server",
    "scss":"node-sass -o css/ css/"
  }
```
we'll build on this by writing a complicated npm script that 
we can execute completely with one command npm run X

1. we'v moved all the javascript from script tags to separate js file 
and added that to be loaded in each webpage.
2. set up a npm task for recompiling SASS into css every time there's a 
change using npm module - you can use either Watch or onchange 

npm install --save-dev onchange@3.3.0 parallelshell@3.0.2

parallelshell is another npm package that allows multiple npm scripts to 
be run at the same time

we need to add watch as a script in our package.json 

```json
"start": "npm run watch:all",
"watch:scss": "onchange 'css/*.scss' --npm run scss",
"watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""

```
changing our package.json to this means:

when we start out server, we trigger watch:all, which in turn 
triggers the compiling of the sass into css, starts the server, 
and starts onchange watching for changes to any .scss file within
the /css folder. 

With just 'start' we've started web-server, compiled sass into css and 
started a watching task (onchange) that will recompile scss if any
.scss files change. 

# concatenation of css and js files

To minimise the number of downloads the browser has to compelete before rendering 
our website, we'll combine all our .css files into one file and all our js code
into one file. 

Ultimately, we want to set up a /dist folder that contains a copy of all 
the requirments to host our website on the webserver (requirements file, task runners) 
and all the code required by browsers to render our website (HTML pages, css, js)
Using the minimum numbre of files (concatenation) and characters possible (uglification)

basic steps for creating a dist folder:

1. set up a task for cleaning out the /dist folder using rimraf 
 * install rimraf from npm:  npm install --save-dev rimraf@2.6.2 
 * set up new npm script:  "clean": "rimraf dist/"
 
2. set up a task for copying the font/icon files into the dist folder using copyfiles
 * install copy files globally:  npm -g install copyfiles@2.0.0 
 -- this means that npm is installing copyfiles globally  
 -- has to be run in admin cmd if windows or sudo if linux/mac 
 *  set up npm script: "copyfonts":"copyfiles -f node_modules/font-awesome/fonts/* dist/fonts"
 
 3. compress image files (reducing data browser has to download) using imagemin
 * install imagemin globally: npm -g install imagemin-cli@3.0.0
 * set up script for minifying images:  "imagemin":"imagemin img/* -o dist/img"
 
 -- minimise all images im my /img dir and copy to a sub dir of dist called img
 
 4. add dist folder to .gitignore so we're not pushing temp files to git. 
 
 5. concatenate our .css .js and reduce our HTML files 
 *install usemin-cli@0.5.1 and its 3 related node modules:
npm install --save-dev usemin-cli@0.5.1 cssmin@0.4.3 uglifyjs@2.4.11 htmlmin@0.0.7
 * add markup to our webpages that tells usemin where the css and js file groups are.
 
 add markup before and after the css link tags in the index script header 
 This tells usemin that it needs to build the following css files into 
 a single new script called main.css
 
 ```html
<!--build:css css/main.css -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
    <link rel="stylesheet" href="css/styles.css">
    <!-- endbuild -->
```
 
 add markup before and after the group of .js files in the footer at bottom of page 
 ```html
<!-- build:js js/main.js -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
    <!-- endbuild -->
```
 
* setup minification scripts
     "usemin":"usemin contactus.html -d dist --htmlmin -o dist/contact.html && usemin aboutus.html -d dist --htmlmin -o dist/aboutus.html && usemin index.html -d dist --htmlmin -o dist/index.html",

-- usemin doesn't take wildcards so we have to specifiy each script we want need to minify individually 
-- htmlmin is also being used to uglify the html to reduce chars 

6. set up build scripts that runs all steps required to build dist folder 
*    "build": "npm run clean && npm run copyfonts && npm run imagemin && npm run usemin"




 








 

























































 














































 
 
 
 

 
 
 
 








































