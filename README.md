# CryptoCurrencies
> Aplicação web simples que consome API no backend e no frontend.

## Overview
Neste projeto foi desenvolvido um *uma aplicação web simples que consome dados de uma API de terceiros no backend e uma API própria no frontend* para praticar a manipulação de requisições e o consumo de APIs com JavaScript, utilizando o **NodeJS** no backend e apenas a **Fetch API** no frontend. Também foi utilizado o **Express**, **Cors** e **Axios** para auxiliar no desenvolvimento do backend e o **Bootstrap** no frontend.

A API de terceiros utilizada foi a do [CoinMarketCap](https://coinmarketcap.com/api/) que disponibilizada **dados de criptomoedas**. 

## Setup
Primeiramente faça o download ou clonagem do repositório e com o [NodeJS](https://nodejs.org/) instalado execute o comando `npm install` no diretório correspondente para realizar o download das dependências necessárias. 

Na pasta src crie o arquivo `token.json` com a sua chave da CoinMarketCap API, conforme o modelo a seguir:
```json
{
  "key": "sua-chave-aqui"
}
```
Para executar o backend digite o comando `npm start` no diretório raiz e para executar o frontend, em outro terminal, digite o comando `npx lite-server` no diretório src.

## License 
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.