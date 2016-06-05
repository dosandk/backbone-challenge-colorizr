define(
    'ui/views/page/page',
    [
        'app',
        'ui/views/common/header',
        'ui/views/common/footer',
        'text!templates/create.tpl'
    ],
    function (App, Header, Footer) {

        var Page = App.View.defaultView.extend({
            initialize: function () {
                var self = this;

                self.header = new Header();
                self.footer = new Footer();

                self.render();
            },
            render: function () {
                var self = this;

                self.header.render();
                self.footer.render();
            }
        });

        return Page;
    }
);
