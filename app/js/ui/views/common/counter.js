define(
    'ui/views/common/counter',
    [
        'react'
    ],
    function(React) {
        return React.createClass({
            getInitialState: function () {
                return {
                    counter: 0
                }
            },
            changeCounter: function(action) {
                var self = this;
                return function() {
                    switch (action) {
                        case 'increase':
                            self.setState({
                                counter: ++self.state.counter
                            });
                            break;
                        case 'decrease':
                            self.setState({
                                counter: --self.state.counter
                            });
                            break;
                    }
                }
            },

            render: function(){
                return (
                    <div>
                        <h3>Counter</h3>
                        <span>{ this.state.counter }</span>
                        <button onClick = { this.changeCounter('increase') }>+</button>
                        <button onClick = { this.changeCounter('decrease') }>-</button>
                    </div>
                )
            }
        })
    }
);