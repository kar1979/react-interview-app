import React, { createContext, useReducer } from 'react';

export const AnswersContext = createContext();

const initialState = {
  answers: [],

  questions: [
    { idQuestion: 1, category: 'html', categoryName: 'HTML', question: 'HTML significa "Hyper Text Markup Language"', correctAnswer: 'correcto' },
    { idQuestion: 2, category: 'html', categoryName: 'HTML', question: 'La etiqueta correcta para salto de línea es <lb>', correctAnswer: 'incorrecto' },
    { idQuestion: 3, category: 'html', categoryName: 'HTML', question: 'La etiqueta <body> contiene todo elcontenido visible de una aplicación web', correctAnswer: 'correcto' },
    { idQuestion: 4, category: 'html', categoryName: 'HTML', question: 'La expresión `<a> http://www.google.com</a>` define correctamente un hipervinculo', correctAnswer: 'incorrecto' },
    { idQuestion: 5, category: 'css', categoryName: 'CSS', question: 'El atributo id y class pueden ser aplicados a mas de un elemento HTML', correctAnswer: 'INcorrecto' },
    { idQuestion: 6, category: 'css', categoryName: 'CSS', question: 'Los selectores definen sobre qué elementos se aplicará un conjunto de reglas CSS', correctAnswer: 'correcto' },
    { idQuestion: 7, category: 'css', categoryName: 'CSS', question: 'Ciertas reglas CSS pueden reemplazar (sobre-escribir) a otras al ser más específicas', correctAnswer: 'correcto' },
    { idQuestion: 8, category: 'css', categoryName: 'CSS', question: 'La pseudoclase ":hover" define cuando un hipervinculo ha sido visitado', correctAnswer: 'incorrecto' },
    { idQuestion: 9, category: 'git', categoryName: 'Git', question: 'Git es usado para rastrear y registrar cambios y alteraciones en cualquier tipo de archivos de computadora', correctAnswer: 'correcto' },
    { idQuestion: 10, category: 'git', categoryName: 'Git', question: 'Una rama (branch) es una copia de un repositorio que está completamente separado del origina', correctAnswer: 'incorrecto' },
    { idQuestion: 11, category: 'git', categoryName: 'Git', question: 'El comando "git commit -m" es usado para subir cambios al servidor', correctAnswer: 'incorrecto' },
    { idQuestion: 12, category: 'git', categoryName: 'Git', question: 'Un conflicto es cuando estamos enviando cambios a un archivo al cual otra persona ya envió un cambio', correctAnswer: 'correcto' },
    { idQuestion: 13, category: 'javascript', categoryName: 'JavaScript', question: 'El operador (===) es llamado operador de igualdad estricta', correctAnswer: 'correcto' },
    { idQuestion: 14, category: 'javascript', categoryName: 'JavaScript', question: '"<script> y </script>" son marcas para la inserción del código JavaScript en las páginas HTML?', correctAnswer: 'correcto' },
    { idQuestion: 15, category: 'javascript', categoryName: 'JavaScript', question: 'Polimorfismo es cuando las clases heredan de otras clases para adaptar o completar el comportamiento', correctAnswer: 'incorrecto' },
    { idQuestion: 16, category: 'javascript', categoryName: 'JavaScript', question: 'La asignación de propiedades a objetos se hace de la misma forma que se asigna un valor a una variable.', correctAnswer: 'correcto' },
    { idQuestion: 17, category: 'typescript', categoryName: 'TypeScript', question: 'TypeScript permite tipar las variables utilizadas en un programa', correctAnswer: 'correcto' },
    { idQuestion: 18, category: 'typescript', categoryName: 'TypeScript', question: 'TypeScript soporta Clases e Interfaces', correctAnswer: 'correcto' },
    { idQuestion: 19, category: 'typescript', categoryName: 'TypeScript', question: 'tys es la extensión que usa TypeScript', correctAnswer: 'incorrecto' },
    { idQuestion: 20, category: 'typescript', categoryName: 'TypeScript', question: 'El simbolo "|" es equivalente al operador and (&&)', correctAnswer: 'incorrecto' },
    { idQuestion: 21, category: 'react', categoryName: 'ReactJS', question: 'ReactJS, es un framework front-end. Basada en el lenguaje JavaScript', correctAnswer: 'incorrecto' },
    { idQuestion: 22, category: 'react', categoryName: 'ReactJS', question: 'JSX es el lenguaje utilizado en el desarrollo con Angular', correctAnswer: 'incorrecto' },
    { idQuestion: 23, category: 'react', categoryName: 'ReactJS', question: 'Los Componentes de ReactJS representan las funciones del lenguaje JavaScript.', correctAnswer: 'correcto' },
    { idQuestion: 24, category: 'react', categoryName: 'ReactJS', question: 'El método render() monta los elementos HTML en el DOM', correctAnswer: 'correcto' },
    { idQuestion: 25, category: 'angular', categoryName: 'Angular', question: 'Las directivas añaden comportamiento a un elemento del DOM existente', correctAnswer: 'correcto' },
    { idQuestion: 26, category: 'angular', categoryName: 'Angular', question: 'Angular CLI (Command Line Interface) es una interfaz de línea de comando para montar y construir aplicaciones de Angular.', correctAnswer: 'correcto' },
    { idQuestion: 27, category: 'angular', categoryName: 'Angular', question: 'La directiva *ngFor inserta o elimina un elemento basado en una condición de true / false', correctAnswer: 'incorrecto' },
    { idQuestion: 28, category: 'angular', categoryName: 'Angular', question: 'La interpolación es una sintaxis especial de Angular, que permite hacer binding de una propiedad', correctAnswer: 'correcto' },
    { idQuestion: 29, category: 'node', categoryName: 'NodeJS', question: 'Stubs, son ciertas funciones que copian el comportamiento de módulos específicos', correctAnswer: 'correcto' },
    { idQuestion: 30, category: 'node', categoryName: 'NodeJS', question: 'callback simbolizan algún tipo de acción tomada o movimiento hecho dentro de la página', correctAnswer: 'incorrecto' },
    { idQuestion: 31, category: 'node', categoryName: 'NodeJS', question: 'Node JS sea "de un solo subproceso', correctAnswer: 'correcto' },
    { idQuestion: 32, category: 'node', categoryName: 'NodeJS', question: 'El demultiplexer, es una interfaz encargada de las notificaciones dentro de Node JS', correctAnswer: 'correcto' }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEND_ANSWERS":
      let newAnswers = state;
      action.payload.forEach((answer, i) => {
        newAnswers.answers.push(answer);
      });
      return {...state, answers: newAnswers }
    
    default:
      return initialState
  }
}

export const AnswersContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AnswersContext.Provider value={[state, dispatch]}>
      {props.children}
    </AnswersContext.Provider>
  );
}