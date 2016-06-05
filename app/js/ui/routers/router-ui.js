define(
    'ui/routers/router-ui',
    function (require) {

        var App = require('app');
        var Page = require('ui/views/page/page');
        var Create = require('ui/views/create/create');
        var Explore = require('ui/views/explore/explore');
        var Presets = require('ui/views/presets/presets');
        var Export = require('ui/views/export/export');

        return App.Router.defaultRouter.extend({
            routes: {
                '(/)': 'create',
                'create': 'create',
                'explore': 'explore',
                'presets': 'presets',
                'export': 'export'
            },
            onInitialize: function() {
                App.createPage({
                    css: ['riba'],
                    view: Page,
                    urlArguments: arguments
                });

                console.error('router-ui init');
            },
            create: function () {
                console.error('create router');

                this.created.create = App.createPage({
                    css: ['create'],
                    view: Create,
                    urlArguments: arguments
                });
            },
            explore: function () {
                this.created.explore = App.createPage({
                    css: ['explore'],
                    view: Explore,
                    urlArguments: arguments
                });
            },
            presets: function () {
                this.created.presets = App.createPage({
                    css: ['presets'],
                    view: Presets,
                    urlArguments: arguments
                });
            },
            export: function () {
                this.created.export = App.createPage({
                    css: ['export'],
                    view: Export,
                    urlArguments: arguments
                });
            }
        });
    }
);
