/**
 * GLOBAL STYLE VARIABLES
 * @summary Global variables for styles
 * @author Cliff Crerar
 * Created at     : 2019-05-28 01:05:40
 * Last modified  : 2019-05-28 05:36:02
 */
var test = '#4A298A'

const StyleVariables = () => (
	<React.Fragment>
		<style global jsx>{`
			:root {
				--vph: 100vh;
				--vpw: 100vw;
				/*--bs4Purple: ${test};*/
				/* --mcsscolor: #ee6e73; */
				/*--mcsscolor: #3F51B5;*/
			}
		`}</style>
	</React.Fragment>
)

export default StyleVariables;