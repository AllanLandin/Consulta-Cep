const cepInput = document.querySelector('#cep');


cepInput.addEventListener('blur', () => {
    let search = cepInput.value.replace('-',"");

    fetch (`https://viacep.com.br/ws/${search}/json/`)
    .then(res => res.json())
    .then(data => showData(data))

})

function showData(data){
    for (let field in data){
        if (document.querySelector('#' + field)){
            document.querySelector("#" + field).value = data[field]
        }
    }
}

