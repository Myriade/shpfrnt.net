# Shopfront
Webart project for artists Cinzia Campolese and Lucas Paris  
Developped by Myriam Bizier, [myriadeweb.com](https://myriadeweb.com)

## Install
- Clone the code from GitHub to your machine
https://github.com/Myriade/shpfrnt.net
- Install dependencies (Node.js and npm) on your local machine : 
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- Install Shopfront project on your local machine, by running `npm install` while on the project's root folder

## Dev
To make changes localy, and view the result in your browser run `npm run dev`  
It will open a browser tab with a live preview.

### Content and options
All content and options can be changed in one JSON file located at `src/data/data.json`

### Files (images and videos)
- Products images should go in src/assets/products/images
- Products video files should go in src/assets/products/videos in two formats for each one, .mp4 and .webm, to assure compatiblity with all browsers.
- Captcha images should go in src/assets/captcha
- Make sure to reference filenames in the file `src/data/data.json`.

## Deployment to live version
- Ensure that your dev version is functionnal in your browser while running dev mode locally.
- Commit and push your modifications to the main branch on GitHub
- Check on your Digital Ocean App monitoring page to see the deployment status.
- In certain cases, a manual deployment trigger can be made on the Digital Ocean app (Deploy button)

## Made with
- [Node.js](https://nodejs.org)
- [Webpack](https://webpack.js.org/)
- [Express](https://expressjs.com/)
