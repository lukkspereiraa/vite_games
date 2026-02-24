# 🎮 GameVault - Seu Gerenciador de Biblioteca de Jogos

![GitHub top language](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

GameVault é uma aplicação web moderna e intuitiva para gerenciar sua biblioteca de videogames pessoal. Explore um catálogo com milhares de títulos, organize seus jogos, marque progresso e crie listas personalizadas.

---

## 🚀 Funcionalidades Principais

### 📚 Gerenciamento de Biblioteca
- ✅ **Adicione jogos** à sua biblioteca pessoal
- 🎮 **Marque progresso**: Jogando, Backlog, Dropado, Zerado
- 🏆 **Platinas**: Controle seus troféus platina
- 💬 **Comentários**: Adicione notas e avaliações pessoais
- 📁 **Franquias**: Organize seus jogos por franquia

### 🔍 Exploração e Busca
- 🔎 **Busca avançada** por nome de jogo
- 🏷️ **Filtros dinâmicos** por gênero
- 📊 **Ordenação**: Por data, nome, pontuação Metacritic
- 📄 **Paginação infinita**: Carregue mais jogos
- ⭐ **Scores Metacritic**: Veja avaliações dos críticos

### 📊 Visualizações Especiais
- 📋 **Todos os Jogos**: Sua coleção completa
- 🔥 **Jogando**: Títulos em progresso
- 📑 **Pra Jogar**: Seu backlog pessoal
- ✔️ **Zerados**: Jogos que você completou
- 🥇 **Platinados**: Troféus conquistados
- ❌ **Desisti**: Jogos que não completou
- 📚 **Franquias**: Agrupados por série
- 🎖️ **Tier List Pessoal**: Seus jogos com notas

### 🎨 Modais Informativos
- 🖼️ **Detalhes do Jogo**: Screenshots, descrição, plataformas
- 💭 **Painel de Opinião**: Avalie e comente seus jogos

---

## 📸 Como Usar

### Fluxo Básico da Aplicação

```
┌─────────────────────────────────────────────────────────────┐
│                    INICIAR APLICAÇÃO                         │
└──────────────────┬──────────────────────────────────────────┘
                   │
        ┌──────────▼──────────┐
        │  EXPLORAR CATÁLOGO  │  
        │   (São milhares)    │
        └────────┬────────────┘
                 │
    ┌────────────▼────────────┐
    │ Encontrou um jogo?      │
    │ Clique no + (BIBLIOTECA)│
    └────────────┬────────────┘
                 │
    ┌────────────▼──────────────────┐
    │   ADICIONADO À SUA COLEÇÃO    │
    │   (Acesse em "Todos os Jogos")│
    └────────────┬──────────────────┘
                 │
    ┌────────────▼───────────────────┐
    │  CLIQUE NO COMENTÁRIO (💬)     │
    │  E INFORME SEU PROGRESSO       │
    │  - Estado (Jogando/Backlog...)│
    │  - Se zerou                    │
    │  - Se bateu platina            │
    │  - Nota pessoal                │
    │  - Comentários                 │
    └────────────────────────────────┘
```

### Passo a Passo

1. **EXPLORAR CATÁLOGO** 🌍
   - Clique em "EXPLORAR CATÁLOGO" na barra lateral
   - Browse através de milhares de jogos
   - Use a busca para encontrar títulos específicos
   - Filtre por gênero ou ordene por data/pontuação

2. **ADICIONAR À BIBLIOTECA** ➕
   - Encontre um jogo que deseja acompanhar
   - Clique no botão **"+ BIBLIOTECA"**
   - O jogo foi adicionado!

3. **GERENCIAR SEU PROGRESSO** 💬
   - Acesse sua biblioteca ("Todos os Jogos")
   - Clique no ícone de **comentário** (💬) do jogo
   - Abra o "Painel de Opinião" para:
     * Definir estado: **Jogando** 🔥 / **Backlog** 📑 / **Desisti** ❌
     * Marcar como **Zerado** ✔️ (completou)
     * Marcar como **Platinado** 🏆 (todos os troféus)
     * Adicionar **Franquia** (série do jogo)
     * Dar uma **Nota Pessoal** (sua avaliação)
     * Deixar **Comentários**

4. **ORGANIZAR COLEÇÃO** 📂
   - **Todos os Jogos**: Veja toda sua biblioteca
   - **Jogando**: O que você está jogando agora
   - **Pra Jogar**: Seu backlog de títulos
   - **Zerados**: Histórico de completados
   - **Platinados**: Achievements conquistados
   - **Desisti**: Jogos que abandonou
   - **Franquias**: Organize por série
   - **Tier List**: Classifique seus favoritos por nota

5. **BUSCAR E FILTRAR** 🔍
   - Use a barra de **busca por nome**
   - Filtre por **gênero** específico
   - Ordene resultados (mais novos, A-Z, melhor avaliado)

---

## 🛠️ Instalação e Configuração

### Pré-requisitos
- **Node.js** (v16+)
- **npm** ou **yarn**
- Uma chave de API RAWG (gratuita): https://rawg.io/apidocs

### 1️⃣ Clonar do GitHub

```bash
# Clone o repositório
git clone https://github.com/lukkspereiraa/vite_games.git

# Entre na pasta
cd vite_games
```

### 2️⃣ Instalar Dependências

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 3️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_API_KEY=sua_chave_api_aqui
VITE_BASE_URL=https://api.rawg.io/api
```

**Como obter a chave API:**
1. Acesse https://rawg.io/apidocs
2. Clique em "Get API Key"
3. Preencha o formulário
4. Copie a chave recebida
5. Cole no `.env.local`

### 4️⃣ Rodar em Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Ou com yarn
yarn dev
```

A aplicação estará disponível em: `http://localhost:5173`

---

## 🌐 Versão Online

GameVault está hospedado online! 

### 🔗 [Acesse GameVault Ao Vivo]()

**Funciona 100% no navegador - nenhuma instalação necessária!**

Marcando com ⭐ (Like) no GitHub você nos ajuda a crescer:
- [⭐ Dê uma estrela no GitHub](https://github.com/lukkspereiraaa/vite_games)

---

## 📁 Estrutura do Projeto

```
vite_games/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/        # Componentes React
│   │   ├── GameCard.jsx      # Card individual do jogo
│   │   ├── GameGrid.jsx      # Grade de jogos
│   │   ├── GameModal.jsx     # Modal com detalhes
│   │   ├── Sidebar.jsx       # Barra lateral
│   │   ├── SearchBar.jsx     # Campo de busca
│   │   ├── Filters.jsx       # Filtros
│   │   ├── UserPanel.jsx     # Painel de opinião
│   │   └── ...
│   ├── services/
│   │   └── api.jsx         # Chamadas à API RAWG
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada
│   └── styles/            # Arquivos CSS
├── .env.local             # Configurações (não commit)
├── package.json           # Dependências
└── vite.config.js         # Configuração Vite
```

---

## 🎯 Dependências Principais

| Biblioteca | Versão | Uso |
|-----------|--------|-----|
| React | 19.2.0 | Framework principal |
| React DOM | 19.2.0 | Renderização |
| Lucide React | 0.575.0 | Ícones |
| Vite | 7.3.1 | Build tool |

---

## 🔨 Scripts Disponíveis

```bash
# Inicia servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Verifica qualidade do código
npm run lint
```

---

## 💾 Armazenamento Local

GameVault usa **localStorage** para salvar sua biblioteca:
- ✅ Dados salvos automaticamente
- ✅ Acesso offline (visualização)
- ✅ Sincronização entre abas
- ✅ Sem necessidade de conta/login

---

## 🎮 Exemplos de Uso

### Criar uma Tier List Pessoal
1. Abra a seção **"Tier List"**
2. Adicione notas (1-10) para seus jogos
3. Veja a lista ordenada automaticamente

### Acompanhar Backlog
1. Abra **"Pra Jogar"**
2. Todos seus jogos com estado "Backlog"
3. Use para planejar o que jogar

### Documentar Franquias Completas
1. Use o filtro **"Franquias"**
2. Adicione o nome (ex: "The Legend of Zelda")
3. Veja todos os títulos relacionados

---

## ⚠️ Troubleshooting

### Erro: "Chave de API inválida"
- Verifique `.env.local`
- Confirme a chave no website RAWG
- Tente recarregar a página

### Erro: "Nenhum jogo encontrado"
- Verifique a conexão com internet
- Tente recarregar a página
- A API RAWG pode estar indisponível (raro)

### Dados não salvam?
- Verifique se localStorage está habilitado
- Tente limpar cache do navegador
- Alguns navegadores em modo privado não permitem

---

## 👨‍💻 Tecnologias Utilizadas

- **Frontend**: React 19 + Vite
- **Estilização**: CSS3 (Custom Properties, Animações)
- **Ícones**: Lucide React
- **API**: RAWG Video Games Database
- **Storage**: LocalStorage API
- **Build**: Vite + ESBuild

---

## 🚀 Deploy

### Deploy na Vercel (Recomendado)

```bash
# 1. Instale Vercel CLI
npm i -g vercel

# 2. Deploy
vercel
```

### Deploy na Netlify

```bash
# Build
npm run build

# Conecte seu repositório GitHub no Netlify
# E deixe que faça o deploy automático
```

---

## 📞 Suporte

- 🐛 Encontrou um bug? [Abra uma issue](https://github.com/lukkspereiraa/vite_games/issues)
- 💡 Tem uma sugestão? [Discussões](https://github.com/seu-usuario/lusspereiraa/discussions)
- 💬 Dúvidas? [Abra uma discussion](https://github.com/seu-usuario/lukkspereiraa/discussions)

---

## 🏆 Dê uma Estrela! ⭐

Se GameVault foi útil para você, por favor:
1. **[⭐ Clique na estrela no GitHub](https://github.com/seu-usuario/vite_games)**
2. **Compartilhe com amigos gamers**
3. **Deixe seu feedback**

Sua estrela nos mantém motivados a continuar desenvolvendo!

---

## 🎉 Roadmap Futuro

- [ ] Sistema de contas e sincronização na nuvem
- [ ] Modo escuro/claro
- [ ] Exportar biblioteca em CSV
- [ ] Integração com Steam/Nintendo/PSN
- [ ] Recomendações baseadas em gosto
- [ ] Comunidade compartilhando listas
- [ ] App mobile
- [ ] Social sharing

---

**Desenvolvido com ❤️ por Lucas Pereira**

Feito com [Vite](https://vite.dev) + [React](https://react.dev) + [RAWG API](https://rawg.io/apidocs)
