define(
    [
        'backbone'
    ],
    function (Backbone) {
        return Backbone.Router.extend({
            prevRout: null,
            created: {},
            initialize: function() {
                var router = this;
                
                router.on('route', function (route, args) {
                    var prevRout = router.prevRout;
                    
                    if (prevRout) {
                        router.created[prevRout].kill();
                        delete router.created[prevRout];
                    }
                    
                    router.prevRout = route;
                });
                
                Backbone.history.start();

                router.onInitialize.apply(this, arguments);
            },
            onInitialize: function() {
                /* abstract method */
            }
        });
    }
);