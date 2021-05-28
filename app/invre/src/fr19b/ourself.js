( function( fr19b, undefined ) {

    class Ourself extends React.Component {
        constructor( props ) {
            super( props );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
        }
        port() {
            let pltt = press.palette();
            let chic = pltt.white;
            let lite = press.color.grey( 96 );
            return {
                basis: 0,
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, chic, 1 ),
                comb: press.style.docker( 0, 80, 420, 320 ),
                node: press.style.docker( 190, 300, 480, 320 ),
                splitter: press.style.docker( 0, 620, 670, 30 ).underline( 1, lite ),
                ahn: press.style.docker( 0, 620, 320, 280 ),
                kim: press.style.docker( 350, 620, 320, 280 )
            }
        }
        land() {
            let pltt = press.palette();
            let chic = pltt.white;
            let lite = press.color.grey( 96 );
            return {
                basis: 1,
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, chic, 1 ),
                comb: press.style.docker( 0, 80, 420, 320 ),
                node: press.style.docker( 420, 80, 480, 320 ),
                splitter: press.style.docker( 0, 400, 900, 30 ).underline( 1, lite ),
                ahn: press.style.docker( 0, 400, 320, 270 ),
                kim: press.style.docker( 450, 400, 320, 270 )
            }
        }
        expertise() {
            let pltt = press.palette();
            let dark = press.color.grey( 96 );
            let lite = press.color.grey( 128 );
            let chic = press.color.rgba( 0, 0, 255, 0.8 );
            let part = [];
            let item = ( n, x, y, a, c ) => {
                let deco = press.style.docker( x, y, 100, 100 ).font( 14, c, 1 ).align( 'left', '160%' );
                return <div key={ 'item-' + n } style={ deco }>{ a }</div>;
            }
            part.push( item(  0,  55,  40, 'systematic trading strategies', dark ) );
            part.push( item(  3,  55, 182, 'trading systems and operations', dark ) )
            part.push( item(  6, 180, 102, 'financial market \u2014 delta 1 and derivatives', dark ) );
            part.push( item(  8, 303,  28, 'to build innovative investment solutions', lite ) );

            let pnch = press.style.docker( 220, 230, 200, 20 ).font( 16, chic, 1 );
            part.push( <div key={ 'pnch' } style={ pnch }>{ 'expertise & experience' }</div> );
            return part;
        }
        connection() {
            let pltt = press.palette();
            let dark = press.color.grey( 96 );
            let lite = press.color.grey( 128 );
            let chic = press.color.rgba( 0, 0, 255, 0.8 );
            let part = [];
            let item = ( n, x, y, w, h, a, c ) => {
                let deco = press.style.docker( x, y, w, h ).font( 14, c, 1 ).align( 'left', '160%' );
                return <div key={ 'item-' + n } style={ deco }>{ a }</div>;
            }
            part.push( item( 0,  75, 140,  80,  50, 'to build up clients', lite ) );
            part.push( item( 1, 290, 110, 100, 140, 'hundreds of MD level investment professionals worldwide', dark ) );
            let pnch = press.style.docker( 120, 60, 200, 30 ).font( 16, chic, 1 );
            part.push( <div key={ 'pnch' } style={ pnch }>{ 'business connections' }</div> );
            return part;
        }
        founder() {
            let deco = press.style.docker( 0, 0, 120, 30 ).font( 16, press.palette().white, 1 );
            return <div style={ deco }>{ 'Co-Founders' }</div>;
        }
        ahn() {
            let pltt = press.palette();
            let dark = press.color.grey( 64 );
            let lite = press.color.grey( 128 );
            let part = [];
            let name = press.style.docker( 0, 0, 320, 30 ).font( 16, pltt.white, 1 );
            part.push( <div key={ 'name' } style={ name }>{ 'Hyungsok Ahn' }</div> );
            let item = ( n, f, s, a, c ) => {
                let deco = press.style.docker( s, 50 + n * 25, 320, 25 ).font( f, c, 1 );
                return <div key={ 'line-' + n } style={ deco }>{ a }</div>;
            }
            part.push( item( 0, 14,  0, 'Global Head, Analytics, Macquarie, HK', lite ) );
            part.push( item( 1, 14,  0, 'Global Head, Equity Quant, Nomura, UK', lite ) );
            part.push( item( 2, 14,  0, 'Head, Equity Quant, Commerzbank, UK', lite ) );
            part.push( item( 3, 14,  0, 'also at CPS (US), CALFP (UK), ...', lite ) );
            part.push( item( 4, 14,  0, 'Postdoctoral Researcher, Oxford, UK', lite ) );
            part.push( item( 5, 14,  0, 'Assistant Professor, UCSB, US', lite ) );
            part.push( item( 6, 14,  0, 'PhD, Statistics, Purdue, US', lite ) );
            part.push( item( 7, 14, 10, '\u2014 thesis topic in Probability Theory', dark ) );
            part.push( item( 8, 14,  0, 'BA, Seoul National University, KR', lite ) );
            return part;
        }
        kim() {
            let pltt = press.palette();
            let lite = press.color.grey( 128 );
            let part = [];
            let name = press.style.docker( 0, 0, 320, 30 ).font( 16, pltt.white, 1 );
            part.push( <div key={ 'name' } style={ name }>{ 'Heedong Kim' }</div> );
            let item = ( n, f, s, a, c ) => {
                let deco = press.style.docker( s, 50 + n * 25, 320, 25 ).font( f, c, 1 );
                return <div key={ 'line-' + n } style={ deco }>{ a }</div>;
            }
            part.push( item( 0, 14,  0, 'MD, NH Investment & Securities, KR', lite ) );
            part.push( item( 1, 14,  0, 'MD, Dong Yang Securities, KR', lite ) );
            part.push( item( 2, 14,  0, 'GM, Korea Exchange Bank, KR', lite ) );
            part.push( item( 3, 14,  0, 'MBA, Cornell University, US', lite ) );
            part.push( item( 4, 14,  0, 'BA, Seoul National University, KR', lite ) );
            return part;
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();

            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Founders</div> );

            let dark = press.color.grey( 64 );
            let chic = press.color.grey( 128 );
            let tran = press.color.mono( 255, 0 );
            comp.push( 
                <div key={ 'comb' } style={ plan.comb }>
                <svg viewBox={ '0 0 41000 32000' }>
                <path d={ fr19b.hexmap.triple(  1000, 7200, 8000 ) } stroke={ dark } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19b.hexmap.single( 25000, 7200, 8000 ) } stroke={ chic } strokeWidth={ 200 } fill={ tran }/>
                </svg>
                { this.expertise() }
                </div>
            );
            comp.push(
                <div key={ 'node' } style={ plan.node }>
                <svg viewBox={ '0 0 48000 32000' }>
                <path d={ fr19b.engine.hole( 34000, 16000, 12000 ) } stroke={ dark } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19b.engine.hole( 11000, 16000, 5000 ) } stroke={ chic } strokeWidth={ 200 } fill={ tran }/>
                <path d={ 'M16000,16000H22000' } stroke={ dark } strokeWidth={ 100 } fill={ tran }/>
                </svg>
                { this.connection() }
                </div>
            );
            
            comp.push( <div key={ 'splt' } style={ plan.splitter }/> );
            comp.push( <div key={ 'ahns' } style={ plan.ahn }>{ this.ahn() }</div> );
            comp.push( <div key={ 'kims' } style={ plan.kim }>{ this.kim() }</div> );


            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, 9 * size, '100%', size ).back( pltt.navy );
            return ( 
                <div ref={ this.refb } style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Ourself = Ourself;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
