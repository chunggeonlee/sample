( function( press, undefined ) {
    ( function( util, undefined ) {
        ( function( telegram, undefined ) {
            const formAjax = ( type_, datatype_, url_, data_, fnsucc_, fnerror_ ) => {
                let heads = {
                    'Content-Type' : 'application/json'
                }

                $.ajax( {
                    headers : heads,
                    type : type_,
                    url : url_,
                    data : data_,
                    dataType : datatype_,                    
                    success : fnsucc_,
                    error : fnerror_         
                } )
            };
            
            telegram.hub = function( o, s, e ){
                return formAjax(
                    'POST',
                    'json',
                    'https://fbwkbfu7r9.execute-api.ap-northeast-2.amazonaws.com/default',
                    JSON.stringify( o ),
                    s,
                    e
                )
            }        

        } )( util.telegram = util.telegram || {} );
    } )( press.util = press.util || {} );
} )( global.press = global.press || {} );

exports.press = press;
