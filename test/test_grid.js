const expect = require( 'chai' ).expect;
var press;
press = require( '../lib/motif.js' ).press
press = require( '../lib/grid.js' ).press

describe( "Grid", function() {
    it( "Construction", function() {
        var p = press.grid.panel( 100, 200 );
        expect( p.garo ).to.equal( 100 );
        expect( p.sero ).to.equal( 200 );
    } );
    it( "Split", function() {
        let orientation = press.numo.orientation;
        var p = press.grid.panel( 100, 200 );
        p.split( [ 70, 30 ], orientation.GARO );
        expect( p.size() ).to.equal( 2 );
        var q = p.item( 1 );
        expect( q.garo ).to.equal( 30 );
        q.split( [ 120, 40, 40 ], orientation.SERO );
        var d = p.drill( [ 1, 2 ] );
        expect( d.location.x ).to.equal( 70 );
        expect( d.location.y ).to.equal( 160 );
        expect( d.item.garo ).to.equal( 30 );
        expect( d.item.sero ).to.equal( 40 );
    } );
    it( "Stack", function() {
        let orientation = press.numo.orientation;
        var p = [ 100, 200, 300 ].map( function( t ) { return press.grid.panel( t, 500 ); } );
        var q = press.grid.stack( p, orientation.GARO );
        expect( q.size() ).to.equal( 3 );
        expect( q.item( 1 ).garo ).to.equal( 200 );
    } );
} );
