/* globals AsanaRainbow,env,CommonUrl */
/* jshint camelcase: false */
// https://app.asana.com/-/static/apps/asana/media/celebration_unicorn.png
// https://app.asana.com/-/static/apps/asana/media/celebration_phoenix.png
// https://app.asana.com/-/static/apps/asana/media/celebration_narwhal.png
// https://app.asana.com/-/static/apps/asana/media/celebration_yeti.png
(function (win) {
    'use strict';
    var r,
        celebrants,
        rain = function () {
            var celebrant;
            if (win.AsanaRainbow) {
                loadCelebrants();
                celebrant = Math.floor(Math.random()*celebrants.length);
                r = AsanaRainbow.create(celebrants[celebrant]);
                r.start();
            }
        },
        loadCelebrants = function () {
            if (AsanaRainbow._ALL_CELEBRATIONS) {
                celebrants = AsanaRainbow._ALL_CELEBRATIONS;
            }
        };
    if ((win.AsanaRainbow === undefined) && win.env && win.env.dynamic_loader) {
        env.dynamic_loader.load({
            url:CommonUrl.staticUrl({path:'apps/asana/view/asana_rainbow.js',
                    compute_hash:!1}),
            allow_cached:!1,
            callback: rain
        });
    } else {
        rain();
    }
}(window));
