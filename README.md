# Refund Web 💸

Aplicação web para solicitação e gestão de reembolsos, construída com React, TypeScript e Vite. Projeto desenvolvido como prática no curso FullStack da RocketSeat.

## 🛠 Tecnologias

- **React 19** - Framework UI com componentes funcionais e hooks modernos
- **TypeScript** - Type safety e melhor experiência de desenvolvimento
- **Vite** - Ferramenta de build rápida com hot reload
- **React Router** - Navegação e rotas por perfil de usuário
- **Axios** - Consumo de API REST
- **Zod** - Validação de formulários
- **Tailwind CSS** - Estilização rápida e consistente

## 📚 O que Aprendi

- ✅ Estrutura de componentes reutilizáveis e tipados
- ✅ Gerenciamento de autenticação e sessão no frontend
- ✅ Criação de rotas públicas e privadas por perfil de usuário
- ✅ Consumo de APIs com Axios e tratamento de erros
- ✅ Validação de formulários com Zod
- ✅ Upload de arquivos e integração com comprovantes
- ✅ Organização de telas e layouts compartilhados
- ✅ Separação entre lógica de negócio e apresentação

## 🏗 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis da interface
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Input.tsx
│   ├── Pagination.tsx
│   ├── RefundItem.tsx
│   ├── Select.tsx
│   └── Upload.tsx
├── contexts/             # Contexto de autenticação
├── hooks/                # Hook personalizado para autenticação
├── layouts/              # Layouts das páginas
├── pages/                # Telas principais do sistema
│   ├── Confirm.tsx
│   ├── Dashboard.tsx
│   ├── Refund.tsx
│   ├── SignIn.tsx
│   ├── SignUp.tsx
│   └── NotFound.tsx
├── routes/               # Definição das rotas por perfil
├── services/             # Configuração da API
├── utils/                # Helpers para categorias, moeda e classes CSS
└── App.tsx               # Componente principal
```

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+
- npm 10+

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse em: **http://localhost:5173**

### Build para Produção

```bash
npm run build
```

Gera saída otimizada em `dist/`.

### Preview da Build

```bash
npm run preview
```

## 🎯 Funcionalidades do Sistema

1. Faça login ou crie uma conta
2. Envie uma solicitação de reembolso com categoria, valor e comprovante
3. Veja uma tela de confirmação após o envio
4. Gestores podem acessar o dashboard para consultar e pesquisar solicitações
5. A navegação muda conforme o perfil do usuário

## 🛡 Boas Práticas Implementadas

### 1. TypeScript Stricto

Tipos bem definidos para dados de autenticação, reembolso e resposta da API.

### 2. Componentes Funcionais com Hooks

Uso de `useState`, `useEffect` e `useActionState` para controlar estados e formulários.

### 3. Validação de Formulários

Validação com Zod para garantir dados corretos antes do envio.

### 4. Organização por Responsabilidades

- `pages/` - telas e fluxos de negócio
- `components/` - interface reutilizável
- `services/` - comunicação com a API
- `contexts/` - autenticação global

### 5. Rotas por Perfil

A aplicação redireciona automaticamente para telas diferentes dependendo do papel do usuário.

## 🔧 Requisitos de Backend

O frontend consome a API backend em:

```text
http://localhost:3333
```

Certifique-se de que o backend esteja rodando para que login, cadastro, upload de comprovante e listagem de reembolsos funcionem corretamente.
Link para o repositório do backend: https://github.com/Matheus-AlvesCS/refund-api

---

**Autor:** Matheus Alves | RocketSeat Full-Stack
