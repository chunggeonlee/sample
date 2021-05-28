( function( fr19a, undefined ) {

    class Control extends React.Component {
        constructor( props  ) {
            super( props );
        }
        render() {
            let prop = {
                device: this.props.device,
                phase: 0
            }
            let comp = [];
            switch ( this.props.target ) {
            case 'fr19a':
                prop.report = this.props.report;
                comp.push( <fr19a.Base key={ 'fr19a-base' } { ...prop }/> );
                break;
            case 'fr19a/intr':
                prop.page = '01';
                prop.phase = 0;
                comp.push( <fr19a.Intr key={ 'fr19a-intr' } { ...prop }/> );
                break;
            case 'fr19a/bana':
                prop.page = '02';
                comp.push( <fr19a.Bana key={ 'fr19a-bana' } { ...prop }/> );
                break;
            case 'fr19a/serv':
                prop.page = '03';
                comp.push( <fr19a.Serv key={ 'fr19a-serv' } { ...prop }/> );
                break;
            case 'fr19a/stra':
                prop.page = '04';
                comp.push( <fr19a.Stra key={ 'fr19a-stra' } { ...prop }/> );
                break;
            case 'fr19a/inte':
                prop.page = '05';
                comp.push( <fr19a.Inte key={ 'fr19a-inte' } { ...prop }/> );
                break;
            case 'fr19a/plan':
                prop.page = '06';
                comp.push( <fr19a.Plan key={ 'fr19a-plan' } { ...prop }/> );
                break;
            case 'fr19a/fund':
                prop.page = '07';
                comp.push( <fr19a.Fund key={ 'fr19a-fund' } { ...prop }/> );
                break;
            default:
                break;
            };
            return comp;
        }
    }

    fr19a.Control = Control;

} )( global.fr19a = global.fr19a || {} )

exports.fr19a = fr19a;
