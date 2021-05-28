( function( press, undefined ) {
    ( function( util, undefined ) {
        ( function( size, undefined ) {
            size.textwidth = function( str, fontsize ) {
                let res = 0;

                const p = document.createElement( 'span' );
                p.textContent = str;
                p.style.fontSize = fontsize + 'px';
                p.style.position = 'absolute';
                p.style.visibility = 'hidden';
                p.style.top = -10000;

                p.setAttribute( 'id', 'text-box-util' );

                document.body.appendChild( p );
                res = $( '#text-box-util' ).outerWidth();
                document.body.removeChild( p );

                return res;
            };
        } )( util.size = util.size || {} );
    } )( press.util = press.util || {} );
} )( global.press = global.press || {} );

exports.press = press;
