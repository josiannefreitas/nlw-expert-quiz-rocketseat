const perguntas = [
  {
    pergunta: 'O que é JavaScript?',
    respostas: [
      'Uma linguagem de programação de servidor',
      'Um framework para HTML',
      'Uma linguagem de programação de alto nível'
    ],
    correta: 2
  },
  {
    pergunta: 'Qual é a forma correta de declarar uma variável em JavaScript?',
    respostas: ['var x = 5;', 'variable x = 5;', 'int x = 5;'],
    correta: 0
  },
  {
    pergunta: 'Qual é a função do operador "===" em JavaScript?',
    respostas: [
      'Compara apenas os valores, não os tipos',
      'Compara os valores e os tipos',
      'Compara apenas os tipos, não os valores'
    ],
    correta: 1
  },
  {
    pergunta: 'Como você escreve um comentário de uma linha em JavaScript?',
    respostas: [
      '// Isto é um comentário',
      '# Isto é um comentário',
      '/** Isto é um comentário */'
    ],
    correta: 0
  },
  {
    pergunta:
      'Qual função é usada para imprimir algo no console em JavaScript?',
    respostas: ['print()', 'console.log()', 'log()'],
    correta: 1
  },
  {
    pergunta: 'O que é um array em JavaScript?',
    respostas: [
      'Uma função',
      'Um tipo de dado que armazena uma coleção ordenada de elementos',
      'Um operador aritmético'
    ],
    correta: 1
  },
  {
    pergunta: 'O que é o DOM em JavaScript?',
    respostas: [
      'Document Object Model - uma representação da estrutura do documento HTML',
      'Dynamic Object Model - um modelo para criar objetos dinamicamente',
      'Data Object Model - uma estrutura para armazenar dados em JavaScript'
    ],
    correta: 0
  },
  {
    pergunta: 'Qual é a finalidade do operador ternário em JavaScript?',
    respostas: [
      'Atribuição de valor a uma variável',
      'Concatenação de strings',
      'Substituição de caracteres em uma string'
    ],
    correta: 0
  },
  {
    pergunta: 'O que significa a sigla AJAX em JavaScript?',
    respostas: [
      'Asynchronous JavaScript and XML',
      'All JavaScript and XML',
      'Advanced JavaScript and XHTML'
    ],
    correta: 0
  },
  {
    pergunta: 'Como você declara uma função em JavaScript?',
    respostas: [
      'função myFunction()',
      'declare function myFunction()',
      'function = myFunction()'
    ],
    correta: 0
  }
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute(
      'name',
      'pergunta-' + perguntas.indexOf(item)
    )
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = event => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)

      if (estaCorreta) {
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}
