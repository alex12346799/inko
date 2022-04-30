document.querySelector(".button__request").onclick = function () {
    document.querySelector(".overlay").classList.add("overlay_active");
};

document.querySelector(".popup__close").onclick = function () {
    document.querySelector(".overlay").classList.remove("overlay_active");

};




let map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.878357, 74.596407],
        zoom: 13
    });
});

