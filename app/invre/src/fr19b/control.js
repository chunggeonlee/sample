( function( fr19b, undefined ) {

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
            comp.push( <fr19b.Summary key={ 'exsm' } { ...prop }/> );
            comp.push( <fr19b.Concept key={ 'conc' } { ...prop }/> );
            comp.push( <fr19b.Earning key={ 'earn' } { ...prop }/> );
            comp.push( <fr19b.Product key={ 'prod' } { ...prop }/> );
            comp.push( <fr19b.Service key={ 'serv' } { ...prop }/> );
            comp.push( <fr19b.Finance key={ 'fina' } { ...prop }/> );
            comp.push( <fr19b.Systems key={ 'syst' } { ...prop }/> );
            comp.push( <fr19b.Intelli key={ 'inte' } { ...prop }/> );
            comp.push( <fr19b.Markets key={ 'mart' } { ...prop }/> );
            comp.push( <fr19b.Ourself key={ 'ours' } { ...prop }/> );
            

            let covs = press.style.docker( 0, 0, '100%', '100%' ).clear( 0 );
            comp.push( <div key={ 'covs' } style={ covs }/> );

            let nclp = 10;
            let size = nclp * fr19b.grid.basis( devi );
            let back = press.style.docker( 0, 0, '100%', size );
            return <div ref={ this.refb } style={ back }>{ comp }</div>;
        }
    }

    fr19b.Control = Control;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
