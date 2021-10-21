function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if(campo.style.display == "inline"){
        campo.style.display = "none"
    }else{
        campo.style.display = "inline"
    }
}

// objetos + array
projeto1 = {
    titulo: 'Calculadora' ,
    descricao: 'Projeto desenvilvido utilizando javascript, html e css de uma calculadora de média simples.' ,
    foto: 'calculadora.png'
}

projeto2 = {
    titulo: 'Conversor' ,
    descricao: 'Projeto desenvilvido utilizando javascript, html e css de um conversor de dólar em real.' ,
    foto: 'conversor.jpg'
}

projeto3 = {
    titulo: 'Mentalista' ,
    descricao: 'Projeto desenvilvido utilizando javascript, html e css de um jogo de adivinhação.' ,
    foto: 'mentalista.jpg'
}

projeto4 = {
    titulo: 'Gabflix' ,
    descricao: 'Projeto desenvilvido utilizando javascript, html e css de uma plataforma de filmes.' ,
    foto: 'gabflix.jpg'
}

let projetos = [projeto1 , projeto2 , projeto3 , projeto4]

let projetoAtual = 0

function ProximoProjeto(){
    if (projetoAtual < 3){
        projetoAtual++
    }else{
        projetoAtual = 0
    }

    titulo = document.querySelector(".titulo-projeto")
    titulo.innerHTML = projetos[projetoAtual].titulo

    descricao = document.querySelector(".texto-corpo")
    descricao.innerHTML = projetos[projetoAtual].descricao
    
    imagem = document.querySelector(".foto-perfil")
    imagem.src= "images/" + projetos[projetoAtual].foto
}