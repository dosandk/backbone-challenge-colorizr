define(
    'ui/views/create/create',
    [
        'app',
        'text!templates/create.tpl',
        'jsx!ui/views/common/color-picker',
        'jsx!ui/views/common/counter',
        'react',
        'react-dom'
    ],
    function (App, tpl, ColorPicker, Counter, React, ReactDOM) {
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

                // self.renderedEl = ReactDOM.render(
                //     React.createElement(ColorPicker),
                //     document.getElementById('color-picker')
                // );

                self.renderedEl = ReactDOM.render(
                    React.createElement(Counter),
                    document.getElementById('counter')
                );
            }
        });

        return Create;
    }
);
