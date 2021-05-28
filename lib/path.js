( function( press, undefined ) {

    var Path = function( x, y ) {
        this.x = x;
        this.y = y;
        this.trail = 'M' + x + ',' + y;
        this.closed = () => {
            return this.trail[ this.trail.length - 1 ] == 'Z';
        }
    };

    Path.prototype.moveTo = function( x, y ) {
        if ( this.x != x || this.y != y ) {
            this.trail += 'M' + x + ',' + y;
            this.x = x;
            this.y = y;
        }
        return this;
    }

    Path.prototype.lineTo = function( x, y ) {
        switch ( 2 * Number( this.x == x ) + Number( this.y == y ) ) {
        case 0:
            this.trail += 'L' + x + ',' + y;
            break;
        case 1:
            this.trail += 'H' + x;
            break;
        case 2:
            this.trail += 'V' + y;
        }
        this.x = x;
        this.y = y;
        return this;
    }

    Path.prototype.linkTo = function( x, y ) {
        x.map( ( v, i ) => {
            this.lineTo( v, y[ i ] );
        } );
        return this;
    }
        
    Path.prototype.arcTo = function( r1, r2, a, lf, sf, x, y ) {
        this.trail += 'A' + [ r1, r2, a, lf, sf, x, y ].join( ',' );
        this.x = x;
        this.y = y;
        return this;
    }

    Path.prototype.close = function() {
        this.trail += 'Z';
    }

    press.path = function( x, y ) {
        return new Path( x, y );
    }

} )( global.press = global.press || {} )

exports.press = press;
