import { press } from '../../../lib/press.js'
import { Star } from './page/star'
import * as th from './theme'
import * as mt from './resource/material.js'
import * as ex from './resource/extern.js'


class Stage extends React.Component {

    constructor( p ){
        super( p )
        this.state = { grid : mister.theme.base( true ), page : 1, subc : '' };
        this.rotate = this.rotate.bind( this );
        this.step = this.step.bind( this );
    }
    step( v ){
        this.setState({
            page : 0,
            subc : v
        })
    }

    rotate(){
        this.setState({
            grid : mister.theme.base( true )
        })
    }
    
    componentWillMount() {
        
        let c = 'orientationchange' in window;
        let t = c ? 'orientationchange' : 'resize';
        window.addEventListener( t, this.rotate );
        window.location.hash = '/facade';
    }

    componentWillUnmount(){     
        let c = 'orientationchange' in window;
        let t = c ? 'orientationchange' : 'resize';
        window.removeEventListener( t, this.rotate )
    }
    render(){
        
        let g = this.state.grid;
        let cont = [ <Star key={ 'intr'} step = { this.step }/> ];
        
        return <div key = 'mister-wrap' style = { g.wrap( ) } >
            <div key = 'mister-stage-page' style={ { overflowX:'hidden', overflowY:'hidden'} } >
                { cont }   
            </div>
        </div>
    }
}

exports.Stage = Stage


