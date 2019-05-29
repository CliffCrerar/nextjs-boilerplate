/**
 * FLOATING BUTTON ACTION
 *
 * @summary Definition of the floating button action component
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:29:22
 * Last modified  : 2019-05-29 23:39:32
 */

import {Component} from 'react';

class FloatingButtonAction extends Component {
	constructor ( props ) {
		super( props )
	}

	activateComponentJS() {
		var elems = document.querySelectorAll( '.fixed-action-btn' );
		M.FloatingActionButton.init( elems, {} );
	}

	componentDidMount() {
		console.log( 'Floating button mounted' );
		this.activateComponentJS();
	}

	SetThemeSelection( themeNames ) {
		console.log( 'themeNames: ', themeNames );
		const Selections = themeNames.map( ( name, idx ) => {
			return (
				<li key={'themeSelect' + idx}>
					<a className="btn-floating red">
						<i className="material-icons">insert_chart</i>
					</a>
				</li>
			)
		} );
		return (
			<ul>
				{Selections}
			</ul>
		)
	}

	render() {
		console.log( 'Floating button action' );
		//const ThemeSelection = this.SetThemeSelection( this.props.themeNames );
		return (
			<div className="fixed-action-btn" >
				<a className="btn-floating btn-large red">
					<i className="large material-icons">mode_edit</i>
				</a>

				<ul>
					<li>
						<a className="btn-floating red">
							<i className="material-icons">insert_chart</i>
						</a>
					</li>
					<li>
						<a className="btn-floating yellow darken-1">
							<i className="material-icons">format_quote</i>
						</a>
					</li>
					<li>
						<a className="btn-floating green">
							<i className="material-icons">publish</i>
						</a>
					</li>
					<li>
						<a className="btn-floating blue">
							<i className="material-icons">attach_file</i>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

FloatingButtonAction.getInitialProps = function () {
	return {

	}
}

export default FloatingButtonAction;