( function( fr19b, undefined ) {

    class Concept extends React.Component {
        constructor( props ) {
            super( props );
            this.refb = React.createRef();
            this.phrase = this.phrase.bind( this );
            this.thoughts = this.thoughts.bind( this );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
        }
        port() {
            let pltt = press.palette();
            let pale = press.color.grey( 128 );
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.white, 1 ),
                gist: press.style.docker( 0, 80, 600, 60 ).font( 16, pale, 1 ),
                line: [
                    press.style.docker( 0, 0, 600, 30 ),
                    press.style.docker( 0, 30, 600, 30 )
                ],
                gear: press.style.docker( 0, 280, 450, 450 ),
                card: [
                    press.style.docker(   0, 260, 200, 50 ),
                    press.style.docker( 410, 320, 200, 70 ),
                    press.style.docker( 470, 470, 200, 80 ),
                    press.style.docker( 410, 640, 200, 70 ),
                    press.style.docker( 120, 750, 200, 50 )
                ]
            };
        }
        land() {
            let pltt = press.palette();
            let pale = press.color.grey( 128 );
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.white, 1 ),
                gist: press.style.docker( 0, 80, 600, 60 ).font( 16, pale, 1 ),
                line: [
                    press.style.docker( 0, 0, 600, 30 ),
                    press.style.docker( 0, 30, 600, 30 )
                ],
                gear: press.style.docker( 200, 140, 450, 450 ),
                card: [
                    press.style.docker(   0, 355, 200, 50 ),
                    press.style.docker( 610, 170, 200, 70 ),
                    press.style.docker( 670, 330, 200, 80 ),
                    press.style.docker( 610, 500, 200, 70 ),
                    press.style.docker( 320, 610, 200, 50 )
                ]
            };
        }
        phrase() {
            return [
                'Good human traders are systematic and disciplined',
                'Can computerised intelligence replace good human traders?'
            ];
        }
        thoughts() {
            let hard = press.palette().white;
            let pale = press.color.grey( 128 );
            let rule = ( x, y, h, n, c ) => {
                return press.style.docker( x, y, 200 - x, h ).font( n, c, 1 );
            }
            let part = [];
            let lins = [];
            lins.push( <div key={ 's-00' } style={ rule( 60,  0, 30, 20, hard ) }>{ 'systematic?' }</div> );
            lins.push( <div key={ 's-01' } style={ rule( 60, 30, 20, 14, pale ) }>{ 'done in a fixed plan' }</div> );
            part.push( lins );
            let lina = [];
            lina.push( <div key={ 'u-00' } style={ rule( 0,  0, 30, 20, hard ) }>{ 'data + algorithm' }</div> );
            lina.push( <div key={ 'u-01' } style={ rule( 0, 30, 20, 14, pale ) }>{ 'the ultimate way to build' }</div> );
            lina.push( <div key={ 'u-02' } style={ rule( 0, 50, 20, 14, pale ) }>{ 'systematic solutions' }</div> );
            part.push( lina );
            let linb = [];
            linb.push( <div key={ 'u-10' } style={ rule( 0,  0, 25, 14, pale ) }>{ 'modern data science seeks' }</div> );
            linb.push( <div key={ 'u-11' } style={ rule( 0, 25, 30, 20, hard ) }>{ 'statistically optimal' }</div> );
            linb.push( <div key={ 'u-12' } style={ rule( 0, 55, 20, 14, pale ) }>{ 'solutions' }</div> );
            part.push( linb );
            let linc = [];
            linc.push( <div key={ 'u-20' } style={ rule( 0,  0, 30, 20, hard ) }>{ 'repetitions' }</div> );
            linc.push( <div key={ 'u-21' } style={ rule( 0, 30, 20, 14, pale ) }>{ 'over time are required' }</div> );
            linc.push( <div key={ 'u-22' } style={ rule( 0, 50, 20, 14, pale ) }>{ 'for convergence' }</div> );
            part.push( linc );
            let lind = [];
            lind.push( <div key={ 'u-31' } style={ rule( 0,  0, 30, 20, hard ) }>{ 'short term trading' }</div> );
            lind.push( <div key={ 'u-32' } style={ rule( 0, 30, 20, 14, pale ) }>{ 'one week \u2014 50 turns a year' }</div> );
            part.push( lind );
            return part;
        }
        render() {
            let devi = this.props.device;

            let pltt = press.palette();
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();
            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Concept</div> );

            let gist = [];
            let line = this.phrase();
            for ( let i = 0; i < 2; ++ i ) {
                gist.push( <div key={ 'line-' + i } style={ plan.line[ i ] }>{ line[ i ] }</div> );
            }
            comp.push( <div key={ 'gist' } style={ plan.gist }>{ gist }</div> );

            let stub = devi.portrait ? 2. / 3 : 1;
            let dark = pltt.burgundy;
            let grey = press.color.grey( 128 );
            let pale = pltt.orange;
            let tran = press.color.mono( 255, 0 );
            comp.push(
                <div key={ 'gear' } style={ plan.gear }>
                <svg ref={ this.refb } viewBox={ '0 0 50000 50000' }>
                <path d={ fr19b.engine.hub( 25000, 25000, 6000 ) } fill={ dark }/>
                <path d={ fr19b.engine.spoke( 25000, 25000, 8000, 10000, 72, 5, 10, 1 ) } stroke={ tran } strokeWidth={ 300 }/>
                <path d={ fr19b.engine.rim( 25000, 25000, 11200, 12500, 0.15, 54, 2, 40 ) } stroke={ pltt.cherry } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19b.engine.rim( 25000, 25000, 13000, 14500, 0.15, 54, 0, 30 ) } fill={ pltt.cherry }/>
                <path d={ fr19b.engine.fringe( 25000, 25000, 15500 ) } stroke={ dark } strokeWidth={ 200 } fill={ tran }/>
                <path d={ fr19b.engine.guard( 25000, 25000, 21000, 24000, stub, 0.253 ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19b.engine.guard( 25000, 25000, 21000, 24000, 0.247, 0.003 ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19b.engine.guard( 25000, 25000, 21000, 24000, 1.997, 1.753 ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19b.engine.guard( 25000, 25000, 21000, 24000, 1.747, 1.5 ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                </svg>
                </div>
            );

            let tink = this.thoughts();
            for ( let i = 0; i < 5; ++ i ) {
                comp.push( <div key={ 'blck-' + i } style={ plan.card[ i ] }>{ tink[ i ] }</div> );
            }

            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, size, '100%', size ).back( pltt.ruby );
            return ( 
                <div ref={ this.refb } style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Concept = Concept;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
