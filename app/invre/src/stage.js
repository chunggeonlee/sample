import { press } from '../../../lib/press.js'
import { fr19a } from './fr19a/material.js'
import { fr19b } from './fr19b/material.js'
import { fr19c } from './fr19c/material.js'
import { extern } from './extern/video.js'
import { Facade } from './facade.js'


class Stage extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { orientation : props.orientation, page : 'facade' };
        this.rotate = this.rotate.bind( this );
        this.layout = this.layout.bind( this );
        this.follow = this.follow.bind( this );
    }
    rotate() {
        this.setState( ( state ) => {
            return {
                orientation : state.orientation * -1,
                page : state.page
            }
        } );
    }
    layout( n ) {

        window.location.hash = '/' + n;

        this.setState( ( state ) => {
            return {
                orientation : state.orientation,
                page : n 
            }
        } );
    }
    follow() {        
        let n = 'facade';
        if ( window.location.hash.length > 2 ) {
            n = window.location.hash.substr( 2 );
        }
        this.setState( ( state ) => {
            return {
                orientation : state.orientation,
                page : n
            }
        } );
    }
    componentDidMount() {
        let c = 'orientationchange' in window;
        let t = ( c ) ? 'orientationchange' : 'resize';
        window.addEventListener( t, this.rotate );
        window.addEventListener( 'hashchange', this.follow );
        window.location.hash = '/facade';
    }
    render() {
        let devi = new press.Device();
        let prop = { 
            device : devi,
            report : this.layout,
            target : this.state.page,
            orientation : this.state.orientation
        };
        let par = this.state.page.split( '/' );
        let head = par[ 0 ];
        let sub = par.length > 1 ? par[ 1 ] : '';
        let comp = [];

        switch ( head ) {
            case 'ivideo': {
                comp.push( <extern.Video key={ 'video' } {...prop } target = { sub }/> );
                break;
            }
            case 'facade': {
                comp.push( <Facade key={ 'facade' } { ...prop }/> );
                break;
            }
            case 'fr19a': {
                comp.push( <fr19a.Control key={ 'fr19a' } { ...prop }/> );
                break;
            }
            case 'fr19b': {
                comp.push( <fr19b.Control key={ 'fr19b' } { ...prop }/> );
                break;
            }
            case 'fr19c': {
                comp.push( <fr19c.Control key={ 'fr19c' } { ...prop }/> );
                break;
            }
        }
        return comp;
    }
}

exports.Stage = Stage
