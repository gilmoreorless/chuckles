Chuckles
========

A simple library for creating ventriloquist dummy effects in canvas &ndash; because that's what everyone needs, right?

Simply define an image, a “mouth region” and where the “mouth” should move to, then bind to an HTML input or a [Web Audio API MediaStreamAudioSourceNode][audioContext] and watch the magic happen.

Works best when connected to a live microphone feed using [WebRTC][webrtc].

### Caveats

I built this for a presentation at [SydJS][sydjs] (thus it has limited browser support) and do not really expect it to have much use in the wild. If you can find a practical use for it, let me know.

## Examples

**NOTE:** I built these demos to work in Chrome only, as it was the only browser at the time that supported both the Web Audio API and getting a microphone stream via `navigator.getUserMedia()`. However, it’s been updated to use non-prefixed APIs so it _should_ work in any browser that supports them.

* [Basic demo][demoBasic] - hard-coded image and mouth co-ordinates
* [Full demo][demoFull] - upload an image and draw the mouth region yourself


## Documentation

Erm, there isn’t any _proper_ documentation right now, because I threw this together in a hurry. See also my lack of faith of this having any practical use.

However, I’ve thrown together a basic in-code API usage example in the `api-demo.js` file of this repository.

### Browser support

The canvas drawing code and HTML input binding _should_ be supported in any decent modern browser that supports ECMAScript 5 (though I haven’t actually tested this theory, so there might be some surprises).

Binding to a live microphone stream is only available in Chrome 24+ with the `Web Audio Input` flag enabled in `chrome://flags`. Firefox 18+ allows microphone access, but support for the Web Audio API is still a work in progress.


[audioContext]: https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#MediaStreamAudioSourceNode
[webrtc]: http://www.webrtc.org/
[sydjs]: http://sydjs.com
[demoBasic]: http://gilmoreorless.github.com/experiments/audio/dummy.html
[demoFull]: http://gilmoreorless.github.com/experiments/audio/chuckles-demo.html
