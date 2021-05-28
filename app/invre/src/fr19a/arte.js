( function( fr19a, undefined ) {
    ( function( engine, undefined ) {

        var Gear = function( rate ) {
            const a = Math.PI / 24;
            const c = Math.cos( a );
            const s = Math.sin( a );
            const d = Math.sqrt( Math.pow( c - 1, 2 ) + s * s );
            const u = Math.cos( a / 2 );
            const v = Math.sin( a / 2 );
            const r = 1 + rate * d * u;
            const b = rate * d * v;
            const f = r + ( 1 - rate ) * d * Math.cos( Math.PI / 6 + a / 2 );
            const g = b + ( 1 - rate ) * d * Math.sin( Math.PI / 6 + a / 2 );
            this.teeth = ( n, h ) => {
                let p = Math.cos( n * a );
                let q = Math.sin( n * a );
                let x = Math.cos( ( n + 1 ) * a );
                let y = Math.sin( ( n + 1 ) * a );
                return [
                    [ p * h, q * h ],
                    [ ( r * p - b * q ) * h, ( r * q + b * p ) * h ],
                    [ ( f * p - g * q ) * h, ( f * q + g * p ) * h ],
                    [ ( f * x + g * y ) * h, ( f * y - g * x ) * h ],
                    [ ( r * x + b * y ) * h, ( r * y - b * x ) * h ],
                    [ ( c * p - s * q ) * h, ( c * q + s * p ) * h ]
                ];
            };
        }

        var arcf = function( radius, from, till ) {
            let p = Math.cos( from );
            let q = Math.sin( from );
            let f = Math.cos( till );
            let g = Math.sin( till );
            return [
                [ radius * p, radius * q ],
                [ radius * f, radius * g ]
            ]
        }

        engine.fringe = ( x, y, r ) => {
            let gear = new Gear( 0.5 );
            let path = fr19a.path( x + r, y );
            for ( let i = 0; i < 24; ++ i ) {
                let part = gear.teeth( 2 * i, r );
                part.map( ( t ) => {
                    path.lineTo( x + t[ 0 ], y - t[ 1 ] );
                } );
            }
            path.lineTo( x + r, y );
            return path.trail;
        }

        engine.hub = ( x, y, r ) => {
            let gear = new Gear( 0.5 );
            let path = fr19a.path( x + r, y );
            for ( let i = 0; i < 24; ++ i ) {
                let part = gear.teeth( 2 * i, r );
                part.map( ( t ) => {
                    path.lineTo( x + t[ 0 ], y - t[ 1 ] );
                } );
            }
            path.lineTo( x + r, y );
            let w = r * 0.125;
            let c = w * 3;
            path.moveTo( x - c, y ).arcTo( c, c, 0, 0, 1, x + c, y ).arcTo( c, c, 0, 0, 1, x - c, y );
            let d = w * 7;
            let h = w * 4;
            let u = 0.5 * w / d;
            let v = 0.5 * w / h;
            let grid = [ Math.PI / 2, 11 * Math.PI / 6, 7 * Math.PI / 6, Math.PI / 2 ];
            for ( let i = 0; i < 3; ++ i ) {
                let a = arcf( d, grid[ i ] - u, grid[ i + 1 ] + u );
                path.moveTo( x + a[ 0 ][ 0 ], y - a[ 0 ][ 1 ] ).arcTo( d, d, 0, 0, 1, x + a[ 1 ][ 0 ], y - a[ 1 ][ 1 ] );
                let b = arcf( h, grid[ i + 1 ] + v, grid[ i ] - v );
                path.lineTo( x + b[ 0 ][ 0 ], y - b[ 0 ][ 1 ] ).arcTo( h, h, 0, 0, 0, x + b[ 1 ][ 0 ], y - b[ 1 ][ 1 ] );
                path.lineTo( x + a[ 0 ][ 0 ], y - a[ 0 ][ 1 ] );
            }
            return path.trail;
        }

        engine.spoke = ( x, y, rin, rex, n, from, till ) => {
            let d = 2 * Math.PI / n;
            let a = from * d;
            let c = Math.cos( a );
            let s = Math.sin( a );
            let path = fr19a.path( x + rin * c, y - rin * s );
            path.lineTo( x + rex * c, y - rex * s );
            for ( let i = from + 1; i < till; ++ i ) {
                let a = i * d;
                let p = Math.cos( a );
                let q = Math.sin( a );
                path.moveTo( x + rin * p, y - rin * q ).lineTo( x + rex * p, y - rex * q );
            }
            return path.trail;
        }

        engine.rim = ( x, y, rin, rex, gap, n, from, till ) => {
            let d = 2 * Math.PI / n;
            let w = ( 1 - gap ) * d;
            let path = fr19a.path( x, y );
            for ( let i = from; i < till; ++ i ) {
                let a = i * d;
                let b = a + w;
                let c = Math.cos( a );
                let s = Math.sin( a );
                let p = Math.cos( b );
                let q = Math.sin( b );
                path.moveTo( 
                    x + rex * c, y - rex * s ).lineTo(
                    x + rex * p, y - rex * q ).lineTo(
                    x + rin * p, y - rin * q ).lineTo(
                    x + rin * c, y - rin * s ).lineTo(
                    x + rex * c, y - rex * s 
                    );
            }
            return path.trail;
        }

    } )( fr19a.engine = fr19a.engine || {} );
} )( global.fr19a = global.fr19a || {} );

exports.fr19a = fr19a;
