( function( fr19b, undefined ) {

    ( function( b123, undefined ) {

        var cut = ( h, r ) => {
            return Math.cos( Math.asin( h / r ) ) * r;
        };

        b123.crank = ( thick ) => {
            let size = 30000;
            let r = 4000;
            let q = r - thick;
            let h = thick / 2;
            let b = 500;
            let c = cut( h, r );
            let p = b + thick;
            let y = b + r;
            let x = b + r + c;
            let path = press.path( b, y );
            path
                .arcTo( r, r, 0, 0, 1, x, y - h )
                .lineTo( size - x, y - h )
                .arcTo( r, r, 0, 1, 1, size - b - r + h, y + c )
                .lineTo( size - b - r + h, size - x )
                .arcTo( r, r, 0, 0, 1, size - b - r + h, size - b )
                .arcTo( r, r, 0, 0, 1, size - b - r - h, size - x )
                .lineTo( size - b - r - h, y + c )
                .arcTo( r, r, 0, 0, 1, size - x, y + h)
                .lineTo( x, y + h )
                .arcTo( r, r, 0, 0, 1, b, y )
                .moveTo( p, y )
                .arcTo( q, q, 0, 0, 0, p + 2 * q, y )
                .arcTo( q, q, 0, 0, 0, p, y )
                .moveTo( size - p - 2 * q, y )
                .arcTo( q, q, 0, 0, 0, size - p, y )
                .arcTo( q, q, 0, 0, 0, size - p - 2 * q, y )
                .moveTo( size - p - 2 * q, size - p - q )
                .arcTo( q, q, 0, 0, 0, size - p, size - p - q )
                .arcTo( q, q, 0, 0, 0, size - p - 2 * q, size - p - q )
            ;
            return path.trail;
        }

        b123.plain = ( thick ) => {
            let size = 60000;
            let garo = 9000;
            let cent = 30000;
            let r = 4000;
            let q = r - thick;
            let h = thick / 2;
            let b = 500;
            let c = cut( h, r );
            let p = b + thick;
            let y = b + r;
            let x = b + r + c;
            let path = press.path( b, y );
            path
                .arcTo( r, r, 0, 1, 1, b + r + h, x )
                .lineTo( b + r + h, cent - c ) 
                .arcTo( r, r, 0, 0, 1, b + r + h, cent + c )
                .lineTo( b + r + h, size - b - r - c )
                .arcTo( r, r, 0, 0, 1, b + r + h, size - b )
                .arcTo( r, r, 0, 0, 1, b + r - h, size - b - r - c )
                .lineTo( b + r - h, cent + c )
                .arcTo( r, r, 0, 0, 1, b + r - h, cent - c )
                .lineTo( b + r - h, x )
                .arcTo( r, r, 0, 0, 1, b, y )
                .moveTo( p, y )
                .arcTo( q, q, 0, 0, 0, p + 2 * q, y )
                .arcTo( q, q, 0, 0, 0, p, y )
                .moveTo( p, cent )
                .arcTo( q, q, 0, 0, 0, p + 2 * q, cent )
                .arcTo( q, q, 0, 0, 0, p, cent )
                .moveTo( p, size - p - q )
                .arcTo( q, q, 0, 0, 0, p + 2 * q, size - p - q )
                .arcTo( q, q, 0, 0, 0, p, size - p - q )
            ;
            return path.trail;
        }

    } )( fr19b.b123 = fr19b.b123 || {} );

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
            let path = press.path( x + r, y );
            for ( let i = 0; i < 24; ++ i ) {
                let part = gear.teeth( 2 * i, r );
                part.map( ( t ) => {
                    path.lineTo( x + t[ 0 ], y - t[ 1 ] );
                } );
            }
            path.lineTo( x + r, y );
            return path.trail;
        }

        engine.hole = ( x, y, r ) => {
            let path = press.path( x - r, y );
            path.arcTo( r, r, 0, 0, 1, x + r, y ).arcTo( r, r, 0, 0, 1, x - r, y );
            return path.trail;
        }

        engine.hub = ( x, y, r ) => {
            let gear = new Gear( 0.5 );
            let path = press.path( x + r, y );
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

        engine.spoke = ( x, y, rin, rex, n, from, till, stride ) => {
            let d = 2 * Math.PI / n;
            let a = from * d;
            let c = Math.cos( a );
            let s = Math.sin( a );
            let path = press.path( x + rin * c, y - rin * s );
            path.lineTo( x + rex * c, y - rex * s );
            for ( let i = from + stride; i < till; i += stride ) {
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
            let path = press.path( x, y );
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

        engine.guard = ( x, y, rin, rex, from, till ) => {
            let path = press.path( x, y );
            let a = from * Math.PI;
            let b = till * Math.PI;
            let c = Math.cos( a );
            let s = Math.sin( a );
            let p = Math.cos( b );
            let q = Math.sin( b );
            path.moveTo(
                x + rex * c, y - rex * s ).lineTo(
                x + rin * c, y - rin * s ).arcTo(
                rin, rin, 0, 0, 1, x + rin * p, y - rin * q ).lineTo(
                x + rex * p, y - rex * q
                );
            return path.trail;
        }

    } )( fr19b.engine = fr19b.engine || {} );

    ( function( branch, undefined ) {

        branch.exit = ( y, u, r ) => {
            let c = r * Math.sqrt( 0.5 );
            let w = 5 * u + 4 * r;
            let x = r;
            let path = press.path( x, y );
            path.arcTo( 
                r, r, 0, 0, 1, x + 2 * r, y ).arcTo(
                r, r, 0, 0, 1, x, y ).moveTo(
                x + 2 * r, y ).lineTo( 
                x + w - 2 * r, y ).arcTo(
                r, r, 0, 0, 1, x + w, y ).arcTo(
                r, r, 0, 0, 1, x + w - 2 * r, y ).moveTo(
                x + u + 2 * r, y ).lineTo(
                x + 3 * u + 2 * r, y - 2 * u ).arcTo(
                r, r, 0, 0, 1, x + 3 * u + 2 * ( r + c ), y - 2 * u - 2 * c ).arcTo(
                r, r, 0, 0, 1, x + 3 * u + 2 * r, y - 2 * u ).moveTo(
                x + u + 2 * r, y ).lineTo(
                x + 3 * u + 2 * r, y + 2 * u ).arcTo(
                r, r, 0, 0, 1, x + 3 * u + 2 * ( r + c ), y + 2 * u + 2 * c ).arcTo(
                r, r, 0, 0, 1, x + 3 * u + 2 * r, y + 2 * u
                );
            return path.trail;
        } 

    } )( fr19b.branch = fr19b.branch || {} );

    ( function( plot, undefined ) {

        plot.histogram = ( x, y, w, g, h, s ) => {
            let path = press.path( x, y );
            let t = h[ 0 ] * s;
            path.lineTo( x + w, y ).lineTo( x + w, y - t ).lineTo( x, y - t ).lineTo( x, y );
            for ( let i = 1; i < h.length; ++ i ) {
                let p = x + i * ( w + g );
                t = h[ i ] * s;
                if ( t > 0 ) {
                    path.moveTo( p, y ).lineTo( p + w, y ).lineTo( p + w, y - t ).lineTo( p, y - t ).lineTo( p, y );
                }
            }
            return path.trail;
        }

        plot.xaxis = ( a, b, y, m, s, w ) => {
            let path = press.path( a, y );
            path.lineTo( b, y );
            for ( let i = 0; i < m.length; ++ i ) {
                let x = m[ i ] * s;
                path.moveTo( x, y ).lineTo( x, y + w );
            }
            return path.trail;
        }

    } )( fr19b.plot = fr19b.plot || {} );

    ( function( dataflow, undefined ) {

        dataflow.garo = ( unit ) => {
            let r = unit / 2;
            let z = 4 * unit;
            let path = press.path( r, z );
            path.arcTo( 
                r, r, 0, 0, 1, 3 * r, z ).arcTo(
                r, r, 0, 0, 1, r, z ).moveTo(
                3 * r, z ).lineTo(
                5 * unit - r, z ).moveTo(
                5 * unit, z - unit ).lineTo(
                9 * unit, z - unit ).lineTo(
                9 * unit, z + unit ).lineTo(
                5 * unit, z + unit ).lineTo(
                5 * unit, z - unit ).moveTo(
                9 * unit, z ).lineTo(
                11 * unit, z ).lineTo(
                11 * unit, z - 2 * unit ).lineTo(
                23 * unit, z - 2 * unit ).lineTo(
                23 * unit, z - unit - r ).moveTo(
                11 * unit, z ).lineTo(
                13 * unit - r, z ).arcTo(
                r, r, 0, 0, 1, 13 * unit + r, z ).arcTo(
                r, r, 0, 0, 1, 13 * unit - r, z ).moveTo(
                17 * unit - r, z ).arcTo(
                r, r, 0, 0, 1, 17 * unit + r, z ).arcTo(
                r, r, 0, 0, 1, 17 * unit - r, z ).moveTo(
                17 * unit + r, z ).lineTo(
                21 * unit - r, z ).moveTo(
                21 * unit, z - unit ).lineTo(
                25 * unit, z - unit ).lineTo(
                25 * unit, z + unit ).lineTo(
                21 * unit, z + unit ).lineTo(
                21 * unit, z - unit ).moveTo(
                25 * unit, z ).lineTo(
                29 * unit - r, z ).moveTo(
                29 * unit, z - unit ).lineTo(
                33 * unit, z - unit ).lineTo(
                33 * unit, z + unit ).lineTo(
                29 * unit, z + unit ).lineTo(
                29 * unit, z - unit ).moveTo(
                33 * unit, z ).lineTo(
                35 * unit, z 
                );
            return path.trail;
        }

        dataflow.garowick = ( unit ) => {
            let z = 4 * unit;
            let path = press.path( 7 * unit, z + unit );
            path.lineTo(
                7 * unit, z + 2 * unit ).moveTo(
                23 * unit, z + unit ).lineTo(
                23 * unit, z + 2 * unit ).moveTo(
                31 * unit, z + unit ).lineTo(
                31 * unit, z + 2 * unit 
                );
            return path.trail;
        }

        dataflow.garoarrow = ( unit ) => {
            let r = unit / 2;
            let h = unit / 4;
            let z = 4 * unit;
            let path = press.path( 5 * unit - r, z );
            path.lineTo(
                5 * unit - r, z - h ).lineTo(
                5 * unit, z ).lineTo(
                5 * unit - r, z + h ).lineTo(
                5 * unit - r, z ).moveTo(
                23 * unit, z - unit - r ).lineTo(
                23 * unit + h, z - unit - r ).lineTo(
                23 * unit, z - unit ).lineTo(
                23 * unit - h, z - unit - r ).lineTo(
                23 * unit, z - unit - r ).moveTo(
                21 * unit - r, z ).lineTo( 
                21 * unit - r, z - h ).lineTo(
                21 * unit, z ).lineTo(
                21 * unit - r, z + h ).lineTo(
                21 * unit - r, z ).moveTo(
                29 * unit - r, z ).lineTo(
                29 * unit - r, z - h ).lineTo(
                29 * unit, z ).lineTo(
                29 * unit - r, z + h ).lineTo(
                29 * unit - r, z 
                );
            return path.trail;
        }

        dataflow.garowout = ( unit ) => {
            let r = unit / 2;
            let z = 4 * unit;
            let c = Math.cos( Math.PI / 6 );
            let s = Math.sin( Math.PI / 6 );
            let path = press.path( 35 * unit + r * c, z - r * s );
            path.arcTo(
                r, r, 0, 0, 1, 35 * unit + r * c, z + r * s ).moveTo(
                35 * unit + 2 * r * c, z - 2 * r * s ).arcTo(
                2 * r, 2 * r, 0, 0, 1, 35 * unit + 2 * r * c, z + 2 * r * s ).moveTo(
                35 * unit + 3 * r * c, z - 3 * r * s ).arcTo(
                3 * r, 3 * r, 0, 0, 1, 35 * unit + 3 * r * c, z + 3 * r * s 
                );
            return path.trail;
        }

        dataflow.sero = ( unit ) => {
            let r = unit / 2;
            let x = 4 * unit;
            let path = press.path( x, r );
            path.arcTo( 
                r, r, 0, 0, 1, x, 3 * r ).arcTo(
                r, r, 0, 0, 1, x, r ).moveTo(
                x, 3 * r ).lineTo(
                x, 5 * unit - r ).moveTo(
                x + unit, 5 * unit ).lineTo(
                x + unit, 7 * unit ).lineTo(
                x - 3 * unit, 7 * unit ).lineTo(
                x - 3 * unit, 5 * unit ).lineTo(
                x + unit, 5 * unit ).moveTo(
                x, 7 * unit ).lineTo(
                x, 9 * unit ).lineTo(
                x - 2 * unit, 9 * unit ).lineTo(
                x - 2 * unit, 11 * unit - r ).arcTo(
                r, r, 0, 0, 1, x - 2 * unit, 11 * unit + r ).arcTo(
                r, r, 0, 0, 1, x - 2 * unit, 11 * unit - r ).moveTo(
                x, 9 * unit ).lineTo(
                x, 19 * unit - r ).moveTo(
                x - 2 * unit, 15 * unit - r ).arcTo(
                r, r, 0, 0, 1, x - 2 * unit, 15 * unit + r ).arcTo(
                r, r, 0, 0, 1, x - 2 * unit, 15 * unit - r ).moveTo(
                x - 2 * unit, 15 * unit + r ).lineTo(
                x - 2 * unit, 19 * unit - r ).moveTo(
                x + unit, 19 * unit ).lineTo(
                x + unit, 21 * unit ).lineTo(
                x - 3 * unit, 21 * unit ).lineTo(
                x - 3 * unit, 19 * unit ).lineTo(
                x + unit, 19 * unit ).moveTo(
                x, 21 * unit ).lineTo(
                x, 25 * unit - r ).moveTo(
                x + unit, 25 * unit ).lineTo(
                x + unit, 27 * unit ).lineTo(
                x - 3 * unit, 27 * unit ).lineTo(
                x - 3 * unit, 25 * unit ).lineTo(
                x + unit, 25 * unit ).moveTo(
                x, 27 * unit ).lineTo(
                x, 31 * unit 
                );
            return path.trail;
        }

        dataflow.seroarrow = ( unit ) => {
            let r = unit / 2;
            let h = unit / 4;
            let x = 4 * unit;
            let path = press.path( x, 5 * unit - r );
            path.lineTo(
                x - h, 5 * unit - r ).lineTo(
                x, 5 * unit ).lineTo(
                x + h, 5 * unit - r ).lineTo(
                x, 5 * unit - r ).moveTo(
                x - 2 * unit, 19 * unit - r ).lineTo(
                x - 2 * unit - h, 19 * unit - r ).lineTo(
                x - 2 * unit, 19 * unit ).lineTo(
                x - 2 * unit + h, 19 * unit - r ).lineTo(
                x - 2 * unit, 19 * unit - r ).moveTo(
                x, 19 * unit - r ).lineTo(
                x - h, 19 * unit - r ).lineTo(
                x, 19 * unit ).lineTo(
                x + h, 19 * unit - r ).lineTo(
                x, 19 * unit - r ).moveTo(
                x, 25 * unit - r ).lineTo(
                x - h, 25 * unit - r ).lineTo(
                x, 25 * unit ).lineTo(
                x + h, 25 * unit - r ).lineTo(
                x, 25 * unit - r 
                );
            return path.trail;
        }

        dataflow.serowout = ( unit ) => {
            let r = unit / 2;
            let x = 4 * unit;
            let c = Math.cos( Math.PI / 6 );
            let s = Math.sin( Math.PI / 6 );
            let path = press.path( x + r * s, 31 * unit + r * c );
            path.arcTo(
                r, r, 0, 0, 1, x - r * s,  31 * unit + r * c ).moveTo(
                x + 2 * r * s, 31 * unit + 2 * r * c ).arcTo(
                2 * r, 2 * r, 0, 0, 1, x - 2 * r * s, 31 * unit + 2 * r * c ).moveTo(
                x + 3 * r * s, 31 * unit + 3 * r * c ).arcTo(
                3 * r, 3 * r, 0, 0, 1, x - 3 * r * s, 31 * unit + 3 * r * c
                );
            return path.trail;
        }

    } )( fr19b.dataflow = fr19b.dataflow || {} );

    ( function( chestnut, undefined ) {

        chestnut.skin = ( x, y, r, from, till ) => {
            let a = from * Math.PI;
            let b = till * Math.PI;
            let c = Math.cos( a );
            let s = Math.sin( a );
            let p = Math.cos( b );
            let q = Math.sin( b );
            let path = press.path( x + r * c, y - r * s );
            path.arcTo( r, r, 0, 0, 1, x + r * p, y - r * q );
            return path.trail;
        }

        chestnut.shell = ( x, y, r ) => {
            let path = press.path( x - r, y );
            path.arcTo( 
                r, r, 0, 0, 1, x + r, y ).arcTo(
                r, r, 0, 0, 1, x - r, y 
            );
            return path.trail;
        }

        chestnut.spike = ( x, y, rin, rex, at ) => {
            let a = at * Math.PI;
            let c = Math.cos( a );
            let s = Math.sin( a );
            let path = press.path( x + rin * c, y - rin * s );
            path.lineTo( x + rex * c, y - rex * s );
            return path.trail;
        }

    } )( fr19b.chestnut = fr19b.chestnut || {} );

    ( function( hexmap, undefined ) {

        hexmap.single = ( x, y, w ) => {
            let h = Math.sqrt( 3 ) * 0.5 * w;
            let b = 0.5 * w;
            let path = press.path( x, y );
            path.lineTo( 
                x + b, y - h ).lineTo(
                x + b + w, y - h ).lineTo( 
                x + 2 * w, y ).lineTo(
                x + b + w, y + h ).lineTo(
                x + b, y + h ).lineTo(
                x, y 
                );
            return path.trail;
        }

        hexmap.triple = ( x, y, w ) => {
            let h = Math.sqrt( 3 ) * 0.5 * w;
            let b = 0.5 * w;
            let path = press.path( x, y );
            path.lineTo( 
                x + b, y - h ).lineTo(
                x + b + w, y - h ).lineTo( 
                x + 2 * w, y ).lineTo(
                x + b + w, y + h ).lineTo(
                x + b, y + h ).lineTo(
                x, y ).moveTo(
                x + b + w, y + h ).lineTo(
                x + 2 * w, y + 2 * h ).lineTo(
                x + b + w, y + 3 * h ).lineTo(
                x + b, y + 3 * h ).lineTo(
                x, y + 2 * h ).lineTo(
                x + b, y + h ).moveTo( 
                x + 2 * w, y ).lineTo(
                x + 3 * w, y ).lineTo(
                x + b + 3 * w, y + h ).lineTo(
                x + 3 * w, y + 2 * h ).lineTo(
                x + 2 * w, y + 2 * h 
                );
            return path.trail;
        }

    } )( fr19b.hexmap = fr19b.hexmap || {} );

} )( global.fr19b = global.fr19b || {} );

exports.fr19b = fr19b;
