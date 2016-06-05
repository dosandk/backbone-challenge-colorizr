define(
    'ui/views/create/create',
    [
        'app',
        'text!templates/create.tpl'
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
                self.$el.html(_.template(self.templates['tplCreate']));
            }
        });

        return Create;
    }
);
