
( function( fr19a, undefined ) {
    
    const WrapTimeLine = function( obj, speed = 1 ){
        return new TimelineLite( obj ).timeScale( speed );
    }

    class Thousand extends React.Component {
        constructor( props ) {
            super( props )
            this.refa = React.createRef();
            this.refb = React.createRef();
            this.refc = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup() {
            press.wire.fire( 'intrup', 1 );
        }
        txdn( evnt ) {
            if ( evnt.detail.what == 1 ) {
                let pltt = press.palette();
                let time = new WrapTimeLine();
                time.add( [
                    TweenLite.to( this.refa.current, 2, { color : pltt.white } ),
                    TweenLite.to( this.refb.current, 2, { color : pltt.white } ),
                    TweenLite.to( this.refc.current, 2, { backgroundColor : pltt.white } )
                ] );
                time.add( TweenLite.to( this.refc.current, 2, { color : pltt.ruby } ) );
                time.add( TweenLite.to( {}, 1, {} ) );
                time.add( TweenLite.to( this.refc.current, 2, { color : pltt.white } ) )
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
            let blck = press.palette().black;
            let time = new WrapTimeLine( { onComplete : this.txup } );
            time.add( TweenLite.to( this.refa.current, 3, { color : blck, ease : Power1.easeIn } ) );
            time.add( TweenLite.to( this.refb.current, 3, { color : blck, ease : Power1.easeIn } ) );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let pltt = press.palette();
            let comp = [];
            let nara = press.style.docker( 200, 0, 400, 50 ).font( 32, pltt.white, 1 );
            let txta = 'One Thousand Funds';
            comp.push( <div key={ 'nara' } ref={ this.refa } style={ nara }>{ txta }</div> );
            let narb = press.style.docker( 100, 50, 600, 50 ).font( 16, pltt.white, 1 );
            let txtb = '1000 hedge funds launch a year ... 1000 hedge funds close out a year, too'
            comp.push( <div key={ 'narb' } ref={ this.refb } style={ narb }>{ txtb }</div> );
            let narc = press.style.docker( 0, 0, 800, 100 ).clear().font( 32, press.color.mono( 0, 0 ), 1 );
            let nard = press.style.docker( 150, 0, 500, 50 );
            comp.push( 
                <div key={ 'narc' } ref={ this.refc } style={ narc }>
                    <div key={ 'nard' } style={ nard }>How Much Do They Make?</div>
                </div>
            );
            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 50, 160, 800, 100 );
            return (
                <div style={ back }>
                    <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class Performance extends React.Component {
        constructor( props ) {
            super( props );
            this.refa = React.createRef();
            this.refb = React.createRef();
            this.refc = React.createRef();
            this.refi = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup() {
            press.wire.fire( 'intrup', 2 );
        }
        txdn( evnt ) {
            let visi = press.color.mono( 255, 0 );
            let blck = press.palette().black;
            switch ( evnt.detail.what ) {
                case 1: {
                    let time = new WrapTimeLine( { onComplete : this.txup } );
                    time.add( TweenLite.to( {}, 5, {} ) );
                    time.add( [
                        TweenLite.to( this.refa.current, 2, { backgroundColor : visi } ) 
                    ] );
                    time.add( TweenLite.to( this.refc.current, 2, { top : 0 } ) );
                    time.add( TweenLite.to( this.refb.current, 2, { backgroundColor : visi } ) );
                    let item = this.refc.current.children;
                    for ( let i = 3; i < 8; ++ i ) {
                        time.add( TweenLite.to( item[ i ], 0.4, { color : blck } ) );
                    }
                    break;
                }
                case 3: {
                    let time = new WrapTimeLine();
                    time.to( this.refc.current, 1, { left : 350 } );
                    break;
                }
                default:
                    break;
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let pltt = press.palette();
            let line = ( r, n ) => {
                let tara = press.style.docker(   0, 0, 300, 30 );
                let tarb = press.style.docker( 300, 0, 100, 30 );
                let tarc = press.style.docker( 400, 0, 100, 30 );
                let trow = [];
                trow.push( <div key={ n +'-a' } style={ tara }>{ r[ 0 ] }</div> );
                trow.push( <div key={ n +'-b' } style={ tarb }>{ r[ 1 ] }</div> );
                trow.push( <div key={ n +'-c' } style={ tarc }>{ r[ 2 ] }</div> );
                return trow;
            }
            let comp = [];            
            let name = press.style.docker( 0, 0, 500, 40 ).font( 18, pltt.ruby, 1 );
            comp.push( <div key={ 'name' } style={ name }>2018 Annual Return</div> );
            let head = press.style.docker( 0, 40, 500, 20 ).underline( 1, pltt.black ).font( 14, pltt.black, 1 );
            comp.push( <div key={ 'head' } style={ head }>{ line( [ 'FUND NAME', 'RETURN %', 'STRATEGY' ], 'H' ) }</div> );
            let fila = press.style.docker( 0, 0, 500, 65 ).back( pltt.white ).rank( 1000 );
            comp.push( <div key={ 'fila' } ref={ this.refa } style={ fila }/> );
            let data = [
                [ 'Odey European', '53.0', 'Macro' ],
                [ 'Northlander Commodity', '52.7', 'Energy' ],
                [ 'Crescat Global Macro', '40.5', 'Macro' ],
                [ 'QQQ Capital', '39.4', 'L/S Equity' ],
                [ 'Alta Park', '34.8', 'L/S Equity' ],
                [ 'SoMa Partners', '20.0', 'L/S Equity' ],
                [ 'Autonomy Global Macro', '16.7', 'Macro' ],
                [ 'Mudrick Capital', '16.2', 'Distressed' ],
                [ 'Bridgewater Pure Alpha', '14.6', 'Macro' ],
                [ 'Aspect Systematic Global Macro', '14.3', 'Quant' ],
                [ 'Luxor Capital Partners Offshore', '13.6', 'Event Driven' ],
                [ 'Brevan Howard Master', '12.3', 'Macro' ],
                [ 'D.E. Shaw Composite', '11.2', 'Multi Strategy' ],
                [ 'Sylebra Capital Partners Master', '11.0', 'L/S Equity' ],
                [ 'Kuvari Focus', '10.5', 'L/S Equity' ],
                [ 'Citadel Wellington', '9.1', 'Multi Strategy' ],
                [ 'Millennium', '4.9', 'Multi Strategy' ]
            ]
            
            let grey = press.color.grey( 128 );
            for ( let i = 0; i < data.length; i++ ) {
                let ypos = 80 + i * 30;
                let brow = press.style.docker( 0, ypos, 500, 30 ).font( 14, grey, 1 );
                comp.push( <div key={ 'line-' + i } style={ brow }>{ line( data[ i ], i ) }</div> );
            }
            let fili = press.style.docker( 0, 80, 500, 510 ).back( press.color.mono( 255, 1 ) ).rank( 1000 );
            comp.push( <div key={ 'fili' } ref={ this.refb } style={ fili }/> )

            let back = fr19a.grid.core( this.props.device ).rank( 500 );
            let face = press.style.docker( 200, 250, 500, 620 );
            return (
                <div style={ back }>
                    <div ref={ this.refc } style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class Cut extends React.Component {
        constructor( props ) {
            super( props );
            this.refa = React.createRef();
            this.refb = React.createRef();
            this.refc = React.createRef();
            this.refp = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup( n ) {
            press.wire.fire( 'intrup', n );
        }
        txdn( evnt ) {
            switch ( evnt.detail.what ) {
                case 2: {
                    let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 3 ] } );
                    time.to( this.refb.current, 1, { width : 900 } );
                    break;
                }
                case 3: {
                    let pltt = press.palette();
                    let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 4 ] } );
                    this.refp.current.innerHTML = '% per annum';
                    time.to(
                        this.refa.current, 0.4, { color : pltt.ruby } ).to(
                        this.refp.current, 0.4, { color : pltt.ruby } ).to(
                        {}, 1, {} ).to(
                        this.refc.current.children[ 0 ], 0.4, { color : pltt.orange } ).to(
                        this.refc.current.children[ 1 ], 0.4, { color : pltt.orange }
                    );
                    break;
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let pltt = press.palette();
            let comp = [];
            let yroi = press.style.docker( 0, 70, 100, 70 ).font( 80, pltt.white, 2 );
            comp.push( <div key={ 'yroi' } ref={ this.refa } style={ yroi }>25</div> );
            let yper = press.style.docker( 100, 70, 180, 30 ).clear().font( 16, pltt.white, 1 );
            comp.push( <div key={ 'yper' } ref={ this.refp } style={ yper }/> );
            let expl = [];
            let expa = press.style.docker( 0, 0, 200, 20 );
            expl.push( <div key={ 'expa' } style={ expa }>returns above</div> )
            let expb = press.style.docker( 0, 125, 200, 20 );
            expl.push( <div key={ 'expb' } style={ expb }>will shine</div> )
            let expc = press.style.docker( 0, 40, 200, 150 ).clear().font( 16, pltt.white, 1 );
            comp.push( <div key={ 'expc' } ref={ this.refc } style={ expc }>{ expl }</div> );
            let cbar = press.style.docker( 0, 140, 0, 10 ).underline( 1, pltt.ruby );
            comp.push( <div key={ 'cbar' } ref={ this.refb } style={ cbar }/> );

            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 0, 70, 900, 180 );
            return (
                <div style={ back }>
                    <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class Bracket extends React.Component {
        constructor( props ) {
            super( props );
            this.refa = React.createRef();
            this.refb = React.createRef();
            this.reft = React.createRef();
            this.refw = React.createRef();
            this.refx = React.createRef();
            this.refz = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup( n ) {
            press.wire.fire( 'intrup', n );
        }
        txdn( evnt ) {
            switch ( evnt.detail.what ) {
                case 4: {
                    let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 5 ] } );
                    let pltt = press.palette();
                    let orng = pltt.orange;
                    let whte = pltt.white;
                    let grey = press.color.grey( 160 );
                    let ypos = fr19a.grid.offset( this.props.device ) + 290;
                    time.add( TweenLite.to( this.refb.current, 2, { top : ypos } ) );
                    // fixed
                    //time.add( TweenLite.to( {}, 2, {} ) );
                    time.add( TweenLite.to( this.refw.current, 1, { borderTopColor : orng, width : 900 } ) );
                    // fixed 0.4 => 0.2
                    let ft = 0.2
                    time.add( TweenLite.to( this.reft.current.children[ 1 ], ft, { color : whte } ) );
                    for ( let i = 0; i < 3; ++ i ) {
                        time.add( TweenLite.to( 
                            this.refw.current.children[ i ], ft, { borderLeftColor : orng, color : grey } 
                        ) );
                    }
                    time.add( TweenLite.to( this.reft.current.children[ 0 ], ft, { color : whte } ) );
                    for ( let i = 0; i < 3; ++ i ) {
                        time.add( TweenLite.to( 
                            this.refa.current.children[ i ], ft, { borderLeftColor : orng, color : grey }
                        ) );
                    }
                    time.add( TweenLite.to( {}, 1, {} ) );
                    time.add( TweenLite.to( this.refw.current.children[ 0 ], 1, { height : 100 } ) );
                    time.add( TweenLite.to( this.refx.current.children[ 0 ], 1, { color : whte } ) );
                    time.add( TweenLite.to( this.refx.current.children[ 0 ], 1, { color : grey } ) );
                    time.add( TweenLite.to( this.refw.current.children[ 1 ], 1, { height : 100 } ) );
                    time.add( TweenLite.to( this.refx.current.children[ 1 ], 1, { color : whte } ) );
                    time.add( TweenLite.to( this.refx.current.children[ 1 ], 1, { color : grey } ) );
                    time.add( TweenLite.to( this.refw.current.children[ 2 ], 1, { height : 100 } ) );
                    time.add( TweenLite.to( this.refx.current.children[ 2 ], 1, { color : whte } ) );
                    time.add( TweenLite.to( this.refx.current.children[ 2 ], 1, { color : grey } ) );
                    time.add( TweenLite.to( {}, 1, {} ) );
                    break;
                }
                case 5: {
                    let pltt = press.palette();
                    let ruby = pltt.ruby;
                    let whte = pltt.white;
                    let tmar = fr19a.grid.offset( this.props.device )
                    let sero = tmar + 310;
                    let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 6 ] } );
                    time.add( [
                        TweenLite.to( this.refb.current, 2, { top : 0 } ),
                        TweenLite.to( this.refb.current.children[ 0 ], 2, { height : sero } ),
                        TweenLite.to( this.refb.current.children[ 1 ], 2, { top : tmar } )
                    ] );
                    time.add( [
                        TweenLite.to( this.refx.current.children[ 1 ], 1, { color : whte } ),
                        TweenLite.to( this.refx.current.children[ 2 ], 1, { color : whte } ) 
                    ] );
                    time.add( TweenLite.to( this.refx.current.children[ 3 ], 1, { width : 470 } ) );
                    time.add( TweenLite.to( {}, 1/** 2->1 */, {} ) );
                    time.add( TweenLite.to( this.refz.current.children[ 0 ], 1, { color : ruby } ) );
                    time.add( TweenLite.to( this.refz.current.children[ 1 ], 1, { color : ruby } ) );
                    time.add( TweenLite.to( {}, 1 /** 2->1 */, {} ) );
                    break;
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let pltt = press.palette();
            let tran = press.color.mono( 255, 0 );
            let left = press.numo.place.LEFT;
            let tope = press.numo.place.TOP;
            let comp = [];

            let cona = [];
            let acka = press.style.docker( 220, 0, 150, 30 ).edge( 1, tran, left ).font( 14, tran, 1 );
            cona.push( <div key={ 'acka' } style={ acka }>&nbsp;&nbsp;5% pa</div> );
            let ackb = press.style.docker( 470, 0, 150, 30 ).edge( 1, tran, left ).font( 14, tran, 1 );
            cona.push( <div key={ 'ackb' } style={ ackb }>&nbsp;&nbsp;25% pa</div> );
            let ackc = press.style.docker( 720, 0, 150, 30 ).edge( 1, tran, left ).font( 14, tran, 1 );
            cona.push( <div key={ 'ackc' } style={ ackc }>&nbsp;&nbsp;50% pa</div> );
            let plta = press.style.docker( 0, 70, 900, 30 ).clear();
            comp.push( <div key={ 'plta' } ref={ this.refa } style={ plta }>{ cona }</div> );

            let conw = [];
            let wcks = ( t ) => {
                let shft = press.style.docker( 10, 16, 140, 14 );
                return <div key={ 'shft' } style={ shft }>{ t }</div>;
            }
            let wcka = press.style.docker( 250, 0, 150, 30 ).edge( 1, tran, left ).font( 14, tran, 1 );
            conw.push( <div key={ 'wcka' } style={ wcka }>{ wcks( '0.1% pw' ) }</div> );
            let wckb = press.style.docker( 500, 0, 150, 30 ).edge( 1, tran, left ).font( 14, tran, 1 );
            conw.push( <div key={ 'wckb' } style={ wckb }>{ wcks( '0.5% pw' ) }</div> );
            let wckc = press.style.docker( 750, 0, 150, 30 ).edge( 1, tran, left ).font( 14, tran, 1 );
            conw.push( <div key={ 'wckc' } style={ wckc }>{ wcks( '1.0% pw' ) }</div> );
            let pltw = press.style.docker( 0, 100, 0, 30 ).edge( 1, tran, tope );
            comp.push( <div key={ 'pltw' } ref={ this.refw } style={ pltw }>{ conw }</div> );

            let cont = [];
            let txta = press.style.docker( 0, 0, 200, 20 ).font( 16, tran, 1 );
            cont.push( <div key={ 'txta' } style={ txta }>annual returns</div> )
            let txtb = press.style.docker( 0, 40, 200, 20 ).font( 16, tran, 1 );
            cont.push( <div key={ 'txtb' } style={ txtb }>weekly returns</div> )
            let text = press.style.docker( 0, 70, 0, 60 );
            comp.push( <div key={ 'text' } ref={ this.reft } style={ text }>{ cont }</div> );

            let cent = 'center';
            let expl = [];
            let nara = press.style.docker( 170, 0, 180, 60 ).font( 14, tran, 1 ).align( cent, '140%' );
            expl.push( <div key={ 'nara' } style={ nara }>67% of the institutional investors seek 4-8% pa</div> );
            let narb = press.style.docker( 420, 0, 180, 60 ).font( 14, tran, 1 ).align( cent, '140%' );
            expl.push( <div key={ 'narb' } style={ narb }>a handful of elite hedge funds reach the level</div> );
            let narc = press.style.docker( 670, 0, 180, 60 ).font( 14, tran, 1 ).align( cent, '140%' );
            expl.push( <div key={ 'narc' } style={ narc }>within the top 10 performance of the year</div> );
            let narx = press.style.docker( 400, 60, 0, 10 ).underline( 1, pltt.orange );
            expl.push( <div key={ 'narx' } style={ narx }></div> );
            let nard = press.style.docker( 0, 220, 900, 80 );
            comp.push( <div key={ 'nard' } ref={ this.refx } style={ nard }>{ expl }</div> );

            let fina = press.style.docker( 400, 380, 500, 70 );
            let finb = press.style.docker( 0, 0, 80, 70 ).font( 80, tran, 2 );
            let finc = press.style.docker( 80, 0, 280, 30 ).font( 16, tran, 1 );
            comp.push( 
                <div key={ 'fina' } ref={ this.refz } style={ fina }>
                    <div style={ finb }>.5</div>
                    <div style={ finc }>% weekly or better</div>
                </div>
            );

            let hide = this.props.device.inner.height;
            let sero = Math.max( 390, hide - 290 - fr19a.grid.offset( this.props.device ) );
            let back = press.style.absolute().place( 0, hide ).block( '100%', '100%' ).rank( 2000 ).back( pltt.white );
            let band = press.style.absolute().place( 0, 0 ).block( '100%', sero ).back( pltt.ruby );
            let face = press.style.slider( 0, 50, 900, 600 );
            return (
                <div ref={ this.refb } style={ back }>
                    <div style={ band }/>
                    <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class TopScreen extends React.Component {
        constructor( props ) {
            super( props );
            this.refb = React.createRef();
            this.txdn = this.txdn.bind( this );
        }
        txdn( evnt ) {
            switch ( evnt.detail.what ) {
                case 5: {
                    let pltt = press.palette();
                    TweenLite.to( this.refb.current, 3, { backgroundColor : pltt.white } );
                    break;
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let comp = [];
            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 0, 0, 900, 290 ).clear().rank( 1500 );
            return (
                <div style={ back }>
                    <div ref={ this.refb } style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class BlindOne extends React.Component {
        constructor( props ) {
            super( props );
            this.refz = React.createRef();
            this.refb = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup() {
            press.wire.fire( 'intrup', 7 );
        }
        txdn( evnt ) {
            switch ( evnt.detail.what ) {
                case 6: {
                    let hide = press.color.mono( 255, 0 );
                    let sero = this.props.device.inner.height;
                    let time = new WrapTimeLine( { onComplete : this.txup } );
                    time.add( TweenLite.to( this.refb.current, 3, { height : sero } ) );
                    time.add( TweenLite.to( {}, 1, {} ) );
                    time.add( [
                        TweenLite.to( this.refz.current.children[ 0 ], 3, { color : hide } ),
                        TweenLite.to( this.refz.current.children[ 1 ], 3, { color : hide } )
                    ] )
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let pltt = press.palette();
            let whte = pltt.white;
            let comp = [];

            let fina = press.style.docker( 400, 380, 500, 70 );
            let finb = press.style.docker( 0, 0, 80, 70 ).font( 80, pltt.white, 2 );
            let finc = press.style.docker( 80, 0, 280, 30 ).font( 16, pltt.white, 1 );
            comp.push( 
                <div key={ 'fina' } ref={ this.refz } style={ fina }>
                    <div style={ finb }>.5</div>
                    <div style={ finc }>% weekly or better</div>
                </div>
            );

            let garo = this.props.device.inner.width;
            let core = fr19a.grid.core( this.props.device );
            let back = press.style.glider( 0, 0, garo, 0 ).back( pltt.black ).noSpill().rank( 2000 );            
            return (
                <div key={ 'back' } ref={ this.refb } style={ back }>
                    <div key={ 'core' } style={ core }>
                        { comp }
                    </div>
                </div>
            );
        }
    }

    class Candle extends React.Component {
        constructor( props ) {
            super( props );
            this.refb = React.createRef();
            this.refx = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup( n ) {
            press.wire.fire( 'intrup', n );
        }
        txdn( evnt ) {
            if ( evnt.detail.what == this.props.play ) {
                let visi = press.color.mono( 255, 1 );
                let pltt = press.palette();
                let cont = this.refx.current.children;
                let post = this.props.play + 1;
                let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ post ] } );
                time.add( TweenLite.to( this.refb.current, 0.2, { top : 0 } ) );
                for ( let i = 0; i < this.props.data.length; ++ i ) {
                    let prop = { stroke : visi };
                    let ohlc = this.props.data[ i ];
                    if ( ohlc[ 0 ] < ohlc[ 3 ] ) {
                        prop.fill = pltt.orange;
                    } else {
                        prop.fill = pltt.ruby;
                    }
                    time.add( TweenLite.to( cont[ i ], 0.1, prop ) );
                }
                time.add( TweenLite.to( {}, 1, {} ) );
                time.set( this.refb.current, { transform : 'rotateX(0)' } );
                time.add( TweenLite.to( this.refb.current, 1, { transform : 'rotateX(90deg)' } ) ); 
                let tran = press.color.mono( 255, 0 );
                let prop = { stroke : tran, fill : tran };
                let twny = [];
                for ( let i = 0; i < this.props.data.length; ++ i ) {
                    twny.push( TweenLite.to( cont[ i ], 0.1, prop ) );
                }
                time.add( twny );
                time.add( TweenLite.to( this.refb.current, 0, { top : 1000 } ) );
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let tran = press.color.mono( 255, 0 );
            let comp = [];
            let x = 0;
            for ( let i = 0; i < this.props.data.length; ++ i ) {
                let ohlc = this.props.data[ i ];
                let q = x + 2000;
                let m = x + 1000;
                let o = 100 * ( 400 - ohlc[ 0 ] );
                let h = 100 * ( 400 - ohlc[ 1 ] );
                let l = 100 * ( 400 - ohlc[ 2 ] );
                let c = 100 * ( 400 - ohlc[ 3 ] );
                let a = Math.min( o, c );
                let b = Math.max( o, c );
                let p = fr19a.path( x, o );
                p.lineTo( q, o ).lineTo( q, c ).lineTo( x, c ).lineTo( x, o ).moveTo( m, a ).lineTo( m, h ).moveTo( m, b ).lineTo( m, l );
                comp.push( <path key={ 'cn-' + i } d={ p.trail } stroke={ tran } strokeWidth={ 100 } fill={ tran }/> )
                x += 2500;
            }
            let back = press.style.docker( 100, 1000, 400, 400 ).clear().rank( this.props.rank );
            return (
                <div key={ 'back' } ref={ this.refb } style={ back }>
                    <svg key={ 'svgi' } ref={ this.refx } viewBox={ '0 0 40000 40000' }>{ comp }</svg>
                </div>
            );
        }
    }

    class Chart extends React.Component {
        constructor( props ) {
            super( props );
            this.refa = React.createRef();
            this.refb = React.createRef();
            this.refc = React.createRef();
            this.refx = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup( n ) {
            press.wire.fire( 'intrup', n );
        }
        txdn( evnt ) {
            switch ( evnt.detail.what ) {
                case 13: {
                    let axis = this.refx.current.children;
                    let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 14 ] } );
                    time.add( [
                        TweenLite.to( axis[ 2 ], 1, { strokeDasharray : '40000 0' } ),
                        TweenLite.to( {}, 1, {} )
                    ] );
                    time.add( [
                        TweenLite.to( axis[ 2 ], 1, { strokeDasharray : '0 40000' } ),
                        TweenLite.to( axis[ 3 ], 1, { strokeDasharray : '40000 0' } ),
                        TweenLite.to( {}, 1, {} )
                    ] );
                    time.add( [
                        TweenLite.to( axis[ 3 ], 1, { strokeDasharray : '0 40000' } ),
                        TweenLite.to( axis[ 4 ], 1, { strokeDasharray : '35000 0' } ),
                        TweenLite.to( {}, 1, {} )
                    ] );
                    time.add( [
                        TweenLite.to( axis[ 4 ], 1, { strokeDasharray : '0 35000' } ),
                        TweenLite.to( axis[ 1 ], 1, { strokeDasharray : '0 55000' } )
                    ] );
                    let canv = this.refa.current;
                    let tran = press.color.mono( 255, 0 );
                    time.add( [
                        TweenLite.to( canv.children[ 1 ], 1, { color : tran } ),
                        TweenLite.to( canv.children[ 2 ], 1, { color : tran } )
                    ] );
                    break;
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
            let visi = press.color.mono( 255, 1 );
            let tran = press.color.mono( 255, 0 );
            let grey = press.color.grey( 128 );
            let head = this.refb.current;
            let canv = this.refa.current;
            let axis = this.refx.current.children;
            let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 8 ] }, 2 );
            time.add( TweenLite.to( head, 2, { color : visi } ) );
            time.add( TweenLite.to( axis[ 0 ], 2, { strokeDasharray : '150000 0' } ) );
            time.add( [
                TweenLite.to( canv, 2, { left : 350 } ),
                TweenLite.to( head, 2, { left : 50 } )
            ] );
            time.add( TweenLite.to( axis[ 1 ], 2, { strokeDasharray : '55000 0' } ) );
            time.add( TweenLite.to( canv.children[ 1 ], 1, { color : grey } ) );
            time.add( TweenLite.to( canv.children[ 2 ], 1, { color : grey } ) );
            time.add( TweenLite.to( head, 1, { color : tran } ) );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let pltt = press.palette();
            let whte = pltt.white;
            let ruby = pltt.ruby;
            let orng = pltt.orange;
            let grey = press.color.grey( 128 );
            let tran = press.color.mono( 255, 0 );
            let line = 50;
            let comp = [];
            let axis = [];
            axis.push( 
                <svg key={ 'axis' } ref={ this.refx } viewBox={ '0 0 55000 40000' }>
                    <path d={ 'M10000,2500H50000V37500H10000V2500Z' } stroke={ whte } strokeWidth={ line } strokeDasharray={ '0 150000' } fill={ 'transparent' }/>
                    <path d={ 'M0,20000H55000' } stroke={ whte } strokeWidth={ line } strokeDasharray={ '0 55000' }/>
                    <path d={ 'M10000,2500H50000' } stroke={ orng } strokeWidth={ 200 } strokeDasharray={ '0 40000' }/>
                    <path d={ 'M10000,37500H50000' } stroke={ ruby } strokeWidth={ 200 } strokeDasharray={ '0 40000' }/>
                    <path d={ 'M50000,2500V37500' } stroke={ grey } strokeWidth={ 200 } strokeDasharray={ '0 35000' }/>
                </svg>
            );
            let tcka = press.style.docker( 525, 220, 25, 25 ).font( 13, tran, 1 );
            axis.push( <div key={ 'tcka' } style={ tcka }>1W</div> );
            let tckb = press.style.docker( 10, 220, 25, 25 ).font( 13, tran, 1 );
            axis.push( <div key={ 'tckb' } style={ tckb }>NOW</div> );
            let tint = press.style.docker( 0, 0, 550, 400 ).tint( 0 );
            axis.push( <div key={ 'tint' } style={ tint }/> );
            let base = press.style.docker( 0, 0, 550, 400 ).rank( 500 );
            comp.push( <div key={ 'base' } ref={ this.refa } style={ base }>{ axis }</div> );

            let plot = [];
            let cana = {
                play : 9,
                rank : 1000,
                data : [
                    [ 200, 220, 125, 150 ], [ 150, 190,  80, 165 ], [ 175, 275, 160, 250 ], [ 240, 320, 220, 300 ], 
                    [ 300, 310, 280, 280 ], [ 280, 400, 250, 380 ]
                ]
            };
            plot.push( <Candle key={ 'cana' } { ...cana }/> );
            let canb = {
                play : 10,
                rank : 1000,
                data : [
                    [ 200, 210, 125, 150 ], [ 160, 240, 130, 230 ], [ 200, 280, 180, 230 ], [ 200, 210,  80, 100 ], 
                    [ 100, 150,   0,  30 ]
                ]
            };
            plot.push( <Candle key={ 'canb' } { ...canb }/> );
            let canc = {
                play : 11,
                rank : 1000,
                data : [
                    [ 200, 240, 190, 225 ], [ 220, 280, 200, 270 ], [ 270, 280, 240, 250 ], [ 290, 300, 210, 250 ], 
                    [ 250, 280, 150, 180 ], [ 190, 200, 160, 170 ], [ 180, 240, 150, 230 ], [ 230, 270, 220, 260 ], 
                    [ 260, 310, 240, 300 ], [ 300, 320, 230, 260 ], [ 260, 270, 180, 200 ], [ 200, 260, 175, 240 ], 
                    [ 240, 270, 220, 260 ], [ 250, 270, 230, 260 ], [ 250, 260, 180, 200 ], [ 210, 230, 150, 170 ]
                ]
            };
            plot.push( <Candle key={ 'canc' } { ...canc }/> );
            let cand = press.style.docker( 350, 0, 500, 1000 );
            comp.push( <div key={ 'cand' } ref={ this.refc } style={ cand }>{ plot }</div> );

            let bbox = press.style.docker( 150, 100, 350, 50 ).font( 32, tran, 1 );
            comp.push( <div key={ 'bbox' } ref={ this.refb } style={ bbox }>Building Block</div> );

            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 0, 100, 900, 1000 );
            return (
                <div style={ back }>
                    <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class Service extends React.Component {
        constructor( props ) {
            super( props );
            this.refa = React.createRef();
            this.refb = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup( n ) {
            press.wire.fire( 'intrup', n );
        }
        txdn( evnt ) {
            switch ( evnt.detail.what ) {
                case 14: {
                    let pltt = press.palette();
                    let beam = pltt.white;
                    let line = this.refa.current.children;
                    let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 15 ] } );
                    time.add( TweenLite.to( this.refb.current, 1, { backgroundColor : press.color.mono( 0, 0 ) } ) );
                    time.add( TweenLite.to( {}, 2, {} ) );
                    time.add( [ 
                        TweenLite.to( line[ 4 ].children[ 3 ], 1, { color : beam } ),
                        TweenLite.to( line[ 4 ].children[ 4 ], 1, { color : beam } )
                    ] );
                    break;
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let pltt = press.palette();
            let whte = pltt.white;
            let grey = press.color.grey( 128 );
            let pale = press.color.grey( 64 );
            let comp = [];
            let line = [];
            let lina = press.style.docker( 0, 20, 360, 20 ).font( 16, whte, 1 );
            line.push( <div key={ 'lina' } style={ lina }>NASDAQ</div> );
            let linb = press.style.docker( 0, 40, 360, 20 ).font( 12, grey, 1 );
            line.push( <div key={ 'linb' } style={ linb }>2019 June 3, 13:09:00 EST</div> );
            let linc = press.style.docker( 0, 75, 360, 20 ).underline( 1, grey );
            let head = [];
            let parp = press.style.docker( 180, 5, 60, 15 ).font( 12, grey, 1 ).align( 'right' );
            head.push( <div key={ 'parp' } style={ parp }>price</div> );
            let para = press.style.docker( 240, 5, 60, 15 ).font( 12, grey, 1 ).align( 'right' );
            head.push( <div key={ 'para' } style={ para }>+4%</div> );
            let parb = press.style.docker( 300, 5, 60, 15 ).font( 12, grey, 1 ).align( 'right' );
            head.push( <div key={ 'parb' } style={ parb }>-4%</div> );
            line.push( <div key={ 'linc' } style={ linc }>{ head }</div> );            
            let colf = ( a, b, p, c, d, n ) => {
                let psty = press.style;
                let part = [];
                part.push( <div key={ 'a' } style={ psty.docker( 0,   10, 180, 15 ).font( 12, whte, 1 ).align( 'left' ) }>{ a }</div> );
                part.push( <div key={ 'b' } style={ psty.docker( 0,   25, 180, 15 ).font( 10, grey, 1 ).align( 'left' ) }>{ b }</div> );
                part.push( <div key={ 'p' } style={ psty.docker( 180, 10,  60, 15 ).font( 12, grey, 1 ).align( 'right' ) }>{ p }</div> );
                part.push( <div key={ 'c' } style={ psty.docker( 240, 10,  60, 15 ).font( 12, grey, 1 ).align( 'right' ) }>{ c }</div> );
                part.push( <div key={ 'd' } style={ psty.docker( 300, 10,  60, 15 ).font( 12, grey, 1 ).align( 'right' ) }>{ d }</div> );
                return <div key={ 'l' + n } style={ psty.docker( 0, 100 + 40 * n, 360, 40 ).underline( 1, pale ) }>{ part }</div>;
            };
            line.push( colf( 'FB', 'FACEBOOK A', 162.04, 23.01, 20.56, 0 ) );
            line.push( colf( 'AMZN', 'AMAZON', 1680.32, 41.03, 16.41, 1 ) );
            line.push( colf( 'NFLX', 'NETFLIX', 335.56, 32.55, 29.32, 2 ) );
            line.push( colf( 'GOOG', 'ALPHABET C', 1028.03, 40.21, 17.14, 3 ) );
            line.push( colf( 'AAPL', 'APPLE', 171.19, 38.13, 19.33, 4 ) );

            let innr = press.style.docker( 20, 20, 360, 320 );
            let base = press.style.docker( 0, 0, 400, 350 );
            comp.push( 
                <div key={ 'base' } style={ base }>
                    <div key={ 'innr' } ref={ this.refa } style={ innr }>{ line }</div> 
                </div>
            );

            let filt = press.style.docker( 0, 0, 400, 350 );
            comp.push(
                <div key={ 'filt' } style={ filt }>
                    <svg viewBox={ '0 0 40000 35000' }>
                        <defs>
                            <linearGradient id={ 'lg-sero-wf' } x1={ '0%' } y1={ '0%' } x2={ '100%' } y2={ '100%' }>
                                <stop offset={ '0%' } stopColor={ '#ffffff' } stopOpacity={ 0.1 }></stop>
                                <stop offset={ '100%' } stopColor={ '#ffffff' } stopOpacity={ 0 }></stop>
                            </linearGradient>
                        </defs>
                        <path d={ 'M0,0H40000V15000H0V0Z' } fill={ 'url(#lg-sero-wf)' }/>
                        <path d={ 'M20000,0H40000V35000L20000,0Z' } fill={ 'url(#lg-sero-wf)' }/>
                    </svg>
                </div>
            );

            let blnd = press.style.docker( 0, 0, 400, 350 ).tint( 1 );
            comp.push( <div key={ 'blnd' } ref={ this.refb } style={ blnd }/> );

            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 450, 125, 400, 350 );
            return (
                <div style={ back }>
                    <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class Probability extends React.Component {
        constructor( props ) {
            super( props );
            this.refa = React.createRef();
            this.refb = React.createRef();
            this.refc = React.createRef();
            this.refd = React.createRef();
            this.refe = React.createRef();
            this.refy = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
            this.boby = this.boby.bind( this );
        }
        boby( item, hold ) {
            let visi = press.color.mono( 255, 1 );
            let grey = press.color.grey( 128 );
            let time = new WrapTimeLine();
            time.to( 
                item, 1, { color : visi, left : 50 } ).to( 
                {}, hold, {} ).to(
                item, 1, { color : grey, left : 0 } 
            );
        }
        txup( n ) {
            press.wire.fire( 'intrup', n );
        }
        txdn( evnt ) {            
            switch ( evnt.detail.what ) {
                case 8: {
                    let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 9 ] } );
                    let visi = press.color.mono( 255, 1 );
                    let grey = press.color.grey( 128 );
                    time.add( TweenLite.to( this.refa.current, 1, { color : visi } ) );
                    for ( let i = 0; i < 3; ++ i ) {
                        time.add( TweenLite.to( this.refb.current.children[ i ], 0.4, { color : grey } ) );
                    }
                    break;
                }
                case 9: {
                    this.boby( this.refb.current.children[ 0 ], 1 );
                    break;
                }
                case 10: {
                    this.boby( this.refb.current.children[ 1 ], 1 );
                    break;
                }
                case 11: {
                    this.boby( this.refb.current.children[ 2 ], 2 );
                    break;
                }
                case 12: {
                    let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 13 ] } );
                    let dura = 0.4;
                    let tbox = this.refa.current.children;
                    let span = [];
                    for ( let i = 1; i < tbox.length; ++ i ) {
                        let item = tbox[ i ];
                        span.push( TweenLite.to( item, dura, { left : item.offsetLeft + i * ( 10 + i ) } ) );
                    }
                    time.add( span );
                    time.add( [
                        TweenLite.to( tbox[ 1 ], dura, { transform : 'rotateX(90deg)' } )
                    ] );
                    time.call( ( a, b ) => { a.innerHTML = b; }, [ tbox[ 1 ], 'r' ] );
                    time.add( [
                        TweenLite.to( tbox[ 1 ], dura, { transform : 'rotateX(0)', left : 51 } ),
                        TweenLite.to( tbox[ 2 ], dura, { transform : 'rotateX(90deg)' } )
                    ] );
                    time.call( ( a, b ) => { a.innerHTML = b; }, [ tbox[ 2 ], 'o' ] );
                    time.add( [
                        TweenLite.to( tbox[ 2 ], dura, { transform : 'rotateX(0)', left : 64 } ),
                        TweenLite.to( tbox[ 3 ], dura, { transform : 'rotateX(90deg)' } )
                    ] );
                    time.call( ( a, b ) => { a.innerHTML = b; }, [ tbox[ 3 ], 'b' ] );
                    time.add( [
                        TweenLite.to( tbox[ 3 ], dura, { transform : 'rotateX(0)', left : 84 } ),
                        TweenLite.to( tbox[ 4 ], dura, { transform : 'rotateX(90deg)' } )
                    ] );
                    time.call( ( a, b ) => { a.innerHTML = b; }, [ tbox[ 4 ], 'a' ] );
                    time.add( [
                        TweenLite.to( tbox[ 4 ], dura, { transform : 'rotateX(0)', left : 106 } )                    
                    ] );
                    time.add( TweenLite.to( tbox[ 5 ], dura, { left : 124 } ) );
                    break;
                }
                case 15: {
                    let pltt = press.palette();
                    let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 16 ] } );
                
                    time.add( TweenLite.to( this.refb.current, 1, { left : 0 } ) );
                    time.add( TweenLite.to( this.refc.current, 0, { top : 70 } ) );
                    let grey = press.color.grey( 128 );
                    let visi = grey;
                    let beam = press.color.grey( 196 );


                    // fixed 0.4 => 1.4
                    let ft = 3
                    // fixed 1 => 2
                    let fo = 3
                    for ( let i = 0; i < 2; ++ i ) {
                        let item = this.refc.current.children[ i ].children;
                        time.add( [
                            TweenLite.to( item[ 0 ], ft, { color : visi } ),
                            TweenLite.to( item[ 1 ], ft, { color : grey } ),
                            TweenLite.to( item[ 2 ], ft, { color : beam } )
                        ] );
                    }
                    time.add( TweenLite.to(
                        this.refc.current.children[ 2 ], ft, { color : grey } 
                    ) );
                    time.add( TweenLite.to(
                        this.refd.current, fo, { borderBottomColor : press.color.grey( 160 ), width : 400 } 
                    ) );
                    let toto = this.refe.current.children[ 0 ].children;
                    // last equation
                    time.add( [
                        TweenLite.to( toto[ 0 ], ft, { color : visi } ),
                        TweenLite.to( toto[ 1 ], ft, { color : grey } ),
                        TweenLite.to( toto[ 2 ], ft, { color : beam } )
                    ] );
                    time.add( TweenLite.to( this.refy.current, fo, { top : 130 } ) );
                    time.add( [
                        TweenLite.to( this.refe.current.children[ 1 ], ft, { color : pltt.red } ),
                        TweenLite.to( this.refe.current.children[ 2 ], ft, { color : grey } )
                    ] );
                    time.add( TweenLite.to( {}, 5/* 3->5 */, {} ) );
                    break;
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
            let time = new WrapTimeLine();
            let tbox = this.refa.current.children;
            let offs = tbox[ 0 ].offsetWidth;
            for ( let i = 1; i < tbox.length; ++ i ) {
                let item = tbox[ i ];
                let size = item.offsetWidth;
                time.set( item, { left : offs } );
                offs += size;
            }
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let tran = press.color.mono( 255, 0 );
            let comp = [];

            let scna = press.style.docker( 0, 0, 350, 50 ).font( 32, tran, 1 );
            let temp = press.style.absolute().place( 0, 0 );
            let mute = [];
            mute.push( <div key={ 'leta' } style={ temp }>3 P</div> );
            mute.push( <div key={ 'letb' } style={ temp }>o</div> );
            mute.push( <div key={ 'letc' } style={ temp }>s</div> );
            mute.push( <div key={ 'letd' } style={ temp }>s</div> );
            mute.push( <div key={ 'lete' } style={ temp }>i</div> );
            mute.push( <div key={ 'letf' } style={ temp }>bilities</div> );
            comp.push( <div key={ 'scna' } ref={ this.refa } style={ scna }>{ mute }</div> );
            
            let scnb = press.style.docker( 30, 70, 120, 150 );
            let outs = [];
            let outa = press.style.docker( 0, 0, 120, 30 ).font( 20, tran, 1 );
            outs.push( <div key={ 'outa' } style={ outa }>Take Profit</div> );
            let outb = press.style.docker( 0, 50, 120, 30 ).font( 20, tran, 1 );
            outs.push( <div key={ 'outb' } style={ outb }>Drawdown</div> );
            let outc = press.style.docker( 0, 100, 120, 30 ).font( 20, tran, 1 );
            outs.push( <div key={ 'outc' } style={ outc }>Lapse</div> );
            comp.push( <div key={ 'scnb' } ref={ this.refb } style={ scnb }>{ outs }</div> );

            let scnc = press.style.docker( 150, 250, 150, 150 );
            let sums = [];
            let sumf = ( a, b, n ) => {
                let p = press.style.docker(  0, 0, 50, 30 ).font( 20, tran, 1 ).align( 'right' );
                let x = press.style.docker( 50, 0, 20, 30 ).font( 16, tran, 1 ).align( 'right' );
                let q = press.style.docker( 70, 0, 80, 30 ).font( 20, tran, 1 ).align( 'right' );
                let c = press.style.docker(  0, n, 150, 30 );
                return (
                    <div key={ 'sum-' + n } style={ c }>
                        <div key={ 'perc' } style={ p }>{ a }</div>
                        <div key={ 'crss' } style={ x }>{ 'x' }</div>
                        <div key={ 'prob' } style={ q }>{ b }</div>
                    </div>
                );
            }
            sums.push( sumf( '+4%', '0.4103', 0 ) );
            sums.push( sumf( '-4%', '0.1641', 50 ) );
            let sumb = press.style.docker( 0, 100, 150, 30 ).font( 20, tran, 1 ).align( 'right' );
            sums.push( <div key={ 'sumb' } style={ sumb }>... ~ 0</div> );
            comp.push( <div key={ 'scnc' } ref={ this.refc } style={ scnc }>{ sums }</div> );

            let scnd = press.style.docker( -50, 200, 0, 20 ).underline( 1, tran );
            comp.push( <div key={ 'scnd' } ref={ this.refd } style={ scnd }/> );

            let scne = press.style.docker( 150, 240, 150, 100 );
            let toto = [];
            toto.push( sumf( '4%', '0.2462', 0 ) );
            let chra = press.style.docker( 0, 50, 150, 30 ).font( 20, tran, 1 ).align( 'right' );
            toto.push( <div key={ 'chra' } style={ chra }>0.9848%</div> );
            let chrb = press.style.docker( 0, 80, 150, 20 ).font( 16, tran, 1 ).align( 'right' );
            toto.push( <div key={ 'chrb' } style={ chrb }>expected returns</div> );
            comp.push( <div key={ 'scne' } ref={ this.refe } style={ scne }>{ toto }</div> );

            let blnd = press.style.docker( 0, 0, 500, 500 ).tint( 0 );
            comp.push( <div key={ 'blnd' } style={ blnd }/> );

            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 50, 200, 500, 500 ).rank( 3000 );
            return (
                <div style={ back }>
                    <div ref={ this.refy } style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class BlindTwo extends React.Component {
        constructor( props ) {
            super( props );
            this.refb = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup() {
            press.wire.fire( 'intrup', 17 );
        }
        txdn( evnt ) {
            switch ( evnt.detail.what ) {
                case 16: {
                    let hide = press.color.mono( 0, 1 );
                    let time = new WrapTimeLine( { onComplete : this.txup } );
                    time.add( TweenLite.to( this.refb.current, 3, { backgroundColor : hide } ) );
                    break;
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 0, 0, 900, 800 ).tint( 0 ).rank( 4000 );
            return (
                <div style={ back }>
                    <div ref={ this.refb } style={ face }/>
                </div>
            );
        }
    }

    class DigitRain extends React.Component {
        constructor( props ) {
            super( props );
            this.refc = React.createRef();
        }
        componentDidMount() {
            let elms = this.refc.current.children;
            let fade = press.color.rgba( 0, 196, 0, 0.1 );
            let time = new WrapTimeLine( { autoRemoveChildren : true } );
            for ( let n = 0; n < this.props.round; ++ n ) {
                let size = Math.floor( Math.random() * this.props.size );
                let alph = 0.1 * ( 1 + Math.floor( Math.random() * 10 ) );
                let beam = press.color.rgba( 0, 196, 0, alph );
                for ( let i = 0; i < size; ++ i ) {
                    time.add( TweenLite.to( elms[ i ], 0.1, { color : beam } ) );
                }
                for ( let i = 0; i < size; ++ i ) {
                    time.add( TweenLite.to( elms[ i ], 0.1, { color : fade } ) );
                }
            }
        }
        render() {
            let wide = this.props.wide;
            let pale = press.color.rgba( 0, 196, 0, 0 );
            let cbox = ( n ) => {
                return press.style.docker( 0, n * wide, wide, wide ).font( 14, pale, 1 );
            }
            let comp = [];
            for ( let i = 0; i < this.props.size; ++ i ) {
                let numi = Math.floor( 10 * Math.random() );
                comp.push( <div key={ 'box-' + i } style={ cbox( i ) }>{ numi }</div> );
            }
            let xpos = this.props.offset * wide;
            let back = press.style.docker( xpos, 0, wide, this.props.size * wide );
            return <div key={ 'back' } ref={ this.refc } style={ back }>{ comp }</div>;
        }
    }

    class DataFeed extends React.Component {
        constructor( props ) {
            super( props );
        }
        render() {
            let comp = [];
            for ( let i = 0; i < 25; ++ i ) {
                let addn = Math.floor( Math.random() * 5 );
                let prop = { offset : i, wide : 16, size : 15 + addn, round : 25 };
                comp.push( <DigitRain key={ 'rain-' + i } { ...prop }/> );
            }
            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 400, 100, 500, 400 ).rank( 1000 );
            return (
                <div style={ back }>
                    <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class DataEntry extends React.Component {
        constructor( props ) {
            super( props );
            this.refw = React.createRef();
        }
        componentDidMount() {
            let time = new WrapTimeLine( { autoRemoveChildren : true } );
            time.add( TweenLite.to( {}, this.props.wait, {} ) );
            for ( let i = 0; i < this.props.round; ++ i ) {
                time.add( TweenLite.to( {}, 1, {} ) );
                let alph = 0.5 + 0.1 * ( 1 + Math.floor( Math.random() * 5 ) );
                let blur = 1 + Math.floor( Math.pow( Math.random(), 2 ) * 25 );
                let prop = { color : press.color.mono( 255, alph ), filter : 'blur(' + blur + 'px)' }
                time.add( TweenLite.to( this.refw.current, 2, prop ) );
                let dura = 3 + Math.floor( Math.random() * 5 );
                let fade = { color : press.color.mono( 255, 0 ) };
                time.add( TweenLite.to( this.refw.current, dura, fade ) );
                let font = 14 + 2 * Math.floor( Math.random() * 7 );
                let xpos = Math.floor( this.props.cx + press.gauss() * this.props.sx );
                let ypos = Math.floor( this.props.cy + press.gauss() * this.props.sy );
                let relo = { left : xpos + 'px', top : ypos + 'px', fontSize : font, filter : 'blur(1px)' }
                time.add( TweenLite.to( this.refw.current, 0, relo ) );
            }
        }
        render() {
            let tran = press.color.mono( 255, 0 );
            let xpos = Math.floor( this.props.cx + press.gauss() * this.props.sx );
            let ypos = Math.floor( this.props.cy + press.gauss() * this.props.sy );
            let word = press.style.absolute().place( xpos, ypos ).font( 14, tran, 1 ).add( { blur : '1px', transform : 'translateZ(0)' } );
            return <div ref={ this.refw } style={ word }>{ this.props.word }</div>;
        }
    }

    class DataCloud extends React.Component {
        constructor( props ) {
            super( props );
        }
        render() {
            let data = [
                'price', 'volume', 'revenue', 'EPS', 'P/E', 
                'sales', 'dividend', 'disclosure', 'buy', 'sell', 
                'drip', 'debt ratio', 'pattern', 'tick', 'reverse split', 
                'merger', 'buy-back', 'rights issue', 'split', 'acquisition', 
                'spin-off', 'tender', 'takeover', 'capital gain', 
                'bonus shares', 'market cap', 'open', 'close', 'high', 
                'low', 'suspension', 'FX', 'Feds', 'rate', 
                'FDA', 'disruption'
            ]
            let tran = press.color.mono( 255, 0 );
            let comp = [];
            let prop = { cx : 150, cy : 50, sx : 50, sy : 15, round : 3 };
            data.map( ( t, n ) => {
                comp.push( <DataEntry key={ t } word={ t } wait={ ( n % 7 ) * 0.5 } { ...prop }/> );
            } );
            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 400, 0, 500, 200 );
            return (
                <div style={ back }>
                    <div style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class Poster extends React.Component {
        constructor( props ) {
            super( props );
            this.refa = React.createRef();
            this.refb = React.createRef();
            this.txup = this.txup.bind( this );
        }
        txup( n ) {
            press.wire.fire( 'intrup', n );
        }
        componentDidMount() {
            let time = new WrapTimeLine( { onComplete : this.txup, onCompleteParams : [ 18 ] } );
            time.add( TweenLite.to( this.refb.current, 3, { backgroundColor : press.color.mono( 0, 0.5 ) } ) );
            let pltt = press.palette();
            let whte = pltt.white;
            let dark = press.color.mono( 255, 0.4 );
            let grey = press.color.mono( 255, 0.2 );
            let tran = press.color.mono( 255, 0.05 );
            let hide = press.color.mono( 255, 0 );
            let cont = this.refa.current.children;
            time.add( TweenLite.to( cont[ 0 ], 3, { color : whte } ) );
            time.add( [
                TweenLite.to( cont[ 0 ], 3, { color : grey } ),
                TweenLite.to( cont[ 1 ], 3, { color : whte } )
            ] );
            time.add( [
                TweenLite.to( cont[ 1 ], 3, { color : grey } ),
                TweenLite.to( cont[ 2 ], 3, { color : whte } )
            ] );
            time.add( [
                TweenLite.to( cont[ 2 ], 3, { color : grey } ),
                TweenLite.to( cont[ 3 ], 3, { color : whte } )
            ] );
            time.add( [
                TweenLite.to( cont[ 0 ], 3, { color : tran } ),
                TweenLite.to( cont[ 1 ], 3, { color : tran } ),
                TweenLite.to( cont[ 2 ], 3, { color : tran } ),
                TweenLite.to( cont[ 3 ], 3, { color : tran } ),
                TweenLite.to( cont[ 4 ], 3, { color : whte } )
            ] );
            time.add( [
                TweenLite.to( cont[ 5 ], 3, { color : whte } )
            ] );
            time.add( [
                TweenLite.to( cont[ 4 ], 2, { color : dark } ),
                TweenLite.to( cont[ 5 ], 2, { color : dark } ),
                TweenLite.to( cont[ 6 ], 3, { color : whte } )
            ] );
            time.add( [
                TweenLite.to( cont[ 0 ], 3, { color : hide } ),
                TweenLite.to( cont[ 1 ], 3, { color : hide } ),
                TweenLite.to( cont[ 2 ], 3, { color : hide } ),
                TweenLite.to( cont[ 3 ], 3, { color : hide } ),
                TweenLite.to( cont[ 4 ], 3, { color : grey } ),
                TweenLite.to( cont[ 5 ], 3, { color : grey } ),
                TweenLite.to( cont[ 6 ], 3, { color : dark } )
            ] );
            time.add( [
                TweenLite.to( cont[ 4 ], 3, { color : hide } ),
                TweenLite.to( cont[ 5 ], 3, { color : hide } ),
                TweenLite.to( cont[ 6 ], 3, { color : tran } )
            ] );
        }
        render() {
            let tran = press.color.mono( 255, 0 );
            let opaq = press.color.mono( 0, 1 );
            let comp = [];

            let lina = ( c, n, s ) => {
                let nara = press.style.docker( 0, n * 50, 700, 50 ).font( 24, tran, 1 );
                c.push( <div key={ 'nara-' + n } style={ nara }>{ s }</div> );
            }
            lina( comp, 0, '1800+ blue chips from NYSE and NASDAQ' );
            lina( comp, 1, '390 minutes a trading day' );
            lina( comp, 2, '3 target profit levels' );
            lina( comp, 3, '800+ from TOKYO as well' );

            let linb = ( c, n, s ) => {
                let narb = press.style.docker( 100, 30 + n * 70, 800, 70 ).font( 40, tran, 2 );
                c.push( <div key={ 'narb-' + n } style={ narb }>{ s }</div> );
            }
            
            linb( comp, 0, 'over a million probabilities a day' );
            linb( comp, 1, 'you can cherry pick' );

            let narc = press.style.docker( 150, 190, 800, 80 ).font( 48, tran, 2 );
            comp.push( <div key={ 'narc' } style={ narc }>Trading Opportunities</div> );
            
            let back = fr19a.grid.core( this.props.device ).back( opaq ).rank( 5000 );
            let face = press.style.docker( 0, 150, 900, 500 );
            return (
                <div ref={ this.refb } style={ back }>
                    <div ref={ this.refa } style={ face }>{ comp }</div>
                </div>
            );
        }
    }

    class Machine extends React.Component {
        constructor( props ) {
            super( props );
            this.refa = React.createRef();
            this.refb = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup() {
            press.wire.fire( 'intrup', 20 );
        }
        txdn( evnt ) {
            switch ( evnt.detail.what ) {
                case 19: {
                    let pltt = press.palette();
                    let grey = press.color.mono( 255, 0.2 );
                    let pale = press.color.mono( 255, 0.1 );
                    let cont = this.refb.current.children;
                    let time = new WrapTimeLine( { onComplete : this.txup } );
                    time.add( TweenLite.to( this.refa.current, 3, { color : pltt.white, ease : Power1.easeIn } ) );
                    time.add( [
                        TweenLite.to( this.refa.current, 3, { color : grey } ),
                        TweenLite.to( cont[ 0 ], 3, { fill : grey, ease : Power1.easeIn } ),
                        TweenLite.to( cont[ 2 ], 3, { stroke : grey, ease : Power1.easeIn } ),
                        TweenLite.to( cont[ 3 ], 3, { stroke : grey, ease : Power1.easeIn } ),
                        TweenLite.to( cont[ 4 ], 3, { stroke : grey, ease : Power1.easeIn } )
                    ] );
                    time.add( [
                        TweenLite.to( cont[ 1 ], 3, { stroke : pltt.ruby, ease : Power1.easeIn } ),
                        TweenLite.to( cont[ 3 ], 3, { fill : pltt.orange, ease : Power1.easeIn } )
                    ] );
                    time.add( TweenLite.to( {}, 1, {} ) );
                    time.add( [
                        TweenLite.to( cont[ 0 ], 3, { fill : pale } ),
                        TweenLite.to( cont[ 1 ], 3, { stroke : pale } ),
                        TweenLite.to( cont[ 2 ], 3, { stroke : pale } ),
                        TweenLite.to( cont[ 3 ], 3, { fill : pale } ),
                        TweenLite.to( cont[ 1 ], 4, { stroke : pale } )
                    ] );
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
            
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let tran = press.color.mono( 255, 0 );
            let comp = [];
            let embd = press.style.docker( 250, 50, 400, 50 ).font( 32, tran, 2 );
            comp.push( <div key={ 'embd' } ref={ this.refa } style={ embd }>AI: embedded</div> )
            let engn = press.style.docker( 250, 100, 400, 400 );
            comp.push(
                <div key={ 'engn' } style={ engn }>
                    <svg ref={ this.refb } viewBox={ '0 0 40000 40000' }>
                        <path d={ fr19a.engine.hub( 20000, 20000, 8000 ) } fill={ tran }/>
                        <path d={ fr19a.engine.spoke( 20000, 20000, 10000, 13000, 72, 5, 20 ) } stroke={ tran } strokeWidth={ 300 }/>
                        <path d={ fr19a.engine.rim( 20000, 20000, 13500, 15000, 0.15, 54, 2, 40 ) } stroke={ tran } strokeWidth={ 100 } fill={ tran }/>
                        <path d={ fr19a.engine.rim( 20000, 20000, 15500, 17000, 0.15, 54, 0, 30 ) } fill={ tran }/>
                        <path d={ fr19a.engine.fringe( 20000, 20000, 17500 ) } stroke={ tran } strokeWidth={ 200 } fill={ tran }/>
                    </svg>
                </div>
            );

            let back = fr19a.grid.core( this.props.device ).rank( 5500 );            
            return <div style={ back }>{ comp }</div>;
        }
    }

    class BlindThree extends React.Component {
        constructor( props ) {
            super( props );
            this.refb = React.createRef();
            this.txup = this.txup.bind( this );
            this.txdn = this.txdn.bind( this );
        }
        txup() {
            press.wire.fire( 'intrup', 19 );
        }
        txdn( evnt ) {
            switch ( evnt.detail.what ) {
                case 18: {
                    let hide = press.color.mono( 0, 1 );
                    let time = new WrapTimeLine( { onComplete : this.txup } );
                    time.add( TweenLite.to( this.refb.current, 3, { backgroundColor : hide, height : 670 } ) );
                    break;
                }
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrdn', this.txdn );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrdn', this.txdn );
        }
        render() {
            let prop = { device : this.props.device };
            let back = fr19a.grid.core( this.props.device );
            let face = press.style.docker( 0, 0, 900, 0 ).tint( 0 ).rank( 5000 );
            return (
                <div style={ back }>
                    <div ref={ this.refb } style={ face }/>
                </div>
            );
        }
    }

    class Logo extends React.Component {
        constructor( props ) {
            super( props );
            this.refb = React.createRef();
        }
        componentDidMount() {
            let time = new WrapTimeLine();
            time.add( TweenLite.to( this.refb.current, 5, { backgroundColor : press.color.mono( 0, 0 ), ease : Power1.easeIn } ) );
        }
        render() {
            let comp = [];
            let logo = press.logo.slider( 150, 200 );
            comp.push( <div key={ 'logo' } style={ logo }/> );
            let film = press.style.docker( 0, 0, 900, 670 ).tint( 1 ).rank( 1000 );
            comp.push( <div key={ 'film' } ref={ this.refb } style={ film }/> );
            let back = fr19a.grid.core( this.props.device );
            return (
                <div style={ back }>{ comp }</div>
            );
        }
    }

    class Intr extends React.Component {
        constructor( props ) {
            super( props );
            this.state = { phase : this.props.phase };
            this.echo = this.echo.bind( this );
            this.prelude = this.prelude.bind( this );
            this.probability = this.probability.bind( this );
            this.production = this.production.bind( this );
        }
        echo( evnt ) {
            let what = evnt.detail.what;
            press.wire.fire( 'intrdn', what );
            switch ( what ) {
                case 0:
                    this.setState( { phase : 0 } );
                    break;
                case 7:
                    this.setState( { phase : 1 } );
                    break;
                case 17:
                    this.setState( { phase : 2 } );
                    break;
                case 19:
                    this.setState( { phase : 3 } );
                    break;
                default:
                    break;
            }
        }
        componentDidMount() {
            window.addEventListener( 'reintrup', this.echo );
        }
        componentWillUnmount() {
            window.removeEventListener( 'reintrup', this.echo );
        }
        prelude( part ) {
            let prop = { device : this.props.device };
            part.push( <Thousand key={ 'thousand' } { ...prop }/> );
            part.push( <Performance key={ 'performance' } { ...prop }/> );
            part.push( <Cut key={ 'cut' } { ...prop }/> );
            part.push( <TopScreen key={ 'top-screen' } { ...prop }/> );
            part.push( <Bracket key={ 'bracket' } { ...prop }/> );
            part.push( <BlindOne key={ 'blind-one' } { ...prop }/> );
        }
        probability( part ) {
            let prop = { device : this.props.device };
            part.push( <Service key={ 'service' } { ...prop }/> );
            part.push( <Chart key={ 'chart' } { ...prop }/> );
            part.push( <Probability key={ 'probability' } { ...prop }/> );
            part.push( <BlindTwo key={ 'blind-two' } { ...prop }/> );
        }
        production( part ) {
            let prop = { device : this.props.device };
            part.push( <DataCloud key={ 'data-cloud' } { ...prop }/> );
            part.push( <DataFeed key={ 'data-feed' } { ...prop }/> );
            part.push( <Poster key={ 'poster' } { ...prop }/> );
            part.push( <BlindThree key={ 'blind-three' } { ...prop }/> );
        }
        ending( part ) {
            let prop = { device : this.props.device };
            part.push( <Logo key={ 'logo' } { ...prop }/> );
        }
        render() {
            let pltt = press.palette();
            let comp = [];
            var bcol;
            
            switch ( this.state.phase ) {
                case 0: {
                    bcol = pltt.white;
                    this.prelude( comp );
                    break;
                }
                case 1: {
                    bcol = pltt.black;
                    this.probability( comp );
                    break;
                }
                case 2: {
                    bcol = pltt.black;
                    this.production( comp );
                    break;
                }
                case 3: {
                    bcol = pltt.black;
                    this.ending( comp );
                    break;
                }
            }
            
            let back = press.style.board( 0, bcol );
            return <div style={ back }>{ comp }</div>;
        }
    }

    fr19a.Intr = Intr;

} )( global.fr19a = global.fr19a || {} )

exports.fr19a = fr19a;
