**NPM** - (instala pacote locamente)
	*node package menager (pacode de codigo feito por pessoas)*
	
	
	`npm init -y` (yes)
		name:
		version
		description
		
	*pacote de instalação apenas para dev*
	`npm install --save-dev jest`
	`npm install react`
	
**NPX** - (executa o codigo dentro do pacote)
*create-react-app - sempre com npx*
	
	
## JSX (Javascript Syntax Extension)##
* Facilitador
* nao obrigatório
* permite sintaxe entre HTML e CSS

	exemplo: 
		
		function nomeCompleto (nome, sobrenome) {
 			 return `${nome} ${sobrenome}`;
		}

		const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;
		
		const container = <div>{element}</div>;
		
**Adicionando Classe**

		const element = <h1 className={classe}>Hello, {nome}</h1>;
		
## ReactDOM.render ##
*responsável por renderizar e atualizar seu código dentro do HTML , exibindo seus elementos React*

* Compara dois elementos para mudar onde necessario
*render(componentToRender, targetNode), where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.*
		ReactDOM.render(element , document.getElementById())

##Import e CSS##
		`import React from 'react';
		import './App.css';

		function App() {
		  return (
		    <div className='App'>
		      <h1>APP</h1>
		    </div>
		  );
		}`


##Classes##
* Agrupamento de funções
* cada pedaço de tela carregara uma função (classe)
* criar componentes que aparecem na tela

			import React from 'react';

			class ReactClass extends React.Component {
			   constructor(props) {
			    super(props)};
			    
			  render() {
			    return (
			      <h1>My first React Class Component!</h1>
			    )
			  }
			}
**ultilizando funções como tag HTML**

		return (
		 <App>
		  <Navbar />
		  <Dashboard />
		  <Footer />
		 </App>
		)
			
			 
		
	
