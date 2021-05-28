( function( fr19c, undefined ) {

    class ActOne extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            let lite = press.color.grey( 128 );
            return {
                head: press.style.docker( 0, 0, 600, 50 ).font( 32, pltt.white, 1 ),
                text: press.style.docker( 0, 80, 900, 20 ).font( 16, lite, 1 )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Corporate Action</div> );

            let lite = press.color.grey( 128 );
            let grey = press.color.grey( 96 );
            let pale = press.color.grey( 64 );
            let blah = 'A selection of ISO 15022 CAEVs with potential impact on stock prices'
            comp.push( <div key={ 'text' } style={ plan.text }>{ blah }</div> );

            let wide = 280;
            let line = ( a, b, n, x ) => {
                let covi = press.style.docker(  0, n * 50, wide, 50 ).underline( 1, pale );
                let topi = press.style.docker(  10, 12, 160, 18 ).font( 14, lite, 1 );
                let topu = press.style.docker( 170, 12, 100, 18 ).font( 14, pale, 1 ).align( 'right' );
                let boti = press.style.docker(  10, 30, 260, 15 ).font( 12, lite, 1 );
                return (
                    <div key={ 'line-' + n } style={ covi }>
                    <div style={ topi }>{ a }</div>
                    <div style={ topu }>{ x }</div>
                    <div style={ boti }>{ b }</div>
                    </div>
                );
            }

            let bxlb = press.style.docker(   0, 120, wide, 550 ).edge( 1, pale );
            let lnls = [];
            lnls.push( line( 'BIDS', 'Issuer Tender', 0, 'AM' ) );
            lnls.push( line( 'BONU', 'Capitalisation Issue', 1, 'ACP' ) );
            lnls.push( line( 'CAPD', 'Capital Distribution', 2, 'ACP' ) );
            lnls.push( line( 'CAPG', 'Capital Gains Distribution', 3, 'ACP' ) );
            lnls.push( line( 'CHAN', 'Change', 4, 'PR' ) );
            lnls.push( line( 'CONV', 'Conversion', 5, 'A' ) );
            lnls.push( line( 'DRCA', 'Cash Distribution from NES Sales', 6, 'ACP' ) );
            lnls.push( line( 'DRIP', 'Dividend Reinvestment', 7, 'ACP' ) );
            lnls.push( line( 'DSCL', 'Disclosure', 8, 'M' ) );
            lnls.push( line( 'DTCH', 'Dutch Auction', 9, 'AMP' ) );
            lnls.push( line( 'DVCA', 'Cash Dividend', 10, 'ACP' ) );
            
            comp.push( <div key={ 'bxlb' } style={ bxlb }>{ lnls }</div> );
            
            let bxcb = press.style.docker( 310, 120, wide, 550 ).edge( 1, pale );
            let lncs = [];
            
            lncs.push( line( 'DVOP', 'Dividend Option', 0, 'ACP' ) );
            lncs.push( line( 'DVSC', 'Scrip Dividend', 1, 'ACP' ) );
            lncs.push( line( 'DVSE', 'Stock Dividend', 2, 'ACP' ) );
            lncs.push( line( 'EXOF', 'Exchange', 3, 'APR' ) );
            lncs.push( line( 'EXRI', 'Call on Intermediate Securities', 4, 'AP' ) );
            lncs.push( line( 'EXWA', 'Warrant Exercise', 5, 'A' ) );
            lncs.push( line( 'LIQU', 'Liquidation', 6, 'ACP' ) );
            lncs.push( line( 'MRGR', 'Merger', 7, 'ACMPR' ) );
            lncs.push( line( 'PARI', 'Pari-Passu', 8, 'AM' ) );
            lncs.push( line( 'PPMT', 'Installment Call', 9, 'ACP' ) );
            lncs.push( line( 'PRIO', 'Priority Issue', 10, 'ACMP' ) );

            comp.push( <div key={ 'bxcb' } style={ bxcb }>{ lncs }</div> );

            let bxrb = press.style.docker( 610, 120, wide, 400 ).edge( 1, pale );;
            let lnrs = [];
            
            lnrs.push( line( 'REDO', 'Redenomination', 0, 'PR' ) );
            lnrs.push( line( 'RHDI', 'Intermediate Securities Distribution', 1, 'CMP' ) );
            lnrs.push( line( 'RHTS', 'Rights Issue', 2, 'ACMP' ) );
            lnrs.push( line( 'SHPR', 'Shares Premium Dividend', 3, 'ACP' ) );
            lnrs.push( line( 'SOFF', 'Spin-off', 4, 'ACMPR' ) );
            lnrs.push( line( 'SPLF', 'Split', 5, 'ACPR' ) );
            lnrs.push( line( 'SPLR', 'Reverse Split', 6, 'ACPR' ) );
            lnrs.push( line( 'TEND', 'Third Party Tender', 7, 'M' ) );

            comp.push( <div key={ 'bxrb' } style={ bxrb }>{ lnrs }</div> );

            let expr = ( a, b, n ) => {
                let scov = press.style.docker(  0,  n * 25, wide, 25 );
                let symb = press.style.docker( 10,  0,  30, 20 ).font( 14, pale, 1 );
                let nara = press.style.docker( 40,  0, 240, 20 ).font( 14, pale, 1 );
                return (
                    <div key={ 'leg-' + n } style={ scov }>
                    <div style={ symb }>{ a }</div>
                    <div style={ nara }>{ b }</div>
                    </div>
                );
            }
            let legs = press.style.docker( 610, 545, wide, 125 );
            let subx = [];
            subx.push( expr( 'A', 'Accounting Change', 0 ) );
            subx.push( expr( 'C', 'Price Correction', 1 ) );
            subx.push( expr( 'M', 'Market Impact', 2 ) );
            subx.push( expr( 'P', 'Post Trade Activity', 3 ) );
            subx.push( expr( 'R', 'Reference Change', 4 ) );
            comp.push( <div key={ 'subs' } style={ legs }>{ subx }</div> );
            

            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 3 * size, '100%', size ).back( pltt.navy );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    class ActTwo extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            let lite = press.color.grey( 128 );
            let pale = press.color.grey( 64 );
            return {
                head: press.style.docker( 0, 0, 600, 50 ).font( 32, pltt.white, 1 ),
                text: press.style.docker( 0, 80, 900, 20 ).font( 16, lite, 1 ),
                taba: press.style.docker( 620, 80, 280, 350 ).edge( 1, pale )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Corporate Action Lifecycle</div> );

            let tran = press.color.mono( 255, 0 );
            let lite = press.color.grey( 128 );
            let grey = press.color.grey( 96 );
            let pale = press.color.grey( 64 );

            let blah = 'Corporate Action Schedule with ISO 15022 Dates and Period'
            comp.push( <div key={ 'text' } style={ plan.text }>{ blah }</div> );

            let gend = ( x, y, s, n ) => {
                let covi = press.style.docker( x, y, 50, 20 ).font( 14, pale, 1 );
                return <div key={ 'gen-' + n } style={ covi }>{ s }</div>;
            }

            let genb = ( y, s, n ) => {
                let covi = press.style.docker( 0, y, 200, 50 ).font( 14, grey, 1 );
                return <div key={ 'typ-' + n } style={ covi }>{ s }</div>;
            }

            let labs = [];
            labs.push( gend(  28,  45, 'ANOU', 0 ) );
            labs.push( gend(  28, 170, 'ANOU', 1 ) );
            labs.push( gend(  28, 295, 'ANOU', 2 ) );
            labs.push( gend( 228,  45, 'RDTE', 3 ) );
            labs.push( gend( 228, 170, 'RDTE', 4 ) );
            labs.push( gend( 228, 295, 'EFFD', 5 ) );
            labs.push( gend( 328,  45, 'PWAL', 11 ) );
            labs.push( gend( 428,  45, 'PAYD', 6 ) );
            labs.push( gend( 428, 170, 'PAYD', 7 ) );
            labs.push( gend( 178, 100, 'XDTE', 8 ) );
            labs.push( gend( 478, 225, 'XDTE', 9 ) );
            labs.push( gend( 398, 100, 'MKDT', 10 ) );
            labs.push( genb(  10, 'typical entitlement', 0 ) );
            labs.push( genb( 135, 'large dividend > 25% stock', 1 ) );
            labs.push( genb( 260, 'security change only', 2 ) );
            
            let flow = press.style.docker( 0, 120, 600, 350 );
            comp.push(
                <div key={ 'flow' } style={ flow }>
                <svg viewBox={ '0 0 60000 35000' }>
                <path d={ fr19c.life.axis( 2500 ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                </svg>
                { labs }
                </div>
            );

            let wide = 280;
            let line = ( a, b, n, x ) => {
                let covi = press.style.docker(  0, n * 50, wide, 50 ).underline( 1, pale );
                let topi = press.style.docker(  10, 12, 160, 18 ).font( 14, lite, 1 );
                let topu = press.style.docker( 170, 12, 100, 18 ).font( 14, pale, 1 ).align( 'right' );
                let boti = press.style.docker(  10, 30, 260, 15 ).font( 12, lite, 1 );
                return (
                    <div key={ 'line-' + n } style={ covi }>
                    <div style={ topi }>{ a }</div>
                    <div style={ topu }>{ x }</div>
                    <div style={ boti }>{ b }</div>
                    </div>
                );
            }

            let dtea = [];
            dtea.push( line( 'ANOU', 'Anouncement Date', 0, 'M' ) );
            dtea.push( line( 'EFFD', 'Effective Date', 1, 'ACPR' ) );
            dtea.push( line( 'MKDT', 'Market Date', 2, 'P' ) );
            dtea.push( line( 'RDTE', 'Record Date', 3, 'P' ) );
            dtea.push( line( 'PAYD', 'Payment Date', 4, 'AP' ) );
            dtea.push( line( 'PWAL', 'Period of Action', 5, 'P' ) );
            dtea.push( line( 'XDTE', 'Ex Dividend/Distribution Date', 6, 'C' ) );

            comp.push( <div key={ 'taba' } style={ plan.taba }>{ dtea }</div> );

            let date = ( x, s, t ) => {
                let csty = press.style.docker( x, 0, 180, 25 ).font( 14, lite, 1 );
                return <div key={ 'dat-' + t } style={ csty }>{ s }</div>;
            }

            let panl = ( x, y, a, b, c, t ) => {
                let csty = press.style.docker( x, y, 150, 100 );
                let line = ( n ) => { return press.style.docker( 0, n * 20, 180, 20 ).font( 14, pale, 1 ); }
                return (
                    <div key={ 'pan-' + t } style={ csty }>
                    <div style={ line( 0 ) }>{ a }</div>
                    <div style={ line( 1 ) }>{ b }</div>
                    <div style={ line( 2 ) }>{ c }</div>
                    </div>
                );
            }

            let itms = [];
            itms.push( date(   0, '2014-04-02 16:00 ET', 0 ) );
            itms.push( date( 400, '2014-04-03 09:30 ET', 1 ) );
            itms.push( gend( 230,  15, 'XDTE', 2 ) );
            itms.push( panl(   0,  25, 'GOOG', '38259P509', '$1135.1', 0 ) );
            itms.push( panl( 400,  25, 'GOOGL', '38259P509', '$573.39', 1 ) );
            itms.push( panl( 400, 100, 'GOOG', '38259P706', '$569.85', 2 ) );

            let divi = press.style.docker( 160, 120, 100, 20 ).font( 14, pale, 1 ); 
            itms.push( <div key={ 'divi' } style={ divi }>{ 'Dividend' }</div> );

            let goog = press.style.docker( 0, 500, 600, 175 );
            comp.push( 
                <div key={ 'goog' } style={ goog }>
                <svg viewBox={ '0 0 60000 25000' }>
                <path d={ fr19c.google.miniflow( 2500 ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                </svg>
                { itms }
                </div>
            );

            let evnt = press.style.docker( 620, 500, 280, 175 );
            let evni = ( n, x, s ) => {
                let csty = press.style.docker( x, n * 25, 280 - x, 25 ).font( 14, grey, 1 );
                return <div key={ 'evn-' + n } style={ csty }>{ s }</div>;
            }
            let evns = [];
            evns.push( evni( 0,  0, 'Security 38259P509' ) );
            evns.push( evni( 1, 20, 'Ticker Change: GOOG to GOOGL' ) );
            evns.push( evni( 2, 20, 'Stock Dividend: 38259P706' ) );
            evns.push( evni( 3, 20, 'Ex-Post Profit: 0.7%' ) );
            evns.push( evni( 4,  0, 'Security 38259P706 (New)' ) );
            evns.push( evni( 5, 20, 'Ticker: GOOG' ) );

            comp.push( <div key={ 'evnt' } style={ evnt }>{ evns }</div> );

            

            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 4 * size, '100%', size ).back( pltt.navy );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }


    class ActTre extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            return {
                head: press.style.docker( 0, 0, 600, 50 ).font( 32, pltt.ruby, 1 )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];

            let text = [
                'A corporate action is a company’s activity authorised by its board of directors and share holders. The types of activities within corporate action include changing',
                '\u2022 the terms of securities,',
                '\u2022 the listings of securities,',
                '\u2022 the company\'s capital,',
                '\u2022 the corporate structure,',
                'as well as distributing profits and excess capital.', 
                'Corporate actions are devised to keep the shareholders’ best interests. For better or for worse, the disclosure of the corporate action itself can influence the market price of the related securities. And, at the effective day of the action, the market price will have a defined correction reflecting the actual change in securities and the entitlements. In some cases, the affected securities are delisted or replaced with others. As a result, the investor may end up owning securities that are different from those at the time of the investment.', 
'Some entitlements are electable and followed by subsequent procedures. From an operational standpoint, custodian banks,', 
                'brokers and investors must resolve the ownership of affected securities and process the election procedure.',
                'In some corporate actions, companies distribute a package of securities. When crossing the very moment of such corporate actions becoming effective, the mark-to-market price of an affected security before the moment and that of the package of the securities that it becomes after the moment should coincide from an accounting perspective. If the market price of the entitlements are not zero, that of the security will be reduced proportionally. There will be an arbitrage opportunity otherwise.', 
                'The following example illustrates the issue. On June 13, 2019, Hertz Global Holdings (HTZ, NYSE) announced rights offering to raise USD 750 millions. Each shareholder was to receive one transferable subscription right per each share of common stock as of June 24, 2019 (the record date). Each right entitles the holder to purchase 0.688252 shares of HTZ at subscription price 12.95. The rights started trading in NYSE under the ticker HTZ RT on June 20, 2019, and the offer expired on',
                'July 12, 2019.',
                'The share price at the market open on June 21, 2019 (ex-date) was 16.74, while the previous closing price was 18.67 (data from NYSE). Without taking the entitlement of the corporate action, one could have concluded more than a 10% drop. However the ex-ante estimate with the subscription right was 16.3381:',
                'which yields 2.44% gain instead. This can be replicated by selling the share at 16.74 and buying the share back with the discount given by the right.',
                'An important fact is that the profit (or loss) of the investment on a stock cannot be calculated from the market price of the stock alone. It requires the composition of the entitlement and the market price of each security in the entitlement. If there is more than one corporate action, we will have to take all the events into the calculation.'
            ]

            let grey = press.color.grey( 96 );
            let font = 13;
            let wide = 280;

            let txlb = press.style.docker(   0,  80, wide, 570 );
            let txl0 = press.style.docker(   0,   0, wide,  76 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl1 = press.style.docker(  20,  95, wide,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl2 = press.style.docker(  20, 114, wide,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl3 = press.style.docker(  20, 133, wide,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl4 = press.style.docker(  20, 152, wide,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl5 = press.style.docker(   0, 190, wide,  38 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl6 = press.style.docker(   0, 247, wide, 247 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl7 = press.style.docker(   0, 513, wide,  57 ).font( font, grey, 1 ).align( 'left', '150%' );

            comp.push( 
                <div key={ 'txlb' } style={ txlb }>
                <div style={ txl0 }>{ text[ 0 ] }</div>
                <div style={ txl1 }>{ text[ 1 ] }</div>
                <div style={ txl2 }>{ text[ 2 ] }</div>
                <div style={ txl3 }>{ text[ 3 ] }</div>
                <div style={ txl4 }>{ text[ 4 ] }</div>
                <div style={ txl5 }>{ text[ 5 ] }</div>
                <div style={ txl6 }>{ text[ 6 ] }</div>
                <div style={ txl7 }>{ text[ 7 ] }</div>
                </div>
            );

            let txcb = press.style.docker( 310,  80, wide, 570 );
            let txc0 = press.style.docker(   0,   0, wide,  57 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txc1 = press.style.docker(   0,  76, wide, 247 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txc2 = press.style.docker(   0, 342, wide, 228 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push(
                <div key={ 'txcb' } style={ txcb }>
                <div style={ txc0 }>{ text[ 8 ] }</div>
                <div style={ txc1 }>{ text[ 9 ] }</div>
                <div style={ txc2 }>{ text[ 10 ] }</div>
                </div>
            );

            let txrb = press.style.docker( 610,  80, wide, 570 );
            let txr0 = press.style.docker(   0,   0, wide,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr1 = press.style.docker(   0,  38, wide, 152 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr2 = press.style.docker(  40, 209,  200,  19 ).font( font, grey, 1 ).align( 'center', '150%' ).underline( 1, grey );
            let txr3 = press.style.docker(  40, 228,  200,  19 ).font( font, grey, 1 ).align( 'center', '150%' );
            let txr4 = press.style.docker(   0, 266, wide,  76 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr5 = press.style.docker(   0, 361, wide, 190 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push(
                <div key={ 'txrb' } style={ txrb }>
                <div style={ txr0 }>{ text[ 11 ] }</div>
                <div style={ txr1 }>{ text[ 12 ] }</div>
                <div style={ txr2 }>{ '18.67 + 0.688285 x 12.95' }</div>
                <div style={ txr3 }>{ '1 + 0.688285' }</div>
                <div style={ txr4 }>{ text[ 13 ] }</div>
                <div style={ txr5 }>{ text[ 14 ] }</div>
                </div>
            );

            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 5 * size, '100%', size ).back( pltt.white );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19c.ActOne = ActOne;
    fr19c.ActTwo = ActTwo;
    fr19c.ActTre = ActTre;

} )( global.fr19c = global.fr19c || {} )

exports.fr19c = fr19c;
