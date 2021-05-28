( function( fr19c, undefined ) {

    ( function( google, undefined ) {
        
        google.flow = ( u ) => {
            let path = press.path( 0, 6 * u );
            path.lineTo(
                2 * u, 6 * u ).lineTo(
                2 * u, 5 * u ).lineTo(
                6 * u, 5 * u ).lineTo(
                6 * u, 7 * u ).lineTo(
                2 * u, 7 * u ).lineTo(
                2 * u, 6 * u ).moveTo(
                6 * u, 6 * u ).lineTo(
                14 * u, 6 * u ).lineTo(
                14 * u, 5 * u ).lineTo(
                18 * u, 5 * u ).lineTo(
                18 * u, 7 * u ).lineTo(
                14 * u, 7 * u ).lineTo(
                14 * u, 6 * u ).moveTo(
                18 * u, 6 * u ).lineTo(
                20 * u, 6 * u ).lineTo(
                20 * u, 5 * u ).lineTo(
                24 * u, 5 * u ).lineTo(
                24 * u, 7 * u ).lineTo(
                20 * u, 7 * u ).lineTo(
                20 * u, 6 * u ).moveTo(
                24 * u, 6 * u ).lineTo(
                26 * u, 6 * u ).moveTo(
                12 * u, 6 * u ).lineTo(
                12 * u, 9 * u ).lineTo(
                14 * u, 9 * u ).lineTo(
                14 * u, 8 * u ).lineTo(
                18 * u, 8 * u ).lineTo(
                18 * u, 10 * u ).lineTo(
                14 * u, 10 * u ).lineTo(
                14 * u, 9 * u ).moveTo(
                18 * u, 9 * u ).lineTo(
                20 * u, 9 * u ).lineTo(
                20 * u, 8 * u ).lineTo(
                24 * u, 8 * u ).lineTo(
                24 * u, 10 * u ).lineTo(
                20 * u, 10 * u ).lineTo(
                20 * u, 9 * u ).moveTo(
                24 * u, 9 * u ).lineTo(
                26 * u, 9 * u ).moveTo(
                 8 * u, 2 * u ).lineTo(
                12 * u, 2 * u ).lineTo(
                12 * u, 4 * u ).lineTo(
                 8 * u, 4 * u ).lineTo(
                 8 * u, 2 * u ).moveTo(
                12 * u, 3 * u ).lineTo(
                16 * u, 3 * u ).lineTo(
                16 * u, 5 * u ).moveTo(
                 8 * u, 11 * u ).lineTo(
                12 * u, 11 * u ).lineTo(
                12 * u, 13 * u ).lineTo(
                 8 * u, 13 * u ).lineTo(
                 8 * u, 11 * u ).moveTo(
                12 * u, 12 * u ).lineTo(
                16 * u, 12 * u ).lineTo(
                16 * u, 10 * u ).moveTo(
                 7 * u, 0.8 * u ).lineTo(
                19 * u, 0.8 * u
                );
            return path.trail;
        }

        google.arrow = ( u ) => {
            let r = 0.4 * u;
            let h = 0.5 * r;
            let path = press.path( 14 * u - r, 6 * u );
            path.lineTo(
                14 * u - r, 6 * u - h ).lineTo(
                14 * u, 6 * u ).lineTo(
                14 * u - r, 6 * u + h ).lineTo(
                14 * u - r, 6 * u ).moveTo(
                14 * u - r, 9 * u ).lineTo(
                14 * u - r, 9 * u - h ).lineTo(
                14 * u, 9 * u ).lineTo(
                14 * u - r, 9 * u + h ).lineTo(
                14 * u - r, 9 * u ).moveTo(
                20 * u - r, 6 * u ).lineTo(
                20 * u - r, 6 * u - h ).lineTo(
                20 * u, 6 * u ).lineTo(
                20 * u - r, 6 * u + h ).lineTo(
                20 * u - r, 6 * u ).moveTo(
                20 * u - r, 9 * u ).lineTo(
                20 * u - r, 9 * u - h ).lineTo(
                20 * u, 9 * u ).lineTo(
                20 * u - r, 9 * u + h ).lineTo(
                20 * u - r, 9 * u ).moveTo(
                26 * u - r, 6 * u ).lineTo(
                26 * u - r, 6 * u - h ).lineTo(
                26 * u, 6 * u ).lineTo(
                26 * u - r, 6 * u + h ).lineTo(
                26 * u - r, 6 * u ).moveTo(
                26 * u - r, 9 * u ).lineTo(
                26 * u - r, 9 * u - h ).lineTo(
                26 * u, 9 * u ).lineTo(
                26 * u - r, 9 * u + h ).lineTo(
                26 * u - r, 9 * u ).moveTo(
                16 * u, 5 * u - r ).lineTo(
                16 * u + h, 5 * u - r ).lineTo(
                16 * u, 5 * u ).lineTo(
                16 * u - h, 5 * u - r ).lineTo(
                16 * u, 5 * u - r ).moveTo(
                16 * u, 10 * u + r ).lineTo(
                16 * u + h, 10 * u + r ).lineTo(
                16 * u, 10 * u ).lineTo(
                16 * u - h, 10 * u + r ).lineTo(
                16 * u, 10 * u + r ).moveTo(
                19 * u - r, 2 * r ).lineTo(
                19 * u - r, 2 * r - h ).lineTo(
                19 * u, 2 * r ).lineTo(
                19 * u - r, 2 * r + h ).lineTo(
                19 * u - r, 2 * r
                );
            return path.trail;
        }

        google.miniflow = ( u ) => {
            let h = 0.4 * u;
            let path = press.path( 5 * u, 2 * u );
            path.lineTo( 15 * u, 2 * u ).moveTo( 
                10 * u, 2 * u - h ).lineTo(
                10 * u, 5 * u ).lineTo(
                15 * u, 5 * u 
                );
            return path.trail;
        }

    } )( fr19c.google = fr19c.google || {} );


    ( function( life, undefined ) {

        life.axis = ( u ) => {
            let h = 0.4 * u;
            let path = press.path( 0, 3 * u );
            path.lineTo(
                22 * u,  3 * u ).moveTo(
                 2 * u,  3 * u ).lineTo(
                 2 * u,  3 * u - h ).moveTo(
                 8 * u,  3 * u ).lineTo(
                 8 * u,  3 * u + h ).moveTo(
                10 * u,  3 * u ).lineTo(
                10 * u,  3 * u - h ).moveTo(
                11 * u,  3 * u ).lineTo(
                11 * u,  3 * u - h ).lineTo(
                17 * u,  3 * u - h ).lineTo(
                17 * u,  3 * u + h ).moveTo(
                18 * u,  3 * u ).lineTo(
                18 * u,  3 * u - h ).moveTo(
                 0 * u,  8 * u ).lineTo(
                22 * u,  8 * u ).moveTo(
                 2 * u,  8 * u ).lineTo(
                 2 * u,  8 * u - h ).moveTo(
                10 * u,  8 * u ).lineTo(
                10 * u,  8 * u - h ).moveTo(
                18 * u,  8 * u ).lineTo(
                18 * u,  8 * u - h ).moveTo(
                20 * u,  8 * u ).lineTo(
                20 * u,  8 * u + h ).moveTo(
                 0 * u, 13 * u ).lineTo(
                12 * u, 13 * u ).moveTo(
                 2 * u, 13 * u ).lineTo(
                 2 * u, 13 * u - h ).moveTo(
                10 * u, 13 * u ).lineTo(
                10 * u, 13 * u - h
                );
            return path.trail;
        }

    } )( fr19c.life = fr19c.life || {} );

    ( function( stp, undefined ) {
        
        stp.flowsero = ( u ) => {
            let path = press.path( u, u );
            path.lineTo(
                7 * u,  1 * u ).lineTo(
                7 * u,  5 * u ).lineTo(
                1 * u,  5 * u ).lineTo(
                1 * u,  1 * u ).moveTo(
                4 * u,  5 * u ).lineTo(
                4 * u,  6 * u ).moveTo(
                1 * u,  6 * u ).lineTo(
                7 * u,  6 * u ).lineTo(
                7 * u, 10 * u ).lineTo(
                1 * u, 10 * u ).lineTo(
                1 * u,  6 * u ).moveTo(
                7 * u,  8 * u ).lineTo(
                9 * u,  8 * u ).lineTo(
                9 * u, 13 * u ).lineTo(
                7 * u, 13 * u ).moveTo(
                1 * u, 11 * u ).lineTo(
                7 * u, 11 * u ).lineTo(
                7 * u, 15 * u ).lineTo(
                1 * u, 15 * u ).lineTo(
                1 * u, 11 * u ).moveTo(
                4 * u, 15 * u ).lineTo(
                4 * u, 16 * u ).moveTo(
                1 * u, 16 * u ).lineTo(
                7 * u, 16 * u ).lineTo(
                7 * u, 20 * u ).lineTo(
                1 * u, 20 * u ).lineTo(
                1 * u, 16 * u
            );
            return path.trail;
        }

        stp.ticksero = ( u ) => {
            let r = 0.4 * u;
            let h = 0.5 * r;
            let path = press.path( 4 * u, 6 * u );
            path.lineTo(
                4 * u - h, 6 * u - r ).lineTo(
                4 * u + h, 6 * u - r ).lineTo(
                4 * u, 6 * u ).moveTo(
                4 * u, 16 * u ).lineTo(
                4 * u - h, 16 * u - r ).lineTo(
                4 * u + h, 16 * u - r ).lineTo(
                4 * u, 16 * u ).moveTo(
                7 * u, 13 * u ).lineTo(
                7 * u + r, 13 * u - h ).lineTo(
                7 * u + r, 13 * u + h ).lineTo(
                7 * u, 13 * u
            );
            return path.trail;
        }

    } )( fr19c.stp = fr19c.ftp || {} );


    ( function( chart, undefined ) {

        chart.candle = ( base, unit, fact, data ) => {
            let size = data.length / 6;
            let w = 0.3 * unit;
            let path = press.path( 0, 0 );
            for ( let i = 0; i < size; ++ i ) {
                let n = 6 * i;
                let x = ( i + 1 ) * unit;
                let o = base - data[ n + 1 ] * fact;
                let h = base - data[ n + 2 ] * fact;
                let l = base - data[ n + 3 ] * fact;
                let c = base - data[ n + 4 ] * fact;
                path.moveTo( x, h ).lineTo( x, l ).moveTo( x - w, o ).lineTo( x, o ).moveTo( x + w, c ).lineTo( x, c );
            }
            return path.trail;
        }

        chart.price = ( base, unit, fact, data ) => {
            let w = 0.4 * unit;
            let x = 24.5 * unit;
            let path = press.path( x, 0 );
            path.lineTo( x, 18 * unit + w );
            for ( let i = 0; i < data.length; ++ i ) {
                let y = base - data[ i ] * fact;
                path.moveTo( x, y ).lineTo( x - w, y );
            }
            return path.trail;
        }

        chart.date = ( base, unit, data ) => {
            let w = 0.4 * unit;
            let y = 18 * unit;
            let path = press.path( 0, y );
            path.lineTo( 31 * unit, y );
            for ( let i = 0; i < data.length; ++ i ) {
                let x = data[ i ] * unit;
                path.moveTo( x, y ).lineTo( x, y + w );
            }
            return path.trail;
        }

        chart.focus = ( base, unit, fact ) => {
            let x = 7 * unit;
            let y = base - 24 * fact;
            let r = 5 * fact;
            let path = press.path( x - r, y );
            path.arcTo( r, r, 0, 0, 1, x + r, y ).arcTo(
                r, r, 0, 0, 1, x - r, y 
            );
            x = 23 * unit;
            y = base - 38 * fact;
            r = 11.5 * fact;
            path.moveTo( x - r, y ).arcTo(
                r, r, 0, 0, 1, x + r, y ).arcTo(
                r, r, 0, 0, 1, x - r, y 
                );
            return path.trail;
        }

    } )( fr19c.chart = fr19c.chart || {} );

    ( function( task, undefined ) {

        task.flow = ( u ) => {
            let c = 1 / Math.sqrt( 2 );
            let path = press.path( ( 140 + 80 * c ) * u, ( 140 - 80 * c ) * u );
            path.arcTo(
                80 * u, 80 * u, 0, 0, 0, ( 140 - 80 * c ) * u, ( 140 + 80 * c ) * u ).lineTo(
                ( 140 - 100 * c ) * u, ( 140 + 100 * c ) * u ).moveTo(
                140 * u, 240 * u ).lineTo(
                140 * u, 180 * u ).arcTo(
                40 * u, 40 * u, 0, 1, 1, 180 * u, 140 * u ).lineTo(
                300 * u, 140 * u ).lineTo(
                340 * u, 100 * u ).lineTo(
                380 * u, 140 * u ).lineTo(
                340 * u, 180 * u ).lineTo(
                300 * u, 140 * u ).moveTo(
                380 * u, 140 * u ).lineTo(
                500 * u, 140 * u ).moveTo(
                ( 540 + 80 * c ) * u, ( 140 + 80 * c ) * u ).lineTo(
                ( 540 + 40 * c ) * u, ( 140 + 40 * c ) * u ).arcTo(
                40 * u, 40 * u, 0, 1, 1, 580 * u, 140 * u ).lineTo(
                640 * u, 140 * u ).moveTo(
                340 * u, 180 * u ).lineTo(
                340 * u, 300 * u ).moveTo(
                340 * u, 420 * u ).lineTo(
                340 * u, 380 * u ).arcTo(
                40 * u, 40 * u, 0, 1, 1, 380 * u, 340 * u ).lineTo(
                540 * u, 340 * u ).lineTo(
                540 * u, 180 * u ).moveTo(
                540 * u, 100 * u ).lineTo(
                540 * u, 60 * u ).lineTo(
                480 * u, 60 * u ).moveTo(
                300 * u, 340 * u ).lineTo(
                260 * u, 340 * u 
                );
            return path.trail;
        }
        
        task.arrow = ( u ) => {
            let path = press.path( 300 * u, 140 * u );
            path.lineTo(
                290 * u, 135 * u ).lineTo(
                290 * u, 145 * u ).lineTo(
                300 * u, 140 * u ).moveTo(
                500 * u, 140 * u ).lineTo(
                490 * u, 135 * u ).lineTo(
                490 * u, 145 * u ).lineTo(
                500 * u, 140 * u ).moveTo(
                640 * u, 140 * u ).lineTo(
                630 * u, 135 * u ).lineTo(
                630 * u, 145 * u ).lineTo(
                640 * u, 140 * u ).moveTo(
                340 * u, 300 * u ).lineTo(
                345 * u, 290 * u ).lineTo(
                335 * u, 290 * u ).lineTo(
                340 * u, 300 * u ).moveTo(
                300 * u, 340 * u ).lineTo(
                290 * u, 335 * u ).lineTo(
                290 * u, 345 * u ).lineTo(
                300 * u, 340 * u ).moveTo(
                540 * u, 180 * u ).lineTo(
                535 * u, 190 * u ).lineTo(
                545 * u, 190 * u ).lineTo(
                540 * u, 180 * u ).moveTo(
                540 * u, 100 * u ).lineTo(
                535 * u,  90 * u ).lineTo(
                545 * u,  90 * u ).lineTo(
                540 * u, 100 * u
                );
            return path.trail;
        }

        task.ball = ( u ) => {
            let c = 1 / Math.sqrt( 2 );
            let path = press.path( 140 * u, 35 * u );
            path.arcTo(
                5, 5, 0, 0, 1, 140 * u, 45 * u ).arcTo(
                5, 5, 0, 0, 1, 140 * u, 35 * u ).moveTo(
                140 * u, 45 * u ).lineTo(
                140 * u, 75 * u ).arcTo(
                5, 5, 0, 0, 1, 140 * u, 85 * u ).arcTo(
                5, 5, 0, 0, 1, 140 * u, 75 * u ).moveTo(
                ( 140 - 105 * c ) * u, ( 140 - 105 * c ) * u ).arcTo(
                5, 5, 0, 0, 1, ( 140 - 95 * c ) * u, ( 140 - 95 * c ) * u ).arcTo(
                5, 5, 0, 0, 1, ( 140 - 105 * c ) * u, ( 140 - 105 * c ) * u ).moveTo(
                ( 140 - 95 * c ) * u, ( 140 - 95 * c ) * u ).lineTo(
                ( 140 - 65 * c ) * u, ( 140 - 65 * c ) * u ).arcTo(
                5, 5, 0, 0, 1, ( 140 - 55 * c ) * u, ( 140 - 55 * c ) * u ).arcTo(
                5, 5, 0, 0, 1, ( 140 - 65 * c ) * u, ( 140 - 65 * c ) * u ).moveTo(
                35 * u, 140 * u ).arcTo(
                5, 5, 0, 0, 1, 45 * u, 140 * u ).arcTo(
                5, 5, 0, 0, 1, 35 * u, 140 * u ).moveTo(
                45 * u, 140 * u ).lineTo(
                75 * u, 140 * u ).arcTo(
                5, 5, 0, 0, 1, 85 * u, 140 * u ).arcTo(
                5, 5, 0, 0, 1, 75 * u, 140 * u
                );
            return path.trail;
        }

    } )( fr19c.task = fr19c.task || {} );

    ( function( plot, undefined ) {

        plot.pie = ( x, y, r, w, a, b ) => {
            let p = 2 * Math.PI * ( a + 0.25 );
            let c = Math.cos( p );
            let s = Math.sin( p );
            let q = 2 * Math.PI * ( b + 0.25 );
            let k = Math.cos( q );
            let z = Math.sin( q );
            let path = press.path( x + c * r, y - s * r );
            path.arcTo( r, r, 0, 0, 0, x + k * r, y - z * r ).lineTo(
                x + k * w, y - z * w ).arcTo(
                w, w, 0, 0, 1, x + c * w, y - s * w ).lineTo(
                x + c * r, y - s * r 
                );
            return path.trail;
        }

    } )( fr19c.plot = fr19c.plot || {} );

} )( global.fr19c = global.fr19c || {} );

exports.fr19c = fr19c;
