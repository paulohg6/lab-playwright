# lab-playwright

Projeto utilizando playwright para criação de testes ponta a ponta(e2e).

## Rodando Projeto:

- Clone o Projeto
  `git clone https://github.com/paulohg6/lab-playwright.git`

- Instalando dependencias
  ``` npm ci ```

- Rodando os testes
  ```npm test```

- Rodando os testes
  ```npm test```

- Vendo o Report e videos gravados da execução
    Tem que se executado pos o teste.
  ```npx playwright show-report ```

## Debugando projeto
 ```npm run debug```

## Como retirar a execução modo Headles?

Dentro de playwright.config.js existe a propriedade  headless: true,
Passar ela para false assim você consegue ver a execução na sua maquina

## Report de cada execução no slack

Utilizando a lib de [test-results-reporter](https://github.com/test-results-reporter/reporter), a cada execução é enviado uma mensagem para um canal no slack com os resultados do teste
[Link de convite para o canal para ver a execução](https://join.slack.com/t/testing-cs06179/shared_invite/zt-1gzbg5491-MjAwGNdxlMFY8d5kOe1cuw).

Para execução é necessario gerar o report em junit. [Doc do playwright para geração do report](https://playwright.dev/docs/test-reporters#junit-reporter)


  
# Estrutura do projeto

Foi utilizado o page objects de acordo com a documentação oficial do playwright para JS https://playwright.dev/docs/test-pom
