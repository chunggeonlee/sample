( function( fr19b, undefined ) {

    class Product extends React.Component {
        constructor( props ) {
            super( props );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
        }
        port() {
            let pltt = press.palette();
            let pale = press.color.grey( 216 );
            return {
                head: press.style.docker( 0, 0, 670, 50 ).font( 32, pltt.ruby, 1 ),
                tree: press.style.docker( 0, 50, 670, 100 ),
                scorehead: press.style.docker( 0, 180, 400, 20 ).font( 14, pltt.ruby, 1 ),
                score: press.style.docker( 0, 200, 400, 270 ).edge( 1, pale ),
                scoretail: press.style.docker( 420, 320, 250, 140 ),
                trackhead: press.style.docker( 0, 500, 400, 20 ).font( 14, pltt.ruby, 1 ),
                track: press.style.docker( 0, 520, 400, 270 ).edge( 1, pale ),
                tracktail: press.style.docker( 420, 640, 250, 140 ),
                recap: press.style.docker( 0, 850, 670, 50 )
            }
        }
        land() {
            let pltt = press.palette();
            let pale = press.color.grey( 216 );
            return {
                head: press.style.docker( 0, 0, 670, 50 ).font( 32, pltt.ruby, 1 ),
                tree: press.style.docker( 0, 50, 670, 100 ),
                scorehead: press.style.docker( 30, 420, 270, 20 ).font( 14, pltt.ruby, 1 ).add( { 
                    transform: 'rotate(-90deg)', transformOrigin: 'bottom left', textAlign: 'right' 
                } ),
                score: press.style.docker( 30, 170, 400, 270 ).edge( 1, pale ),
                scoretail: press.style.docker( 30, 470, 250, 150 ).noSpill(),
                trackhead: press.style.docker( 500, 420, 270, 20 ).font( 14, pltt.ruby, 1 ).add( {
                    transform: 'rotate(-90deg)', transformOrigin: 'bottom left', textAlign: 'right' 
                } ),
                track: press.style.docker( 500, 170, 400, 270 ).edge( 1, pale ),
                tracktail: press.style.docker( 500, 470, 400, 150 ),
                recap: press.style.docker( 0, 620, 670, 50 )
            }
        }
        tree() {
            let pltt = press.palette();
            let grey = press.color.grey( 64 );
            let tran = press.color.mono( 255, 0 );
            let part = [];
            let bran = press.style.docker( 0, 0, 120, 96 );
            part.push(
                <div key={ 'bran' } style={ bran }>
                <svg viewBox={ '0 0 50000 40000' }>
                <path d={ fr19b.branch.exit( 20000, 5000, 3000 ) } stroke={ pltt.mustard } strokeWidth={ 1200 } fill={ tran }/>
                </svg>
                </div>
            );
            let talk = press.style.docker( 120, 40, 550, 30 ).font( 16, pltt.black, 1 );
            part.push( <div key={ 'talk' } style={ talk }>{ 'probabilities of profit taking or drawdown in a week' }</div> );
            return part;
        }
        score() {
            let pltt = press.palette();
            let blck = pltt.black;
            let dark = press.color.grey( 64 );
            let grey = press.color.grey( 128 );
            let pale = press.color.grey( 216 );
            let line = [];
            let lina = press.style.docker( 0, 20, 360, 20 ).font( 16, blck, 1 );
            line.push( <div key={ 'lina' } style={ lina }>NASDAQ</div> );
            let linb = press.style.docker( 0, 40, 360, 20 ).font( 12, grey, 1 );
            line.push( <div key={ 'linb' } style={ linb }>2019 June 3, 13:09:00 EST</div> );
            let linc = press.style.docker( 0, 75, 360, 20 ).underline( 1, blck );
            let head = [];
            let parp = press.style.docker( 180, 5, 60, 15 ).font( 12, dark, 1 ).align( 'right' );
            head.push( <div key={ 'parp' } style={ parp }>price</div> );
            let para = press.style.docker( 240, 5, 60, 15 ).font( 12, dark, 1 ).align( 'right' );
            head.push( <div key={ 'para' } style={ para }>+4%</div> );
            let parb = press.style.docker( 300, 5, 60, 15 ).font( 12, dark, 1 ).align( 'right' );
            head.push( <div key={ 'parb' } style={ parb }>-4%</div> );
            line.push( <div key={ 'linc' } style={ linc }>{ head }</div> );            
            let colf = ( a, b, p, c, d, n ) => {
                let psty = press.style;
                let part = [];
                part.push( <div key={ 'a' } style={ psty.docker( 0,   10, 180, 15 ).font( 12, blck, 1 ).align( 'left' ) }>{ a }</div> );
                part.push( <div key={ 'b' } style={ psty.docker( 0,   25, 180, 15 ).font( 10, grey, 1 ).align( 'left' ) }>{ b }</div> );
                part.push( <div key={ 'p' } style={ psty.docker( 180, 10,  60, 15 ).font( 12, grey, 1 ).align( 'right' ) }>{ p }</div> );
                part.push( <div key={ 'c' } style={ psty.docker( 240, 10,  60, 15 ).font( 12, grey, 1 ).align( 'right' ) }>{ c }</div> );
                part.push( <div key={ 'd' } style={ psty.docker( 300, 10,  60, 15 ).font( 12, grey, 1 ).align( 'right' ) }>{ d }</div> );
                return <div key={ 'l' + n } style={ psty.docker( 0, 100 + 40 * n, 360, 40 ).underline( 1, pale ) }>{ part }</div>;
            };
            line.push( colf( 'FB', 'FACEBOOK A', 162.04, 23.01, 20.56, 0 ) );
            line.push( colf( 'AMZN', 'AMAZON', 1680.32, 41.03, 16.41, 1 ) );
            line.push( colf( 'NFLX', 'NETFLIX', 335.56, 32.55, 29.32, 2 ) );
            let innr = press.style.docker( 20, 20, 360, 240 );
            return <div style={ innr }>{ line }</div>;
        }
        scoretail() {
            let dark = press.color.grey(  64 );
            let grey = press.color.grey( 160 );
            let part = [];
            let deco = ( n, x ) => {
                let line = [];
                let boxi = press.style.docker( 0, n * 50, 250, 40 );
                let topi = press.style.docker( 0, 0, 250, 15 ).font( 14, dark, 1 );
                line.push( <div key={ 'top-' + n } style={ topi }>{ x[ 0 ] }</div> );
                let boti = press.style.docker( 0, 20, 250, 20 ).font( 14, grey, 1 );
                line.push( <div key={ 'bot-' + n } style={ boti }>{ x[ 1 ] }</div> );
                return <div key={ 'box-' + n } style={ boxi }>{ line }</div>;
            }
            let what = [ 'stocks with market cap > .5 billion', '700 to 1200 stocks per market' ];
            part.push( deco( 0, what ) );
            let when = [ 'every minute in the trading session', '300 to 390 minutes a day' ];
            part.push( deco( 1, when ) );
            return part;
        }
        track() {
            let pltt = press.palette();
            let blck = pltt.black;
            let dark = press.color.grey( 64 );
            let grey = press.color.grey( 128 );
            let pale = press.color.grey( 216 );
            let tran = press.color.mono( 255, 0 );
            let rowf = ( x, y, w, h, c ) => {
                return press.style.docker( x, y, w, h ).font( 12, c, 1 );
            }
            let line = [];
            line.push( <div key={ 'mart-0' } style={ rowf(   0,  0,  60, 20, grey ) }>Market</div> );
            line.push( <div key={ 'mart-1' } style={ rowf(  60,  0, 100, 20, blck ) }>NASDAQ</div> );
            line.push( <div key={ 'peri-0' } style={ rowf(   0, 20,  60, 20, grey ) }>Period</div> );
            line.push( <div key={ 'peri-1' } style={ rowf(  60, 20, 200, 20, blck ) }>{ '2018-04-01 \u2014 2019-04-01' }</div> );
            line.push( <div key={ 'levi-0' } style={ rowf(   0, 40,  60, 20, grey ) }>Event</div> );
            line.push( <div key={ 'levi-1' } style={ rowf(  60, 40, 100, 20, blck ) }>4% Up</div> );

            let topf = ( x ) => {
                return press.style.docker( x, 5, 60, 15 ).align( 'right' ).font( 12, dark, 1 );
            }
            let linc = press.style.docker( 0, 75, 360, 20 ).underline( 1, blck );
            let head = [];
            let call = press.style.docker( 0, 5, 60, 15 ).font( 12, dark, 1 );
            head.push( <div key={ 'head-0' } style={ call }>{ 'Forecasted' }</div> );
            head.push( <div key={ 'head-2' } style={ topf( 120 ) }>{ '25 - 35' }</div> );
            head.push( <div key={ 'head-3' } style={ topf( 180 ) }>{ '35 - 45' }</div> );
            head.push( <div key={ 'head-4' } style={ topf( 240 ) }>{ '45 - 55' }</div> );
            head.push( <div key={ 'head-5' } style={ topf( 300 ) }>{ '55 - 65' }</div> );
            line.push( <div key={ 'linc' } style={ linc }>{ head }</div> );            

            let colf = ( a, b, p, c, n ) => {
                let psty = press.style;
                let part = [];
                part.push( <div key={ 'a' } style={ psty.docker( 0, 10, 120, 15 ).font( 12, blck, 1 ).align( 'left' ) }>{ a }</div> );
                part.push( <div key={ 'b' } style={ psty.docker( 0, 25, 120, 15 ).font( 10, grey, 1 ).align( 'left' ) }>{ b }</div> );
                for ( let i = 0; i < 4; ++ i ) {
                    let x = i * 60 + 120;
                    part.push( <div key={ 'p-' + i } style={ psty.docker( x, 10, 60, 15 ).font( 12, grey, 1 ).align( 'right' ) }>{ p[ i ] }</div> );
                }
                return <div key={ 'l' + n } style={ psty.docker( 0, 100 + 40 * n, 360, 40 ).underline( 1, c ) }>{ part }</div>;
            };
            line.push( colf( 'Cases', 'in millions', [ 25.17, 23.04,  9.72,  0.87 ], pale, 0 ) );
            line.push( colf( '4% Up', 'in millions', [  7.48,  9.64,  4.56,  0.47 ], blck, 1 ) );
            line.push( colf( 'Actual', 'percentage',       [ 29.72, 41.84, 46.91, 54.02 ], tran, 2 ) );
            let innr = press.style.docker( 20, 20, 360, 240 );
            return <div style={ innr }>{ line }</div>;
        }
        tracktail() {
            let dark = press.color.grey(  64 );
            let grey = press.color.grey( 160 );
            let part = [];
            let deco = ( n, x ) => {
                let line = [];
                let boxi = press.style.docker( 0, n * 50, 250, 40 );
                let topi = press.style.docker( 0, 0, 250, 15 ).font( 14, dark, 1 );
                line.push( <div key={ 'top-' + n } style={ topi }>{ x[ 0 ] }</div> );
                let boti = press.style.docker( 0, 20, 250, 20 ).font( 14, grey, 1 );
                line.push( <div key={ 'bot-' + n } style={ boti }>{ x[ 1 ] }</div> );
                return <div key={ 'box-' + n } style={ boxi }>{ line }</div>;
            }
            let what = [ 'the credibility assessment', 'forecasted vs actual' ];
            part.push( deco( 0, what ) );
            let goal = [ 'transparency', 'any period in the past 10 years' ];
            part.push( deco( 1, goal ) );
            return part;
        }
        recap() {
            let pltt = press.palette();
            let deco = press.style.docker( 0, 0, 670, 50 ).font( 16, pltt.black, 1 ).align( 'left', '140%' );
            let text = 'Every single minute, we grade a few thousand short term trading opportunities with a coherent measure. It is a matter of cherry picking.';
            return <div style={ deco }>{ text }</div>;
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let pale = press.color.grey( 216 );
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();

            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Our Approach</div> );
            comp.push( <div key={ 'tree' } style={ plan.tree }>{ this.tree() }</div> );

            comp.push( <div key={ 'scrh' } style={ plan.scorehead }>{ 'live score \u2014 3%, 4%, 5% selectable' }</div> );
            comp.push( <div key={ 'scrs' } style={ plan.score }>{ this.score() }</div> );
            comp.push( <div key={ 'scrt' } style={ plan.scoretail }>{ this.scoretail() }</div> );


            comp.push( <div key={ 'trkh' } style={ plan.trackhead }>{ 'track record \u2014 any period in the past' }</div> );
            comp.push( <div key={ 'trck' } style={ plan.track }>{ this.track() }</div> );
            comp.push( <div key={ 'trct' } style={ plan.tracktail }>{ this.tracktail() }</div> );

            comp.push( <div key={ 'recp' } style={ plan.recap }>{ this.recap() }</div> );

            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, 3 * size, '100%', size ).back( pltt.white );
            return ( 
                <div ref={ this.refb } style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Product = Product;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
