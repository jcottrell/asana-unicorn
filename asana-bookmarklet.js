(function (win) {
    var rain = function () {
        if (win.AsanaRainbow) {
            AsanaRainbow.start();
        }
    };
    if (win.AsanaRainbow === undefined) {
        env.dynamic_loader.load({
            url:CommonUrl.staticUrl('apps/asana/view/asana_rainbow.js'),
            allow_cached:!1,
            callback: rain
        });
    } else {
        AsanaRainbow.start();
    }
}(window))