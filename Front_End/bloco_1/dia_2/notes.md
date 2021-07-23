#Props#
*são como parametros para uma função*
*React cria um objeto com esse nome*
**NUNCA FAZER ATRIBUIÇÕES COM O PROPS**
	`const props = { name: 'Samuel', lastName: 'Silva' }`

**Criando a classe com props**
		import React from 'react';

		class Greeting extends React.Component {
		  render() {
		    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
		  }
		}

		export default Greeting;
		
**Chamando ela**
		import Greeting from './Greeting';

		function App() {
		  return (
		    <main>
		      <Greeting name="Samuel" lastName="Silva" />
		    </main>
		  );
		}

		export default App;
		
##checking props##
			import PropTypes from 'prop-types';
			Greeting.propTypes = {
		 	 name: PropTypes.string.isRequired,
			  lastName: PropTypes.string.isRequired,
			};
