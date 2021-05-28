import { Deco } from './deco'
import { Login } from '../../item/login'

class ColorCode {
    constructor(){
        this.grid = {
            fullstop : '#c0392b',
            lucia : '#ff0000',
            blingfire : '#9b59b6', 
            stanza : '#29b0b9',
            pysbd :  '#e67e22',
            flair : '#27ae60',
            spacy : '#333a98',
            highlight : '#eeee11',
            annotation : '#cca300'
            
        }
    }
}
class Star extends React.Component {

    constructor( props ){
        super( props );
        this.text_norm = 'NFKD'
        this.deco = new Deco();
        this.colr = new ColorCode()[ 'grid'];
        this.tr = {};
        this._init_ = this._init_.bind( this );
        this.user = mister.userlogger.logger();
        this.leave = this.leave.bind( this );
        this.hole = this.hole.bind( this );
        this.factory_text = this.factory_text.bind( this );
        this.page_hole = this.page_hole.bind( this );
        this.receive = this.receive.bind( this );
        this.lexco = this.lexco.bind( this );
        this.cancel = this.cancel.bind( this );
        this.rotate = this.rotate.bind( this );        
        this.login = this.login.bind( this );
        this.commt = this.commt.bind( this );
        this.rtree = this.rtree.bind( this );
        this.scrum = this.scrum.bind( this );
        this.drfto = this.drfto.bind( this );
        this.reflex = this.reflex.bind( this );
        this.spred = this.spred.bind( this );
        this.toggl = this.toggl.bind( this );
        this.succ = this.succ.bind( this );
        this.anim_pop = this.anim_pop.bind( this )
        this.change_text = this.change_text.bind( this );
        this.change_lnk = this.change_lnk.bind( this );
        this.change_target = this.change_target.bind( this );
        this.change_text_mode = this.change_text_mode.bind( this )
        this.state = {
            tree : {},
            ...this._init_()
        }

        this.rec = {}
    }

    _init_(){

        this._input_text = '';
        this._input_append = '';
        this._input_added = '';
        this._select_flag = 0;
        this._edit_text = '';
        this._timer = ''
        return {
            mode : 'create',
            text_mode : 'input',
            block : [],
            login : this.user.get()[ 'tier'] != -1,
            text : '',
            lnk : '',
            target :'turnpike',
            uidx : -1,
            tidx : -1,
            data : undefined,
            scrm : [],      
            togg : {
            },
            pivot : {},
            added : [],
            deep : [],
            span : []
        }
    }
    handler_opt( v ){
        let w = v;
        if( this.state.opt & v == v ){
            w = this.state.opt - v
        } else{
            w += this.state.opt
        }
        this.setState({
            opt : w
        })
    }
    cancel(){
        this.setState( this._init_() )
    }
    drfto( v, w ){
        if( this.state.tree[ v ] ){
            this._input_text = this.state.tree[ v ][ 'text']
            this.lexco( this.state.tree[ v ][ 'text'] )

            this.setState({
                deep : [],
                span : [],
                block : [],
                text_mode : 'output',
                uidx : v,
                widx : w
            })
        }        
    }
    anim_pop( n ){
        if( this.state.midx == 0){
            clearInterval( this.timer )
            this.timer = setTimeout( ()=>{
                
                this.setState({
                    midx : -1
                })
                clearTimeout( this.timer )
            }, 5000 );

        } else {
            this.setState( {
                midx : this.state.midx < 0 ? 100 : this.state.midx - 5
            })       
        }        
    }

    succ(){
        let x = mister.resource.extern.hub().get('letter')
        this.setState({
            port : x[ 'msg'],
            oort : 0
        })
        this.timer = window.setInterval(  this.anim_pop, 1 )
    }

    change_text( v, m ){
        this._input_text = v
        this.setState({
            re : true
        })
    }

