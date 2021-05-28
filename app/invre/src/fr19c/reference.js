( function( fr19c, undefined ) {

    class RefOne extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            let lite = press.color.grey( 128 );
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.white, 1 ),
                flow: press.style.docker( 100, 150, 660, 380 ),
                text: press.style.docker( 0, 80, 900, 20 ).font( 16, lite, 1 ),
                pack: press.style.docker( 0, 580, 900, 80 ).font( 16, lite, 1 ).align( 'left', '150%' )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Reference Data</div> );
            
            let tran = press.color.mono( 255, 0 );
            let pale = press.color.grey( 64 );
            let grey = press.color.grey( 96 );

            let blah = 'A collection of identifiers and their relations'
            comp.push( <div key={ 'txts' } style={ plan.text }>{ blah }</div> );

            let node = ( a, b, c ) => {
                let topx = press.style.docker( 10, 10, 70, 15 ).font( 13, c, 1 );
                let botx = press.style.docker( 10, 30, 70, 15 ).font( 11, c, 1 );
                let deck = [];
                deck.push( <div key={ 'topx' } style={ topx }>{ a }</div> );
                deck.push( <div key={ 'botx' } style={ botx }>{ b }</div> );
                return deck;
            }
            let pina = press.style.docker(  50, 125, 100, 50 );
            let pinb = press.style.docker( 350, 125, 100, 50 );
            let pinc = press.style.docker( 350, 200, 100, 50 );
            let pind = press.style.docker( 200,  50, 100, 50 );
            let pine = press.style.docker( 200, 275, 100, 50 );
            let pinf = press.style.docker( 500,  15, 200, 20 ).font( 16, grey, 1 );
            let pinh = press.style.docker(  50,  15, 200, 20 ).font( 16, grey, 1 );
            let ping = press.style.docker( 240, 230,  75, 15 ).font( 12, grey, 1 );
            let pini = press.style.docker( 220, 130, 100, 20 ).font( 12, grey, 1 );
            let pinj = press.style.docker(  50, 190, 100, 20 ).font( 12, grey, 1 );
            let pink = press.style.docker( 500, 265, 100, 20 ).font( 12, grey, 1 );
            let pino = press.style.docker( 500, 125, 100, 50 );
            let pinp = press.style.docker( 500, 200, 100, 50 );
            let pinq = press.style.docker(  50, 360, 500, 20 ).font( 16, grey, 1 );
            
            comp.push(
                <div key={ 'flow' } style={ plan.flow }>
                <svg viewBox={ '0 0 66000 38000' }>
                <path d={ fr19c.google.flow( 2500 ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19c.google.arrow( 2500 ) } fill={ pale }/>
                </svg>
                <div style={ pinh }>{ 'Google Inc' }</div>
                <div style={ pinf }>{ 'Alphabet Inc' }</div>
                <div style={ pina }>{ node( 'GOOG \u2605', '38259P509', grey ) }</div>
                <div style={ pinb }>{ node( 'GOOGL \u2605', '38259P509', grey ) }</div>
                <div style={ pinc }>{ node( 'GOOG', '38259P706', grey ) }</div>
                <div style={ pind }>{ node( 'GOOAV', '38259P128', grey ) }</div>
                <div style={ pine }>{ node( 'GOOCV', '38259P706', grey ) }</div>
                <div style={ pino }>{ node( 'GOOGL \u2605', '02079K305', grey ) }</div>
                <div style={ pinp }>{ node( 'GOOG', '02079K107', grey ) }</div>
                <div style={ ping }>{ 'Dividend' }</div>
                <div style={ pini }>{ 'April 3, 2014' }</div>
                <div style={ pinj }>{ '\u2605 Voting Class' }</div>
                <div style={ pink }>{ 'October 5, 2015' }</div>
                <div style={ pinq }>{ 'From Google Inc to Alphabet Inc with two corporate actions' }</div>
                </div>
            );

            let text = 'Security identifiers change dynamically. Market participants must adapt themselves to the changes promptly, monitoring the potential causes and planning. Corporate actions are the primary reason of the change, and as a result, the handling of corporate actions is the integral part of the reference data management.'
            
            comp.push( <div key={ 'text' } style={ plan.pack }>{ text }</div> );
            

            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, size, '100%', size ).back( pltt.navy );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    class RefTwo extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.ruby, 1 )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];

            let grey = press.color.grey( 96 );
            let font = 13;
            let wide = 280;

            let text = [
                'The term reference data refers to a set of data which are used for labeling other data. For example, the ticker GOOG refers to Alphabet Inc’s class C share as of now, August 2019. One can store the related data such as trading volume of the share under the symbol GOOG. While it sounds like a straightforward procedure, there are several complexities in doing this when we examine closely the following:',
                '\u2022 Is the symbol unique?',
                '\u2022 Is the symbol used by all others?',
                'If not, we will have issues in storing the data and communicating with others regarding the data. The exchange ticker GOOG is maintained by the exchange, NASDAQ in this case. NASDAQ assures that all the listed shares have a unique ticker at a given time. However, there could have been a time when GOOG meant another security. Before April 2014, when Google Inc introduced its class C share, the symbol GOOG represented the class A share instead. The symbol for the class A share changed to GOOGL afterwards. In other words, the old GOOG became GOOGL and the current GOOG is not the same as the old GOOG.', 
                'This doesn’t happen often in Asian stock markets where M&A and corporate actions are limited, but this happens often enough to cause major headaches in dealing data from European/American stock markets.',
                'We have another challenge when a company list its shares in multiple stock exchanges. A large number of Canadian companies list their shares in the New York Stock Exchange as well as the Toronto Stock Exchange. These stocks have different names in different exchanges. Similarly, the common stock of HSBC is listed in the London Stock Exchange under the ticker HSBA and the Hong Kong Stock Exhange under 0005. There is a need for a universal reference to label these fungible securities. The most widely accepted reference is ISIN (International Security Identification Number). There are regional references too such as CUSIP (North America), SEDOL (UK), SICOVAM (France), WKN (Germany), etc.',
                'Data vendors such as Refinitive (Thomson Reuters) and Bloomberg have their own symbols, which creates more work to do. It all started when the financial world was operated in a segregated way. We are in a', 
                'state where different references are used in different contexts and different counterparts, not to mention different points in time. The first big task in handling financial data is to map these references. A symbol is attached to a security within its designated scope. Furthermore, the attachment is not permanent.', 
                'The primary reason for the security-symbol relationship being transient is the corporate action. Occasionally, the issuer of a security no longer exists due to merger, acquisition, or bankruptcy. In some other cases, issuers change their names or listings of their securities. We also observe that an issuer replaces its securities with the newly issued securities after modifying the terms. The market participants must monitor these closely and adapt their positions accordingly and promptly. Inevitably, the handling of corporate actions becomes the critical part of the reference data management.',
            ]

            let txlb = press.style.docker(   0,  80, wide, 570 );
            let txl0 = press.style.docker(   0,   0, wide, 190 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl1 = press.style.docker(  20, 209, wide,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl2 = press.style.docker(  20, 228, wide,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl3 = press.style.docker(   0, 266, wide, 304 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push(
                <div key={ 'txlb' } style={ txlb }>
                <div style={ txl0 }>{ text[ 0 ] }</div>
                <div style={ txl1 }>{ text[ 1 ] }</div>
                <div style={ txl2 }>{ text[ 2 ] }</div>
                <div style={ txl3 }>{ text[ 3 ] }</div>
                </div>
            );

            let txcb = press.style.docker( 310,  80, wide, 570 );
            let txc0 = press.style.docker(   0,   0, wide,  95 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txc1 = press.style.docker(   0, 114, wide, 342 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txc2 = press.style.docker(   0, 475, wide,  95 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push(
                <div key={ 'txcb' } style={ txcb }>
                <div style={ txc0 }>{ text[ 4 ] }</div>
                <div style={ txc1 }>{ text[ 5 ] }</div>
                <div style={ txc2 }>{ text[ 6 ] }</div>
                </div>
            );

            let txrb = press.style.docker( 610,  80, wide, 570 );
            let txr0 = press.style.docker(   0,   0, wide, 152 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr1 = press.style.docker(   0, 171, wide, 399 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push(
                <div key={ 'txrb' } style={ txrb }>
                <div style={ txr0 }>{ text[ 7 ] }</div>
                <div style={ txr1 }>{ text[ 8 ] }</div>
                </div>
            );

            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 2 * size, '100%', size ).back( pltt.white );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19c.RefOne = RefOne;
    fr19c.RefTwo = RefTwo;

} )( global.fr19c = global.fr19c || {} )

exports.fr19c = fr19c;
