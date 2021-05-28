import $ from 'jquery';

( function( press, undefined ) {
    ( function( comm, undefined ) {
        comm.ajax = ( type_, datatype_, url_, data_, fnsucc_, fnerror_, opt_ ) => {
            $.ajax( {
                type : type_,
                url : url_,
                data : data_,
                dataType : datatype_,
                success : fnsucc_,
                error : fnerror_,
                ...opt_ 
            } );
        };
    } )( press.comm = press.comm || {} );
} )( global.press = global.press || {} );

exports.press = press;
