( function( fr19b, undefined ) {

    class Service extends React.Component {
        constructor( props ) {
            super( props );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
        }
        port() {
            let pltt = press.palette();
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.white, 1 ),
                rational: press.style.docker( 0, 80, 670, 80 ),
                crux: press.style.docker( 0, 200, 400, 120 ),
                info: press.style.docker( 35, 320, 600, 320 ),
                boutique: press.style.docker( 0, 560, 670, 300 )
            }
        }
        land() {
            let pltt = press.palette();
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.white, 1 ),
                rational: press.style.docker( 0, 80, 670, 80 ),
                crux: press.style.docker( 0, 180, 400, 120 ),
                info: press.style.docker( 300, 200, 600, 320 ),
                boutique: press.style.docker( 0, 330, 670, 320 )
            }
        }
        label() {
            let pltt = press.palette();
            let cpub = press.color.mono( 128, 0.55 );
            let cpro = pltt.orange; 
            let labs = [];
            let reco = press.style.docker( 0, 162, 140, 20 ).font( 16, cpro, 1 );
            labs.push( <div key={ 'reco' } style={ reco }>recommendation</div> );
            let part = press.style.docker( 115, 192, 80, 20 ).font( 16, cpro, 1 );
            labs.push( <div key={ 'part' } style={ part }>community</div> );
            let anna = press.style.docker( 155, 222, 65, 20 ).font( 16, cpro, 1 );
            labs.push( <div key={ 'anna' } style={ anna }>analytics</div> );
            let tool = press.style.docker( 200, 252, 100, 20 ).font( 16, cpro, 1 );
            labs.push( <div key={ 'tool' } style={ tool }>research</div> );
            let data = press.style.docker( 295, 5, 100, 20 ).font( 16, cpub, 1 );
            labs.push( <div key={ 'data' } style={ data }>market data</div> );
            let disc = press.style.docker( 370, 45, 180, 20 ).font( 16, cpub, 1 );
            labs.push( <div key={ 'disc' } style={ disc }>corporate disclosure</div> );
            let coac = press.style.docker( 415, 95, 160, 20 ).font( 16, cpub, 1 );
            labs.push( <div key={ 'coac' } style={ coac }>corporate action</div> );
            let news = press.style.docker( 445, 162, 50, 20 ).font( 16, cpub, 1 );
            labs.push( <div key={ 'news' } style={ news }>news</div> );
            let econ = press.style.docker( 415, 230, 90, 20 ).font( 16, cpub, 1 );
            labs.push( <div key={ 'econ' } style={ econ }>economics</div> );
            let pubs = press.style.docker( 160, 80, 90, 20 ).font( 16, cpub, 1 );
            labs.push( <div key={ 'pubs' } style={ pubs }>{ 'public' }</div> );
            let priv = press.style.docker( 160, 105, 120, 20 ).font( 16, cpro, 1 );
            labs.push( <div key={ 'priv' } style={ priv }>{ 'proprietary' }</div> );
            return labs;
        }
        anatomy() {
            let pltt = press.palette();
            let tran = press.color.mono( 255, 0 );
            let core = pltt.cherry;
            let pubs = pltt.burgundy;
            let anat = press.style.docker( 140, 20, 300, 300 );
            return (
                <div key={ 'anat' } style={ anat }>
                <svg viewBox={ '0 0 30000 30000' }>
                <path d={ fr19b.chestnut.shell( 15000, 15000, 4000 ) } stroke={ core } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.spike( 15000, 15000, 4000, 14000, 1 ) } stroke={ core } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.spike( 15000, 15000, 4000, 8000, 1.125 ) } stroke={ core } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.spike( 15000, 15000, 4000, 8000, 1.25 ) } stroke={ core } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.spike( 15000, 15000, 4000, 8000, 1.375 ) } stroke={ core } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.skin( 15000, 15000, 10000, 2. / 3, 5. / 3 ) } stroke={ pubs } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.spike( 15000, 15000, 10000, 14000, 0.5 ) } stroke={ pubs } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.spike( 15000, 15000, 10000, 12500, 1. / 3 ) } stroke={ pubs } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.spike( 15000, 15000, 10000, 12500, 1. / 6 ) } stroke={ pubs } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.spike( 15000, 15000, 10000, 14000, 0 ) } stroke={ pubs } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.chestnut.spike( 15000, 15000, 10000, 12500, 11. / 6 ) } stroke={ pubs } strokeWidth={ 200 } fill={ tran }/>
                </svg>
                </div>
            );
        }
        histogram() {
            let pltt = press.palette();
            let chic = pltt.red;
            let dark = pltt.burgundy;
            let core = pltt.orange;
            let grey = press.color.grey( 128 );
            let tran = press.color.mono( 255, 0 );
            let data = [ 58, 61, 32, 9 ];
            let datb = [ 3, 2, 3, 1, 1, 0, 0, 1, 0, 1 ];
            let from = 0;
            let till = 320;
            let tick = [ 50, 100, 200, 300 ];
            let part = [];
            let hist = press.style.docker( 0, 0, 480, 240 );
            part.push( 
                <div key={ 'hist' } style={ hist }>
                <svg viewBox={ '0 0 32000 16000' }>
                <path d={ fr19b.plot.histogram( 2000, 14000, 1600, 400, data, 200 ) } stroke={ chic } strokeWidth={ 50 } fill={ tran }/>
                <path d={ fr19b.plot.histogram( 10000, 14000, 1600, 400, datb, 200 ) } fill={ core }/>
                <path d={ fr19b.plot.xaxis( 0, 32000, 14400, tick, 100, 400 ) } stroke={ chic } strokeWidth={ 50 } fill={ tran }/>
                </svg> 
                </div>
            );

            let desc = press.style.docker( 180, 125, 300, 50 );
            let majr = press.style.docker( 0, 0, 250, 25 ).font( 16, press.color.mono( 0, 0.4 ), 1 );
            let minr = press.style.docker( 0, 25, 300, 20 ).font( 14, press.color.mono( 128, 0.55 ), 1 );
            part.push( 
                <div key={ 'desc' } style={ desc }>
                <div style={ majr }>{ 'Boutique Research Services' }</div>
                <div style={ minr }>{ '172 from Seeking Alpha MarketPlace' }</div>
                </div> 
            );
            let post = ( x, y, n, c, k ) => {
                let psty = press.style.docker( x, y, 20, 20 ).font( 12, c, 1 );
                return <div key={ k } style={ psty }>{ n }</div>;
            }
            part.push( post(  70, 230,  50, chic, 'x-050' ) );
            part.push( post( 140, 230, 100, chic, 'x-100' ) );
            part.push( post( 290, 230, 200, chic, 'x-200' ) );
            part.push( post( 440, 230, 300, chic, 'x-300' ) );
            part.push( post(  90,  20,  61, chic, 'h-061' ) );

            let earn = press.style.docker( 0, 270, 320, 25 ).font( 14, grey, 1 );
            part.push( <div key={ 'earn' } style={ earn }>{ '$100 monthly x 10,000 clients = $12M yearly' }</div> )
            let hold = press.style.docker( 0, 295, 670, 25 ).font( 14, grey, 1 );
            part.push( <div key={ 'hold' } style={ hold }>{
                '13.9% of US households, 17.5 millions, directly own stocks \u2014 Federal Reserve, 2017 Sep'
            }</div> );
            return part;
        }
        rational() {
            let face = press.color.grey( 128 );
            let part = [];
            let body = press.style.docker( 0, 0, 670, 50 ).font( 16, face, 1 ).align( 'left', '140%' );
            part.push( <div key={ 'body' } style={ body }>{
                'A heavy development of software and system infrastructure is necessary for both systematic trading operations and information services. We will build our reputation and the required capital for the next step in the course of service business.'
            }</div> );
            return part;
        }
        crux() {
            let pltt = press.palette();
            let majr = press.color.mono( 0, 0.4 );
            let minr = press.color.mono( 128, 0.55 );
            let part = [];
            let deco = ( n, x ) => {
                let line = [];
                let boxi = press.style.docker( 0, n * 60, 670, 40 );
                let topi = press.style.docker( 0, 0, 670, 25 ).font( 16, majr, 1 );
                line.push( <div key={ 'top-' + n } style={ topi }>{ x[ 0 ] }</div> );
                let midi = press.style.docker( 0, 25, 670, 20 ).font( 14, minr, 1 );
                line.push( <div key={ 'mid-' + n } style={ midi }>{ x[ 1 ] }</div> );
                return <div key={ 'box-' + n } style={ boxi }>{ line }</div>;
            }
            part.push( deco( 0, [ 'Current Players', 'news agents, e brokers, fintech, online portals, research firms' ] ) );
            part.push( deco( 1, [ 'Value Drivers', 'proprietary research, active community, technology' ] ) );
            return part;
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();

            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Information Service</div> );
            comp.push( <div key={ 'rati' } style={ plan.rational }>{ this.rational() }</div> );
            comp.push( <div key={ 'crux' } style={ plan.crux }>{ this.crux() }</div> );

            let tran = press.color.mono( 255, 0 );
            let core = pltt.ruby;
            let pubs = pltt.orange;
            let chic = [];
            chic.push( this.anatomy() );
            chic.push( this.label() );
            comp.push( <div key={ 'info' } style={ plan.info }>{ chic }</div> );
            comp.push( <div key={ 'bout' } style={ plan.boutique }>{ this.histogram() }</div> );

            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, 4 * size, '100%', size ).back( pltt.ruby );
            return ( 
                <div ref={ this.refb } style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Service = Service;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
