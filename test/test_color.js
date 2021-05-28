const expect = require( 'chai' ).expect;
var press;
press = require( '../lib/motif.js' ).press
press = require( '../lib/color.js' ).press
press = require( '../lib/palette.js' ).press

describe( "Color", function() {
    let color = press.color;
    it( "Grey", function() {
        expect( color.grey( 255 ) ).to.equal( '#ffffff' );
    } );
    it( "Monoscale + Alpha", function() {
        expect( color.mono( 0, 1 ) ).to.equal( 'rgba(0,0,0,1)' );
    } );
    it( "RGB to HEX", function() {
        expect( color.hexa( 255, 255, 255 ) ).to.equal( '#ffffff' );
    } );
    it( "Screen", function() {
        expect( color.film( 0.5 ) ).to.equal( color.mono( 0, 0.5 ) );
    } );
    it( "Beamer", function() {
        let p = press.palette();
        var b = color.beamer( p.black, p.white );
        expect( b( true ) ).to.equal( p.black );
        expect( b( false ) ).to.equal( p.white );
    } );
} );
