## MATERIAL NEXT   

### Next.js MaterializeCSS 
#### with Bootstrap4 utilities starter app
---

#### About

The tooling docs are still under construction but feel free to try out the application and suggest improvments.
if you are familiar with [Next.js](http://.nextjs.org) you will find it easy. if you do not know Next.js please visit the link below. Next.js is easy to learn provided you also already know [React](https://reactjs.org/).

---
#### Boiler ingredients

1. Next.js
2. React
3. Materialize CSS
4. Bootstrap4 Utility Classes

---
#### Theming

The project comes with 3 standard themes:

1. default ( Material UI theme )
1. blue-deeporange
2. indigo-blue
3. pink-indigo

---
#### TODO

* Some content on the features page.
* Footer
* Data retrieval makeshift setup

---
##### HOW TO RUN

Create directory where you want to clone;

Clone this URL: https://github.com/CliffCrerar/nextjs-materialize-css-app.git

Run `npm install` in cloned directory.

Run `npm run devSite` builds the dev app in a new or existing `.next` directory.

---
##### Running production build

To create a production build run the following commands:

`npm run build` creates as dist directory with the production version. (_see below section on how to configure._)

---
#### Build directory default config

Look inside the `next.config.js` for the 2 variables `productionBuildDirectory` and `developmentBuildDirectory` these are as their names suggest, the settings for the directories where the app will be built. 

For development it is set to the `Next.js` default standard `.next` directory. Out of the box the app will create a `dist` directory on the project root when you run `npm run build`. 

If you change these default settings remember to also update these in the `.gitignore` if you are planning on deploying to `Zeit`.

TODO ## Configuring the node path

---
#### Layout TODO

You can configure the default layout by manipulating the code inside the `components/layout` directories of the project.

Create new themes by placing `.css` files creates with [material design pallete](https://www.materialpalette.com/) 

---
#### CSS, SASS or Styled JSX ?

This has comes out of the box with all 3 of the above, no additional configuration required. It already uses a mix of the 3, you may obviously apply your own discretion as yo which one you prefer.

TODO ## Explain the dedicated 

TODO ## Explain Default components

TODO ## Explain Static Data

TODO ## Explain now config

TODO ## Explain services

---
### License 

MIT License

Copyright (c) 2019 Infinity Arc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.