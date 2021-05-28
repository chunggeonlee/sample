( function( fr19b, undefined ) {

    class Finance extends React.Component {
        constructor( props ) {
            super( props );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
        }
        port() {
            let pltt = press.palette();
            return {
                basis: 1,
                head: press.style.docker( 0, 0, 670, 50 ).font( 32, pltt.ruby, 1 ),
                revenue: press.style.docker( 0, 80, 670, 280 ),
                table: press.style.docker( 0, 350, 670, 250 ),
                strategy: press.style.docker( 0, 620, 670, 230 ),
                success: press.style.docker( 0, 850, 670, 30 )
            }
        }
        land() {
            let pltt = press.palette();
            let dark = press.color.grey( 64 );
            return {
                basis: 0,
                head: press.style.docker( 0, 0, 670, 50 ).font( 32, pltt.ruby, 1 ),
                revenue: press.style.docker( 0, 80, 500, 280 ),
                strategy: press.style.docker( 0, 360, 500, 240 ),
                success: press.style.docker( 0, 600, 900, 50 ),
                table: press.style.docker( 580, 100, 360, 500 )
            }
        }
        revenue() {
            let wide = '100%';
            let pltt = press.palette();
            let dark = press.color.grey( 96 );
            let part = [];
            let text = [ 
                'Income Model',
                'The management fee aggregates to:', 
                'Expense Ratio x Asset Under Management', 
                'The cost includes index license fee, market transaction cost for portfolio rebalancing, and other resources',
                'In the case of IVV, which tracks S&P 500 Index, the fee aggregates to USD 72M. S&P Global takes 1/3 of it as an index license fee. S&P Global collects license fees from other ETFs, including SPY, VOO.'
            ];
            let deco = [
                press.style.docker(  0,   0, wide, 40 ).font( 20, pltt.ruby, 1 ),
                press.style.docker(  0,  40, wide, 30 ).font( 16, dark, 1 ),
                press.style.docker( 40,  70, wide, 30 ).font( 16, pltt.ocean, 1 ),
                press.style.docker(  0, 100, wide, 60 ).font( 16, dark, 1 ),
                press.style.docker(  0, 160, wide, 100 ).font( 16, dark, 1 ).align( 'left', '140%' )
            ];
            for ( let i = 0; i < deco.length; ++ i ) {
                part.push( <div key={ 'line-i' + i } style={ deco[ i ] }>{ text[ i ] }</div> );
            }
            return part;
        }
        strategy() {
            let wide = '100%';
            let pltt = press.palette();
            let dark = press.color.grey( 96 );
            let part = [];
            let text = [
                'AI driven Active ETF',
                'Index:',
                'Buy Signal Probability Weighted',
                'We can license our indices for trading entities to create ETFs or derivatives product. Alternatively we can convert our indices directly into ETFs and list them using custom ETF platforms. Exchanges such as ICE (the parent company of NYSE) provide such facilities.'
            ];
            let deco = [
                press.style.docker(  0,   0, wide,  40 ).font( 20, pltt.ruby, 1 ),
                press.style.docker(  0,  40, wide,  30 ).font( 16, dark, 1 ),
                press.style.docker( 40,  70, wide,  30 ).font( 16, pltt.ocean, 1 ),
                press.style.docker(  0, 100, wide, 140 ).font( 16, dark, 1 ).align( 'left', '140%' )
            ];
            for ( let i = 0; i < deco.length; ++ i ) {
                part.push( <div key={ 'line-i' + i } style={ deco[ i ] }>{ text[ i ] }</div> );
            }
            return part;
        }
        success() {
            let wide = '100%';
            let pltt = press.palette();
            let emph = press.style.font( 16, pltt.leaf, 1 );
            let text = [];
            text.push( 'The successful business requires a \u202f' );
            text.push( <span key={ 'emph' } style={ emph }>{ 'robust technology infrastructure' }</span> );
            text.push( '\u202f to produce indices without any disruptions.' );
            let deco = press.style.docker( 0, 0, wide, 50 ).font( 16, pltt.ocean, 1 ).align( 'left', '140%' );
            let part = [];
            part.push( <div key={ 'text' } style={ deco }>{ text }</div> );
            return part;
        }
        table( split ) {
            let dark = press.color.grey( 0 );
            let grey = press.color.grey( 128 );
            let pale = press.color.grey( 216 );
            let tran = press.color.mono( 255, 0 );
            let line = ( p, d, q, r, s, n ) => {
                let hold = press.style.docker( 0, n * 50, 320, 50 ).underline( 1, pale );
                let topl = press.style.docker(  20, 10, 120, 25 ).font( 14, dark, 1 );
                let topc = press.style.docker( 140, 10,  80, 25 ).font( 14, s, 1 ).tabular().align( 'right' );
                let topr = press.style.docker( 220, 10,  80, 25 ).font( 14, s, 1 ).tabular().align( 'right' );
                let boto = press.style.docker(  20, 30, 280, 15 ).font( 12, grey, 1 );
                return (
                    <div key={ 'line-' + n } style={ hold }>
                    <div style={ topl }>{ p }</div>
                    <div style={ topc }>{ q }</div>
                    <div style={ topr }>{ r }</div>
                    <div style={ boto }>{ d }</div>
                    </div>
                );
            }
            let pltt = press.palette();
            let good = pltt.ocean;
            let data = [];
            let n = 0;
            data.push( line( 'SPY', 'SPDR S&P 500', '0.09', '273.82', good, n ) );
            ++ n;
            data.push( line( 'IVV', 'iShares Core S&P 500', '0.04', '179.80', good, n ) );
            ++ n;
            data.push( line( 'VOO', 'Vanguard S&P 500', '0.03', '117.10', good, n ) );
            ++ n;
            data.push( line( 'QQQ', 'Investco QQQ', '0.20', '75.22', good, n ) );
            ++ n;
            if ( split == 1 ) {
                n = 0;
            }
            data.push( line( 'XLK', 'Technology Select Sector SPDR', '0.13', '21.18', good, n ) );
            ++ n;
            data.push( line( 'ARKK', 'Ark Innovation', '0.75', '1.72', good, n ) );
            ++ n;
            data.push( line( 'VPC', 'Virtus Private Credit Strategy', '7.64', '0.19', good, n ) );
            ++ n;
            data.push( line( 'BIZD', 'Van Eck Vectors BDC Income', '9.41', '0.21', good, n ) );
            ++ n;
            let part = [];
            let hexr = press.style.docker( 140, 0,  80, 20 ).font( 12, pltt.black, 1 ).align( 'right' );
            let haum = press.style.docker( 220, 0,  80, 20 ).font( 12, pltt.black, 1 ).align( 'right' );
            let head = [];
            head.push( <div key={ 'hexr' } style={ hexr }>{ 'ER %' }</div> )
            head.push( <div key={ 'haum' } style={ haum }>{ 'AUM $B' }</div> );
            let asof = 'As of 2019 Jul 05'

            if ( split ) {
                let topw = press.style.docker( 0,     0, 320,  20 );
                part.push( <div key={ 'topw' } style={ topw }>{ head }</div> );
                let tope = press.style.docker( 350,   0, 320,  20 );
                part.push( <div key={ 'tope' } style={ tope }>{ head }</div> );
                let west = press.style.docker( 0,    20, 320, 200 ).edge( 1, pale );
                part.push( <div key={ 'west' } style={ west }>{ data.slice( 0, 4 ) }</div> );
                let east = press.style.docker( 350,  20, 320, 200 ).edge( 1, pale );
                part.push( <div key={ 'east' } style={ east }>{ data.slice( 4, 8 ) }</div> );
                let tail = press.style.docker( 350, 230, 300,  20 ).font( 12, pltt.black, 1 ).align( 'right' );
                part.push( <div key={ 'tail' } style={ tail }>{ asof }</div> );
            } else {
                let topb = press.style.docker( 0,     0, 320,  20 );
                part.push( <div key={ 'topb' } style={ topb }>{ head }</div> );
                let both = press.style.docker( 0,    20, 320, 400 ).edge( 1, pale );
                part.push( <div key={ 'both' } style={ both }>{ data }</div> );
                let tail = press.style.docker( 0,   430, 300,  20 ).font( 12, pltt.black, 1 ).align( 'right' );
                part.push( <div key={ 'tail' } style={ tail }>{ asof }</div> );
            }
            return part;
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();

            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Tradable Index and Active ETF</div> );

            comp.push( <div key={ 'inco' } style={ plan.revenue }>{ this.revenue() }</div> );
            comp.push( <div key={ 'stra' } style={ plan.strategy }>{ this.strategy() }</div> );
            comp.push( <div key={ 'tabi' } style={ plan.table }>{ this.table( plan.basis ) }</div> );
            comp.push( <div key={ 'sccs' } style={ plan.success }>{ this.success() }</div> );
            let grey = press.color.grey( 216 );
            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, 5 * size, '100%', size ).back( pltt.white );
            return ( 
                <div ref={ this.refb } style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Finance = Finance;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
