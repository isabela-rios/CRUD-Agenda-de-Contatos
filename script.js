let contatos = [];
let editIndex = null;

const form = document.getElementById("form");
const lista = document.getElementById("lista");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const celular = document.getElementById("celular").value;

  if (editIndex === null) {
    contatos.push({ nome, email, celular });
  } else {
    contatos[editIndex] = { nome, email, celular };
    editIndex = null;
  }

  form.reset();
  renderizar();
});

function novoContato() {
  form.reset();
  editIndex = null;
}

function editarContato(index) {
  const contato = contatos[index];
  document.getElementById("nome").value = contato.nome;
  document.getElementById("email").value = contato.email;
  document.getElementById("celular").value = contato.celular;
  editIndex = index;
}

function excluirContato(index) {
  contatos.splice(index, 1);
  renderizar();
}

function renderizar() {
  lista.innerHTML = "";
  contatos.forEach((c, index) => {
    lista.innerHTML += `
      <tr>
        <td>${c.nome}</td>
        <td>${c.email}</td>
        <td>${c.celular}</td>
        <td>
          <a href="#" onclick="editarContato(${index})">Alterar</a>
          <a href="#" onclick="excluirContato(${index})">Excluir</a>
        </td>
      </tr>
    `;
  });
}{}
