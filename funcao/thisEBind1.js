const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
//=============

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// Bind: método responsável por amarrar um determinado
// objeto para ele ser o dono da execução.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
