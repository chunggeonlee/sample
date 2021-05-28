( function( press, undefined ) {
    ( function( grid, undefined ) {
        function add( a, b ) {
            return a + b;
        }

        function b2i( a ) {
            return a ? 1 : 0;
        }

        var Panel = function( garo, sero ) {
            press.immutable( this, 'garo', garo );
            press.immutable( this, 'sero', sero );

            var pool = [];
            var orientation = 0;

            this.size = function() {
                return pool.length;
            };
            this.item = function( nth ) {
                press.verify( nth < pool.length, 'Index out of bound.' );
                return pool[ nth ];
            };
            this.split = function( subs, span ) {
                press.verify( pool.length == 0, 'Panel is already splitted.' );
                var sum = subs.reduce( add, 0 );
                switch ( span ) {
                    case 0: {
                        press.verify( sum == this.garo, 'Invalid split.' );
                        const s = this.sero;
                        pool = subs.map( function( t ) {
                            return new Panel( t, s );
                        } );
                        break;
                    }
                    case 1: {
                        press.verify( sum == this.sero, 'Invalid split.' );
                        const g = this.garo;
                        pool = subs.map( function( t ) {
                            return new Panel( g, t );
                        } );
                        break;
                    }
                }
                orientation = span;
            };
            this.host = function( subs, span ) {
                press.verify( subs.length > 1, 'Insufficient items.' );
                var p = subs[ 0 ];
                switch ( span ) {
                    case 0: {
                        var t = subs
                            .map( function( t ) {
                                return b2i( t.sero == p.sero );
                            } )
                            .reduce( add, 0 );
                        press.verify( t == subs.length, 'Inconsistent items.' );
                        var g = subs
                            .map( function( t ) {
                                return t.garo;
                            } )
                            .reduce( add, 0 );
                        press.verify( g == this.garo, 'Incompatible data.' );
                        break;
                    }
                    case 1: {
                        var t = subs
                            .map( function( t ) {
                                return b2i( t.garo == p.garo );
                            } )
                            .reduce( add, 0 );
                        press.verify( t == subs.length, 'Inconsistent items.' );
                        var s = subs
                            .map( function( t ) {
                                return t.sero;
                            } )
                            .reduce( add, 0 );
                        press.verify( s == this.sero, 'Incompatible data.' );
                        break;
                    }
                }
                orientation = span;
                pool = subs;
            };
            this.drill = function( seq, offset = press.location( 0, 0 ) ) {
                press.verify( seq.length > 0, 'Invalid sequence.' );
                var nth = seq[ 0 ];
                press.verify( nth < pool.length, 'Index out of bound.' );
                var cur = offset.clone();
                switch ( orientation ) {
                    case 0: {
                        cur.x += pool
                            .slice( 0, nth )
                            .map( function( t ) {
                                return t.garo;
                            } )
                            .reduce( add, 0 );
                        break;
                    }
                    case 1: {
                        cur.y += pool
                            .slice( 0, nth )
                            .map( function( t ) {
                                return t.sero;
                            } )
                            .reduce( add, 0 );
                        break;
                    }
                }
                if ( seq.length == 1 ) {
                    return { location : cur, item : pool[ nth ] };
                } else {
                    return pool[ nth ].drill( seq.slice( 1, seq.length ), cur );
                }
            };
            this.margin = function( another ) {
                var a = ( this.garo - another.garo ) / 2;
                var b = ( this.sero - another.sero ) / 2;
                return press.location( a, b );
            };
        };

        grid.panel = function( garo, sero ) {
            return new Panel( garo, sero );
        };

        grid.stack = function( pool, span ) {
            press.verify( pool.length > 1, 'Insufficient pool.' );
            switch ( span ) {
                case 0: {
                    var t = pool
                        .map( function( t ) {
                            return t.garo;
                        } )
                        .reduce( add, 0 );
                    var p = grid.panel( t, pool[ 0 ].sero );
                    p.host( pool, span );
                    return p;
                }
                case 1: {
                    var t = pool
                        .map( function( t ) {
                            return t.sero;
                        } )
                        .reduce( add, 0 );
                    var p = grid.panel( pool[ 0 ].garo, t );
                    p.host( pool, span );
                    return p;
                }
            }
        };
    } )( press.grid = press.grid || {} );
} )( global.press = global.press || {} );

exports.press = press;
