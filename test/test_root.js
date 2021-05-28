const expect = require( 'chai' ).expect;
const press = require( '../lib/motif.js' ).press;

describe( "Enums", function() {
    it( "Place", function() {
        let place = press.numo.place;
        expect( place.TOP ).to.equal( 0 );
        expect( place.LEFT ).to.equal( 1 );
        expect( place.BOTTOM ).to.equal( 2 );
        expect( place.RIGHT ).to.equal( 3 );
        expect( place.tag( place.LEFT ) ).to.equal( 'Left' );
    } );
    it( "Topology", function() {
        let topol = press.numo.topology;
        expect( topol.ABSOLUTE ).to.equal( 0 );
        expect( topol.FIXED ).to.equal( 1 );
        expect( topol.RELATIVE ).to.equal( 2 );
    } );
} );

describe( "Utility", function() {
    it( "Append", function() {
        var a = { x: 1, y: 2 };
        var b = { z: 3 };
        press.append( a, b );
        expect( b.x ).to.equal( 1 );
        expect( b.y ).to.equal( 2 );
        expect( b.z ).to.equal( 3 );
    } );
    it( "Defined", function() {
        var x;
        expect( press.defined( x ) ).to.equal( false );
        x = ''
        expect( press.defined( x ) ).to.equal( true );
    } );
} );