    change_value( n, v , o){
        this._input_added = '';
        if( n == 'pivot'){
        let { accept, reject } = this.state[ n ][ this.state.target ];

        if( o && accept.indexOf( v ) != -1 || o == false && reject.indexOf( v ) != -1 )return

        if( o ){
            reject.splice( reject.indexOf( v ), 1 )
            accept.push( v )
        }
        else{
            accept.splice( accept.indexOf( v ), 1 )
            reject.push( v )
        }
        

        accept.sort( function( a, b ){ return a>b? 1 : a<b? -1 : 0})
        reject.sort( function( a, b ){ return a>b? 1 : a<b? -1 : 0})

        this.setState({
            [ n ] : {
                ...this.state[ n ],
                [ this.state.target ] : {
                    accept : accept,
                    reject : reject
                }
            }
        })}
        else{
            
            let w = [ ...this.state[ n ] ]
            if( o && w.indexOf( v ) == -1 ){                
                w.push( v )
            }
            else if( o == false && w.indexOf( v ) != -1 ){
                w.splice( w.indexOf( v ), 1 )
            }
            else{
                return
            }
            this.setState({
                [ n ] : w
            })
        }
    }
    toggl( n ){
        if( this.state.text_mode == 'input') return
        this.setState({
            togg : {
                ...this.state.togg,
                [ n ] : this.state.togg[ n ] == undefined ? true : !this.state.togg[ n ]
            }
        })
    }
    spred( v, w ){
        let x = this.state.tree[ v ][ w ];
        this._input_text = x[ 'text' ].normalize(  this.text_norm );
        this.setState({
            tidx : w,
            text_mode:'output',
            mode :'edit',
            text : x[ 'text' ].normalize(  this.text_norm ),
            timestamp : x[ 'timestamp'],
            data : x[ 'opaque' ][ 'lucia' ],
            apps : x[ 'opaque' ][ 'apps'],
            lnk  : x[ 'link'],            
            ...x[ 'record']
        })
    }
    change_lnk( v ){
        this.setState({
            lnk : v
        })
    }
    change_target( v ){
        this.setState({
            target: v 
        })
    }

    scrum( v ){
        let w = this.state.scrm;
        w.indexOf( v ) == -1 ? w.push( v ) : w.splice( w.indexOf( v ), 1 )
        this.setState({
            scrm : w
        })
    }
    rtree(){

        const tier = this.user.get()[ 'tier' ];
        let u = mister.resource.extern.hub().get( tier == 3 ? 'draft' : 'tree' );
        this.setState({
            tree : u[ 'tree'],
            fake : u[ 'fake']
        })
    }
    commt(){
        if( this.state.text_mode !='output' ) return;

        let d = new Date();
        let t = '';

        [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours() , d.getMinutes(),d.getSeconds()].map( v => t += ( v.toString().length == 1 ? ( '0' + v.toString() ) : v.toString() ) )
        
        if( this.state.text == '' || this.state.lnk == '' ){
            this.setState({
                port :'Error Message : Check text or link',
                oort : 1
            })
            this.timer = window.setInterval(  this.anim_pop, 1 )
            return;
        }

        let ts = [];
        
        if( this.state.mode =='create'){
            ts = [ t ]
        } else{
            let k = [ ...this.state.timestamp ]
            k.push( t )
            ts = k
        }
        let obj = {
            category : this._select_category,
            text : this.state.text.normalize( this.text_norm ),
            record : {
                pivot : this.state.pivot,
                added : this.state.added
            },
            author : this.user.get()[ 'nid' ],
            link : this.state.lnk,
            
            timestamp : ts,
            opaque : { 
                lucia : this.state.data,
                apps : this.state.apps
            }
        }

        mister.resource.extern.hub().call( 'letter', { code : "letter", mode : this.state.mode, data : obj,name : this.state.tidx, } );
        mister.resource.extern.hub().call( 'tree', { code : 'tree', author: this.user.get()[ 'nid' ]} );

        if( this.state.mode == 'edit'){
            this.cancel()
        }
    }
    
    receive(){
        let uw = mister.resource.extern.hub().get( 'lexco' );
        let r = {}
        
        let u = uw['lucia'];
        if( u == undefined ) return;
        Object.keys( u ).map( v => {
            r[ v ] = { accept : [], reject: []}
            u[ v ].map( n  => {
                r[ v ][ 'accept' ].push( n )
            })
        })
        
        this.setState( {
            data : u,
            text : this._input_text.normalize( this.text_norm ),
            apps : uw['apps'],
            pivot : r
        })
    }
    lexco( t ){
        mister.resource.extern.hub().call( 'lexco', { code : "lexco", text : t.normalize( this.text_norm )} );
        
    }
    login( id_, tier_ ){
        this.user.set( id_, tier_ )
        this.setState({
            login : true
        })
        mister.resource.extern.hub().call( tier_ == 3 ? 'draft': 'tree', { code : tier_ == 3 ? 'draft': 'tree', author: this.user.get()[ 'nid' ]} );
        
    }
    rotate(){
        this.deco = new Deco();
        this.setState({
            re : true
        })
    }
    componentWillMount(){        
        window.addEventListener( 'orientationchange' in window ? 'orientationchange' : 'resize', this.rotate );
        window.addEventListener( 'relexco:future', this.receive );
        window.addEventListener( 'reletter:future', this.succ );
        window.addEventListener( 'retree:future', this.rtree );
        window.addEventListener( 'redraft:future', this.rtree );
        mister.resource.extern.hub().call( 'tree', { code : 'tree', author: this.user.get()[ 'nid' ]} )
    }

