module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-modal-routing/gatsby-browser.js'),
      options: {"plugins":[],"modalProps":{"style":{"overlay":{"backgroundColor":"rgba(0, 0, 0, 0.5)"},"content":{"position":"absolute","border":"none","background":"none","padding":0,"top":0,"bottom":0,"right":0,"left":0,"overflow":"auto","WebkitOverflowScrolling":"touch"}}}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Travel Destinations","short_name":"Travel Destinations","start_url":"/","background_color":"#fff","theme_color":"#4299e1","display":"standalone","icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"93eadc9fc24b4f0ee6980ccff5a33464"},
    }]
