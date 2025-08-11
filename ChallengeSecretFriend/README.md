# 🤝🏻 Amigo Secreto

Um programa interativo onde você pode adicionar nomes para serem sorteados aleatoriamente, descobrindo assim o seu amigo secreto.  
O sistema garante validação de entradas, mensagens informativas e alterações visuais para melhor experiência do usuário.

---

## 👀 Visão Geral do Projeto
- 🗨 Respostas flexíveis de acordo com a ação do usuário.
- 🎨 Alteração do estilo do componente conforme mensagens de feedback.
- ✅ Validação de dados de entrada e quantidade mínima para o sorteio.
- 🎲 Sorteio aleatório após clicar no botão.
- 📱 Compatibilidade com diferentes tamanhos de tela.
- 💡 Interações via **Enter** e ao **perder o foco** do campo de texto.

---

## 📥 Entrada (`ipnAddNewFriend`)

- **Objetivo:** Captura o valor inserido e o adiciona à lista de participantes (`listRadomFriend`).  
  Cada nome válido é exibido dentro de uma `<div>` (`divListFriend`), permitindo que o usuário visualize todos os nomes já adicionados.

- **Fluxo:**
  1. O usuário digita um nome.
  2. Pressiona **Enter** ou retira o foco do campo.
  3. Se o campo estiver vazio, aplica-se um estilo de erro temporário e exibe mensagem informativa.
  4. Se for válido, o nome é adicionado à lista e exibido na tela.

- **Validações:**
  - Não permite inserir valores vazios ou apenas espaços.
  - Aplica classe CSS de erro (`ipnVoid`) por **5 segundos** quando a entrada é inválida.
  - Após adição, o campo é automaticamente limpo.

---

## 📤 Saída (`btnDrawFriend`)

- **Objetivo:** Realizar o sorteio de um nome aleatório da lista, exibindo-o no elemento `spanFriendDrawn`.

- **Fluxo:**
  1. Ao clicar no botão de sorteio:
     - Se houver **menos de 3 nomes**, exibe mensagem de erro com estilo especial (`listFriendVoid`) por 5 segundos e **não realiza o sorteio**.
     - Se houver 3 ou mais nomes, gera um número aleatório com `Math.random()` e seleciona o participante correspondente.
  2. Exibe o nome sorteado no elemento `spanFriendDrawn`.

---

## 🛠 Estrutura e Funcionamento

### Lista de Participantes
- Armazenada no array `listRadomFriend`.
- É preenchida pelas interações do usuário (Enter ou perda de foco no input).

### Classe `StyleError`
- **Função:** Aplicar um estilo CSS de erro temporário a um elemento e exibir uma mensagem de feedback.
- **Método Principal:**  
  `errorOfStyleValueVoid(classStyle, text)` — Adiciona uma classe, altera o texto do elemento de resultado e remove a classe após 5 segundos.

### Eventos Utilizados
- `keypress` (Enter): adiciona um novo nome, caso seja válido.
- `blur`: adiciona o nome quando o campo perde o foco (se válido).
- `click` no botão de sorteio: executa validações e, se possível, sorteia.

### Feedbacks Visuais
- Mensagens informativas exibidas no `spanFriendDrawn`.
- Alteração temporária de classes para indicar erro ou sucesso.

---

## 📂 Estrutura dos Arquivos
```
ChallengeSecretFriend/
│── index.html
│── challengeSecretFriend.css
│── challengeSecretFriend.js
````
