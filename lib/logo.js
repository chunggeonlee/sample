( function( press, undefined ) {
    ( function( logo, undefined ) {
        function height( w ) {
            return press.trim( w / press.logoRate(), 100 );
        }

        logo.slider = function( top, width = 320, color = 'white' ) {
            return press.style.slider( 0, top, width, height( width ) ).logo();
        };

        logo.docker = function( left, top, width = 320, color = 'white' ) {
            return press.style.docker( left, top, width, height( width ) ).logo();
        };
    } )( press.logo = press.logo || {} );
} )( global.press = global.press || {} );

exports.press = press;
