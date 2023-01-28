const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    // 1. nome, (x candidatos)
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal +=  " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  if (vagasEmTexto === "") {
    alert("Não há vagas cadastradas!")
  }else{alert (vagasEmTexto)}
  
  
}
  

function novaVaga() {
  const nome = prompt("Informe o nome da vaga:")
  const descricao = prompt("Informe uma descrição para a vaga:")
  const dataLimite = prompt("Informe uma data limite para a vaga:")

  const confirmacao = confirm(
    "Deseja criar uma vaga com essas informações?\n"+
    "Nome: " + nome +"\nDescrição: " + descricao + "\nData limite: " + dataLimite
  )

  if (confirmacao) {
    const novaVaga = {nome, descricao, dataLimite, candidatos:[]}
    vagas.push(novaVaga)
    alert("Nova vaga criada!")
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir.")
  if (indice>=vagas.length || indice < 0) {
    alert("Indice inválido")
    return
  }
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
    return textoFinal + "\n - " + candidato
  }, "")
  alert(
    "Vaga No " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite +
    "\nCandidatos Inscritos: " + vaga.candidatos.length +
    "\nCandidatos Inscritos: " + candidatosEmTexto
  )
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a)")
  const indice = prompt("Informe o índice da vaga para qual o candidato deseja se inscrever:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + " ?\n"+
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite " + vaga.dataLimite
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert("Incrição realizada com sucesso!")
  }
}

function excluirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja realmente excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite " + vaga.dataLimite
  )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert("Vaga excluída com sucesso!")
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Sistema de Vagas de Emprego\n" +
    "\nEscolha uma das opções abaixo:"+
    "\n1. Listar vagas disponíveis." +
    "\n2. Criar uma nova vaga." +
    "\n3. Vizualizar uma vaga." +
    "\n4. Increver um candidato em uma vaga." +
    "\n5. Excluir uma vaga." +
    "\n6. Sair"
  )
    return opcao
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break;
      case "2":
        novaVaga()
        break;
      case "3":
        exibirVaga()
        break;
      case "4":
        inscreverCandidato()
        break;
      case "5":
        excluirVaga()
        break;
      case "6":
        alert("Saindo...")
        break;
    
      default:
        alert("Opção inválida")
        break;
    }

  } while (opcao !== "6");
}

executar()