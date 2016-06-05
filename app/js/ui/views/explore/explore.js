define(
    'ui/views/explore/explore',
    [
        'app',
        'text!templates/explore.tpl'
    ],
    function (App, tpl) {

        var Create = App.View.defaultView.extend({
            el: '#main',
            initialize: function () {
                var self = this;

                self.render();
            },
            render: function () {
                var self = this;

                self.templates = self.prepareTpl(tpl);
                self.$el.html(_.template(self.templates['tplExplore']));
            }
        });

        return Create;
    }
);
