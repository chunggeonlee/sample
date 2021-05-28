from croft.lib.aws import Storage
from argparse import ArgumentParser as Parser
from util import findroot
import os


def js( remo ):

    path = os.path.join( findroot(), 'static', 'dist', 'invre.js' )
    dest = os.path.join( 'static', 'dist', 'invre.js' )
    
    mime = 'text/javascript'
    Storage().upload(
        path, remo, dest,
        option = { 'ACL': 'public-read', 'ContentType': mime }
    )

def css( remo ):

    book = {
        'eot': 'application/vnd.ms-fontobject',
        'ttf': 'font-ttf',
        'woff': 'font-woff',
        'svg': 'image/svg+xml',
        'css': 'text/css'
    }

    root = os.path.join( findroot(), 'static', 'css' )
    for leaf in os.listdir( root ):
        mime = book[ leaf.split( '.' )[ -1 ] ]
        path = os.path.join( root, leaf )
        dest = os.path.join( 'static', 'css', leaf )
        Storage().upload(
            path, remo, dest,
            option = { 'ACL': 'public-read', 'ContentType': mime }
        )

def img( remo ):

    book = {
        'ico': 'image/vnd.microsoft.icon',
        'svg': 'image/svg+xml'
    }

    root = os.path.join( findroot(), 'static', 'img' )
    for leaf in os.listdir( root ):
        mime = book[ leaf.split( '.' )[ -1 ] ]
        path = os.path.join( root, leaf )
        dest = os.path.join( 'static', 'img', leaf )
        Storage().upload(
            path, remo, dest,
            option = { 'ACL': 'public-read', 'ContentType': mime }
        )
        
def html( remo ):
    
    path = os.path.join( findroot(), 'app', 'invre', 'templates', 'index.html' )
    dest = os.path.join( 'index.html' )
    mime = 'text/html'
    Storage().upload(
        path, remo, dest,
        option = { 'ACL': 'public-read', 'ContentType': mime }
    )

def main():

    clap = Parser()
    clap.add_argument( '-r', '--region', default = 'london' )
    clap.add_argument( '-i', '--inclusive', action = 'store_true' )
    args = clap.parse_args()
    
    remo = 'buy-signal-invre-{}'.format( args.region )
    js( remo )
    html( remo )
    if args.inclusive:
        css( remo )
        img( remo )

if __name__ == '__main__':

    main()
