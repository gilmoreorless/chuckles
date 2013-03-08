## FUTURE IDEAS

* Allow offset positioning for image on canvas, don't default to 0,0
* Movement options: Easing, keyframes, transforms (rotate, scale, skew)
* Support multiple segments
    * Idea 1: All segments behave the same way, based on a single position
    * Idea 2: New segment types with different behaviour and different positions
              (e.g. eyes move left-right while mouth moves up-down)

## OPTIMISATIONS

* Don't constantly render to one canvas, use stacked canvases instead
    * Main canvas gets drawn once only, with bg image minus cut-away segment
    * New canvas on top only gets segment, allowing for faster redraws
