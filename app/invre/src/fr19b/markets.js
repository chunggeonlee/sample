( function( fr19b, undefined ) {

    class Markets extends React.Component {
        constructor( props ) {
            super( props );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
        }
        port() {
            let pltt = press.palette();
            return {
                head: press.style.docker( 0, 0, 670, 50 ).font( 32, pltt.white, 1 ),
                equity: press.style.docker( 70, 80, 600, 210 ),
                others: press.style.docker( 0, 560, 400, 200 ),
                west: press.style.docker( 0, 70, 600, 600 ),
                east: press.style.docker( 70, 380, 600, 600 )
            }
        }
        land() {
            let pltt = press.palette();
            let dark = press.color.grey( 64 );
            return {
                head: press.style.docker( 0, 0, 670, 50 ).font( 32, pltt.white, 1 ),
                equity: press.style.docker( 300, 80, 600, 210 ),
                others: press.style.docker( 0, 500, 400, 170 ),
                west: press.style.docker( 0, 70, 600, 600 ),
                east: press.style.docker( 300, 70, 600, 600 )
            }
        }
        equity() {
            let pltt = press.palette();
            let dark = press.color.grey( 128 );
            let lite = press.color.grey( 160 );
            let part = [];
            let hbar = press.style.docker( 0, 0, '100%', 30 ).underline( 0.5, lite );
            part.push( <div key={ 'hbar' } style={ hbar }/> );
            let name = ( n, a ) => {
                let deco = press.style.docker( n * 300, 0, 300, 30 ).font( 16, lite, 1 );
                return <div key={ 'name-' + n } style={ deco }>{ a }</div>;
            }
            part.push( name( 0, 'stage 1' ) );
            part.push( name( 1, 'stage 2' ) );
            let item = ( n, p, a ) => {
                let deco = press.style.docker( n * 300, 50 + p * 25, 300, 25 ).font( 14, dark, 1 );
                return <div key={ 'item-' + n + ',' + p } style={ deco }>{ a }</div>;
            }
            part.push( item( 0, 0, 'New York Stock Exchange US' ) );
            part.push( item( 0, 1, 'NASDAQ US' ) );
            part.push( item( 0, 2, 'Tokyo Stock Exchange JP' ) );
            part.push( item( 1, 0, 'London Stock Exchange GB' ) );
            part.push( item( 1, 1, 'Deutsche B\u00f6rse DE' ) );
            part.push( item( 1, 2, 'Euronext Paris FR' ) );
            part.push( item( 1, 3, 'Euronext Amsterdam NL' ) );
            part.push( item( 1, 4, 'Euronext Brussels BE' ) );
            part.push( item( 1, 5, 'Hong Kong Stock Exchange HK' ) );
            return part;
        }
        others() {
            let pltt = press.palette();
            let dark = press.color.grey(  92 );
            let lite = press.color.grey( 160 );
            let part = [];
            let hbar = press.style.docker( 0, 0, '100%', 30 ).underline( 0.5, lite );
            part.push( <div key={ 'hbar' } style={ hbar }/> );
            let head = press.style.docker( 0, 0, 400, 30 ).font( 16, lite, 1 );
            part.push( <div key={ 'head' } style={ head }>{ 'we also plan to cover' }</div> );
            let item = ( n, a ) => {
                let deco = press.style.docker( 0, 50 + n * 25, 400, 25 ).font( 14, dark, 1 );
                return <div key={ 'item-' + n } style={ deco }>{ a }</div>;
            }
            part.push( item( 0, 'Other Stock Markets in the World' ) );
            part.push( item( 1, 'US and EU single stock Options and Futures' ) );
            part.push( item( 2, 'Commodity Futures' ) );
            part.push( item( 3, 'Currencies' ) );
            return part;
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();

            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Market Coverage</div> );


            let dark = press.color.grey(  32 );
            let norm = press.color.rgba(   0,  0, 128, 0.5 );
            let lite = press.color.rgba(   0, 64, 255, 0.4 );
            let chic = press.color.rgba(   0,  0, 255, 0.9 );
            let tran = press.color.mono( 255, 0 );
            let data = fr19b.map();
            
            let item = ( n, f ) => {
                return <path key={ n } d={ data[ n ] } stroke={ dark } strokeWidth={ 1 } fill={ f }/>;
            }

            let west = [];
            west.push( item( 'US', chic ) );
            let grwa = [ 'GB', 'DE', 'FR', 'BE', 'LU', 'NL' ];
            for ( let i = 0; i < grwa.length; ++ i ) {
                west.push( item( grwa[ i ], lite ) );
            }
            let grwb = [ 'AT', 'CA', 'CH', 'DK', 'ES', 'FI', 'IE', 'IS', 'IT', 'NO', 'PT', 'SE' ];
            for ( let i = 0; i < grwb.length; ++ i ) {
                west.push( item( grwb[ i ], norm ) );
            }
            let grwc = [ 
                'AE', 'BY', 'CY', 'CZ', 'EE', 'GL', 'GR', 'HR', 'HU', 'IL', 'JO', 'KW', 'LB', 'LT', 'LV', 
                'MX', 'OM', 'PL', 'QA', 'RO', 'RS', 'SA', 'SI', 'SK', 'TR', 'UA', 'YE' 
            ];
            for ( let i = 0; i < grwc.length; ++ i ) {
                west.push( item( grwc[ i ], tran ) );
            }
            comp.push(
                <div key={ 'west' } style={ plan.west }>
                <svg viewBox={ '0 0 674 652' }>
                    { west }
                </svg>
                </div>
            );

            let east = [];
            east.push( item( 'JP', chic ) );
            let greb = [ 'AU', 'CN', 'ID', 'IN', 'KR', 'MY', 'NZ', 'TH', 'TW', 'VN' ];
            for ( let i = 0; i < greb.length; ++ i ) {
                east.push( item( greb[ i ], norm ) );
            }
            let grec = [ 'AF', 'AL', 'BD', 'BT', 'GE', 'IR', 'IQ', 'KH', 'KP', 'KZ', 'LA', 'LK', 'MM', 'PH', 'PK', 'RU', 'TJ', 'UZ' ];
            for ( let i = 0; i < grec.length; ++ i ) {
                east.push( item( grec[ i ], tran ) );
            }
            comp.push( 
                <div key={ 'east' } style={ plan.east }>
                <svg viewBox={ '337 0 674 652' }>
                    { east }
                </svg>
                </div>
            );

            comp.push( <div key={ 'eqty' } style={ plan.equity }>{ this.equity() }</div> );
            comp.push( <div key={ 'othr' } style={ plan.others }>{ this.others() }</div> );

            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, 8 * size, '100%', size ).back( pltt.navy );
            return ( 
                <div ref={ this.refb } style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Markets = Markets;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
