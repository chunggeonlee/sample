( function( fr19a, undefined ) {

    class Plan extends React.Component {
        constructor( props ) {
            super( props );
        }
        render() {
            let pltt = press.palette();
            let comp = [];
            let back = press.style.board( 0, pltt.white );
            return (
                <div style={ back }>
                <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    fr19a.Plan = Plan;

} )( global.fr19a = global.fr19a || {} )

exports.fr19a = fr19a;
