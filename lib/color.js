( function( press, undefined ) {
    ( function( color, undefined ) {
        function pad( h ) {
            return h.length === 1 ? '0' + h : h;
        }

        color.grey = function( scale ) {
            var h = scale.toString( 16 );
            return '#' + h + h + h;
        };
        color.hexa = function( r, g, b ) {
            var rh = r.toString( 16 );
            var gh = g.toString( 16 );
            var bh = b.toString( 16 );
            return '#' + pad( rh ) + pad( gh ) + pad( bh );
        };
        color.rgba = function( r, g, b, a ) {
            return 'rgba(' + [ r, g, b, a ].join() + ')';
        }
        color.mono = function( scale, alpha ) {
            return this.rgba( scale, scale, scale, alpha );
        };
        color.film = function( alpha ) {
            return this.mono( 0, alpha );
        };
        color.beamer = function( active, dormant ) {
            return function( beam ) {
                return beam ? active : dormant;
            };
        };
        color.scheme = function( theme_, major_, minor_ ) {
            return {
                theme : theme_,
                major : major_,
                minor : minor_ 
            };
        };
    } )( press.color = press.color || {} );
} )( global.press = global.press || {} );

exports.press = press;
