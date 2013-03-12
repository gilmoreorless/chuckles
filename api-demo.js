// All options are, well, optional
var chuck = Chuckles({
	canvas: 'someElement', // string ID or <canvas> DOM node - if missing a canvas is created
	movement: {x: 10, y: 20},
	steps: 4,
	fillStyle: 'none', // "none" or a valid CSS colour string,
	path: [], // SegmentPath array, see below
	image: 'file.png' // string src, <image> DOM node or `function (context) {}` for custom drawing
});

// Properties - should not be set directly
chuck.canvas; // The canvas element assigned or created
chuck.ctx; // Canvas 2D context
chuck.mode; // "normal", "drawing" or "dragging"
chuck.image; // <image> DOM node or callback function
chuck.position; // Float from 0 to 1, representing percentage of how far to move the segment

// Methods
chuck.render(); // Force a redraw - not generally needed as it's called by other methods

chuck.setImage(img); // Set new background image - same types as `image` option
chuck.setSegmentPath(path); // Set new moveable segment path - SegmentPath array, see below
chuck.setPosition(pos); // Set how far the segment has moved - 0 to 1 as percentage
chuck.setMode(mode); // Switch into a new display/interaction mode - "normal", "drawing" or "dragging"
chuck.getSegmentOffset(); // Returns current pixel offset for segment, based on position, in format {x: float, y: float}

chuck.bindInput(input); // Auto-update `position` based on the <input>'s value by listening for change events
chuck.bindInput(MediaStreamAudioSourceNode); // Auto-update `position` based on sound levels from a media stream, using Web Audio API
chuck.unbindInput(inputOrMediaStreamAudioSourceNode); // Stop auto-updating based on a certain input

// SegmentPath array syntax
// An array of arrays representing canvas 2D context commands and arguments.
path = [
	['moveTo', 10, 20],  // context.moveTo(10, 20)
	['lineTo', 30, 40],  // context.lineTo(30, 40)

	// Multiple calls to the same method can be combined using the following syntax
	// [command, [arg1a, arg1b], [arg2a, arg2b], ...]
	['lineTo',
		[50, 60],        // context.lineTo(50, 60)
		[75, 20],        // context.lineTo(75, 20)
		[120, 3]         // context.lineTo(120, 3)
	]
	['closePath']        // context.closePath()
];
