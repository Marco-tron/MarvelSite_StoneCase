# MarvelSite_StoneCase

Site feito em 7 dias para o case da stone, ele utiliza a API de desenvolvedor da MARVEL para obter informações dos personagens e comics. Além disso, para o site funcionar completamente, é necessário que você esteja rodando a api encontrada em um segundo repositório:
/marvel-site-api_stonecase 
Ela possibita o login e a capacidade de favoritar itens.
## Tecnologias escolhidas
### Nuxt
Para o desenvolvimento da aplicação foi utilizado o framework Nuxt. Foi escolhido por ser um framework que já tenho relativo domínio, e traria rapidez ja que eu possuia pouco tempo e precisava utilizar algumas outras tecnologias que eu não estava familiarizado, principalmente na construção da API. Além de possuir por si só ma bela organização de arquivos ele permite que certas informações sejam carregadas do lado do servidor melhorando a experiência do usuário.
### Tailwind 
O Tailwind é um framework de UI que auxilia muito na construção de telas. Suas classes pré-montadas permitem que o estilo de uma tela seja montado muito rapidamente e com uma padronização muito maior.

## Antes de começar
Ao clonar o repositório é necessário mais um passo para que você consiga rodar o projeto, algumas informação precisam ser específicas para você então é necessário a criação de um arquivo .env com os seguintes dados:
``` bash
#sua chave pública de acesso a API da Marvel
PUBLIC_KEY = yourpublickeyhere

#sua chave privada de acesso a API da Marvel
PRIVATE_KEY = yourprivatekeyhere

#qual o endereço da api de login? provavelmente será algo como http://localhost:8080
API_HOST = yourapihosthere
```
## Build Setup
Utilize agora este passo a passo para poder rodar a aplicação:
``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
