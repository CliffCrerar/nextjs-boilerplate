/**
 * ENVIRONMENT CONFIG
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2019-05-27 23:58:19 
 * Last modified  : 2019-06-17 23:27:39
 */

const
	os = require( 'os' ),
	path = require( 'path' ),
	x = os.platform() === 'win32' ? ';' : ':'; // delimiter in this context

// The app root is where the App.js resides
const dirs = [
	'static',
	'static/lib',
	'pages',
	'components'
]

function getNodePathAsync() {
	function ProjectPaths( rootDir ) {
		let node_path = [ `${rootDir}${x}` ];
		for ( let i = 0; i < dirs.length; i++ ) {
			let thisPath = `${rootDir}${dirs[ i ]}${x}`
			node_path.push( thisPath );
		}
		return node_path.join( '' );
	}
	//ut.log( 'NODE_PATH: ', ProjectPaths( path.join( __dirname, '../ ' ).toString().trim() ) );
	process.env.NODE_PATH = ProjectPaths( path.join( __dirname, '../../' ).toString().trim() );
	return process.env.NODE_PATH;
}

module.exports = getNodePathAsync();