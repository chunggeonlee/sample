( function( press, undefined ) {
    ( function( modal, undefined ) {
        class Modal extends React.Component {
            constructor( props ) {
                super( props );
                this.tree = this.tree.bind( this );
                this.contentBoxStyle = this.props.styleModal;
                this.contentHeadStyle = this.props.styleMoconHead;
                this.contentBodyStyle = this.props.styleMoconBody;
            }

            tree( obj, depth ) {
                if ( press.defined( obj ) == false ) return;

                if ( typeof obj == 'number' || typeof obj == 'string' ) {
                    return obj;
                }

                return Object.keys( obj ).map( ( v, i ) => {
                    const cname = obj[ v ] ? obj[ v ].constructor.name : 'Null';

                    return (
                        <div
                            key={i}
                            style={{
                                ...this.contentHeadStyle,
                                left : depth * 10
                            }}
                        >
                            {v} <br />
                            {cname == 'Object' ? 
                                this.tree( obj[ v ], depth + 1 )
                                : cname == 'Array' ? 
                                    obj[ v ].map( ( d, i ) => {
                                        return (
                                            <div key={d} style={this.contentBodyStyle}>
                                                <span> </span>
                                                {this.tree( d, depth + 1 )}
                                            </div>
                                        );
                                    } )
                                    : 
                                    <div style={this.contentBodyStyle}>{obj[ v ]}</div>
                            }
                        </div>
                    );
                } );
            }

            render() {
                const bkey = this.props.name + ':spot';

                return (
                    <div key={bkey} className={this.props.name} style={this.contentBoxStyle}>
                        {this.tree( this.props.data, 0 )}
                    </div>
                );
            }
        }

        modal.component = function( spec ) {
            return <Modal key={spec.name} {...spec} />;
        };

        modal.create = function( name_, data_, modalstyle_, wrappedbox_, contentbox_ ) {
            return modal.component( {
                name : name_,
                data : data_,
                styleModal : modalstyle_,
                styleMoconHead : wrappedbox_,
                styleMoconBody : contentbox_
            } );
        };
    } )( press.modal = press.modal || {} );
} )( global.press = global.press || {} );

exports.press = press;
