const expect = require( 'chai' ).expect;
var press;
press = require( '../lib/state.js' ).press
press = require( '../lib/motif.js' ).press


describe( "State", function() {
    it( "Construction", function() {
        const s = new press.Component( 'A', 0 );
        expect( s.id ).to.equal( 'A' );
        expect( s.state() ).to.equal( 0 );
        expect( s.size() ).to.equal( 0 );
    } );
    it( "Subordinate", function() {
        var s = new press.Component( 'A' );
        s.add( new press.Component( 'B' ) );
        expect( s.size() ).to.equal( 1 );
        var t = s.begin();
        expect( t.next().done ).to.equal( false );
        expect( t.next().done ).to.equal( true );
    } );
    it( "Transition", function() {
        var s = new press.Component( 'A' );
        expect( s.state() ).to.equal( 0 );
        expect( s.shift( 3 ) ).to.equal( 'A-0-3' );
        expect( s.state() ).to.equal( 3 );
    } );
} );
