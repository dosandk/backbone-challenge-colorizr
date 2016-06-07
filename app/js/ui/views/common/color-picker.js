define(
    'ui/views/common/color-picker',
    [
        'react',
        'ui/libs/react/react-color-picker'
    ],
    function(React, ColorPicker) {
        return React.createClass({
            onDrag: function(color, c){
                console.log(color);
            },

            render: function(){

                return (
                    <ColorPicker value={ '#00ff00' } onDrag={ this.onDrag } />
                )
            }
        })

    }
);

