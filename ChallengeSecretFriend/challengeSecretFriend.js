const ipnAddNewFriend = document.getElementById("ipnAddNewFriend");
const spanFriendDrawn = document.getElementById("spanFriendDrawn");
const btnDrawFriend = document.getElementById("btnDrawFriend");
const divListFriend = document.getElementById("divListFriend");

// Lista onde vai ficar os amigos sorteados.

const listRadomFriend = [];
let allowAddNames = true; 

// Classe para aplicar estilo de erro temporário.
class StyleError {
  constructor(element) {
    this._element = element;
  }

  errorOfStyleValueVoid(classStyle, text) {
    this._element.classList.add(classStyle);
    spanFriendDrawn.textContent = text;
    setTimeout(() => {
      this._element.classList.remove(classStyle); // Remova a mesma classe que foi adicionada
      console.log("Estilo de erro removido");
    }, 5000);
  }
}

// Instância de metódos de estilo.
const errorStyleInput = new StyleError(ipnAddNewFriend);
const errorStyleButton = new StyleError(btnDrawFriend);

// Pega todos os nomes da lista e mostra para o usuário.
function addListFriend() {
  listRadomFriend.push(ipnAddNewFriend.value);
  if (listRadomFriend[0]) {
    divListFriend.innerHTML += `<span>${ipnAddNewFriend.value}</span>`;
    divListFriend.classList.add("styleDiv");
  }
  console.info("Lista aleátoria de amigos após adiconar:", listRadomFriend);
}

// Adicionar um novo nome precionando ENTER.
ipnAddNewFriend.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // Se estiver vazio
    while(!ipnAddNewFriend.value.trim()) {
      errorStyleInput.errorOfStyleValueVoid("ipnVoid", "🎲 Não é possível sortear sem nome ❗");
      return; // Impede que adicione à lista
    }
    addListFriend(); // função para adicionar
    ipnAddNewFriend.value = ""; // limpa o campo
  }
});

// Adicionar um novo nome após tirar o foco do input.
ipnAddNewFriend.addEventListener("blur", (event) => {
  // Caso esteja vazio não retorna nada e aplica um estil infomativo.
  if (!ipnAddNewFriend.value.trim()) {
    return; // Impede que adicione à lista
  }
  addListFriend(); // função para adicionar
  ipnAddNewFriend.value = ""; // limpa o campo
});

btnDrawFriend.addEventListener("click", () => {
  // Se a largura do array for menor que 3, não irá fazer um sorteio.
  while(listRadomFriend.length <= 2){
    // Função de estilo erro.
    errorStyleButton.errorOfStyleValueVoid("listFriendVoid", "📝 No minimo 3 nomes para o sorteio 🔢");
    allowAddNames = false; 
    return ;
  }
  // Gera um número alaatório
  let numberRamdoGenerated = Math.floor(Math.random() * listRadomFriend.length);
  // Mostra o amigo secreto sorteado de acordo com o index do array.
  spanFriendDrawn.textContent = listRadomFriend[numberRamdoGenerated];
  // Imprime o número aleátorio e o amigo secreto sorteado
  console.info(numberRamdoGenerated, listRadomFriend[numberRamdoGenerated]);
});