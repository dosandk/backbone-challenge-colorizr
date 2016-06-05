define(
    'ui/views/common/footer',
    [
        'app',
        'text!templates/footer.tpl'
    ],
    function (App, tpl) {

        var Create = App.View.defaultView.extend({
            el: '#footer',
            render: function () {
                var self = this;

                self.templates = self.prepareTpl(tpl);
                self.$el.html(_.template(self.templates['tplFooter']));
            }
        });

        return Create;
    }
);
