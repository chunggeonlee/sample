( function( fr19a, undefined ) {

    class Bana extends React.Component {
        constructor( props ) {
            super( props );
        }
        render() {
            let pltt = press.palette();
            let comp = [];
            let back = press.style.board( 0, pltt.white );
            let face = fr19a.grid.core( this.props.device );
            return (
                <div style={ back }>
                <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    fr19a.Bana = Bana;

} )( global.fr19a = global.fr19a || {} )

exports.fr19a = fr19a;
