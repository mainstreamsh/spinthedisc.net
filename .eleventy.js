const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight)
  

  // Copy these static files to _site folder
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/manifest.json')

  // filter to format post date to year-month-day
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd');
  })

  // creates a shortcode that allows inserting images with alt-texts. Usage {% asset_img 'imagename','alt-text' %}
  // you can pass an optional third argument to give the image a custom path. defaults to /assets/img/posts/
  eleventyConfig.addShortcode('asset_img', (filename, alt, path = '/assets/img/') => 
  `<img class="my-4" src="${path}${filename}" alt="${alt}" />`
  )

  return {
    dir: {
      input: 'src'
    }
  }
}