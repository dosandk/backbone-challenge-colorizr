define(
    'ui/views/common/header',
    [
        'app',
        'text!templates/header.tpl'
    ],
    function (App, tpl) {

        var Header = App.View.defaultView.extend({
            el: '#header',
            render: function () {
                var self = this;

                self.templates = self.prepareTpl(tpl);
                self.$el.html(_.template(self.templates['tplHeader']));
            }
        });

        return Header;
    }
);
