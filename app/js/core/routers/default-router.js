define(
    [
        'backbone'
    ],
    function (Backbone) {
        return Backbone.Router.extend({
            prevRout: null,
            initialize: function() {
                var router = this;
                
                router.on('route', function (route, args) {
                    var prevRout = router.prevRout;
                    
                    if (prevRout && prevRout !== 'signIn' && Backbone.history.fragment === 'sign-in' || prevRout && Backbone.history.fragment !== 'sign-in') {
                        router.created[prevRout].kill();
                        delete router.created[prevRout];
                    }
                    
                    router.prevRout = route;
                });
                
                Backbone.history.start();
            }
        });
    }
);