##Mocks e Inputs##

// setupTests.js
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;

> Utilizado para simular resultados de funções assincronas.
	ex: fetch(url);
	
*Json*
 -> const response = { json: jest.fn() => {} } 
 
 global.jest.fn()
