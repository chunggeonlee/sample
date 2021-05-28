const expect = require( 'chai' ).expect;
var press;
press = require( '../lib/motif.js' ).press
press = require( '../lib/style.js' ).press

describe( "Style", function() {
    let style = press.style;
    it( "Construction", function() {
        var s = style.spec( { top: '5px', left: '10px' } );
        expect( s.top ).to.equal( '5px' );
        expect( s.left ).to.equal( '10px' );
    } );
    it( "Add", function() {
        var s = style.spec();
        s.add( { 'top': '1px', 'left': '2px' } );
        expect( s.top ).to.equal( '1px' );
        expect( s.left ).to.equal( '2px' );
    } );
    it( "Place", function() {
        var s = style.spec().place( 5, 5, true );
        expect( s.top ).to.equal( '5px' );
        expect( s.left ).to.equal( '50%' );
        expect( s.marginLeft ).to.equal( '5px' );
        var t = style.spec().place( 5, 5 );
        expect( t.top ).to.equal( '5px' );
    } );
    it( "Topology", function() {
        expect( style.absolute().position ).to.equal( 'absolute' );
        expect( style.fixed().position ).to.equal( 'fixed' );
        expect( style.relative().position ).to.equal( 'relative' );
    } );
} );
