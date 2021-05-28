( function( fr19c, undefined ) {

    class Control extends React.Component {
        constructor( props  ) {
            super( props );
            this.refb = React.createRef();
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let comp = [];
            let base = press.style.board( 0, pltt.white );
            comp.push( <div key={ 'base' } style={ base }/> );
            let prop = {
                device: devi
            }
            comp.push( <fr19c.Cover  key={ 'covi' } { ...prop }/> );
            comp.push( <fr19c.RefOne key={ 'ref1' } { ...prop }/> );
            comp.push( <fr19c.RefTwo key={ 'ref2' } { ...prop }/> );
            comp.push( <fr19c.ActOne key={ 'act1' } { ...prop }/> );
            comp.push( <fr19c.ActTwo key={ 'act2' } { ...prop }/> );
            comp.push( <fr19c.ActTre key={ 'act3' } { ...prop }/> );
            comp.push( <fr19c.STPOne key={ 'stp1' } { ...prop }/> );
            comp.push( <fr19c.STPTwo key={ 'stp2' } { ...prop }/> );
            comp.push( <fr19c.BusOne key={ 'bus1' } { ...prop }/> );
            comp.push( <fr19c.BusTwo key={ 'bus2' } { ...prop }/> );
            comp.push( <fr19c.SolOne key={ 'sol1' } { ...prop }/> );
            comp.push( <fr19c.SolTwo key={ 'sol2' } { ...prop }/> );
            comp.push( <fr19c.TabOne key={ 'tab1' } { ...prop }/> );
            comp.push( <fr19c.TabTwo key={ 'tab2' } { ...prop }/> );

            let blnd = press.style.docker( 0, 0, '100%', '100%' ).clear( 0 );
            comp.push( <div key={ 'blnd' } style={ blnd }/> );

            let nclp = 14;
            let size = nclp * fr19c.grid.basis( devi );
            let back = press.style.docker( 0, 0, '100%', size );
            return <div ref={ this.refb } style={ back }>{ comp }</div>;
        }
    }

    fr19c.Control = Control;

} )( global.fr19c = global.fr19c || {} )

exports.fr19c = fr19c;
