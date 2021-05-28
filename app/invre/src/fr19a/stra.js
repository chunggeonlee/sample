( function( fr19a, undefined ) {

    class Stra extends React.Component {
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

    fr19a.Stra = Stra;

} )( global.fr19a = global.fr19a || {} )

exports.fr19a = fr19a;
