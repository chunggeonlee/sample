( function( press, undefined ) {
    ( function( util, undefined ) {
        ( function( common, undefined ) {
            common.country = function( n ) {
                let a = String.fromCharCode( Math.floor( n / 100 ) );
                let b = String.fromCharCode( Math.floor( n % 100 ) );
                return a + b;
            };

            common.belt = function( w, h, linew, linec1, linec2, pos1, pos2 ) {
                return (
                    <svg width={w} height={h}>
                        <line x1={pos1.x1} x2={pos1.x2} y1={pos1.y1} y2={pos1.y2} stroke={linec1} strokeWidth={linew} />
                        <line x1={pos2.x1} x2={pos2.x2} y1={pos2.y1} y2={pos2.y2} stroke={linec2} strokeWidth={linew} />
                    </svg>
                );
            };

            common.extranum = function( s ) {
                if ( s === 'undefined' || s === null ) return;

                if ( s.length > 2 ) {
                    return parseInt( s.substring( 0, s.length - 2 ) );
                } else {
                    return null;
                }
            };
        } )( util.common = util.common || {} );
    } )( press.util = press.util || {} );
} )( global.press = global.press || {} );

exports.press = press;
