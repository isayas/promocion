# video-overlay

The video-overlay element displays a thumbnail image for a video. When clicked it will open a modal overlaying the page with the YouTube or Vimeo hosted video in the center. The overlaying embed video will change size responsively for various screen sizes.

The element has two attributes "thumbnail" and "video". Thumbnail should be the URL for the thumbnail image (a la img src), and video should be the URL which will be placed in the src of the embed iframe. To get this src URL for the video you'll need to inspect the embed code for the video provided by YouTube or Vimeo.

An example implementation would look like:  
`<video-overlay thumbnail="http://bradclapper.com/img/thumbnails/carrie-slaughter.jpg" video="//player.vimeo.com/video/39749817"></video-overlay>`
