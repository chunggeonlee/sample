( function( fr19a, undefined ) {

    class Inte extends React.Component {
        constructor( props ) {
            super( props );
        }
        render() {
            let pltt = press.palette();
            let comp = [];
            let back = press.style.board( 0, pltt.white );
            return (
                <div style={ back }>
                    { comp }
                </div>
            );
        }
    }

    fr19a.Inte = Inte;

} )( global.fr19a = global.fr19a || {} )

exports.fr19a = fr19a;
