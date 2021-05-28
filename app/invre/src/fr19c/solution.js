( function( fr19c, undefined ) {

    class SolOne extends React.Component {
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
                flow: press.style.docker( 0, 120, 670, 460 )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Our Solution</div> );

            let tran = press.color.mono( 255, 0 );
            let lite = press.color.grey( 128 );
            let grey = press.color.grey( 96 );
            let pale = press.color.grey( 64 );

            let blah = 'STP data automation and workflow engine'
            comp.push( <div key={ 'text' } style={ plan.text }>{ blah }</div> );

            let labe = ( x, y, a, t ) => {
                let csty = press.style.absolute().place( x, y ).font( 14, grey, 1 );
                return <div key={ 'lab-' + t } style={ csty }>{ a }</div>;
            }

            let legs = [];
            legs.push( labe( 0,  35, 'Trusted Source', 0 ) );
            legs.push( labe( 0, 230, 'Normalisation', 1 ) );
            legs.push( labe( 200, 150, 'Grade', 2 ) );
            legs.push( labe( 400, 150, 'Instruction', 3 ) );
            legs.push( labe( 400, 120, 'STP', 4 ) );
            legs.push( labe( 150, 333, 'Truth Source', 5 ) );
            legs.push( labe( 485, 35, 'Fixing', 6 ) );
            legs.push( labe( 620, 150, 'Result', 7 ) );
            legs.push( labe( 100, 260, 'Auto Validation', 8 ) );
            legs.push( labe( 300, 435, 'Manual Validation', 9 ) );
            legs.push( labe( 570, 210, 'Calculation', 10 ) );
            legs.push( labe( 440, 350, 'Cleansed Instruction', 11 ) );
            legs.push( labe( 355, 260, 'Ticket', 12 ) );

            comp.push(
                <div key={ 'flow' } style={ plan.flow }>
                <svg viewBox={ '0 0 67000 46000' }>
                <path d={ fr19c.task.flow( 100 ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19c.task.arrow( 100 ) } fill={ pale }/>
                <path d={ fr19c.task.ball( 100 ) } stroke={ pale } strokeWidth={ 100 } fill={ pale }/>
                </svg>
                { legs }
                </div>
            );

            let tale = ( n, a ) => {
                let csty = press.style.absolute().place( 0, 25 * n ).font( 14, lite, 1 );
                return <div key={ 'tale-' + n } style={ csty }>{ a }</div>;
            }

            let east = press.style.docker( 0, 595, 400, 75 );
            let txte = [];
            txte.push( tale(  0, 'Trusted Source: Vendor' ) );
            txte.push( tale(  1, 'Truth Source: Press Release' ) );
            txte.push( tale(  2, 'Result: Reference Change, Ex-Ante Correction' ) );
            comp.push( <div key={ 'east' } style={ east }>{ txte }</div> );

            let talw = ( n, a ) => {
                let csty = press.style.absolute().place( 0, 25 * n ).font( 14, pale, 1 );
                return <div key={ 'tale-' + n } style={ csty }>{ a }</div>;
            }
            
            let west = press.style.docker( 650, 470, 250, 200 );
            let txtw = [];
            txtw.push( talw(  0, 'Trusted Source: REST, FTP' ) );
            txtw.push( talw(  1, 'Truth Source: RSS' ) );
            txtw.push( talw(  2, 'Environment: AWS VPC' ) );
            txtw.push( talw(  3, 'Persistence: PostgreSQL' ) );
            txtw.push( talw(  4, 'Cache: Redis' ) );
            txtw.push( talw(  5, 'Back Up: AWS S3' ) );
            txtw.push( talw(  6, 'Task Monitoring: Web Service' ) );
            txtw.push( talw(  7, 'Notification: Postfix' ) );
            comp.push( <div key={ 'west' } style={ west }>{ txtw }</div> );


            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 10 * size, '100%', size ).back( pltt.navy );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    class SolTwo extends React.Component {
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
                'The cost drivers of the corporate action processing are data, system infrastructure, software development,  maintenance, and operations. The last two items continue as long as the business does. Thus, the major benefit of the corporate action automation is the cost reduction from reducing the number of human experts engaging in the two. Especially when the topic is as esoteric as this, running a large group of experts for manual operation is very costly. In this respect, corporate action STP sounds very appealing.',
                'Major global custodian banks, depositories, post trade service firms, exchanges, and top tier investment banks must have built state-of-art solutions by now. ETF runners and index publishers must process corporate actions fluently as well to calculate total returns. On the other hand, buy side firms (hedge funds and asset managers) can avoid this burden by leveraging services from their sell side counterparts, prime brokers and custodians. Those relying on the data driven trading strategies cannot. Sell side technologies focus on providing a trade facilitating platform to their clients, not feeding corporate action data into clients\'', 
                'strategy building platform. Besides the exchanges and data providers own the data, not the sell side firms. As a result, shops with data driven trading strategies need to roll up their sleeves.',
                'Our approach is to build a cost effective software driven microsystem. Unlike sell side firms, we do not have to support clients. Our interests are reference changes and ex-ante corrections.',
                'The truth source (press release) is difficult to process in its form without a special natural language processing tool which is capable of recognising financial terms. The trusted sources (data vendors), however, can be incorrect or absent. The industry concensus is to use multiple trusted sources and perform a cross validation. On passing the validation, the information can flow into subsequent processes which are business specific. If not, the discrepancy is sent to human experts to perform data cleansing with the truth source. A workflow engine manages the manual handling and assists human experts to flow the corrected data back into the system. In our case, the subsequent process is to propagate reference changes into the',  
                'system and to calculate ex-ante corrections. The latter requires fixing data: closing prices and exchange rates to value securities foreign currencies in the entitlements. Thus, we need to fetch fixings and to enrich the information to produce final results.',
                'There are two difficulties. The first is data normalisation. The data from trusted sources is not as shapeless as narrative descriptions, but the contents are contextual and convoluted. It requires a comprehensive understanding of each corporate action procedure and corresponding terms to be able to create a data schema. The second is data validation. This requires a human expert to search the disclosure and read.', 
                'We implemented our solutions and tested with more than 50,000 events (2700+ stocks from US and JP markets in the past 10 years). We confirmed that 95% were processed via STP. We put further efforts into mining, validation and cleansing for the remaining 5%.'
            ];

            let grey = press.color.grey( 96 );
            let font = 13;
            let wide = 280;

            let txlb = press.style.docker(   0,  80, wide, 570 );
            let txl0 = press.style.docker(   0,   0, wide, 247 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl1 = press.style.docker(   0, 266, wide, 304 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push( 
                <div key={ 'txlb' } style={ txlb }>
                <div style={ txl0 }>{ text[ 0 ] }</div>
                <div style={ txl1 }>{ text[ 1 ] }</div>
                </div>
            );

            let txcb = press.style.docker( 310,  80, wide, 570 );
            let txc0 = press.style.docker(   0,   0, wide,  95 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txc1 = press.style.docker(   0, 114, wide,  95 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txc2 = press.style.docker(   0, 228, wide, 342 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push(
                <div key={ 'txcb' } style={ txcb }>
                <div style={ txc0 }>{ text[ 2 ] }</div>
                <div style={ txc1 }>{ text[ 3 ] }</div>
                <div style={ txc2 }>{ text[ 4 ] }</div>
                </div>
            );

            let txrb = press.style.docker( 610,  80, wide, 570 );
            let txr0 = press.style.docker(   0,   0, wide, 133 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr1 = press.style.docker(   0, 152, wide, 209 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr2 = press.style.docker(   0, 380, wide, 152 ).font( font, grey, 1 ).align( 'left', '150%' );
            comp.push(
                <div key={ 'txrb' } style={ txrb }>
                <div style={ txr0 }>{ text[ 5 ] }</div>
                <div style={ txr1 }>{ text[ 6 ] }</div>
                <div style={ txr2 }>{ text[ 7 ] }</div>
                </div>
            );


            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 11 * size, '100%', size ).back( pltt.white );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19c.SolOne = SolOne;
    fr19c.SolTwo = SolTwo;

} )( global.fr19c = global.fr19c || {} )

exports.fr19c = fr19c;
