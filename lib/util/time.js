( function( press, undefined ) {
    ( function( util, undefined ) {
        ( function( time, undefined ) {
            function d2( n ) {
                if ( n < 10 ) {
                    return '0' + n;
                } else {
                    return n.toString();
                }
            }

            time.normal = function( o ) {
                return o.getUTCFullYear() + '' + d2( parseInt( o.getUTCMonth() + 1 ) ) + '' + d2( parseInt( o.getUTCDate() ) );
            };

            time.bar = function( offset = 7 ) {
                const t = new Date();
                let res = [];
                for ( let i = 0; i < offset; i++ ) {
                    let s =
                        t.getUTCFullYear() + '' + d2( parseInt( t.getUTCMonth() + 1 ) ) + '' + d2( parseInt( t.getUTCDate() ) );
                    res.push( s );

                    t.setDate( t.getDate() - 1 );
                }
                return res;
            };

            time.ymd = function( n ) {
                let a = n + 1753470;
                let b = Math.floor( ( 4 * a + 3 ) / 146097 );
                let c = a - Math.floor( 146097 * b / 4 );
                let f = Math.floor( ( 4 * c + 3 ) / 1461 );
                let e = c - Math.floor( 1461 * f / 4 );
                let w = Math.floor( ( 5 * e + 2 ) / 153 );
                let k = Math.floor( w / 10 );
                let y = 100 * b + f - 4800 + k;
                let m = w + 3 - 12 * k;
                let d = e - Math.floor( ( 153 * w + 2 ) / 5 ) + 1;
                return y.toString() + d2( m ) + d2( d );
            };

            time.ordinal = function( h ) {
                let d = parseInt( h.substr( 6, 2 ) );
                let w = parseInt( h.substr( 4, 2 ) );
                let n = Math.floor( ( 14 - w ) / 12 );
                let y = parseInt( h.substr( 0, 4 ) ) + 4800 - n;
                let m = w + 12 * n - 3;
                let c = Math.floor( y / 4 ) - Math.floor( y / 100 ) + Math.floor( y / 400 );
                return d + Math.floor( ( 153 * m + 2 ) / 5 ) + 365 * y + c - 1753471;
            };

            time.ymdhms = function( n ) {
                let t = n % 86400;
                let s = t % 60;
                t = Math.floor( t / 60 );
                let m = t % 60;
                let h = Math.floor( t / 60 );
                return time.ymd( Math.floor( n / 86400 ) ) + '.' + d2( h ) + d2( m ) + d2( s );
            };

            time.fromHuman = function( s ) {
                if ( s.match( /[A-Z]{2}/ ) ) {
                    return s.charCodeAt( 0 ) * 100 + s.charCodeAt( 1 );
                } else if ( s.match( /\d{8}/ ) ) {
                    return time.ordinal( s );
                } else if ( s.match( /\d{8}\.\d{6}/ ) ) {
                    let a = time.ordinal( s.substr( 0, 8 ) ) * 86400;
                    a += parseInt( s.substr( 9, 8 ) ) * 3600;
                    a += parseInt( s.substr( 11, 2 ) ) * 60;
                    a += parseInt( s.substr( 13, 2 ) );
                    return a;
                } else if ( s.match( /\d{8}\-\d{8}/ ) ) {
                    return [ time.ordinal( s.substr( 0, 8 ) ), time.ordinal( s.substr( 9, 8 ) ) ];
                } else {
                    return s;
                }
            };
        } )( util.time = util.time || {} );
    } )( press.util = press.util || {} );
} )( global.press = global.press || {} );

exports.press = press;
