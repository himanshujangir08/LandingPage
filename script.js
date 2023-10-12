Shery.imageEffect("#back", { style: 5, config: { "a": { "value": 1.98, "range": [0, 30] }, "b": { "value": -0.88, "range": [-1, 1] }, "aspect": { "value": 1.8253706339566511 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.13, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.21, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }, gooey: true })

let headingElem = document.querySelectorAll(".elem");
headingElem.forEach((elem) => {
    let heading = elem.querySelectorAll("h1");
    let index = 0;
    let animated = false
    document.querySelector("#main").addEventListener("click", () => {
        if (!animated) {
            animated = true;
            gsap.to(heading[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                    animated = false
                },
            })

            index === heading.length - 1 ? (index = 0) : index++;

            gsap.to(heading[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            })
        }
    })
})

