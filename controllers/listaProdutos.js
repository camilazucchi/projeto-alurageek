fetch("http://localhost:3000/produtos?categoria=1")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach(produto => {
        const conteudo = `
        <div class="produto">
        <img class="produto-imagem" src="${produto.imagem}" />
        <p class="produto-nome">${produto.nome}</p>
        <p class="produto-preco">R$${produto.preco}</p>
        <a class="produto-link" href="/produtos/id=${produto.id}">Ver produto</a>
        </div>
        `;
        document.querySelector(".produtos-categoria-1")
        .insertAdjacentHTML("beforeend", conteudo);
    })
  })
  .catch((error) => console.log(error));

  fetch("http://localhost:3000/produtos?categoria=2")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach(produto => {
        const conteudo = `
        <div class="produto">
        <img class="produto-imagem" src="${produto.imagem}">
        <p class="produto-nome">${produto.nome}</p>
        <p class="produto-preco">R$${produto.preco}</p>
        <a class="produto-link" href="${produto.id}">Ver produto</a>
        </div>
        `;
        document.querySelector(".produtos-categoria-2")
        .insertAdjacentHTML("beforeend", conteudo);
    })
  })
  .catch((error) => console.log(error));

  fetch("http://localhost:3000/produtos?categoria=3")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach(produto => {
        const conteudo = `
        <div class="produto">
        <img class="produto-imagem" src="${produto.imagem}">
        <p class="produto-nome">${produto.nome}</p>
        <p class="produto-preco">R$${produto.preco}</p>
        <a class="produto-link" href="${produto.id}">Ver produto</a>
        </div>
        `;
        document.querySelector(".produtos-categoria-3")
        .insertAdjacentHTML("beforeend", conteudo);
    })
  })
  .catch((error) => console.log(error));