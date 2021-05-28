( function( fr19a, undefined ) {

    class Serv extends React.Component {
        constructor( props ) {
            super( props );
        }
        render() {
            let pltt = press.palette();
            let comp = [];
            let back = press.style.board( 0, pltt.black );
            let face = fr19a.grid.core( this.props.device );
            return (
                <div style={ back }>
                <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    fr19a.Serv = Serv;

} )( global.fr19a = global.fr19a || {} )

exports.fr19a = fr19a;
