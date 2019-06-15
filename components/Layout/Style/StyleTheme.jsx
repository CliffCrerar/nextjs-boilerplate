/**
 * THEME CONTROLLER
 * @summary This is the component that controls the theming for the app
 * @author Cliff Crerar
 * Created at     : 2019-05-28 05:29:56
 * Last modified  : 2019-06-15 14:20:52
 */
import {Component} from "react";
import fetch from "isomorphic-unfetch";
import {themeservice, cookieservice} from "static/js/services";
import {theme, themeNames} from 'static/lib/theme';
import "static/scss/_1_components.scss";

function confirmAlert() {
	const r = confirm( "Page reload is required to display new theme" );
	console.log( "r: ", r );
	if ( r ) {
		window.location.reload();
	}
}
class StyleTheme extends Component {
	constructor ( props ) {
		super( props );
		this.state = {
			theme: theme[ cookieservice.getTheme() || 'blue-deeporange' ],
			themeFb: {
				[ "dark-primary-color" ]: "#1976D2",
				[ "default-primary-color" ]: "#2196F3",
				[ "light-primary-color" ]: "#BBDEFB",
				[ "text-primary-color" ]: "#FFFFFF",
				[ "accent-color" ]: "#FF5252",
				[ "primary-text-color" ]: "#212121",
				[ "secondary-text-color" ]: "#757575",
				[ "divider-color" ]: "#BDBDBD"
			},
			darkNavText: false
		};
	}

	componentDidMount = () => {
		themeservice.subscribe( newtheme => {
			const oldTheme = cookieservice.getTheme();
			cookieservice.setTheme( newtheme, () => {oldTheme != newtheme && window.location.reload()} );
		} );
		const navBarHeight = document.getElementById( "nav-Bar" ).clientHeight;
		document.getElementById( "nav-spacer" ).style.height = navBarHeight + "px";
	};

	componentWillmount() {

	}

	componentWillUnmount() {
		themeservice.unsubscribe();
	}

	render() {
		return (
			<React.Fragment>
				<style jsx global>{`
					@import "static/scss/_1_components.scss";
					:root {
						--dark-primary: ${this.state.theme[ "dark-primary-color" ]}; /* DARK PRIMARY */
						--default-primary: ${this.state.theme[ "default-primary-color" ]}; /* LIGHT PRIMARY */
						--light-primary: ${this.state.theme[ "light-primary-color" ]}; /* PRIMARY */
						--text-primary: ${this.state.theme[ "text-primary-color" ]}; /* TEXT ICONS */
						--accent: ${this.state.theme[ "accent-color" ]}; /* ACCENT */
						--primary-text: ${this.state.theme[ "primary-text-color" ]}; /* PRIMARY TEXT */
						--secondary-text: ${this.state.theme[ "secondary-text-color" ]}; /* SECONDARY TEXT */
						--divider: ${this.state.theme[ "divider-color" ]}; /* DIVIDER */
					}
					.text-dark-primary {
						color: var(--dark-primary) !important;
					}
					.text-default-primary {
						color: var(--default-primary) !important;
					}
					.text-light-primary {
						color: var(--light-primary) !important;
					}
					.text-accent {
						color: var(--accent) !important;
					}
					.text-light {
						color: var(--text-primary) !important;
					}
					.text-primary {
						color: var(--primary-text) !important;
					}
					.text-secondary {
						color: var(--secondary-text) !important;
					}
					.text-accent {
						color: var(--accent) !important;
					}
					.text-divider {
						color: var(--divider) !important;
					}
					.bg-dark-primary {
						background: var(--dark-primary) !important;
					}
					.bg-default-primary {
						background: var(--default-primary) !important;
					}
					.bg-light-primary {
						background: var(--light-primary) !important;
					}
					.bg-accent {
						background: var(--accent) !important;
					}
					.bg-light {
						background: var(--text-primary) !important;
					}
					.bg-primary {
						background: var(--primary-text) !important;
					}
					.bg-secondary {
						background: var(--secondary-text) !important;
					}
					.bg-accent {
						background: var(--accent) !important;
					}
					.bg-divider {
						color: var(--divider) !important;
					}
					.nav-wrapper a {
						color: var(${this.state.darkNavText ? "--primary-text" : "--text-primary"});
					}
				`}</style>
			</React.Fragment>
		);
	}
}

// StyleTheme.getInitialProps = function() {
//  const initProps = {
//      themes: require('static/lib/theme/themes.json'),
//      themeChange: themeChange,
//  };
//  return initProps;
// };

export default StyleTheme;
