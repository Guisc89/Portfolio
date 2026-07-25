# Portfólio Profissional — Guilherme Cardoso

Este é o repositório do seu portfólio profissional moderno, responsivo e totalmente otimizado para recrutadores da área de tecnologia. O design combina uma estética *premium glassmorphic*, controle de tema claro/escuro e carregamento super leve.

---

## 🚀 Como Executar Localmente

Como o projeto foi construído usando **HTML5, CSS3 e JavaScript puro (Vanilla)**, não há necessidade de instalar frameworks pesados. 

1. Baixe a pasta `portfolio-guilherme`.
2. Abra o arquivo `index.html` em qualquer navegador (dê um duplo clique).
3. Pronto! O site já está rodando.

*Dica: Caso use o VS Code, você pode instalar a extensão **Live Server** para rodar o site em um servidor local com recarregamento automático ao salvar alterações.*

---

## ⚙️ Como Personalizar Seus Dados e Links

Todas as informações variáveis do site foram centralizadas no início do arquivo `script.js` para facilitar a manutenção. **Você não precisa mexer no arquivo HTML para alterar seus links principais ou adicionar projetos!**

Abra o arquivo [`script.js`](file:///C:/Users/guisc.GUILHERME-PC/.gemini/antigravity/scratch/portfolio-guilherme/script.js) e edite a constante `CONFIG` no início do arquivo:

```javascript
const CONFIG = {
  // WhatsApp Configuration (apenas números, incluindo código do país e DDD)
  whatsappNumber: '5551999999999', // Substitua pelo seu número
  whatsappMessage: 'Olá, Guilherme! Vi seu portfólio e gostaria de conversar sobre uma oportunidade na área de tecnologia.',
  
  // Links de Redes Sociais e Profissionais
  linkedinUrl: 'https://linkedin.com/in/guilhermecardoso', // Seu LinkedIn
  githubUrl: 'https://github.com/guilhermecardoso',       // Seu GitHub
  emailAddress: 'guilherme.cardoso@exemplo.com',           // Seu e-mail
  resumeUrl: 'assets/curriculo-guilherme.pdf',             // Caminho do seu PDF de currículo
};
```

---

## 📁 Como Adicionar ou Modificar Projetos

Para adicionar novos projetos futuramente, basta abrir o arquivo [`script.js`](file:///C:/Users/guisc.GUILHERME-PC/.gemini/antigravity/scratch/portfolio-guilherme/script.js) e adicionar um novo objeto ao array `PROJECTS`:

```javascript
const PROJECTS = [
  // Projetos existentes ...
  {
    id: 3, // Próximo ID sequencial
    title: 'Nome do Novo Projeto',
    description: 'Breve descrição de até 2 linhas sobre o projeto.',
    solution: 'Explicação curta sobre o que o projeto resolve ou o que ele demonstra tecnicamente.',
    technologies: ['React', 'Node.js', 'PostgreSQL'], // Tecnologias utilizadas
    githubUrl: 'https://github.com/seuusuario/repositorio', // Link do repositório
    demoUrl: 'https://seunovo-projeto.vercel.app' // Link de demonstração online (deixe vazio "" se não houver)
  }
];
```

Os novos projetos aparecerão automaticamente na página com layouts responsivos e ícones interativos.

---

## 🏆 Como Adicionar Certificações ou Eventos

Para adicionar novas certificações ou eventos que você participou, edite o array `CERTIFICATIONS` no arquivo [`script.js`](file:///C:/Users/guisc.GUILHERME-PC/.gemini/antigravity/scratch/portfolio-guilherme/script.js):

```javascript
const CERTIFICATIONS = [
  // ... Certificações existentes
  {
    title: 'Nova Certificação em Engenharia de Requisitos',
    institution: 'Nome da Instituição (Ex: PMO / Udemy)',
    type: 'edu' // Use 'edu' para cursos/certificações ou 'event' para feiras/eventos
  }
];
```

---

## 🌐 Como Publicar (Deploy) Grátis na Internet

O site está preparado para ser publicado gratuitamente nas principais plataformas de hospedagem estática. Aqui estão as três melhores opções:

### Opção 1: GitHub Pages (Recomendado)
Se você hospedar o código no GitHub, a publicação é gratuita e automática:
1. Crie um repositório no GitHub (ex: `portfolio`).
2. Envie os arquivos da pasta `portfolio-guilherme` para o repositório.
3. No GitHub, acesse **Settings** (Configurações) > **Pages**.
4. Em **Build and deployment**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
5. Clique em **Save**. Em poucos minutos, seu site estará online em `https://seu-usuario.github.io/nome-do-repositorio/`.

### Opção 2: Vercel
1. Crie uma conta gratuita em [Vercel](https://vercel.com).
2. Conecte sua conta do GitHub.
3. Importe o repositório do portfólio.
4. Clique em **Deploy**. A Vercel configurará tudo e gerará um link amigável imediatamente.

### Opção 3: Netlify
1. Acesse [Netlify](https://netlify.com) e crie uma conta grátis.
2. Arraste e solte a pasta `portfolio-guilherme` diretamente na área de upload do painel do Netlify.
3. Seu site estará publicado imediatamente com um link público que você poderá personalizar.
