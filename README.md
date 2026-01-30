# 📊 Time Tracking Dashboard (Controle de Tempo)

Um aplicativo web simples que mostra o tempo gasto em diferentes atividades, permitindo visualizar dados por períodos (Diário, Semanal e Mensal).

---

## 🎯 Objetivo do Projeto

Este é um projeto **Frontend Mentor** que desafia você a criar um dashboard interativo onde um usuário (Jeremy Robson) pode visualizar quanto tempo passou em atividades diferentes (Trabalho, Lazer, Estudo, etc.) e comparar com períodos anteriores.

---

## 📁 Estrutura do Projeto

```
frontend-mentor-controle-de-tempo/
│
├── index.html              # Página principal (estrutura HTML)
├── data.json              # Base de dados com as informações de tempo
├── README.md              # Este arquivo
│
└── src/
    ├── js/
    │   └── index.js       # Lógica da aplicação (JavaScript)
    │
    └── css/
        ├── style.css      # Estilos principais
        ├── variables.css  # Variáveis CSS (cores, fontes)
        ├── reset.css      # Reset de estilos padrão
        └── media.css      # Estilos responsivos (mobile, tablet)
```

---

## 🚀 Como Usar

### Pré-requisitos
- Nenhum! Só precisa de um navegador web moderno.

### Instalação
1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` no seu navegador
3. Pronto! O aplicativo já funciona


## 💡 Fluxo da Aplicação

```
1. Página carrega (index.html)
   ↓
2. JavaScript começa a executar
   ↓
3. Faz requisição para data.json (fetch)
   ↓
4. Dados são carregados e armazenados na variável 'data'
   ↓
5. renderCards() cria os cartões HTML com os dados
   ↓
6. Usuário clica em um botão (Daily, Weekly, Monthly)
   ↓
7. renderCards() é chamada novamente com o novo período
   ↓
8. Página é atualizada com novos dados
```

---

## 🎨 O Que Você Vê na Tela

- **Card de Perfil**: Foto, nome e botões para escolher o período
- **Cartões de Atividade**: Um para cada tipo (Work, Play, Study, etc.)
  - Mostra: Horas atuais + Horas do período anterior (para comparação)
  - Ícone de menu (para possíveis ações no futuro)

---

## 📚 Conceitos Importantes (Para Entender o Código)

| Conceito | O Que É | Usado Aqui |
|----------|---------|-----------|
| **Fetch API** | Busca dados de um arquivo/servidor | Busca `data.json` |
| **DOM** | Elementos HTML que você vê na página | Inserir cartões dinamicamente |
| **Event Listeners** | Escuta cliques e outras ações | Botões dos períodos |
| **Array Methods** | forEach, map, etc. | Percorrer atividades e botões |
| **Template Literals** | String com variáveis (usando \`) | Criar HTML dinamicamente |

---

## ⚙️ Tecnologias Usadas

- **HTML5**: Estrutura
- **CSS3**: Estilo e layout responsivo
- **JavaScript Vanilla**: Lógica (sem frameworks)
- **JSON**: Armazenamento de dados

---

## 🐛 Possíveis Melhorias Futuras

- Adicionar animações ao trocar período
- Salvar dados no localStorage
- Adicionar mais atividades no data.json
- Implementar um menu real no ícone de ellipsis
- Fazer requisições a uma API real em vez de JSON local
- Adicionar tema escuro/claro