    componentWillUnmount(){
        window.removeEventListener( 'orientationchange' in window ? 'orientationchange' : 'resize', this.rotate );
        window.removeEventListener( 'relexco:future', this.receive );
        window.removeEventListener( 'reletter:future', this.succ );
        window.removeEventListener( 'retree:future', this.rtree );
        window.removeEventListener( 'redraft:future', this.rtree );
        
    }   

    factory_text(){
        let pack = [];
        let text_set = this.state.text.split( '' );
        let block_index = this.state.block
        let covr = [];

        if( block_index.length ){
            covr = block_index[ block_index.length - 1 ];
        }
        
        let res_text = [];
        let bnd = 0;
        let end = 0;
        text_set.map( (ch, i) => {
            let c = ch;
            let toggle = [];
            if( ch == '\n' || ch == '\r' ){
                c = <br />;
            }
            res_text.push( c );

            if( this.state.togg[ this.state.target ] && this.state.data[ this.state.target ].indexOf( i ) != -1  ){
                toggle.push( this.colr[ 'lucia' ] )
            }
            Object.keys( this.state.apps ).map( k => {
                if( this.state.togg[ k ] && this.state.apps[ k ].indexOf( i ) != -1  ){
                    toggle.push( this.colr[ k ] )    
                }   
            })
            toggle.map( ( o, j ) => { 
                if( covr.length ) {
                    if ( i < covr[ 0 ] ){
                        bnd += 1
                    }
                    if( i <= covr[ 1 ]  ){
                        end += 1
                    }
                }
                res_text.push( <font key={ 'just-font' + i + ':' + j}><svg key={ 'svg-wrapper:' + j } style={{ position:'relative', top: 5,left :0 }} height={15} width={8}> <path stroke={ o } strokeWidth={ 4 } strokeLinecap={ 'round'} d="M 2 10 L5 3" ></path></svg></font>)
            })
        })
        
        if( covr.length ){
            pack.push( res_text.slice( 0, covr[ 0 ] + bnd ) )
            pack.push( <span key={'idendier' + covr[ 0 ] + covr[ 1 ]} style={{backgroundColor:'#ffe768'}}>{res_text.slice( covr[ 0 ] + bnd , covr[ 1 ] + end  ) }</span>  )
            pack.push( res_text.slice(  covr[ 1 ] + end  ) )
        } else {
            pack.push( res_text )
        }

        return pack;
    }

    change_text_mode( v ){
        if( this.state.text_mode != v ){
            this.setState({
                text_mode : v,
                uidx : null
            })
            if( v == 'output'){
                this.lexco( this._input_text  )
            }
        }        
    }
    page_opt(){
        let pack = [];
        let nkey = 'opt-node:';
        let deco = this.deco.opt();

        pack.push(<div key={ nkey + pack.length } style={ deco.row( 0 )}> Mode </div>)
        pack.push(<div key={ nkey + pack.length } style={ deco.row( 1 )} onClick={ ()=>this.handler_opt( 1 )}> Split to Sentence </div>)
        pack.push(<div key={ nkey + pack.length } style={ deco.row( 2 )} onClick={ ()=>this.handler_opt( 2 )}> Show Index </div>)
        pack.push(<div key={ nkey + pack.length } style={ deco.row( 3 )} onClick={ ()=>{
            var textarea = document.createElement('textarea');
            textarea.value = this.state.data[ this.state.target ];
          
            document.body.appendChild(textarea);
            textarea.select();
            textarea.setSelectionRange(0, 9999);  // 추가
          
            document.execCommand('copy');
            document.body.removeChild(textarea);
          } }> Clip Index </div>)

        return <div key={ 'opt-wrapper' } style={ deco.wrap().add({ boxShadow: '3px 3px 11px #c9c9c9'}) }>{ pack }</div>
    }


