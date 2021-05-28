import React from 'react';

( function( press, undefined ) {
    ( function( button, undefined ) {
        button.Spec = function( name, report, rank, face, scheme, position ) {
            this.name = name;
            this.report = report;
            this.face = face;
            this.scheme = scheme;
            this.style = function( color ) {
                return press.style
                    .absolute()
                    .place( position.x, position.y )
                    .rank( rank );
            };
        };

        button.SpecWord = function( name, report, rank, face, scheme, position, border, size, design ) {
            this.name = name;
            this.report = report;
            this.face = face;
            this.scheme = scheme;
            this.style = function( color ) {
                var s = press.style
                    .linkBase()
                    .add( design )
                    .font( size, color, 1 )
                    .rank( rank );
                if ( border > 0 ) {
                    s.edge( border, color );
                }
                if ( press.defined( position ) ) {
                    s.place( position.x, position.y );
                }
                return s;
            };
        };

        button.SpecMono = function( name, report, rank, face, scheme, position, size ) {
            this.name = name;
            this.report = report;
            this.face = face;
            this.scheme = scheme;
            this.style = function( color ) {
                var w = size * 2;
                return press.style
                    .docker( position.x, position.y, w, w )
                    .rank( this.rank )
                    .pack( 'block' )
                    .add( press.style.linkBase() )
                    .font( this.size, color, 1 )
                    .align( 'center', '200%' );
            };
        };

        class Button extends React.Component {
            constructor( props ) {
                super( props );
                this.state = { beam : false };
                this.highlight = this.highlight.bind( this );
                this.standby = this.standby.bind( this );
                this.passify = this.passify.bind( this );
                this.click = this.click.bind( this );
            }
            highlight( evnt ) {
                this.setState( { beam : true } );
            }
            standby( evnt ) {
                evnt.preventDefault();
                this.setState( { beam : false } );
            }
            passify( evnt ) {
                evnt.preventDefault();
            }
            click( evnt ) {
                evnt.preventDefault();
                this.setState( { beam : false } );
                this.props.report( this.props.name );
            }
            render() {
                var proc = {
                    onMouseOver : this.highlight,
                    onMouseLeave : this.standby,
                    onClick : this.click 
                };
                var cols = this.props.scheme( this.state.beam );
                var mode = this.props.style( cols );
                return (
                    <div id={this.props.name} style={mode} {...proc}>
                        {this.props.face( cols )}
                    </div>
                );
            }
        }

        button.component = function( spec ) {
            return <Button {...spec} />;
        };

        button.plain = function( name, word, color, size, report, rank, beam ) {
            let p = press.palette();
            var face = function( c ) { return word; }
            var scheme = press.color.beamer( beam || p.rose, color );
            var a = size.pad;
            var b = 2 * a;
            var c = size.face;
            var design = press.style
                .absolute()
                .pad( a, b, a, b )
                .align( 'left' )
                .pack( 'block' );
            var spec = new button.SpecWord( name, report, rank, face, scheme, press.location( 0, 0 ), 0, c, design );
            return button.component( spec );
        };

        button.locked = function( name, word, color, size, rank ) {
            var a = size.pad;
            var b = 2 * a;
            var c = size.face;
            var design = press.style
                .absolute()
                .pad( a, b, a, b )
                .align( 'left' )
                .pack( 'block' )
                .font( c, color, 1 );
            return (
                <div key={name} style={design}>
                    {word}
                </div>
            );
        };
    } )( press.button = press.button || {} );
} )( global.press = global.press || {} );

exports.press = press;
