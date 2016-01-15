(function (win) {
    'use strict';
    var r, rain = function () {
        if (win.AsanaRainbow) {
            r = AsanaRainbow.create({
                    'name':'unicorn',
                    'image':{
                        'urls':[
            'https://app.asana.com/-/static/apps/asana/media/unicorn-reskin.png'
                        ]
                    }
                });
            r.start();
        }
    };
    if ((win.AsanaRainbow === undefined) && win.env && win.env.dynamic_loader) {
        env.dynamic_loader.load({
            url:CommonUrl.staticUrl({path:"apps/asana/view/asana_rainbow.js",
                    compute_hash:!1}),
            allow_cached:!1,
            callback: rain
        });
    } else {
        rain();
    }
}(window));