    page_stat(){
        
        let pack = [];
        let nkey = 'stat-node:';
        let bsup = this.user.get()[ 'tier' ] != '3';
        let deco = this.deco.stat();
        if( bsup ){
            pack.push( <div key={ nkey + pack.length } style={ deco.titl()}> { this.state.mode == 'edit'? 'Edit' : 'Create'} </div>)
        }
        else{
            pack.push( <div key={ nkey + pack.length } style={ deco.titl()}> Lucia Demo </div>)
        }
        pack.push( <div key={ nkey + pack.length } style={ deco.tail( 0, bsup && this.state.text_mode=='output' )} onClick={ this.commt }> { this.state.mode == 'create' ? 'Commit' : 'Save' } </div>)
        pack.push( <div key={ nkey + pack.length } style={ deco.tail( 1, bsup )} onClick={ this.cancel }> { this.state.mode == 'create' ? 'Clear' : 'Cancel' } </div>)
        
        if( bsup ){
            pack.push( <input key={ nkey + pack.length } style={ deco.inpt()} placeholder={ 'input document url' } value={ this.state.lnk} onChange={ (e) => this.change_lnk( e.target.value ) } />)
        }
        else{
            if( this.state.uidx > 0 && this.state.tree[ this.state.uidx ] ){
                pack.push( <input key={ nkey + pack.length } style={ deco.inpt()} placeholder={ 'input document url'} value={ this.state.tree[ this.state.uidx ][ 'meta'][ 'url'] } onChange={ (e) => this.change_lnk( e.target.value ) } />)
            }
        }
        
        
        return <div key={ 'stat-wrapper' } style={ deco.wrap() }>{pack}</div>
    }
    page_main(){
        let pack = [];
        let g = this.deco.main();
        let nkey = 'main-node:'
        
        pack.push( <div key={ nkey + pack.length } style={ g.tagh( 0, this.state.text_mode == 'input' )} onClick={ ()=> this.change_text_mode('input')}> Input </div>)
        pack.push( <div key={ nkey + pack.length } style={ g.tagh( 1, this.state.text_mode == 'output' )} onClick={ ()=> this.change_text_mode('output')}> Output </div>)
        if( this.state.apps ){
            pack.push( <div key={ nkey + pack.length } style={ g.tage( 0, this.colr[ 'lucia' ], this.state.togg[ this.state.target ],this.state.text_mode == 'output' ) } onClick={ ()=>this.toggl( this.state.target )} >Lucia </div> )
            Object.keys( this.state.apps ).map( ( v, i) => {
                pack.push( <div key={ nkey + pack.length } style={ g.tage( 1 + i, this.colr[ v ], this.state.togg[ v ], this.state.text_mode == 'output' ) } onClick={ ()=>this.toggl( v )} >{ v[ 0 ].toUpperCase() + v.slice( 1,) }</div> )    
            })
        }
        this.state.text_mode == 'input'  && pack.push( <textarea key={ nkey + pack.length } style={ g.text( this.state.text_mode ) } onChange={ ( v ) => this.change_text( v.target.value ) } value={ this._input_text } ></textarea> )
        this.state.text_mode == 'output' && pack.push( <div key={ nkey + pack.length } style={ g.text( this.state.text_mode )  } >{ this.factory_text() }</div> )
        
        return pack
    }
    page_tree( mode ){
        let g = this.deco.tree();
        let nkey = 'tree-node:'
        let tree = [];
        let leaf = [];
        let o = this.state.tree;
        if( o == undefined ) return;

        let ar = Object.keys( o );
        tree.push(<div key={ nkey + tree.length } style={ g.head }> { mode == 'h' ? 'History' : 'Draft' } </div>)
        
        ar.map( ( v, i ) =>{

            if( mode == 'h'){
                tree.push( <div key={ nkey + tree.length } onClick={()=>this.scrum( v )} style={ g.stem( false )}>{ v }</div>)
                if( this.state.scrm.indexOf( v ) != -1 ){
                    let ts = Object.keys( o[ v ] );
                    ts.sort( function( a,b ) { return a > b ? 1: a<b? -1 : 0})
                    ts.map( w => {
                        tree.push( <div key={ nkey + tree.length } style={ g.leaf( this.state.tidx == w )} onClick={ ()=> this.spred( v, w )}>{ w }</div>)
                    })
                }
            } else {
                let tr = []
                this.state.fake && Object.keys( this.state.fake[ v ]).map( ( k ) => {

                    if( this.state.togg[ k ] && this.state.fake[ v ][ k ] == 0){
                        tr.push( <svg style={{ position:'absolute' , left : 40 + tr.length * 15, top: 0}}>
                        <circle cx="10" cy="5" r="3" fill={ this.colr[ k ]}/>
                      </svg> )
                    }
                })

                tree.push( <div key={ nkey + tree.length } onClick={()=>this.drfto( v , i ) } style={ g.stem( i == this.state.widx )}>{ v }{ tr }</div>)            
            }
        })
        return <div key={ 'tree-wrapper' } style={ this.deco.tree().wrap} >{ tree } </div>
    }
    pop(){
        return <div key={ 'popup' } style={ this.deco.popup().wrap( this.state.midx,this.state.oort )}>{ this.state.port}</div>
    }
    reflex( v ,depth, ar, row ){
        let x;
        if( ar[ 'child'] && ar[ 'child'].length != 0 ){
            x = [];

            if( this.state.deep.length > depth ) {
                x = [ ...this.state.deep ].slice( 0, depth );
                if( this.state.deep[ depth ] != v  ){
                    x.push( v )
                }
            }
            else{         
                x = [ ...this.state.deep ].slice( 0, depth );
                x.push( v )
            }
        } else {
            x = [ ...this.state.deep ]
        }
        let u = mister.resource.extern.hub().get( 'lexco' )
        if( !u ) return;
        let uw = u[ 'split' ];        
        let deep = this.state.deep.slice( 0, depth );
        let p = [];

        let s = uw.slice( 0, uw.length )
        for( var i = 0; i < deep.length ; i ++ ){
            let o = s[ deep[ i ]]
            p.push( o.span )
            s = o['child']
        }

        p.push( s[ row ].span )
        this.setState({
            deep : x,
            block : p
        })
    }
    hole( ar, cnt = 0, deco, p ){
        if( ar == undefined ) return
        for( var i = 0; i < ar.length; i++ ){
            let t = i;
            let r = [];

            if( ar[ i ][ 'child' ].length ){
                let c = '';

                if( cnt < this.state.deep.length && this.state.deep[ cnt ] == i ){
                    c = 'v'
                } else {                    
                    c = ">"                    
                }

                r.push( <div key={ 'cell-hotkey' + p.length } style={ deco.cell( 0, cnt )}>
                      { c }
                </div>)
            } else {
                r.push( <div key={ 'cell-hotkey' + p.length } style={ deco.cell( 0, cnt )}>
                      •
                </div>)
            }

            r.push(
                <div key={ 'cell-text' + p.length } style={ deco.cell( 1, cnt )}>
                { ar[ i ][ 'text'] }                
                </div>
            )
            const tx = i;
            const ux = ar[ i ]
            p.push( <div key={ p.length } style={ deco.rows( p.length, cnt )} onClick ={  ()=>this.reflex( t , cnt, ux, tx  )  }>{ r } </div> )
            if( this.state.deep && this.state.deep.length > cnt && this.state.deep[ cnt ] == i && ar[ i ] && ar[ i ][ 'child' ].length ){
                this.hole( ar[ i ][ 'child' ], cnt + 1, deco, p )
            }
        }

        return p
    }

