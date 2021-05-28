( function( fr19a, undefined ) {

    class PageNavi extends React.Component {
        constructor( props ) {
            super( props );
            this.state = { beam : false, touching : false };
            this.highlight = this.highlight.bind( this );
            this.standby = this.standby.bind( this );
            this.passify = this.passify.bind( this );
            this.click = this.click.bind( this );
            this.touchstart = this.touchstart.bind( this );
            this.touchend = this.touchend.bind( this );
            this.presshandler = this.presshandler.bind( this );
        }
        highlight( e, indx ) {
            let i = indx + 1;
            if ( indx == undefined ) i = 1
            this.setState( { beam : i, touching : false } );
        };
        standby( evnt ) {
            evnt.preventDefault();
            this.setState( { beam : false, touching : false } );
        };
        passify( evnt ) {
            evnt.preventDefault();
        };
        presshandler( evnt, i ){
            evnt.preventDefault();
            let target = ( i == undefined ) ? this.props.name : this.props.name[ i ];
            this.props.report( 'fr19a/' + target );
            this.setState( { beam : false, toucing : true } );
        }
        click( evnt, i ) {
            if ( this.state.touching == false ) {
                this.presshandler( evnt, i );
            }  
        };            
        touchstart( evnt, i ) {
            this.presshandler( evnt, i );
        }
        touchend( evnt ) {
            this.standby( evnt );
        }
        render() {
            let proc = {
                onMouseOver : this.highlight,
                onMouseLeave : this.standby,
                onClick : this.click,
                onTouchStart : this.touchstart,
                onTouchEnd : this.touchend,
                onTouchMove : this.passify
            };
            let pltt = press.palette();
            let cols = this.state.beam ? pltt.turquoise : press.color.grey( 128 );
            let back = press.style.docker( 0, ( this.props.nth - 1 ) * 60, 200, 60 );
            let numb = press.style.docker( 0, 15, 200, 20 ).font( 16, pltt.black, 1 );
            
            let { label } = this.props;
            let comp = [];
            let part = [];
            if ( label.constructor.name == 'Array' ){
                
                let tx = 0;
                label.map( ( item, index ) => {
                    cols = this.state.beam == index + 1 ? pltt.turquoise : press.color.grey( 128 );
                    let nroc = {
                        ...proc,
                        onMouseOver : ( e  ) => this.highlight( e, index ),
                        onClick : ( e ) => this.click( e, index ),
                        onTouchStart : ( e ) => this.touchstart( e, index )
                    }
                    let bttn = press.style.docker( tx, ( this.props.nth - 1 ) * 60, item[ 0 ], 60 ).rank( 9000 )
                    let text = press.style.docker( tx, 40, item[ 0 ], 20 ).font( 16, cols, 1 );    
                    tx += item[ 0 ];
                    part.push(
                        <div key={ 'text'+ index } style={ text }>{ item[ 1 ] }</div>
                    )                   
                    comp.push(
                        <div key={ 'bttn-' + this.props.nth+':'+index } style={ bttn } { ...nroc }/>
                    )
                } )

                comp.push(
                    <div key={ 'back-' + this.props.nth } style={ back }>
                        <div key={ 'numb' } style={ numb }>{ '0' + this.props.nth }</div>
                        { part }                
                    </div>
                )
            } 
            else {
                let text = press.style.docker( 0, 40, 200, 20 ).font( 16, cols, 1 );
                part.push(
                    <div key={ 'text' } style={ text }>{ this.props.label }</div>
                )

                comp.push(
                    <div key={ 'back-' + this.props.nth } style={ back }>
                        <div key={ 'numb' } style={ numb }>{ '0' + this.props.nth }</div>
                        { part }                
                    </div>
                )
                let bttn = press.style.docker( 0, ( this.props.nth - 1 ) * 60, 200, 60 ).rank( 9000 )           
                comp.push(
                    <div key={ 'bttn-' + this.props.nth } style={ bttn } { ...proc }/>
                )
            }
            return comp;
        }
    }

    class BaseText extends React.Component {
        constructor( props ) {
            super( props );
            this.tref = React.createRef();
        }
        componentDidMount() {
            let fcol = press.palette().black;
            TweenLite.to( this.tref.current, 3, { 'color' : fcol } ); 
        }
        render() {
            let fcol = press.palette().white;
            let garo = this.props.garo;
            let back = press.style.docker( 0, 0, garo, 200 ).font( 13, fcol, 1 ).align( press.numo.TOP, 20 );
            return <div ref={ this.tref } style={ back }>{ this.props.text }</div>;
        }
    }

    class Base extends React.Component {
        constructor( props ) {
            super( props );
        }
        render() {
            let pltt = press.palette();
            let devi = this.props.device;
            let garo = devi.inner.width;
            let sero = devi.inner.height;
            let half = Math.floor( garo / 2 );
            let offs = Math.max( 0, ( devi.inner.height - 670 ) / 2 - 50 );
            let comp = [];

            let east = press.style.slider( 150 + half, offs, garo, sero );
            let cont = press.style.docker( 0, 155, 100, 20 ).font( 16, pltt.black, 1 );
            let head = press.style.docker( 100, 100, 200, 60 ).underline( 0.5, pltt.black );
            let txta = press.style.docker( 0, 5, 200, 20 ).font( 16, pltt.black, 1 );
            let txtb = press.style.docker( 0, 30, 200, 20 ).font( 13, pltt.ocean, 1 );
            let navi = press.style.docker( 100, 160, 200, 420 );
            let bttn = [];
            let labi = ( n, a, s ) => {
                return {
                    report : this.props.report,
                    nth : n,
                    name : a,
                    label : s
                };
            }
            bttn.push( <PageNavi key={ 'intr' } { ...labi( 1, 'intr', 'Introduction' )}/> );
            bttn.push( <PageNavi key={ 'bana' } { ...labi( 2, 'bana', 'Business Analysis' ) }/> );
            bttn.push( <PageNavi key={ 'serv' } { ...labi( 3, 'serv', 'Our Service' ) }/> );
            bttn.push( <PageNavi key={ 'stra' } { ...labi( 4, 'stra', 'Strategy' ) }/> );
            bttn.push( <PageNavi key={ 'inte' } { ...labi( 5, 'inte', 'Intellectual Property' ) }/> );
            bttn.push( <PageNavi key={ 'plan' } { ...labi( 6, 'plan', 'Time Line' ) }/> );
            bttn.push( <PageNavi key={ 'fund' } { ...labi( 7, 'fund', 'Funding' ) }/> );
            comp.push( 
                <div key={ 'east' } style={ east }>
                    <div key={ 'cont' } style={ cont }>Content</div>
                    <div key={ 'head' } style={ head }>
                        <div key={ 'txta' } style={ txta }>BUY SIGNAL</div>
                        <div key={ 'txtb' } style={ txtb }>Round I, June 2019</div>
                    </div>
                    <div key={ 'navi' } style={ navi }>
                        { bttn }
                    </div>
                </div>
            );

            let west = press.style.slider( - 150, offs, 600, sero );
            let blck = press.style.docker( 0, 160, 330, 80 );
            let boxy = ( n ) => {
                return press.style.docker( n * 110, 0, 80, 80 ).back( pltt.ocean );
            }
            let cube = [];
            cube.push( <div key={ 'cube-0' } style={ boxy( 0 ) }/> );
            cube.push( <div key={ 'cube-1' } style={ boxy( 1 ) }/> );
            cube.push( <div key={ 'cube-2' } style={ boxy( 2 ) }/> );

            let text = press.style.docker( 0, 300, 520, 200 );
            let blah = {
                'garo' : 520,
                'text' : 'Investment decisions require careful and complex processes. The market is investigating whether these processes can be done via machine learning: a data driven computerised intelligence. At Buy Signal, we confirm that this new approach is indeed effective. Our aim is to make our findings into an investment information service from which millions of investors around the world can benefit.'
            };
            comp.push(
                <div key={ 'west' } style={ west }>
                    <div key={ 'blck' } style={ blck }>
                        { cube }
                    </div>
                    <div key={ 'text' } style={ text }>
                        <BaseText { ...blah }/>
                    </div>
                </div>
            );
            
            let back = press.style.board( 0, pltt.white );
            return (
                <div key={ 'back' } style={ back }>
                    { comp }
                </div>
            );
        }
    }

    fr19a.Base = Base;

} )( global.fr19a = global.fr19a || {} )

exports.fr19a = fr19a;

