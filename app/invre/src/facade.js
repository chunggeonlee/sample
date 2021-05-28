import { press } from '../../../lib/press.js'


class Facade extends React.Component {
    constructor( props ) {
        super( props );
    }
    render() {
        let devi = this.props.device;
        let pltt = press.palette();
        let grey = press.color.grey( 128 );
        let offs = Math.max( 0, ( devi.inner.height - 670 ) / 2 - 50 );

        let comp = [];

        let wide = devi.inner.width
        let garo = Math.min( Math.max( wide - 100, 560 ), 900 )
        let core = 560;
        let padi = ( garo - core ) / 2;

        let head = press.style.slider( 0, 200 + offs, garo, 100 );
        let uppr = press.style.docker( 0, 0, garo, 100 ).underline( 0.5, press.color.grey( 64 ) );
        let maja = press.style.docker( padi, 50, 200, 30 ).font( 28, pltt.white, 1 );
        let maji = press.style.docker( padi + 200, 50, 360, 30 ).font( 28, grey, 1 );

        comp.push( 
            <div key={ 'head' } style={ head }>
                <div key={ 'uppr' } style={ uppr }>
                    <div key={ 'maja' } style={ maja }>BUY SIGNAL</div>
                    <div key={ 'maji' } style={ maji }>INVESTOR RELATIONS</div>
                </div>
            </div>
        );

        let innr = press.style.docker( padi, 0, core, 30 ).font( 18, press.color.grey( 160 ), 0 );
        let lowa = press.style.slider( 0, 340 + offs, garo, 40 );
        comp.push(
            <div key={ 'lowa' } style={ lowa }>
                <div style={ innr }>Presentation</div>
            </div>
        );
        let lowb = press.style.slider( 0, 480 + offs, garo, 40 );
        comp.push(
            <div key={ 'lowb' } style={ lowb }>
                <div style={ innr }>White Paper</div>
            </div>
        );

        let scrn = press.style.screen( 1000, press.color.film( 0 ) );
        let body = press.style.slider( 0, 380 + offs, garo, 400 );
        let bttn = [];
        let clka = press.style.docker( padi, 0, 200, 20 );
        let clkaSubA = press.style.docker( padi + 205, 0, 45, 20 ).font( 16 );
        let clkaSubM = press.style.docker( padi + 250, 0, 10, 20 );
        let clkaSubB = press.style.docker( padi + 260, 0, 45, 20 );
        bttn.push(
            <div key={ 'clka' } style={ clka }>
                { press.button.locked( 'fr19a', 'July 2019 - Introduction', pltt.white, 16, () => {}, 9000, pltt.turquoise ) }
            </div>
        );
        bttn.push(
            <div key={ 'clkaa' } style={ clkaSubA }>
                { press.button.plain( 'fr19a', 'ENG', pltt.white, { face : 14, pad : 1 }, () => this.props.report( 'ivideo/eng' ), 9000, pltt.turquoise ) }
            </div>
        );
        bttn.push(
            <div key={ 'clkam' } style={ clkaSubM }>
                <svg width='10' height='30' ><path d={ 'M0,0V13' } stroke={ '#ffffff' } strokeWidth={ '1px' } /></svg>
            </div>
        )
        bttn.push(
            <div key={ 'clkac' } style={ clkaSubB }>
                { press.button.plain( 'fr19a', 'KOR', pltt.white, { face : 14, pad : 1 }, () => this.props.report( 'ivideo/kor' ), 9000, pltt.turquoise ) }
            </div>
        );
        let clkb = press.style.docker( padi, 30, 200, 20 );
        bttn.push(
            <div key={ 'clkb' } style={ clkb }>
                { press.button.plain( 'fr19b', 'July 2019 - Round I', pltt.white, 16, this.props.report, 9000, pltt.turquoise ) }
            </div>
        );

        let clkc = press.style.docker( padi, 140, 200, 20 );
        bttn.push(
            <div key={ 'clkc' } style={ clkc }>
                { press.button.plain( 'fr19c', 'Management of Reference Data and Corporate Actions', pltt.white, 16, this.props.report, 9000, pltt.turquoise ) }
            </div>
        );

        comp.push( 
            <div key={ 'scrn' } style={ scrn }>
                <div key={ 'body' } style={ body }>
                    { bttn }
                </div>
            </div>
        );

        let back = press.style.board( 0, pltt.black );
        return (
            <div key={ 'back' } style={ back }>
                { comp }
            </div>
        );
    }
}

exports.Facade = Facade;
