import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ['input', 'results']

  connect() {
    // console.log("movies controller connected")
    this.searchMovies('Avengers')
  }

  search(event) {
    event.preventDefault()
    this.searchMovies(this.inputTarget.value);
  }

  searchMovies(query) {
    // Define a URL da API que será usada para buscar os filmes.
    const url = `https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`

    // Limpa os resultados anteriores.
    this.resultsTarget.innerHTML = ''

    // Usa a função fetch para fazer uma requisição GET na URL da API.
    fetch(url)
      .then(response => response.json()) // Converte a resposta em JSON.
      .then((data) => {
        // Para cada filme na lista de filmes retornada pela API.
        data.Search.forEach((movie) => {
          // Cria um elemento de lista (li) com a imagem do poster do filme.
          const li = `
          <li class='list-inline-item p-3'>
          <img src='${movie.Poster}' width='100px'>
          </li>`

          // Insere o novo elemento de lista no final dos resultados.
          this.resultsTarget.insertAdjacentHTML('beforeend', li)
        })
      })
  }

}
