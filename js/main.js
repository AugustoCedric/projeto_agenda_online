// >> Comando de animação para o botão Hangurg da visão mobile
// inicio-------------------------------------------------------
const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});

// Final-------------------------------------------------------
const form = document.getElementById("form-agenda");
const imgAprovada = `<img src="./img/aprovado.png" alt="Emoji festejando"></img>`;
const imgReprovada = `<img src="./img/reprovado.png" alt="Emoji Triste"></img>`;

let newlinha = "";

// Comando de funcionalidade para os inputs e tabelas
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtendo os elementos do formulário pelos IDs
  const iptName = document.getElementById("name-persona");
  const iptPhone = document.getElementById("phone-number");

  // Criando uma linha para inserir na tabela com as informações
  let linha = "<tr>";
  linha += `<td>${iptName.value}</td>`;
  linha += `<td>${iptPhone.value}</td>`;
  linha += `<td>${
    iptPhone.value.length === 13 ? imgAprovada : imgReprovada
  }</td>`;
  linha += "</tr>";

  newlinha += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = newlinha;

  // Exibindo os valores em um alerta para teste
  // alert(`Nome: ${iptName}\nNúmero de telefone: ${iptPhone}`);

  iptName.value = "";
  iptPhone.value = "";
});

// Mascara no Input do telefone para melhor interação co cliente
document.getElementById("phone-number").addEventListener("input", function (e) {
  let inputValue = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  let formattedValue = "";

  if (inputValue.length >= 2) {
    formattedValue += inputValue.substring(0, 2) + " ";
    inputValue = inputValue.substring(2);
  }

  if (inputValue.length > 5) {
    formattedValue += inputValue.substring(0, 5) + "-";
    inputValue = inputValue.substring(5);
  }

  formattedValue += inputValue;

  e.target.value = formattedValue;
});
