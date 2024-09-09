function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // console.log(section); // Para fins de depuração, verifica se a seção foi encontrada

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "" || campoPesquisa == " "){
      section.innerHTML = "Nada foi encontrado. Você precisa digitar o nome de um(a) atleta ou esporte";
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    /*
        Este bloco de código itera sobre o array de dados e constrói o HTML para cada resultado.
        A string HTML é formatada com as propriedades do objeto atual, como título, descrição e link.
        O resultado final é uma lista de elementos <div> com as informações dos resultados da pesquisa.
    */  
    
        // Itera sobre cada dado no array de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações sobre a Rebeca Andrade</a>
        </div>
      `;
      }
    }

    if (!resultados){
      resultados = "Sua pesquisa não retornou nenhum resultado";
    }
  
    // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }

