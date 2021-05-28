( function( fr19a, undefined ) {
    ( function( grid, undefined ) {

        grid.offset = function( device ) {
            return Math.max( 50, ( device.inner.height - 670 ) / 2 );
        }

        grid.core = function( device ) {
            return press.style.slider( 0, grid.offset( device ), 900, 670 );
        }

        grid.wrap = function( item, name, prop ) {
            return <div key={ name } style={ prop }>{ item }</div>;
        }

    } )( fr19a.grid = fr19a.grid || {} )
} )( global.fr19a = global.fr19a || {} )

exports.fr19a = fr19a;
