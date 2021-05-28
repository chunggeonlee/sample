import React from 'react';

( function ( press, undefined ) {
    ( function ( stashable, undefined ) {
        class Stasher extends React.Component {
            constructor ( props ) {
                super( props )
                this.state = { open : props.initopen }
                this.alter = this.alter.bind( this )
            }
            alter ( r_ ) {
                let n = 1 - this.state.open
                this.props.report( this.props.name, n * this.props.component.length )
                this.setState( ( state ) => {
                    return { open : 1 - state.open }
                } )
            }
            render () {
                let comp = []
                if ( this.state.open == 1 ) {
                    for ( let item of this.props.component ) {
                        comp.push( item )
                    }
                }
                comp.push( this.props.clicker( this.alter, 1 - this.state.open ) )
                return comp
            }
        }

        stashable.component = function ( spec ) {
            return <Stasher {...spec} />
        };

        stashable.create = function ( name_, component_, report_, clicker_, open_ ) {
            return stashable.component( {
                name : name_,
                component : component_,
                report : report_,
                clicker : clicker_,
                initopen : open_
            } )
        };
    } )( press.stashable = press.stashable || {} )
} )( global.press = global.press || {} )

exports.press = press
