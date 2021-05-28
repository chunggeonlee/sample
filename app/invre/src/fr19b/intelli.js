( function( fr19b, undefined ) {

    class Intelli extends React.Component {
        constructor( props ) {
            super( props );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
        }
        port() {
            let pltt = press.palette();
            let pale = press.color.grey( 216 );
            return {
                basis: 0,
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.ruby, 1 ),
                source: press.style.docker( 0, 80, 300, 100 ),
                crux: press.style.docker( 320, 120, 350, 60 ),
                issue: press.style.docker( 0, 220, 280, 320 ).edge( 1, pale ),
                complexity: press.style.docker( 320, 220, 280, 320 ).edge( 1, pale ),
                system: press.style.docker( 0, 580, 280, 320 ).edge( 1, pale ),
                ours: press.style.docker( 320, 580, 350, 280 )
            }
        }
        land() {
            let pltt = press.palette();
            let pale = press.color.grey( 216 );
            return {
                basis: 1,
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.ruby, 1 ),
                source: press.style.docker( 0, 80, 300, 100 ),
                crux: press.style.docker( 310, 100, 500, 100 ),
                issue: press.style.docker( 0, 220, 280, 320 ).edge( 1, pale ),
                complexity: press.style.docker( 310, 220, 280, 320 ).edge( 1, pale ),
                system: press.style.docker( 620, 220, 280, 320 ).edge( 1, pale ),
                ours: press.style.docker( 0, 570, 900, 100 )
            }
        }
        source() {
            let pltt = press.palette();
            let dark = press.color.grey( 64 );
            let pale = press.color.grey( 216 );
            let part = [];
            let axis = press.style.docker( 0, 0, 280, 30 ).underline( 1, dark );
            part.push( <div key={ 'axis' } style={ axis }/> );
            let left = press.numo.place.LEFT;
            let tict = press.style.docker(  65, 30, 5, 5 ).edge( 1, dark, left );
            part.push( <div key={ 'tict' } style={ tict }/> );
            let ticu = press.style.docker( 215, 30, 5, 5 ).edge( 1, dark, left );
            part.push( <div key={ 'ticu' } style={ ticu }/> );
            let labt = press.style.docker(  62, 40, 10, 10 ).font( 12, dark, 1 );
            part.push( <div key={ 'labt' } style={ labt }>T</div> );
            let labu = press.style.docker( 210, 40, 10, 10 ).font( 12, dark, 1 );
            part.push( <div key={ 'labu' } style={ labu }>U</div> );
            let bxyz = press.style.docker(  15,  0, 120, 20 ).font( 14, dark, 1 );
            part.push( <div key={ 'bxyz' } style={ bxyz }>{ 'buy XYZ at $95' }</div> )
            let sxyz = press.style.docker( 165,  0, 120, 20 ).font( 14, dark, 1 );
            part.push( <div key={ 'sxyz' } style={ sxyz }>{ 'sell XYZ at $78' }</div> )
            let boxi = press.style.docker(   0, 60, 280, 40 ).edge( 1, pale );
            let data = [];
            let west = press.style.docker(  15, 10, 100, 30 ).font( 14, pltt.turquoise, 1 ).align( 'center', '140%' );
            data.push( <div key={ 'west' } style={ west }>{ 'all about XYZ' }</div> );
            let east = press.style.docker( 165, 10, 100, 30 ).font( 14, pltt.turquoise, 1 ).align( 'center', '140%' );
            data.push( <div key={ 'east' } style={ east }>{ 'profit/loss' }</div> );
            part.push( <div key={ 'boxi' } style={ boxi }>{ data }</div> );
            return part;
        }
        engine() {
            let grey = press.color.grey( 96 );
            let pale = press.color.grey( 216 );
            let tran = press.color.mono( 255, 0 );
            let part = [];
            let cran = press.path( 0, 8000 );
            cran.lineTo( 2500, 8000 ).lineTo( 2500, 5000 ).lineTo( 8500, 5000 ).moveTo( 20500, 5000 ).lineTo( 26500, 5000 );
            let tick = press.path( 8500, 5000 );
            tick.lineTo( 8500, 5500 ).lineTo( 9500, 5000 ).lineTo( 8500, 4500 ).lineTo( 8500, 5000 ).moveTo( 26500, 50000 );
            tick.lineTo( 26500, 5500 ).lineTo( 27500, 5000 ).lineTo( 26500, 4500 ).lineTo( 26500, 5000 );
            let grim = press.style.docker( 0, 0, 280, 100 );
            part.push( 
                <div key={ 'grim' } style={ grim }>
                <svg viewBox={ '0 0 28000 10000' }>
                <path d={ fr19b.engine.fringe( 15000, 5000, 4000 ) + fr19b.engine.hole( 15000, 5000, 3000 ) } fill={ pale }/>
                <path d={ cran.trail } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                <path d={ tick.trail } fill={ pale }/>
                </svg>
                </div>
            );
            let pltt = press.palette();
            let core = press.style.docker( 135, 38, 40, 30 ).font( 24, pale, 3 );
            part.push( <div key={ 'core' } style={ core }>{ 'AI:' }</div> );
            return part;
        }
        crux() {
            let pltt = press.palette();
            let text = 'To transform a research model into a business model, we need to overcome a number of real world complexities'
            let deco = press.style.docker( 0, 0, '100%', '100%' ).font( 16, pltt.orange, 1 ).align( 'left', '140%' );
            return <div style={ deco }>{ text }</div>;
        }
        issue() {
            let pltt = press.palette();
            let part = [];
            let deco = press.style.docker( 0, 0, 280, 190 ).back( pltt.mustard );
            let deci = press.style.docker( 15, 15, 250, 160 ).font( 24, pltt.white, 2 ).align( 'left', '140%' );
            let issu = 'what if the investor was awarded an additional security worth $23 between T and U?';
            part.push( 
                <div key={ 'head' } style={ deco }>
                <div style={ deci }>{ issu }</div>
                </div>
            );
            let grey = press.color.grey( 128 );
            let coac = press.style.docker( 15, 210, 250, 20 ).font( 16, pltt.mustard, 1 );
            part.push( <div key={ 'coac' } style={ coac }>{ 'Corporate Action' }</div> );
            let data = press.style.docker( 15, 240, 250, 20 ).font( 14, grey, 1 );
            part.push( <div key={ 'data' } style={ data }>{ 'stock price alone is not enough' }</div> );
            let calc = press.style.docker( 15, 258, 250, 20 ).font( 14, grey, 1 );
            part.push( <div key={ 'calc' } style={ calc }>{ 'to calculate profit/loss' }</div> );
            let ache = press.style.docker( 15, 280, 250, 20 ).font( 14, grey, 1 );
            part.push( <div key={ 'ache' } style={ ache }>{ 'a headache in the stock market' }</div> );
            return part;
        }
        complexity() {
            let part = [];
            let line = ( y, f, a, c ) => {
                let deco = press.style.docker( 15, y, 250, 25 ).font( f, c, 1 );
                return <div key={ 'line-' + y } style={ deco }>{ a }</div>;
            }
            let pltt = press.palette();
            let chic = pltt.mustard;
            let grey = press.color.grey( 128 );
            part.push( line(  15, 16, 'how often?', chic ) );
            part.push( line(  45, 14, '5 to 10 a day per 1000 stocks', grey ) );
            part.push( line(  65, 14, 'more in US, EU', grey ) );
            part.push( line(  95, 16, 'difficulties?', chic ) );
            part.push( line( 125, 14, 'expensive data', grey ) );
            part.push( line( 145, 14, 'complex data structure', grey ) );
            part.push( line( 165, 14, 'some actions are convoluted', grey ) );
            part.push( line( 185, 14, 'actions can be altered', grey ) );
            part.push( line( 205, 14, 'a stock becomes another one', grey ) );
            part.push( line( 235, 16, 'when is it needed?', chic ) );
            part.push( line( 265, 14, 'before market open on', grey ) );
            part.push( line( 285, 14, 'the effective day', grey ) );
            return part;
        }
        system() {
            let part = [];
            let line = ( y, f, a, c ) => {
                let deco = press.style.docker( 15, y, 250, 25 ).font( f, c, 1 );
                return <div key={ 'line-' + y } style={ deco }>{ a }</div>;
            }
            let pltt = press.palette();
            let chic = pltt.mustard;
            let grey = press.color.grey( 128 );
            part.push( line(  15, 16, 'how do pros handle it?', chic ) );
            part.push( line(  45, 14, 'reference system', pltt.turquoise ) );
            part.push( line(  65, 14, '\u2014 almanacs of securities', grey ) );
            part.push( line(  95, 16, 'where to get it?', chic ) );
            part.push( line( 125, 14, 'top tiers developed it inhouse,', grey ) );
            part.push( line( 145, 14, 'others buy enterprise systems', grey ) );
            part.push( line( 165, 14, '\u2014 expensive', grey ) );
            part.push( line( 195, 16, 'what else does one need?', chic ) );
            part.push( line( 225, 14, 'expensive data', grey ) );
            part.push( line( 245, 14, 'expert resources', grey ) );
            part.push( line( 265, 14, '\u2014 IT, middle office, analysts, ...', grey ) );
            return part;
        }
        serobs() {
            let part = [];
            return part;
        }
        garobs() {
            let pltt = press.palette();
            let dark = press.color.grey( 64 );
            let part = [];
            let deco = press.style.docker( 0, 0, '100%', '100%' ).font( 14, dark, 1 ).align( 'left', '160%' );
            let emph = press.style.font( 14, pltt.turquoise, 1 );
            let text = [];
            text.push( 'Buy Signal has developed a \u202f' );
            text.push( <span key={ 'emph' } style={ emph }>compact automated reference system</span> );
            text.push( ', which extracts 30+ different types of critical corporate events from SWIFT messages (ISO 15022/20022), compares the information from different sources for validation, and schedules the necessary tasks. All automated. From 45,000+ corporate actions in the past 10 years, we confirmed that our system handled 95% of the cases successfully without human interactions.' )
            part.push( <div key={ 'bsig' } style={ deco }>{ text }</div> );
            return part;
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();

            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Intellectual Property</div> );

            comp.push( <div key={ 'dsrc' } style={ plan.source }>{ this.source() }</div> );
            comp.push( <div key={ 'crux' } style={ plan.crux }>{ this.crux() }</div> );

            comp.push( <div key={ 'issu' } style={ plan.issue }>{ this.issue() }</div> );
            comp.push( <div key={ 'plex' } style={ plan.complexity }>{ this.complexity() }</div> );
            comp.push( <div key={ 'syst' } style={ plan.system }>{ this.system() }</div> );

            if ( plan.basis == 0 ) {
                comp.push( <div key={ 'ours' } style={ plan.ours }>{ this.garobs() }</div> );
            } else {
                comp.push( <div key={ 'ours' } style={ plan.ours }>{ this.garobs() }</div> );
            }

            let grey = press.color.grey( 216 );
            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, 7 * size, '100%', size ).back( pltt.white );
            return ( 
                <div ref={ this.refb } style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Intelli = Intelli;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
