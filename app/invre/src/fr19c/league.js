( function( fr19c, undefined ) {

    class TabOne extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            let lite = press.color.grey( 128 );
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.white, 1 ),
                text: press.style.docker( 0, 80, 900, 20 ).font( 16, lite, 1 )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Current Spectrum</div> );
            
            let tran = press.color.mono( 255, 0 );
            let lite = press.color.grey( 128 );
            let pale = press.color.grey( 64 );
            let grey = press.color.grey( 96 );

            let line = ( n, a, b, c, d ) => {
                let boxi = press.style.docker( 0, n * 30, 900, 30 );
                let buff = 10;
                if ( n % 2 == 1 ) {
                    boxi.underline( 1, pale );
                    buff = 0;
                }
                let cell = ( x, w, s ) => {
                    return press.style.docker( x, buff, w, 20 ).font( 14, lite, 1 );
                }
                return (
                    <div key={ 'box-' + n } style={ boxi }>
                    <div style={ cell(  10, 240 ) }>{ a }</div>
                    <div style={ cell( 260, 320 ) }>{ b }</div>
                    <div style={ cell( 610,  80 ) }>{ c }</div>
                    <div style={ cell( 710, 180 ) }>{ d }</div>
                    </div>
                );
            }
            let itms = [];
            itms.push( line(  0, 'Investment Bank', 'Capital Market Trading, Client Support', 'M', 'Equity Research' ) );
            itms.push( line(  1, 'Broker', 'Derivative Contract Novation', '', 'Middle Office'  ) );
            itms.push( line(  2, 'Custodian Bank', 'Client Support', 'H', '' ) );
            itms.push( line(  3, 'Depository', '', '', '' ) );
            itms.push( line(  4, 'Regulatory Technology', 'Client Support', 'H', '' ) );
            itms.push( line(  5, 'Post Trade Service', '', '', '' ) );
            itms.push( line(  6, 'Exchange', 'Margining, Facilitation, Data Distribution', 'H', 'Post Trade Service' ) );
            itms.push( line(  7, 'Secondary Market', 'Derivative Contract Novation', '', '' ) );
            itms.push( line(  8, 'Index Publisher', 'Index Weights Calculation', 'M', 'Equity Research' ) );
            itms.push( line(  9, '', '', '', 'Exchange' ) );
            itms.push( line( 10, 'ETF Runner', 'Strategy Calibration', 'M', 'Index Publisher' ) );
            itms.push( line( 11, '', 'Capital Distribution', '', '' ) );
            itms.push( line( 12, 'Hedge Fund', 'Capital Market Trading', 'L', 'Prime Broker' ) );
            itms.push( line( 13, '', '', '', 'Custodian' ) );
            itms.push( line( 14, 'Asset Management', 'Capital Market Trading', 'L', 'Prime Broker' ) );
            itms.push( line( 15, '', '', '', 'Custodian' ) );
            itms.push( line( 16, 'Quantitative Fund', 'Real Time Strategy Calculation', 'H', '' ) );
            itms.push( line( 17, 'Buy Signal', 'Model Calibration', '', '' ) );
            
            let hdrs = press.style.docker( 0,  80, 900, 30 );
            comp.push( 
                <div key={ 'hdrs' } style={ hdrs }>
                { line( 0, '', 'Exposed Functions', 'STP', 'Manual/Outsource', pale ) }
                </div>
            );

            let tabo = press.style.docker( 0, 120, 900, 540 ).edge( 1, pale );
            comp.push( <div key={ 'tabo' } style={ tabo }>{ itms }</div> );


            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 12 * size, '100%', size ).back( pltt.navy );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    class TabTwo extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            let lite = press.color.grey( 128 );
            return {
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.navy, 1 ),
                text: press.style.docker( 0, 80, 900, 20 ).font( 16, lite, 1 )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Business Analysis</div> );

            let tran = press.color.mono( 255, 0 );
            let lite = press.color.grey( 128 );
            let pale = press.color.grey( 64 );
            let grey = press.color.grey( 96 );
            let dark = press.color.grey( 32 );

            let labf = ( t, x, y, s, c, f ) => {
                let csty = press.style.absolute().place( x, y ).font( f, c, 1 );
                return <div key={ 'lab-' + t } style={ csty }>{ s }</div>;
            }
            let labs = [];
            labs.push( labf( 0,   0,   0, 'FTE Survey 2015', dark, 16 ) );
            labs.push( labf( 1,  40,  70, '11-20', grey, 12 ) );
            labs.push( labf( 2,  25,  85, '20.5%', grey, 12 ) );
            labs.push( labf( 3,  30, 200, '21-40', grey, 12 ) );
            labs.push( labf( 4,  40, 215, '10.5%', grey, 12 ) );
            labs.push( labf( 5, 295, 200, '> 41', grey, 12 ) );
            labs.push( labf( 6, 285, 215, '30%', grey, 12 ) );
            labs.push( labf( 7, 295,  70, '0-10', grey, 12 ) );
            labs.push( labf( 8, 300,  85, '40%', grey, 12 ) );

            let hist = press.style.docker( 0, 80, 360, 270 );
            comp.push( 
                <div key={ 'hist' } style={ hist }>
                <svg viewBox={ '0 0 36000 27000' }>
                <path d={ fr19c.plot.pie( 18000, 14000, 6500, 11500, 0.7, 0.1 ) } fill={ press.color.rgba( 0, 0, 232, 1 ) }/>
                <path d={ fr19c.plot.pie( 18000, 14000, 6500, 11500, 0.1, 0.3 ) } fill={ press.color.rgba( 0, 0, 160, 1 ) }/>
                <path d={ fr19c.plot.pie( 18000, 14000, 6500, 11500, 0.3, 0.4 ) } fill={ press.color.rgba( 0, 0,  92, 1 ) }/>
                <path d={ fr19c.plot.pie( 18000, 14000, 6500, 11500, 0.4, 0.7 ) } fill={ press.color.rgba( 0, 0,  28, 1 ) }/>
                </svg> 
                { labs }
                </div>
            );

            let reqs = [];
            let skll = press.style.docker( 0, 384, 360, 290 );
            let reqa = press.style.docker( 0,   0, 360, 19 ).font( 16, dark, 1 );
            reqs.push( <div key={ 'reqa' } style={ reqa }>{ 'Skill Set for STP Development' }</div> );
            
            let reqb = press.style.docker( 0,  34, 360, 19 ).font( 14, pale, 1 );
            reqs.push( <div key={ 'reqb' } style={ reqb }>{ 'Business' }</div> );
            let reqc = press.style.docker( 0,  57, 360, 38 ).font( 12, grey, 1 ).align( 'left', '150%' );
            let txtc = 'Corporate Action Procedures, Corporate Finance, Quantitative Finance'
            reqs.push( <div key={ 'reqc' } style={ reqc }>{ txtc }</div> );
            let reqd = press.style.docker( 0, 110, 360, 19 ).font( 14, pale, 1 );
            reqs.push( <div key={ 'reqd' } style={ reqd }>{ 'General Technology' }</div> );
            let reqe = press.style.docker( 0, 133, 360, 57 ).font( 12, grey, 1 ).align( 'left', '150%' );
            let txte = 'Relational Data Modelling, Database API, Database Administration, Software Engineering, Network, REST API, Web Service, Cloud Environment'
            reqs.push( <div key={ 'reqe' } style={ reqe }>{ txte }</div> );
            let reqf = press.style.docker( 0, 205, 360, 19 ).font( 14, pale, 1 );
            reqs.push( <div key={ 'reqf' } style={ reqf }>{ 'Financial Technology' }</div> );
            let reqg = press.style.docker( 0, 227, 360, 19 ).font( 12, grey, 1 ).align( 'left', '150%' );
            let txtg = 'Financial Data Vendor API, SWIFT Message';
            reqs.push( <div key={ 'reqg' } style={ reqg }>{ txtg }</div> );

            comp.push( <div key={ 'skll' } style={ skll }>{ reqs }</div> );

            let para = [
                'Implementing corporate action STP requires many expertises. Large sell side institutions would put at least 10 FTE for a year or more. Still it is not over yet: it requires manual handling by experts to cover cases when STP fails due to incorrect data. A survey from CityIQ and SWIFT reported that the industry average FTE (full time equivalent) headcount for corporate action processing was over 20 people in 2015. This has been steadily growing with the regulatory technology sector, which became more than a buzzword in the financial industry. Certainly, it is not an easy decision for a small company to embark on developing a corporate action STP system. But this is the entrance barrier. And once it’s done, we are head and shoulders above the rest.',
                'The main issue for an information service firm to implement corporate action STP is not the development cost but building a team of experts for the project. Given that there are high flying jobs for corporate action specialists in sell side and regulatory technology, it is difficult to allure a good number of talents.',
                'Sell side firms must be highly equipped. However we are not competing with them. Investment banks are not allowed to engage in a proprietary trading business at the moment.',
                'It is reported in the same survey from CityIQ and SWIFT that buy side firms have put much less effort on this subject. As mentioned before, not all of them need sophisticated corporate action processing. Large systematic trading shops and ETF providers do need it. We have a future-proof and cost effective solution, which is a valuable asset.'
            ];

            let east = press.style.docker( 380,  80, 520, 590 );
            let pcks = [];
            let lfta = press.style.docker( 0,   0, 520, 190 ).font( 12, grey, 1 ).align( 'left', '150%' );
            pcks.push( <div key={ 'lfta' } style={ lfta }>{ para[ 0 ] }</div> );
            let lftc = press.style.docker( 0, 204, 520,  19 ).font( 14, dark, 1 );
            pcks.push( <div key={ 'lftc' } style={ lftc }>{ 'Information Service Providers' }</div> );
            let lftd = press.style.docker( 0, 228, 520,  76 ).font( 12, grey, 1 ).align( 'left', '150%' );
            pcks.push( <div key={ 'lftd' } style={ lftd }>{ para[ 1 ] }</div> );

            let lfte = press.style.docker( 0, 318, 520,  19 ).font( 14, dark, 1 );
            pcks.push( <div key={ 'lfte' } style={ lfte }>{ 'Sell Side Firms' }</div> );
            let lftf = press.style.docker( 0, 342, 520,  57 ).font( 12, grey, 1 ).align( 'left', '150%' );
            pcks.push( <div key={ 'lftf' } style={ lftf }>{ para[ 2 ] }</div> );

            let lftg = press.style.docker( 0, 414, 520,  19 ).font( 14, dark, 1 );
            pcks.push( <div key={ 'lftg' } style={ lftg }>{ 'Buy Side Firms and ETF Providers' }</div> );
            let lfth = press.style.docker( 0, 437, 520,  76 ).font( 12, grey, 1 ).align( 'left', '150%' );
            pcks.push( <div key={ 'lfth' } style={ lfth }>{ para[ 3 ] }</div> );

            comp.push( <div key={ 'east' } style={ east }>{ pcks }</div> );

            let size = fr19c.grid.basis( devi );
            let body = fr19c.grid.core( devi );
            let back = press.style.docker( 0, 13 * size, '100%', size ).back( pltt.white );
            return (
                <div style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19c.TabOne = TabOne;
    fr19c.TabTwo = TabTwo;

} )( global.fr19c = global.fr19c || {} )

exports.fr19c = fr19c;
