define(
    'ui/views/presets/presets',
    [
        'app',
        'text!templates/presets.tpl'
    ],
    function (App, tpl) {

        var Presets = App.View.defaultView.extend({
            el: '#main',
            initialize: function () {
                var self = this;

                self.render();
            },
            render: function () {
                var self = this;

                self.templates = self.prepareTpl(tpl);
                self.$el.html(_.template(self.templates['tplPresets']));
            }
        });

        return Presets;
    }
);
