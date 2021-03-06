require.config({
    baseUrl: './',
    paths: {
        // Core sub-project
        core: 'js/core',
        app: 'js/core/app',
        config: 'js/core/config',
        jquery: 'js/core/libs/jquery-2.2.0',
        underscore: 'js/core/libs/underscore-1.6.0',
        backbone: 'js/core/libs/backbone-amd-1.1.0',
        text: 'js/core/libs/requirejs-plugins/text-2.0.12',
        load: 'js/core/libs/requirejs-plugins/load',

        // ui
        ui: 'js/ui',
        react: 'js/ui/libs/react/react-with-addons',
        'react-dom': 'js/ui/libs/react/react-dom',
        jsx: 'js/ui/libs/requirejs-plugins/jsx',
        JSXTransformer: "js/ui/libs/requirejs-plugins/JSXTransformer"
    },
    waitSeconds: 0
});

require(
    [
        'ui/routers/router-ui'
    ],
    function(RouterUi) {
        new RouterUi();

        return false;
    }
);