<div align=center>

# Lavender


[![HTML5 Validator](https://github.com/No767/Lavender/actions/workflows/htmlvaildate.yml/badge.svg?branch=master)](https://github.com/No767/Lavender/actions/workflows/htmlvaildate.yml) [![Prettier](https://github.com/No767/Lavender/actions/workflows/prettier.yml/badge.svg?branch=master)](https://github.com/No767/Lavender/actions/workflows/prettier.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/e887229f-ce48-491f-a0ca-90f46b000366/deploy-status)](https://app.netlify.com/sites/lavender-petal/deploys) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/e5f3014db11c4bdfa94614a3063ea341)](https://www.codacy.com/gh/No767/Lavender/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=No767/Lavender&amp;utm_campaign=Badge_Grade) ![GitHub](https://img.shields.io/github/license/No767/Lavender?label=License&logo=github)

The Digital Portfolio for CS
    
<div align=left>

# Notes
    
        
**Note that Lavender will be completely rewritten in React fairly soon. React Router and Next.js may be needed**
    
# Building

Via [npm](https://www.npmjs.com/). Make sure you have [Node.js](https://nodejs.org/en/) installed.

`cd src`
    
`npm install`

# Docker Image

You must run it with this command:

`docker run -v /tmp/conf/my_nginx.conf:/data/conf/nginx.conf:ro -p 8080:80 no767/lavender`

Docker support is something that I am working on, so it may take some time to get right

# React

There is an optional version of this site built with [React](https://reactjs.org/). In order to get it set up, run these cmds:

```sh 
cd react-lavender && npm install
```

And if you want to run the dev server:

```sh
npm run dev
```

The react version was bootstraped with Vite if you wanted to know...
