( function( fr19c, undefined ) {

    class STPOne extends React.Component {
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
            comp.push( <div key={ 'head' } style={ plan.head }>Corporate Action STP</div> );

            let lite = press.color.grey( 128 );
            let grey = press.color.grey( 96 );
            let pale = press.color.grey( 64 );
            let dark = press.color.grey( 32 );
            let tran = press.color.mono( 255, 0 );

            let blah = 'Straight Through Processing from Corporate Disclosure'
            comp.push( <div key={ 'text' } style={ plan.text }>{ blah }</div> );

            let labs = ( n, a, b, c ) => {
                let styx = press.style.docker( 25, n * 125 + 40, 150, 75 );
                let stya = press.style.docker( 0,  0, 150, 25 ).font( 14, lite, 1 ).align( 'center' );
                let styb = press.style.docker( 0, 25, 150, 25 ).font( 14, lite, 1 ).align( 'center' );
                let styc = press.style.docker( 0, 50, 150, 25 ).font( 14, lite, 1 ).align( 'center' );
                return (
                    <div key={ 'pad-' + n } style={ styx }>
                    <div style={ stya }>{ a }</div>
                    <div style={ styb }>{ b }</div>
                    <div style={ styc }>{ c }</div>
                    </div>
                );
            }
            let pats = [];
            pats.push( labs( 0, 'Corporate', 'Press', 'Release' ) );
            pats.push( labs( 1, 'Data', 'Provider', 'Service' ) );
            pats.push( labs( 2, 'Validation', 'Cleansing', 'Extraction' ) );
            pats.push( labs( 3, 'Company', 'Specific', 'Process' ) );

            let pole = press.style.docker( 50, 132, 250, 525 );
            comp.push(
                <div key={ 'pole' } style={ pole }>
                <svg viewBox={ '0 0 25000 52500' } >
                <path d={ fr19c.stp.flowsero( 2500 ) } stroke={ pale } strokeWidth={ 100 } fill={ tran }/>
                <path d={ fr19c.stp.ticksero( 2500 ) } fill={ pale }/>
                </svg>
                { pats }
                </div>
            );

            let mssg = [
                ":16R:GENL", ":20C::CORP//ICCI4GH54OQ8F2Q3", ":20C::SEME//543339", ":23G:NEWM", ":22F::CAEV//RHDI", ":22F::CAMV//MAND", ":98C::PREP//20190613183006", ":25D::PROC//COMP", ":16S:GENL", ":16R:USECU", ":35B:ISIN US42806J1060", "Hertz Global Holdings Inc.", "Ordinary Shares", "/TS/HTZ", ":16R:FIA", ":94B::PLIS//PRIM/XNYS", ":12C::CLAS//ESVUFR", ":16S:FIA", ":16R:ACCTINFO", ":97C::SAFE//GENR", ":16S:ACCTINFO", ":16S:USECU", ":16R:CADETL", ":98B::XDTE//UKWN", ":98A::RDTE//20190624", ":22F::SELL//RENO", ":22F::RHDI//EXRI", ":16S:CADETL", ":16R:CAOPTN", ":13A::CAON//001", ":22F::CAOP//SECU", ":22F::DISF//RDDN", ":17B::DFLT//Y", ":98A::EXPI//20190712", ":16R:SECMOVE", ":22H::CRDB//CRED", ":35B:UKWN", ":16R:FIA", ":94B::PLIS//SECM", ":16S:FIA", ":69A::TRDP//20190627/20190711", ":92D::ADEX//1,/1,", ":98A::PAYD//20190627", ":16S:SECMOVE", ":16S:CAOPTN"
            ];

            let line = ( a, n ) => {
                let csty = press.style.docker( 10, n * 20 + 10, 280, 20 ).font( 14, pale, 1 );
                return <div key={ 'line-' + n } style={ csty }>{ a }</div>;
            }
            let boxa = press.style.docker( 300, 120, 300, 550 );
            let sone = [];
            for ( let i = 0; i < 27; ++ i ) {
                sone.push( line( mssg[ i ], i ) );
            }
            let boxb = press.style.docker( 600, 120, 300, 550 );
            let stwo = [];
            for ( let i = 27; i < 45; ++ i ) {
                stwo.push( line( mssg[ i ], i - 27 ) );
            }

            comp.push( <div key={ 'boxa' } style={ boxa }>{ sone }</div> );
            comp.push( <div key={ 'boxb' } style={ boxb }>{ stwo }</div> );


            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 6 * size, '100%', size ).back( pltt.navy );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    class STPTwo extends React.Component {
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
                'The corporate action information is obtained from a narrative description of the event given by the company at a press release or as a regulatory report. This task can be considered as a perfect example where AI driven natural language processing (NLP) can be applied, saving a fortune in the future. The issue is not that it was originally in a narrative form but that the information is complex and contextual, which makes it difficult to represent in a concrete form. For this reason, it has been a major challenge for the global market players to implement STP (Straight Through Processing) data automation for corporate actions.',
                'MT564 (SWIFT’s telecommunication protocol for corporate action) became a part of ISO15022/20022 in 2003 for the purpose of serving the global market. A handful of front runners, which include top custodian banks such as BNY Mellon and JP Morgan, adopted this at the early stage. DTCC, a market leader in post trade sevice and depository, reported that the pilot project participants spent USD 830 millions all together during 2003 to 2007. The new trend of automating the corporate action process was disrupted', 
                'due to the global financial crisis, which arose from the US subprime mortgage market. DTCC reported in 2012 that no single data vendor provides the first announcement for more than approximately 70% of all events. Various market surveys reported that a large number of institutions were still not capable of automating the corporate action process in 2015.',
                'It was not until the recent push from the regulators, such as MiFID II, Dodd-Frank, and Basle III, that the industry made full commitment to the development. Without automating the corporate action process, the financial institutions have very little chance to fulfill the regulatory reporting. Feds ordered US national banks to implement the ISO protocol by 2020. Currently, more than half of the global SWIFT network message volume is attributed to ISO15022/20022. Major exchanges and premium data vendors have recently started MT564 services.',
                'PGGM, an asset manager with EUR 200 billions under management, upgraded its corporate action processing recently and its project partner SimCorp reported that the automation would cover 90% of',  
                'corporate actions in the front office and 30% in the back office. A similar figures are reported in other surveys. Due to insufficient automation, financial institutions are hiring many corporate action analysts to fill the gap. The difficulties include',
	            '\u2022 insufficient coverage from a single',
                'data service',
	            '\u2022 data validation and cleansing for',
                'incorrect information',
	            '\u2022 data management for revisions of',
                'corporate actions',
	            '\u2022 late data delivery',
                'Greenberg Traurig, LLP, a capital market legal service provider, released a whitepaper on November 13, 2018, in which they claimed that suboptimal handling of corporate action elections by asset managers between 2011 and 2017 cost global investors USD 8.9 billion. The report was based on a set of data collected from some of the largest global asset managers. This is an example showing that the financial industry has not solved the problem yet.'
            ];

            let grey = press.color.grey( 96 );
            let font = 13;
            let wide = 280;

            let txlb = press.style.docker(   0,  80, wide, 570 );
            let txl0 = press.style.docker(   0,   0, wide, 304 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txl1 = press.style.docker(   0, 323, wide, 247 ).font( font, grey, 1 ).align( 'left', '150%' );

            comp.push( 
                <div key={ 'txlb' } style={ txlb }>
                <div style={ txl0 }>{ text[ 0 ] }</div>
                <div style={ txl1 }>{ text[ 1 ] }</div>
                </div>
            );

            let txcb = press.style.docker( 310,  80, wide, 570 );
            let txc0 = press.style.docker(   0,   0, wide, 171 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txc1 = press.style.docker(   0, 190, wide, 266 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txc2 = press.style.docker(   0, 475, wide,  95 ).font( font, grey, 1 ).align( 'left', '150%' );

            comp.push(
                <div key={ 'txcb' } style={ txcb }>
                <div style={ txc0 }>{ text[ 2 ] }</div>
                <div style={ txc1 }>{ text[ 3 ] }</div>
                <div style={ txc2 }>{ text[ 4 ] }</div>
                </div>
            );

            let txrb = press.style.docker( 610,  80, wide, 570 );
            let txr0 = press.style.docker(   0,   0, wide, 133 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr1 = press.style.docker(  20, 152, wide - 20,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txh1 = press.style.docker(  30, 171, wide - 20,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr2 = press.style.docker(  20, 190, wide - 20,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txh2 = press.style.docker(  30, 209, wide - 20,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr3 = press.style.docker(  20, 228, wide - 20,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txh3 = press.style.docker(  30, 247, wide - 20,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr4 = press.style.docker(  20, 266, wide - 20,  19 ).font( font, grey, 1 ).align( 'left', '150%' );
            let txr5 = press.style.docker(   0, 304, wide, 266 ).font( font, grey, 1 ).align( 'left', '150%' );

            comp.push(
                <div key={ 'txrb' } style={ txrb }>
                <div style={ txr0 }>{ text[ 5 ] }</div>
                <div style={ txr1 }>{ text[ 6 ] }</div>
                <div style={ txh1 }>{ text[ 7 ] }</div>
                <div style={ txr2 }>{ text[ 8 ] }</div>
                <div style={ txh2 }>{ text[ 9 ] }</div>
                <div style={ txr3 }>{ text[ 10 ] }</div>
                <div style={ txh3 }>{ text[ 11 ] }</div>
                <div style={ txr4 }>{ text[ 12 ] }</div>
                <div style={ txr5 }>{ text[ 13 ] }</div>
                </div>
            );

            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 7 * size, '100%', size ).back( pltt.white );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19c.STPOne = STPOne;
    fr19c.STPTwo = STPTwo;

} )( global.fr19c = global.fr19c || {} )

exports.fr19c = fr19c;

