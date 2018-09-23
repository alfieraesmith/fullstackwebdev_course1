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
viewport: 
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











This is the file 
















