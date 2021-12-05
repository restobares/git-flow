/*
	eliasdbr
	'TestComponent'
	Esto es un componente "template" para guiarnos 
	al construir nuevos componentes!
*/
import React /*, { useState }*/ from 'react';

function TestComponent( /*{ prop1,prop2,prop3... }*/ ): JSX.Element {
	// States definitions
	// const [state,setState] = useState<string>('default_value');
	
	// Render component
	return (
		<>
			<h2>TestComponent</h2>
			{/* Here. Are you happy now?*/}
			<p>Lorem Ipsum bla bla blagada blabla, blabidi blabidi blu.</p>
		</>
	);
} 

export default TestComponent;

// Tu tan preciado paragraph.... ¬_¬
