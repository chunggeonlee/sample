

( function( mister ) {
    ( function( userlogger ) {       
        
        class Logger {
            constructor( p ){
                this.set = this.set.bind( this );
                this.get = this.get.bind( this );
                this._id = '';
                this._tr = -1;
            }
            set( n, r ){
                this._id = n
                this._tr = r
            }
            get(){
                return { 
                    nid : this._id,
                    tier : this._tr
                }
            }
        }
        var _log = undefined;

        userlogger.logger = function(){

            if( _log == undefined) {
                _log = new Logger();
            } 
            return _log
        }

    })( mister.userlogger = mister.userlogger || {})
    
} )( global.mister = global.mister || {} )


class Login extends React.Component {

    constructor( p ){

        super( p );
        this.connect = mister.resource.extern;
        this.click = this.click.bind( this );
        this.user = this.user.bind( this );
        this._input = ''
        this.state = {
            msg : ''
        }
    }

    click(){
        mister.resource.extern.hub().call( 'user', { code : "user", nid : this._input } )
    }

    user(){
        
        const u = mister.resource.extern.hub().get( 'user' );
        if( u[ 'code' ] > 0) {
            this.props.action(  u[ 'nid' ], u[ 'tier'] )
        } else if( u[ 'code' ] == 0) {
            this.setState( {
                msg : 'Confirm your e-mail account'
            })
        }
    }

    componentWillMount(){        
        window.addEventListener( 'reuser:future', this.user );
    }

    componentWillUnmount(){
        window.removeEventListener( 'reuser:future', this.user );
    }

    render(){
        let deco = this.props.deco 
        return <div key={ 'login-modal-wrapper' } style={ deco.wrap } >
            <label key={ 'lgoin-label'} style={ deco.label } >Input Your e-mail account</label>
            <div key={ 'login-input-wrapper' } style={ deco.input.wrap }>
                <input key={ 'login-input' } style={ deco.input.content } onChange={ ( v )=> { this._input = v.target.value } } />
                <button key={ 'login-button' } style={ deco.input.button } onClick={ this.click }> Next </button>
            </div>
            <div key={ 'login-failed-msg' } style={ deco.input.msg }>
                { this.state.msg }
            </div>
        </div>
    }
}

export { Login }