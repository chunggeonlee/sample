( function( press, undefined ) {
    ( function( style, undefined ) {
        var Spec = function() {};

        Spec.prototype.add = function( part ) {
            press.append( part, this );
            return this;
        };

        Spec.prototype.place = function( x, y, slide = false ) {
            if ( press.defined( slide ) && slide ) {
                return this.add( {
                    top : press.topx( y ),
                    left : '50%',
                    marginLeft : press.topx( x ) 
                } );
            } else {
                return this.add( { top : press.topx( y ), left : press.topx( x ) } );
            }
        };

        Spec.prototype.block = function( w, h ) {
            return this.add( { width : press.topx( w ), height : press.topx( h ) } );
        };

        Spec.prototype.corner = function( w, h ) {
            return this.place( 0, 0 ).block( w, h );
        };

        Spec.prototype.whole = function() {
            return this.place( 0, 0 ).block( '100%', '120%' );
        };

        Spec.prototype.rank = function( z ) {
            return this.add( { zIndex : z } );
        };

        Spec.prototype.font = function( size, color, weight = 1 ) {
            return this.add( {
                fontSize : press.topx( size ),
                color : color,
                fontFamily : ( function( w ) {
                    switch ( w ) {
                    case 0:
                        return 'GothamLight';
                    case 1:
                        return 'GothamBook';
                    case 2:
                        return 'GothamMedium';
                    case 3:
                        return 'GothamBold';
                    default:
                        return 'GothamBook';
                    }
                } )( weight ) 
            } );
        };

        Spec.prototype.fontbase = function( size, color, name ) {
            return this.add( {
                fontSize: press.topx( size ),
                color: color,
                fontFamily: name
            } );
        }

        Spec.prototype.tabular = function() {
            return this.add( {
                fontVariant: 'tabular-nums'
            } );
        }

        Spec.prototype.align = function( pivot, height ) {
            var h = '100%';
            if ( press.defined( height ) ) {
                h = height;
            }
            return this.add( { textAlign : pivot, lineHeight : press.topx( h ) } );
        };

        Spec.prototype.pack = function( d ) {
            return this.add( { display : d } );
        };

        Spec.prototype.back = function( color ) {
            return this.add( { backgroundColor : color } );
        };

        Spec.prototype.mist = function( op ) {
            return this.add( { opacity : op } );
        };

        Spec.prototype.tint = function( alpha ) {
            return this.add( { backgroundColor : press.color.mono( 0, alpha ) } );
        };

        Spec.prototype.clear = function( a ) {
            return this.add( { backgroundColor : press.color.mono( 255, a || 0 ) } );
        };

        Spec.prototype.edge = function( width, color, place ) {
            if ( press.defined( place ) ) {
                var s = 'border' + press.numo.place.tag( place );
                this[ s + 'Width' ] = press.topx( width );
                this[ s + 'Color' ] = color;
                this[ s + 'Style' ] = 'solid';
                return this;
            } else {
                return this.add( {
                    borderWidth : press.topx( width ),
                    borderColor : color,
                    borderStyle : 'solid' 
                } );
            }
        };

        Spec.prototype.underline = function( width, color ) {
            var s = 'border' + press.numo.place.tag( press.numo.place.BOTTOM );
            this[ s + 'Width' ] = press.topx( width );
            this[ s + 'Color' ] = color;
            this[ s + 'Style' ] = 'solid';
            return this;
        };

        Spec.prototype.skyline = function( width, color ) {
            var s = 'border' + press.numo.place.tag( press.numo.place.TOP );
            this[ s + 'Width' ] = press.topx( width );
            this[ s + 'Color' ] = color;
            this[ s + 'Style' ] = 'solid';
            return this;
        };

        Spec.prototype.floating = function( place ) {
            this[ 'float' ] = press.numo.place.tag( place );
            return this;
        };

        Spec.prototype.addCircle = function( width ) {
            return this.add( {
                WebkitBorderRadius : press.topx( width ),
                MozBorderRadius : press.topx( width ),
                borderRadius : press.topx( width ) 
            } );
        };

        Spec.prototype.gap = function( size, place ) {
            if ( press.defined( place ) ) {
                this[ 'margin' + press.numo.place.tag( place ) ] = press.topx( size );
                return this;
            } else {
                return this.add( { margin : press.topx( size ) } );
            }
        };

        Spec.prototype.addBoxShadow = function( x, y, blur, spread, color ) {
            var s = [ press.topx( x ), press.topx( y ), press.topx( blur ), press.topx( spread ) ];
            var t = s.join( ' ' ) + ' ' + color;
            if ( this.hasOwnProperty( 'boxShadow' ) ) {
                this[ 'boxShadow' ] = this[ 'boxShadow' ] + ', ' + t;
                return this;
            } else {
                return this.add( { boxShadow : t } );
            }
        };

        Spec.prototype.pad = function( t, l, b, r ) {
            return this.add( {
                paddingTop : press.topx( t ),
                paddingLeft : press.topx( l ),
                paddingBottom : press.topx( b ),
                paddingRight : press.topx( r ) 
            } );
        };

        Spec.prototype.lift = function( h ) {
            return this.add( {
                transform : 'translateY(-' + press.topx( h ) + ')' 
            } );
        };

        Spec.prototype.drop = function( h ) {
            return this.add( { transform : 'translateY(' + press.topx( h ) + ')' } );
        };

        Spec.prototype.noSpill = function() {
            return this.add( { overflow : 'hidden' } );
        };

        Spec.prototype.noWrap = function() {
            return this.add( { whiteSpace: 'nowrap' } );
        };

        Spec.prototype.set = function( p ) {
            switch ( p ) {
            case 0:
                return this.add( { position : 'absolute' } );
            case 1:
                return this.add( { position : 'fixed' } );
            case 2:
                return this.add( { position : 'relative' } );
            default:
                return this;
            }
        };

        Spec.prototype.logo = function( w = 'white' ) {
            this.backgroundImage = 'url(static/img/logo-' + w + '.svg)';
            this.backgroundRepeat = 'no-repeat';
            this.overflow = 'hidden';
            return this;
        };

        style.spec = function( a ) {
            var s = new Spec();
            if ( press.defined( a ) ) {
                s.add( a );
            }
            return s;
        };

        let topology = press.numo.topology;

        style.absolute = function() {
            return style.spec().set( topology.ABSOLUTE );
        };

        style.relative = function() {
            return style.spec().set( topology.RELATIVE );
        };

        style.fixed = function() {
            return style.spec().set( topology.FIXED );
        };

        style.modal = function( x, y, z, w, h ) {
            return style
                .absolute()
                .place( x, y, true )
                .rank( z )
                .block( w, h )
                .back( press.color.grey( 0 ) )
                .addBoxShadow( 2, 2, 2, 1, press.color.mono( 0, 0.32 ) );
        };

        style.poster = function( z, w, h, color ) {
            return style
                .absolute()
                .corner( w, h )
                .rank( z )
                .back( color );
        };

        style.board = function( z, color ) {
            return style
                .fixed()
                .whole()
                .noSpill()
                .rank( z )
                .back( color );
        };

        style.frame = function( z, w, h ) {
            return style
                .absolute()
                .corner( w, h )
                .rank( z )
                .clear();
        };

        style.screen = function( z, color ) {
            return style
                .fixed()
                .whole()
                .rank( z )
                .back( color );
        };

        style.blur = function( z ) {
            return style
                .absolute()
                .whole()
                .rank( z )
                .clear();
        };

        style.font = function( size, color, weight ) {
            return style.spec().font( size, color, weight );
        };

        style.text = function( align, height ) {
            return style.spec().align( align, height );
        };

        style.formBase = function() {
            return style.spec( {
                border : 0,
                borderRadius : 0,
                outline : 'none' 
            } );
        };

        style.linkBase = function() {
            return style.spec( {
                whiteSpace : 'nowrap',
                textDecoration : 'none',
                outline : 'none' 
            } );
        };

        style.docker = function( x, y, w, h ) {
            return style
                .absolute()
                .place( x, y )
                .block( w, h );
        };

        style.slider = function( x, y, w, h ) {
            return style
                .absolute()
                .place( x - w / 2, y, true )
                .block( w, h );
        };

        style.winder = function( x, y, w, h ) {
            return style
                .fixed()
                .place( x - w / 2, y, true )
                .block( w, h );
        };

        style.glider = function( x, y, w, h ) {
            return style
                .fixed()
                .place( x, y, false )
                .block( w, h );
        };
    } )( press.style = press.style || {} )
} )( global.press = global.press || {} )

exports.press = press;
