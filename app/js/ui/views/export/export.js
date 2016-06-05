define(
    'ui/views/export/export',
    [
        'app',
        'text!templates/export.tpl'
    ],
    function (App, tpl) {

        var Export = App.View.defaultView.extend({
            el: '#main',
            initialize: function () {
                var self = this;

                self.render();
            },
            render: function () {
                var self = this;

                self.templates = self.prepareTpl(tpl);
                self.$el.html(_.template(self.templates['tplExport']));
            }
        });

        return Export;
    }
);
