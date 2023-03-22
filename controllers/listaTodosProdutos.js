fetch("http://localhost:3000/produtos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((produto) => {
      const conteudo = `
        <div class="produto">
        <img class="produto-imagem" src="${produto.imagem}">
        <p class="produto-nome">${produto.nome}</p>
        <p class="produto-preco">R$${produto.preco}</p>
        <p class="produto-id">#${produto.id} </p>
        </div>
        `;
      document
        .querySelector(".produtos-lista")
        .insertAdjacentHTML("beforeend", conteudo);
    });
  })
  .catch((error) => console.log(error));