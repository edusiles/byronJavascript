interface PessoaInterface {
  nome: string,
  idade: number,
  profissao: string,
  irmaos?: PessoaInterface[]
}

let jose = {
  nome: "José",
  idade: 25,
  profissao: "Médico",
  irmaos: [
    {
      nome: "João",
      idade: 20,
      profissao: "Estudante"
    }
  ]
}

function somaIdade(pessoa: PessoaInterface) {
  pessoa.idade += 1;
  
  return pessoa;
}

somaIdade(jose);

document.body.innerText = JSON.stringify(jose);