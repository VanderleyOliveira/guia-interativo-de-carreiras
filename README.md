# Base de Conhecimento de Linguagens de Programação

## 📋 Descrição

Uma aplicação web interativa para explorar e buscar informações sobre linguagens de programação. O projeto apresenta uma interface intuitiva e responsiva que permite aos usuários descobrir detalhes sobre diferentes linguagens, incluindo ano de criação, descrição e links para documentação oficial.

## ✨ Características

- 🔍 **Busca Dinâmica**: Filtro em tempo real por nome da linguagem ou palavras-chave na descrição
- 📱 **Design Responsivo**: Interface adaptável para dispositivos móveis e desktops
- 🎨 **Interface Limpa**: Design moderno e intuitivo
- 🔗 **Links Diretos**: Acesso rápido à documentação oficial de cada linguagem
- 📦 **Dados Estruturados**: Dados armazenados em JSON para fácil manutenção

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização e responsividade
- **JavaScript**: Funcionalidades interativas e busca dinâmica
- **JSON**: Armazenamento de dados das linguagens

## 📁 Estrutura do Projeto

```
imersao_alura/
├── index.html        # Arquivo principal da aplicação
├── style.css         # Estilos e layout
├── script.js         # Lógica da aplicação (busca e renderização)
├── data.json         # Base de dados com informações das linguagens
├── README.md         # Este arquivo
├── public/           # Recursos públicos (ícones, imagens)
└── ...
```

## 🚀 Como Usar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Sem dependências externas

### Instalação

1. **Clone o repositório ou baixe os arquivos**

2. **Abra o arquivo `index.html` no navegador**
   - Duplo clique em `index.html` ou
   - Arraste o arquivo para o navegador

3. **Comece a explorar!**

## 🔍 Funcionalidades

### Buscar Linguagens
- Digite o nome de uma linguagem no campo de busca
- Clique em "Buscar" ou pressione Enter
- Os resultados são filtrados em tempo real
- A busca funciona por nome ou palavras na descrição

### Visualizar Informações
- Cada linguagem exibe:
  - Nome
  - Ano de criação
  - Descrição
  - Link para documentação oficial

## 📝 Estrutura de Dados

O arquivo `data.json` armazena as informações das linguagens:

```json
{
  "nome": "JavaScript",
  "descricao": "Descrição da linguagem...",
  "ano": 1995,
  "link": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
}
```

## ➕ Como Adicionar Novas Linguagens

1. Abra o arquivo `data.json`
2. Adicione um novo objeto ao array com a seguinte estrutura:

```json
{
  "nome": "Nome da Linguagem",
  "descricao": "Descrição sobre a linguagem",
  "ano": 2024,
  "link": "https://link-para-documentacao.com"
}
```

3. Salve o arquivo
4. Atualize a página no navegador

## 📊 Exemplo de Uso

1. Abra a aplicação
2. Na barra de busca, digite "Java"
3. Clique em "Buscar"
4. Os cards com Java serão exibidos
5. Clique em "Conheça mais da linguagem" para acessar a documentação

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido como parte de uma imersão educativa para:
- Praticar HTML semântico
- Dominar CSS e responsividade
- Desenvolver lógica em JavaScript
- Trabalhar com API fetch e JSON
- Criar aplicações web interativas

## 🤝 Contribuições

Sinta-se livre para:
- Adicionar novas linguagens ao `data.json`
- Melhorar a estilização
- Implementar novas funcionalidades
- Corrigir bugs

## 📄 Licença

Este projeto é de código aberto e está disponível para fins educacionais.

## 👨‍💻 Desenvolvedor

Criado durante a Imersão Alura.

---

**Última atualização**: 25 de novembro de 2025
