# SASS CODING CHALLENGE

Please have a look at the enclosed '_designs' folder to see what your page should look like in the end.

# To get started

You will find this there is a small gulp script included and a package.json. You can optionally use these to ```npm install``` the required packages and use the following commands to help you develop.

## If you have (is allowed to) install Gulp globally ##

```gulp``` - Simply runs the default task and compiles the SCSS files to CSS and puts them in the ```styles/output``` folder. 

```gulp buildCss``` - This is the default task, same as above.

```gulp dev``` - Watches files for changes and runs the default task above as well as starting a server so you can see the page in a browser by navigating to ```http://localhost:8080```. It does not automatically reload the page on changing SCSS files, however.

## If you don't have permissions or ability to install Gulp globally

```npm run dev``` - Equivalent to ```gulp dev``` above. Watches for changes, starts a server and runs the default task when a change occurs.

```npm run buildCss``` - Equivalent to ```gulp buildCss``` above. Builds the CSS manually.

Has been tested on the latest LTS version of Node (8.11.x). 

The requirement is not to use Node or the above Gulp script - these have simply been provided for your convenience as an example. If you have a different build system or prefer to use other modules - go for it! :-)

The ```styles/scss/sites.scss``` file is the starting point for the SCSS compilation so either make your edits in there or add further files and include them there.

# Some information on the structure of the page / SCSS in place

The Susy (http://oddbird.net/susy/) v2.2.14 framework is being used to create a grid. You can find the implementation of this in the ```styles/scss/grid/``` folder. It contains the definition of the grid used in the page, so useful to read through to understand the available breakpoints and column class names.

If you are compiling your SCSS through other means make sure you include Susy 2.2.14 as a depndency of your build system.

# What do we want back?

Either the entire solution (excluding ```node_modules``` folder, please) ZIPed up or just the resulting output CSS file so that we can plug that in and see the result.

We expect the output to look the same across the major browsers (IE)

# What should I not have to worry about?

The Javascript and external script libraries used in the page shouldn't be in your way and you shouldn't have to write any Javascript to achieve the desired result. 