    leave(){
        this.setState({
            block : []
        })
    }

    page_hole(){
        let pack = [];
        let u = mister.resource.extern.hub().get( 'lexco' )
        if( !u ) return;
        let g = this.deco.hole();
        let uw = u[ 'split' ];
        let x = [];
        pack.push( this.hole( uw, 0, g, x ) )

        return <div key={'.f..'} style={ g.wrap } onMouseLeave={ this.leave }> { pack }</div>
    }

    render(){
        const tier = this.user.get()[ 'tier' ];
        this.deco = new Deco( true );
        let pack = [];
        let body = [];
        let side = [];       

        if( tier == -1 ){
            return <Login key={ 'login-modal' } deco={ this.deco.modal().login } action={ this.login } />
        }        

        body.push( this.page_stat())
        body.push( this.page_main())    
        body.push( this.page_hole())
        side.push( this.page_tree( tier == 3 ? 'd' : 'h' ) )
        
        pack.push( <div key={ 'body-wrapper' } style={ this.deco.body().wrap } >{ body  } </div>)
        pack.push( <div key={ 'side-wrapper' } style={ this.deco.side().wrap }> { side } </div>)
        if( this.state.midx >= 0)
            pack.push( this.pop())

        return <div key={ 'star-wrapper' } style={ this.deco.wrap() }>
            { pack }
        </div>
    }
}

exports.Star = Star
