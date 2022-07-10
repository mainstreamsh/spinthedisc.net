# Spin the Disc


+ Sitemap and Robots.txt 
  - Change site url in `_data/site.json`

+ Shortcode to handle images
  - Add image under `src/assets/img/posts` and use the asset_img short code
  - `{% asset_img 'filename' 'alt_text' %}` eg. `{% asset_img 'mailbox.jpg' 'picture of a mailbox' %}`
  - You can provide an optional third argument if your image isn't inside `src/assets/img/posts`
  - eg. `{% asset_img 'mailbox.jpg' 'picture of a mailbox' '/images/' ` 

- Draft posts using the `published` frontmatter

+ Posts pagination in `index.html` 
  - change the `size` frontmatter variable
- ESLint

+ Bash script to create new post (based on YYYY and MM)
```bash
$ ./create new blog post
Created new post at src/posts/2021/01/new-blog-post.md
```


## Running locally

Create your blogpost under `src/posts`. I like to have mine sorted by YY/MM.

Navigate to localhost:8080 after starting the server.
```
npm start
```


## Deployment
[<img src="https://www.netlify.com/img/deploy/button.svg" />](
https://app.netlify.com/start/deploy?repository=https://github.com/httpsterio/11ty-blog-njk-starter)



On Netlify / Surge / Firebase hosting / etc hosting providers

Build Command: `npm run build`

Output folder: `_site`

<!--
## Future Improvemeents

- [ ] Minification of assets
- [ ] Make next/prev posts
-->