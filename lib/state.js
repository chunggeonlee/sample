( function( press, undefined ) {
    press.Component = function( id, state = 0, pool = [] ) {
        press.immutable( this, 'id', id );
        this.state = function() {
            return state;
        };
        this.shift = function( s ) {
            var r = this.id + '-' + state + '-' + s;
            state = s;
            return r;
        };
        this.add = function( a ) {
            pool.push( a );
        };
        this.size = function() {
            return pool.length;
        };
        this.begin = function() {
            var pos = 0;
            return {
                next : function() {
                    return pos < pool.length ? { value : pool[ pos++ ], done : false } : { done : true };
                } 
            };
        };
    };
} )( global.press = global.press || {} );

exports.press = press;
