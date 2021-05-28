( function ( press, undefined ) {
    press.verify = function ( c, message ) {
        if ( !c ) {
            throw message;
        }
    };
    press.immutable = function ( obj, method, value ) {
        Object.defineProperty( obj, method, {
            value : value,
            writable : false 
        } );
    };
    ( function ( numo, undefined ) {
        numo.place = new function () {
            press.immutable( this, 'TOP', 0 );
            press.immutable( this, 'LEFT', 1 );
            press.immutable( this, 'BOTTOM', 2 );
            press.immutable( this, 'RIGHT', 3 );
            var _tag = [ 'Top', 'Left', 'Bottom', 'Right' ];
            this.tag = function ( n ) {
                return _tag[ n ];
            };
        };

        numo.topology = new function () {
            press.immutable( this, 'ABSOLUTE', 0 );
            press.immutable( this, 'FIXED', 1 );
            press.immutable( this, 'RELATIVE', 2 );
        };
        numo.uics = new function () {
            press.immutable( this, 'STANDBY', 0 );
            press.immutable( this, 'FOCUS', 1 );
            press.immutable( this, 'FILLED', 2 );
        };
        numo.orientation = new function () {
            press.immutable( this, 'GARO', 0 );
            press.immutable( this, 'SERO', 1 );
        };
    } )( press.numo = press.numo || {} );

    press.append = function ( src, des ) {
        for ( var key in src ) {
            if ( src.hasOwnProperty( key ) ) {
                des[ key ] = src[ key ];
            }
        }
    };

    press.defined = function ( x ) {
        return typeof x !== 'undefined';
    };

    press.trim = function ( x, h = 100 ) {
        return Math.floor( x * h ) / h;
    };

    press.logoRate = function () {
        return 300 / 309.5;
    };

    press.cap = function ( x, h ) {
        return Math.min( x - h, 0 ) + h;
    };

    press.curb = function ( x, lower, upper ) {
        return Math.min( upper, Math.max( lower, x ) );
    };

    press.topx = function ( x ) {
        var s = x + '';
        if ( s.slice( -1 ) === '%' || s.slice( -2 ) === 'px' ) {
            return s;
        } else {
            return s + 'px';
        }
    };

    press.nothing = function () {};

    var Point = function ( x, y ) {
        this.x = x;
        this.y = y;
    };

    Point.prototype.clone = function () {
        return new Point( this.x, this.y );
    };

    Point.prototype.add = function ( a ) {
        this.x += a.x;
        this.y += a.y;
    };

    press.location = function ( x, y ) {
        return new Point( x, y );
    };
} )( global.press = global.press || {} );

exports.press = press;