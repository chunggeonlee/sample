const expect = require( 'chai' ).expect;
var press;
press = require( '../lib/motif.js' ).press
press = require( '../lib/palette.js' ).press

describe( "Palette", function() {
    it( "Unique", function() {
        expect( press.palette() ).to.equal( press.palette() );
    } );
} );
