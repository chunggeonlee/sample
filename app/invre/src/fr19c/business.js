( function( fr19c, undefined ) {

    class BusOne extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            let lite = press.color.grey( 128 );
            return {
                head: press.style.docker( 0, 0, 600, 50 ).font( 32, pltt.white, 1 ),
                text: press.style.docker( 0, 80, 900, 20 ).font( 16, lite, 1 ),
                cand: press.style.docker( 100, 120, 640, 500 )
            }
        }
        render() {

            let data = [
                20190513, 21.32, 21.54, 20.725, 20.84, 1016751.0, 
                20190514, 20.95, 21.94, 20.92, 21.56, 808980.0, 
                20190515, 21.28, 22.205, 21.28, 22.18, 477048.0, 
                20190516, 22.46, 22.71, 21.5, 21.83, 1186345.0, 
                20190517, 21.63, 22.15, 21.38, 21.86, 797252.0, 
                20190520, 21.64, 21.65, 20.935, 20.96, 567655.0, 
                20190521, 22.0, 26.82, 21.94, 25.77, 4893890.0, 
                20190522, 25.95, 26.36, 25.33, 25.55, 1607231.0, 
                20190523, 25.7, 26.51, 25.2, 26.4, 1619534.0, 
                20190524, 26.39, 27.27, 26.39, 27.09, 1083437.0, 
                20190528, 27.1, 27.28, 26.73, 27.14, 900136.0, 
                20190529, 26.94, 26.98, 26.08, 26.27, 871907.0, 
                20190530, 26.61, 27.51, 26.6, 27.26, 736871.0, 
                20190531, 26.78, 27.33, 26.4, 26.42, 745061.0, 
                20190603, 27.2, 28.43, 27.17, 28.12, 1084934.0, 
                20190604, 28.42, 28.61, 28.03, 28.59, 1235536.0, 
                20190605, 28.69, 29.43, 28.5, 28.8, 897518.0, 
                20190606, 28.72, 29.01, 28.36, 28.78, 577541.0, 
                20190607, 29.05, 29.71, 28.66, 28.96, 1185934.0, 
                20190610, 29.16, 29.8, 29.16, 29.33, 660464.0, 
                20190611, 29.47, 29.47, 28.56, 28.71, 815853.0, 
                20190612, 28.97, 29.37, 28.65, 29.08, 507259.0, 
                20190613, 29.16, 29.56, 28.825, 29.42, 504793.0, 
                20190614, 29.54, 29.74, 29.1, 29.59, 555983.0, 
                20190617, 47.0, 47.0, 45.68, 46.44, 14565034.0, 
                20190618, 46.39, 46.895, 46.39, 46.58, 4836513.0, 
                20190619, 46.6, 46.74, 46.4, 46.5, 2879794.0, 
                20190620, 46.6, 46.68, 46.42, 46.55, 1774365.0, 
                20190621, 46.5, 46.63, 46.2, 46.2, 3788853.0, 
                20190624, 46.25, 46.43, 46.16, 46.23, 1795135.0
            ];
            
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];

            comp.push( <div key={ 'head' } style={ plan.head }>Business Impact</div> );

            let tran = press.color.mono( 255, 0 );
            let lite = press.color.grey( 128 );
            let grey = press.color.grey( 96 );
            let pale = press.color.grey( 64 );

            let blah = 'Reference Change, Profit/Loss Calculation, and more'
            comp.push( <div key={ 'text' } style={ plan.text }>{ blah }</div> );

            let ytck = ( n, p ) => {
                let csty = press.style.docker( 460, n * 120 + 15, 30, 20 ).font( 14, pale, 1 );
                return <div key={ 'y-' + n } style={ csty }>{ p }</div>;
            }

            let xtck = ( x, d ) => {
                let csty = press.style.docker( x * 10, 380, 80, 20 ).font( 14, pale, 1 );
                return <div key={ 'x-' + x } style={ csty }>{ d }</div>
            }

            let legs = [];
            legs.push( ytck(  0, 48 ) );
            legs.push( ytck(  1, 36 ) );
            legs.push( ytck(  2, 24 ) );
            legs.push( xtck( 10, '2019-05-22' ) );
            legs.push( xtck( 45, '2019-06-17' ) );

            let dark = pltt.blue;
            let actn = press.style.docker( 300, 420, 360, 80 ).font( 14, pale, 1 ).align( 'left', '150%' );
            let coac = 'A third party tender (TEND) offer from Pfizer to Array BioPharma Inc. at USD 48, disclosed at June 17 2019, 06:54 ET'
            legs.push( <div key={ 'coac' } style={ actn }>{ coac }</div> );

            comp.push(
                <div key={ 'cand' } style={ plan.cand }>
                <svg viewBox={ '0 0 64000 50000' }>
                <path d={ fr19c.chart.candle( 50000, 2000, 1000, data ) } stroke={ grey } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19c.chart.price( 50000, 2000, 1000, [ 48, 36, 24 ] ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19c.chart.date( 50000, 2000, [ 7 ] ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19c.chart.focus( 50000, 2000, 1000 ) } stroke={ dark } strokeWidth={ 100 } fill={ tran }/>
                </svg>
                { legs }
                </div>
            );

            let pnch = press.style.docker( 0, 200, 360, 150 ).font( 16, lite, 1 ).align( 'left', '150%' );
            let pncx = 'Without the knowledge of the tender offer, one (machine or human) cannot tell the price won\'t go above $48'
            comp.push( <div key={ 'pnch' } style={ pnch }>{ pncx }</div> );

            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 8 * size, '100%', size ).back( pltt.navy );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );

        }
    }

    class BusTwo extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            return {
                head: press.style.docker( 0, 0, 600, 50 ).font( 32, pltt.white, 1 )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];

            let text = [
                'The crux of data driven trading strategy building is mapping X, the evidences on how stock will perform in the future that are available at the time of entering the trade, to Y, the actual profit/loss at the time of liquidating the trade position. If we are to hire machine learning to do the task, the first step is labelling the data — to prepare a collection of X-Y pairs, the evidence and its consequence, to feed the training algorithm. As pointed out earlier, the profit/loss cannot be calculated from the market price of the stock alone. It requires details of all the corporate actions conducted by the issuer since the execution of the investment. This means, without having details of all the corporate actions, we can’t even prepare required data for analysis.',
                'On any given day, a stock can be delisted from the market, transfered to another market, replaced with another stock or even a package of securities due to corporate actions. If we are to analyse one-off data set from the past, we may choose not to include the stocks with these inconveniences. In a continuously operating business model, skipping inconveniences is not an option. The', 
                'corresponding reference change needs to be scheduled at the right moment, and the follow ups too. In fact, the follow ups form a long list because there are many different operations taking place each day for each stock.',
                'The usage of corporate action information is not limited to the above two cases, handling reference changes and calculating profit/loss. The share price of a company can change dramatically overnight, sometimes due to an overnight disclosure of a development which could affect the company’s business, or sometimes an anticipated correction for a corporate action. The former contributes the actual profit/loss, while the latter doesn’t because the shareholders are compensated with a package of entitlements. The subsequent share price movements are quite different. This means that corporate actions can be a clue for how the share price will evolve. A trader, a human or a computerised intelligence, must be informed about what caused the overnight change before the trading session begins in order to respond appropriately. Therefore, in terms of data driven trading strategy building, both the', 
                'evidence and its consequence require the details of corporate actions.',
                'A market impacting disclosure from a company is handled with care in order not to give favour to specific investors. Otherwise, it is regarded as an insider trading violation. Therefore, the price change is meant to be a surprise. However, the market behavior after corporate actions can be learned. On May 21, 2019, Array BioPharma Inc announced that FDA gave them a positive review of their colorectal cancer treatment. The share price went up to $25.77 from $20.96, gaining 26%. The share price jumped again at the market opening on June 17, 2019, to $47.04. Unlike the gain on May 21, the price won’t go up further, because the price change was due to the disclosure of the tender offer from Pfizer. The price was kept under $48, the offer amount, until the company was finally sold to Pfizer. This market behavior can be explained only by the details of the corporate action.',
                'Like in many other institutions in global capital market, automating corporate action processing is one of the most important tasks in our business operation.'
            ];

            let grey = press.color.grey( 96 );
            let font = 13;
            let wide = 280;

            let txlb = press.style.docker(   0,  80, wide, 570 );
            let txl0 = press.style.docker(   0,   0, wide, 361 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl1 = press.style.docker(   0, 380, wide, 190 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push( 
                <div key={ 'txlb' } style={ txlb }>
                <div style={ txl0 }>{ text[ 0 ] }</div>
                <div style={ txl1 }>{ text[ 1 ] }</div>
                </div>
            );

            let txcb = press.style.docker( 310,  80, wide, 570 );
            let txc0 = press.style.docker(   0,   0, wide, 114 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txc1 = press.style.docker(   0, 133, wide, 190 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push(
                <div key={ 'txcb' } style={ txcb }>
                <div style={ txc0 }>{ text[ 2 ] }</div>
                <div style={ txc1 }>{ text[ 3 ] }</div>
                </div>
            );

            let txrb = press.style.docker( 610,  80, wide, 570 );
            let txr0 = press.style.docker(   0,   0, wide,  38 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr1 = press.style.docker(   0,  57, wide, 418 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr2 = press.style.docker(   0, 494, wide,  76 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push(
                <div key={ 'txrb' } style={ txrb }>
                <div style={ txr0 }>{ text[ 4 ] }</div>
                <div style={ txr1 }>{ text[ 5 ] }</div>
                <div style={ txr2 }>{ text[ 6 ] }</div>
                </div>
            );

            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 9 * size, '100%', size ).back( pltt.white );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19c.BusOne = BusOne;
    fr19c.BusTwo = BusTwo;

} )( global.fr19c = global.fr19c || {} )

exports.fr19c = fr19c;
