const expect = require( 'chai' ).expect;
const press = require( '../lib/press.js' ).press;

describe( "Button", function() {
    it( "SpecWord", function() {
        var face = function( color ) { return 'Enter'; }
        let p = press.palette();
        expect( p.black ).to.equal( '#000000' );
        var scheme = press.color.beamer( p.black, p.white );
        var report = function( w ) {};
        var spec = new press.button.SpecWord(
            'button', report, 1000, face, scheme, press.location( 100, 100 ), 0, 24
            );
        expect( Object.keys( spec ).length ).to.equal( 5 );
        expect( spec.name ).to.equal( 'button' );
        expect( spec.scheme( true ) ).to.equal( p.black );
    } );
} );
