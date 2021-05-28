( function( fr19b, undefined ) {

    class Earning extends React.Component {
        constructor( props ) {
            super( props );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
            this.result = this.result.bind( this );
            this.marker = this.marker.bind( this );
        }
        port() {
            let pltt = press.palette();
            let dark = press.color.grey( 96 );
            let grey = press.color.grey( 160 );
            let pale = press.color.grey( 216 );
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.ruby, 1 ),
                tabo: press.style.docker( 210, 50, 460, 620 ).edge( 1, pale ),
                tabi: press.style.docker( 20, 20, 420, 580 ),
                hbar: press.style.docker( 0, 252, 670, 5 ).clear().skyline( 1, pltt.ruby ),
                mark: press.style.docker( 0, 172, 120, 140 ),
                blah: press.style.docker( 0, 720, 670, 80 ).align( 'left', '140%' ).font( 16, dark, 1 ),
                wedo: press.style.docker( 0, 800, 670, 100 ).align( 'left', '140%' ).font( 16, dark, 1 )
            }
        }
        land() {
            let pltt = press.palette();
            let dark = press.color.grey( 96 );
            let grey = press.color.grey( 160 );
            let pale = press.color.grey( 216 );
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.ruby, 1 ),
                tabo: press.style.docker( 440, 50, 460, 620 ).edge( 1, pale ),
                tabi: press.style.docker( 20, 20, 420, 580 ),
                hbar: press.style.docker( 0, 252, 900, 5 ).clear().skyline( 1, pltt.ruby ),
                mark: press.style.docker( 0, 172, 120, 140 ),
                blah: press.style.docker( 0, 350, 400, 150 ).align( 'left', '140%' ).font( 16, dark, 1 ),
                wedo: press.style.docker( 0, 500, 400, 170 ).align( 'left', '140%' ).font( 16, dark, 1 )
            }
        }
        marker() {
            let pltt = press.palette();
            let part = [];
            let majr = press.style.docker( 0, 0, 120, 80 ).font( 80, pltt.ruby, 2 );
            let minr = press.style.docker( 0, 95, 120, 30 ).font( 14, pltt.ruby, 1 );
            part.push( <div key={ 'majr' } style={ majr }>25</div> );
            part.push( <div key={ 'minr' } style={ minr }>% per annum</div> );
            return part;
        }
        result() {
            let data = [
                [ 'Odey European', '53.0', 'Macro' ],
                [ 'Northlander Commodity', '52.7', 'Energy' ],
                [ 'Crescat Global Macro', '40.5', 'Macro' ],
                [ 'QQQ Capital', '39.4', 'L/S' ],
                [ 'Alta Park', '34.8', 'L/S' ],
                [ 'SoMa Partners', '20.0', 'L/S' ],
                [ 'Autonomy Global Macro', '16.7', 'Macro' ],
                [ 'Mudrick Capital', '16.2', 'Distressed' ],
                [ 'Bridgewater Pure Alpha', '14.6', 'Macro' ],
                [ 'Aspect Systematic Global Macro', '14.3', 'Quant' ],
                [ 'Luxor Capital Partners Offshore', '13.6', 'Event' ],
                [ 'Brevan Howard Master', '12.3', 'Macro' ],
                [ 'D.E. Shaw Composite', '11.2', 'Multi' ],
                [ 'Sylebra Capital Partners Master', '11.0', 'L/S' ],
                [ 'Kuvari Focus', '10.5', 'L/S' ],
                [ 'Citadel Wellington', '9.1', 'Multi' ],
                [ 'Millennium', '4.9', 'Multi' ]
            ]
            let line = ( r, n ) => {
                let tara = press.style.docker(   0, 0, 260, 30 );
                let tarb = press.style.docker( 260, 0, 80, 30 );
                let tarc = press.style.docker( 340, 0, 80, 30 );
                let trow = [];
                trow.push( <div key={ n +'-a' } style={ tara }>{ r[ 0 ] }</div> );
                trow.push( <div key={ n +'-b' } style={ tarb }>{ r[ 1 ] }</div> );
                trow.push( <div key={ n +'-c' } style={ tarc }>{ r[ 2 ] }</div> );
                return trow;
            }
            let part = [];
            let pltt = press.palette();
            let head = press.style.docker( 0, 0, 420, 25 ).underline( 1, pltt.black ).font( 14, pltt.black, 1 );
            let name = [ 'fund', 'return', 'type' ];
            part.push( <div key={ 'head' } style={ head }>{ line( name, 0 ) }</div> );
            let grey = press.color.grey( 128 );
            for ( let i = 0; i < data.length; i++ ) {
                let coli = ( i < 5 ) ? pltt.leaf : pltt.mustard;
                let ypos = 40 + i * 30;
                let brow = press.style.docker( 0, ypos, 420, 30 ).font( 14, coli, 1 );
                part.push( <div key={ 'line-' + i } style={ brow }>{ line( data[ i ], i ) }</div> );
            }
            let tail = press.style.docker( 0, 550, 420, 30 ).skyline( 1, pltt.black );
            let subs = press.style.docker( 0, 10, 420, 20 ).font( 12, pltt.black, 1 );
            part.push( 
                <div key={ 'tail' } style={ tail }> 
                <div style={ subs }>Bloomberg, 9 Jan 2019, The Good, Bad, and Ugly</div>
                </div>
            );
            return part;
        }
        wedo() {
            return 'We build a trading strategy to generate 0.5% returns weekly, which corresponds to 25% returns yearly. We apply this systematically to several thousand blue chips from matured stock markets in the world.'
        }
        water() {
            return 'Leading hedge funds make more than 25% returns in a good year. A survey shows that 67% of the institutional investors including pension funds and insurance companies are happy to settle at 4 to 8% returns per annum.'
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();

            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Reachable Target</div> );
            comp.push( 
                <div key={ 'tabo' } style={ plan.tabo }>
                <div style={ plan.tabi }>{ this.result() }</div>
                </div>
            );
            comp.push( <div key={ 'hbar' } style={ plan.hbar }/> );
            comp.push( <div key={ 'mark' } style={ plan.mark }>{ this.marker() }</div> );
            comp.push( <div key={ 'wedo' } style={ plan.wedo }>{ this.wedo() }</div> ); 
            comp.push( <div key={ 'blah' } style={ plan.blah }>{ this.water() }</div> );

            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, 2 * size, '100%', size ).back( pltt.white );
            return ( 
                <div ref={ this.refb } style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Earning = Earning;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
