( function( fr19b, undefined ) {

    class Summary extends React.Component {
        constructor( props ) {
            super( props );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
            this.script = this.script.bind( this );
            this.crank = this.crank.bind( this );
            this.plain = this.plain.bind( this );
            this.flow = this.flow.bind( this );
            this.progress = this.progress.bind( this );
            this.synopsis = this.synopsis.bind( this );
        }
        script() {
            let text = [];
            text.push( [
                'Innovative', 'Investment Information', 'Service Provider', 
                'target annual earnings', 'USD 10M'
            ] );
            text.push( [
                'Profitable', 'AI Driven Active ETF', 'Manager',
                'target annual earnings',  'USD 30M'
            ] );
            text.push( [
                'Acclaimed', 'AI Driven Investment', 'Institution',
                'target annual earnings', 'USD 100M+'
            ] );
            return text;
        }
        crank( color ) {
            let part = [];
            part.push(
                <svg key={ 'crank' } viewBox={ '0 0 30000 30000' }>
                <path d={ fr19b.b123.crank( 900 ) } stroke={ color } strokeWidth={ 40 } fill={ color }/>
                </svg>
            );
            let num1 = press.style.docker( 38, 30, 30, 30 ).font( 36, color, 2 );
            part.push( <div key={ 'num1' } style={ num1 }>1</div> );
            let num2 = press.style.docker( 244, 30, 30, 30 ).font( 36, color, 2 );
            part.push( <div key={ 'num2' } style={ num2 }>2</div> );
            let num3 = press.style.docker( 244, 240, 30, 30 ).font( 36, color, 2 );
            part.push( <div key={ 'num3' } style={ num3 }>3</div> );
            return part;
        }
        plain( color ) {
            let part = [];
            part.push(
                <svg key={ 'crank' } viewBox={ '0 0 9000 60000' }>
                <path d={ fr19b.b123.plain( 900 ) } stroke={ color } strokeWidth={ 40 } fill={ color }/>
                </svg>
            );
            let num1 = press.style.docker( 38, 30, 30, 30 ).font( 36, color, 2 );
            part.push( <div key={ 'num1' } style={ num1 }>1</div> );
            let num2 = press.style.docker( 34, 285, 30, 30 ).font( 36, color, 2 );
            part.push( <div key={ 'num2' } style={ num2 }>2</div> );
            let num3 = press.style.docker( 34, 540, 30, 30 ).font( 36, color, 2 );
            part.push( <div key={ 'num3' } style={ num3 }>3</div> );
            return part;
        }
        flow( color ) {
            if ( fr19b.grid.portrait( this.props.device ) ) {
                return this.plain( color );
            } else {
                return this.crank( color );
            }
        }
        progress( color ) {
            let thck = 3;
            let grey = press.color.grey( 64 );
            let part = [];
            let bara = press.style.docker( 0, 0, 60, thck ).back( color[ 0 ] );
            part.push( <div key={ 'bara' } style={ bara }/> )
            let barb = press.style.docker( 60, 0, 90, thck ).back( color[ 1 ] );
            part.push( <div key={ 'barb' } style={ barb }/> )
            let tckb = press.style.docker( 60, 15, 90, 20 ).font( 12, grey, 1 );
            part.push( <div key={ 'tckb' } style={ tckb }>2yr</div> )
            let barc = press.style.docker( 150, 0, 90, thck ).back( color[ 2 ] );
            part.push( <div key={ 'barc' } style={ barc }/> )
            let tckc = press.style.docker( 150, 15, 90, 20 ).font( 12, grey, 1 );
            part.push( <div key={ 'tckc' } style={ tckc }>5yr</div> )
            return part;
        }
        synopsis( text, indx ) {
            let pltt = press.palette();
            let grey = press.color.grey( 128 );
            let pale = press.color.grey( 216 );
            let colx = [ pale, pale, pale ];
            colx[ indx ] = pltt.turquoise;
            let garo = 250;
            let part = [];
            let prep = press.style.docker( 0, 0, garo, 20 ).font( 16, grey, 1 );
            part.push( <div key={ 'prep' } style={ prep }>{ text[ 0 ] }</div> )
            let majr = press.style.docker( 0, 30, garo, 30 ).font( 20, pltt.black, 1 );
            part.push( <div key={ 'majr' } style={ majr }>{ text[ 1 ] }</div> );
            let minr = press.style.docker( 0, 60, garo, 30 ).font( 20, pltt.black, 1 );
            part.push( <div key={ 'minr' } style={ minr }>{ text[ 2 ] }</div> );
            let trev = press.style.docker( 0, 100, garo, 20 ).font( 14, grey, 1 );
            part.push( <div key={ 'trev' } style={ trev }>{ text[ 3 ] }</div> )
            let mony = press.style.docker( 0, 120, garo, 30 ).font( 20, pltt.black, 1 );
            part.push( <div key={ 'mony' } style={ mony }>{ text[ 4 ] }</div> );
            let peri = press.style.docker( 0, 160, garo, 30 );
            part.push( <div key={ 'peri' } style={ peri }>{ this.progress( colx ) }< /div> );
            return part;
        }
        land() {
            let pltt = press.palette();
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.ruby, 1 ),
                flow: press.style.docker( 280, 170, 300, 300 ),
                box: [ 
                    press.style.docker( 0, 120, 250, 200 ),
                    press.style.docker( 650, 120, 250, 200 ),
                    press.style.docker( 650, 370, 250, 200 )
                ]
            };
        }
        port() {
            let pltt = press.palette();
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.ruby, 1 ),
                flow: press.style.docker( 100, 150, 90, 600 ),
                box: [ 
                    press.style.docker( 300, 100, 250, 200 ),
                    press.style.docker( 300, 355, 250, 200 ),
                    press.style.docker( 300, 610, 250, 200 )
                ]
            };
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();
            let comp = [];

            let text = this.script();
            comp.push( <div key={ 'head' } style={ plan.head }>Executive Summary</div> );
            comp.push( 
                <div key={ 'flow' } style={ plan.flow }>{ this.flow( pltt.mustard ) }</div> 
            );
            for ( let i = 0; i < 3; ++ i ) {
                let nops = this.synopsis( text[ i ], i );
                comp.push( 
                    <div key={ 'box-' + i } style={ plan.box[ i ] }>{ nops }</div> 
                );
            }

            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, 0, '100%', size ).back( pltt.white );
            return ( 
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Summary = Summary;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
