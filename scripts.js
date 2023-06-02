const encontrarEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((response) => response.json())
        .then((json) => console.log(json));

}

encontrarEstados()