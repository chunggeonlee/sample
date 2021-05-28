( function( fr19b, undefined ) {
    ( function( grid, undefined ) {

        var wide = 900;
        var slim = 670;

        grid.offset = function( device ) {
            if ( device.portrait ) {
                return Math.max( 50, ( device.inner.height - wide ) / 2 );
            } else {
                return Math.max( 50, ( device.inner.height - slim ) / 2 );
            }
        }

        grid.core = function( device ) {
            if ( device.portrait ) {
                return press.style.slider( 0, grid.offset( device ), slim, wide );
            } else {
                return press.style.slider( 0, grid.offset( device ), wide, slim );
            }
        }

        grid.portrait = function( device ) {
            let s = press.once();
            if ( s.mobile() ) {
                return device.portrait;
            } else {
                return false;
            }
        }

        grid.basis = function( device ) {
            if ( grid.portrait( device ) ) {
                return Math.max( device.inner.height + 50, wide + 100 );
            } else {
                return Math.max( device.inner.height + 50, slim + 100 );
            }
        }

    } )( fr19b.grid = fr19b.grid || {} )
} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
