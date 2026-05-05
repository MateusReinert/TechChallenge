# Tech Challenge - Fase 01

Aplicação web de controle financeiro desenvolvida com foco em organização, experiência do usuário e componentização.

---

## Figma (base do design)

https://www.figma.com/design/9AaP8DCnZxKsxg1xk6Kvcq/FIAP---Tech-Challenge---Fase-1---Mateus-Reinert?m=auto&t=DK42j7U5GWJYByzh-1

---

## Stack

- Next.js
- React
- TypeScript
- Material UI (MUI)
- Storybook
- JSON local simulando persistência

---

## Funcionalidades

### Dashboard
- Saldo atual
- Total de entradas e saídas
- Total de transações
- Últimas movimentações
- Ocultar/mostrar valores

### Transações
- Listagem completa
- Busca
- Ordenação
- Paginação
- Detalhes em painel lateral

### CRUD
- Criar
- Editar
- Excluir (com confirmação)

### UX
- Loading overlay
- Feedback com snackbar
- Empty states
- Responsividade

---

##  Rodando o projeto

### 1. Instalar dependências

```bash
npm install
```

---

### 2. Ambiente de desenvolvimento

```bash
npm run dev
```

Acesse:  
http://localhost:8000

---

### 3. Build de produção

```bash
npm run build
```

---

### 4. Rodar em produção

```bash
npm run start
```

---

### 5. Storybook

```bash
npm run storybook
```

Acesse:  
http://localhost:6006

---

## Estrutura (resumo)

```txt
src/
  app/            → rotas (Next.js)
  components/     → componentes reutilizáveis
  styles/         → design system
  constants/      → labels e opções
  utils/          → funções auxiliares
  services/       → acesso ao JSON
  actions/        → server actions
  data/           → base simulada (transactions.json)
```

---

## Observações

- Os dados são simulados via JSON (`transactions.json`)
- Projeto focado em front-end e experiência do usuário
- Estrutura preparada para evolução futura (API/backend)

--- 