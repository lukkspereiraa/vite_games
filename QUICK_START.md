# ⚡ Quick Start - GameVault em 5 Minutos

## 📥 1. Clonar (1 min)

```bash
git clone https://github.com/lukkspereiraa/vite_games.git
cd vite_games
```

## 📦 2. Instalar (2 min)

```bash
npm install
```

## 🔑 3. Chave de API (1 min)

1. Acesse: https://rawg.io/apidocs
2. Clique em "Get API Key"
3. Preencha e copie a chave
4. Crie arquivo `.env.local`:

```env
VITE_API_KEY=sua_chave_aqui
VITE_BASE_URL=https://api.rawg.io/api
```

## 🚀 4. Rodar (1 min)

```bash
npm run dev
```

Abra: **http://localhost:5173** ✅

---

## 🎮 Como Usar (30 segundos)

```
1. EXPLORAR → Procure um jogo
2. ADD → Clique "+ BIBLIOTECA"
3. COMENTÁRIO → Clique (💬) para marcar progresso
4. PRONTO! Seu jogo está salvo
```

---

## 🌐 Colocar Online (3 minutos)

### Opção Fácil: Vercel

```bash
npm install -g vercel
vercel
```

Segue as instruções na tela → Pronto!

### Opção 2: Netlify

Acesse https://app.netlify.com → Connect GitHub → Deploy

---

## 📱 Resultado

- ✅ Aplicação rodando localmente
- ✅ Explorar jogos de graça
- ✅ Gerenciar sua biblioteca
- ✅ Dados salvos automaticamente
- ✅ Site online

---

## 🆘 Problema?

### "ModuleNotFoundError" ou erro de API
```bash
npm install  # Tente novamente
```

### "API Key inválida"
- Verifique `.env.local`
- Copie a chave correta
- Recarre a página

### "Nenhum jogo aparece"
- Verifique conexão internet
- Recarregue a página

---

**Tudo funcionando? ⭐ [Deixe uma estrela no GitHub!](https://github.com/lukkspereiraa/vite_games)**

[📖 Documentação Completa](./README_PT-BR.md)
