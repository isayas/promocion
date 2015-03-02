# &lt;youtube-embed&gt;

Web Component wrapper for Youtube's player using Polymer.

> Maintained by [Bruno Queiros](https://github.com/brunoqueiros).

## Demo

> [Check it live](http://brunoqueiros.github.io/youtube-embed/).

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install youtube-embed --save
```

Or [download as ZIP](https://github.com/brunoqueiros/youtube-embed/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/youtube-embed/dist/youtube.html">
    ```

3. Start using it!

	```html
	<youtube-embed videoid="3P5QP5t0Bus"></youtube-embed>
	```

## Options

Attribute    | Options         | Default                                    | Description
---          | ---             | ---                                        | ---
`videoid`    | *string*        | ``                                         | **Required** URL specifies the content that the player will load
`container`  | *string*        | ``                                         | The container where the iframe will be put. e.g. container="#video-container"
`theme`      | `dark`, `light` | `dark`                                     | Player controls theme
`width`      | *int*           | `640`                                      | The width of the player
`height`     | *int*           | `390`                                      | The height of the player
`showinfo`   | `0`, `1`        | `1`                                        | Display information like the video title and uploader before the video starts playing.
`loop`       | `0`, `1`        | `0`                                        | Loop the video
`end`        | `0`, `1`        | `0`                                        | This parameter specifies the time, measured in seconds from the start of the video, when the player should stop playing the video
`color`      | `red`, `white`  | `red`                                      | The color that will be used in the player's video progress bar
`autoplay`   | `0`, `1`        | `0`                                        | Sets whether or not the initial video will autoplay when the player loads
`autohide`   | `0`, `1`, `2`   | `2`                                        | This parameter indicates whether the video controls will automatically hide after a video begins playing
`rel`   | `0`, `1`   | `0`                                                  | This parameter indicates whether the player should show related videos when playback of the initial video ends.

### Autohide
Values: 2 (default), 1, and 0. This parameter indicates whether the video controls will automatically hide after a video begins playing. The default behavior (autohide=2) is for the video progress bar to fade out while the player controls (play button, volume control, etc.) remain visible.

- If this parameter is set to 1, then the video progress bar and the player controls will slide out of view a couple of seconds after the video starts playing. They will only reappear if the user moves her mouse over the video player or presses a key on her keyboard.
- If this parameter is set to 0, the video progress bar and the video player controls will be visible throughout the video and in fullscreen.

> See Youtube' [official documentation](https://developers.google.com/youtube/iframe_api_reference).

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
