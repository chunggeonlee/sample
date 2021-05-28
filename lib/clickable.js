import React from 'react';

( function( press, undefined ) {
    ( function( clickable, undefined ) {
        class Clicker extends React.Component {
            constructor( props ) {
                super( props );
                this.state = {
                    beam : false 
                };
                this.btouch = false;
                this.highlight = this.highlight.bind( this );
                this.standby = this.standby.bind( this );
                this.passify = this.passify.bind( this );
                this.click = this.click.bind( this );
                this.touchend = this.touchend.bind( this );
                this.presshandler = this.presshandler.bind( this );
            }
            highlight() {
                this.setState( {
                    beam : true 
                } );
            }
            standby( evnt ) {
                evnt.preventDefault();
                this.setState( {
                    beam : false 
                } );
            }
            passify( e ) {
                e.preventDefault();
            }

            presshandler( e ) {
                e.preventDefault();
                this.props.report( this.props.name );
            }
            click( e ) {
                if ( 'ontouchstart' in document.documentElement === true ) {
                    this.presshandler( e );
                } else {
                    this.presshandler( e );
                    this.setState( {
                        beam : false 
                    } );
                }
            }
            touchend( e ) {
                this.standby( e );
            }

            render() {
                let proc = {
                    onMouseOver : this.highlight,
                    onMouseLeave : this.standby,
                    onClick : this.click,
                    onTouchMove : this.passify,
                    onTouchEnd : this.standby 
                };
                let bkey = this.props.name + ':spot';
                let mask = this.props.mask( this.state.beam );
                let face = this.props.face( this.state.beam, this.props.spin );
                let comp = [];
                comp.push( face );
                comp.push( <div key={bkey} id={this.props.name} style={mask} {...proc} /> );
                return comp;
            }
        }

        clickable.component = function( spec ) {
            let name = 'click-' + spec.name;
            return <Clicker key={name} {...spec} />;
        };

        clickable.create = function( name_, face_, mask_, report_, spin_ ) {
            return clickable.component( {
                name : name_,
                face : face_,
                mask : mask_,
                report : report_,
                spin : spin_ || 0 
            } );
        };
    } )( press.clickable = press.clickable || {} );
} )( global.press = global.press || {} );

exports.press = press;
