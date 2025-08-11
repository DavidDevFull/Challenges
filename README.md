# 🚀 Desafios & Projetos — Hub de Navegação

✨ **Um portal centralizado para acessar meus desafios e projetos**, reunindo links diretos para páginas e repositórios.  
A ideia é simples: **você encontra o projeto, clica e já vai para o código ou para a versão online**, tudo de forma rápida, intuitiva e agradável.

🔗 **Acesse o repositório completo:**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/DavidDevFull/Challenges)

---

## 👀 Visão Geral do Projeto
- 🌐 **Navegação fluida** entre páginas e repositórios.
- ⚙ **Animações dinâmicas** para dar mais vida à interação.
- 🃏 **Cards descritivos e personalizados** para cada desafio.
- 📱 **Design responsivo**, adaptado para todos os dispositivos.

---

## ⚡ Funcionalidade de Entrada (Efeito "Máquina de Escrever")
- **Objetivo:** transformar um texto em um efeito digitado letra por letra.  
- **Fluxo:** converte uma string em array (`split("")`) → percorre com `forEach` → insere as letras com `setTimeout`.

**Exemplo de uso:**
```javascript
effectTypewriter(titleInitialPage, titleH1, 100);
```

## 🃏 Componente de Cards Dinâmicos.
• 🗣 Cada card contém título, descrição, imagem de fundo e link.

• 🔗 Ao clicar, o usuário é redirecionado para a página do desafio ou repositório.

**Exemplo de uso:**
```javascript
callCardRespective({ title, description, image, link });
```

## 📜 Lista de Projetos
• Os dados são mantidos em um array de objetos:
```javascript
projects.forEach((project) => {
  elementoHtml.appendChild(callCardRespective(project));
});
```
• Facilita a adição de novos desafios sem precisar mexer diretamente na estrutura HTML.

# 📌 Como Navegar
1. Abra o site.

2. Explore os cards para visualizar todos os desafios.

3. Clique no card desejado para ir direto ao projeto ou repositório.

4. Curta, explore e aprenda! 🚀

