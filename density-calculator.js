
//declare variables
let metal;
let diametro;
let qtdFios;
let metragem;
let pesoEspecifico;

 //declaring constants
const cuMm2 = 8.90207909993193;
const ccaMm2 = 2.89892771094733;
const steelMm2 = 7.86324890713395;
const pi = Math.PI;


//read data from HTML and apply to proper variables
function getVariables(){
    diametro = document.getElementById('diameter').value;
    qtdFios = document.getElementById('wires').value;
    metragem = document.getElementById('metro').value;
    function getMetal(){
        let metalArray = document.getElementsByClassName('radio');
        for(option of metalArray){
            if (option.checked){
                metal = option.value

            }
        }
    }
    getMetal();

}


function calculaEspec(){
    let area = pi * ((diametro/2)**2);
    switch(metal){
        
        case('cca'): 
        pesoEspecifico= area * ccaMm2;
        break;

        case('cu'):
        pesoEspecifico= area * cuMm2;
        break;

        case('ccs'):
        pesoEspecifico= area * steelMm2;
        break;

        
    }
    return document.getElementById('espec').value = pesoEspecifico;
}

function limpar(){
    document.getElementById('diameter').value = '';
    document.getElementById('wires').value = '';
    document.getElementById('metro').value = '';
    document.getElementById('espec').value = '';
    document.getElementById('pesoCabo').value = '';
    diametro = 0;
    qtdFios = 0;
    metragem = 0;
    metal = "";


}

document.getElementById('erase').addEventListener('click', limpar);

const pesoRolo = () => {
    let peso = (pesoEspecifico * qtdFios * metragem)/1000;
    document.getElementById('pesoCabo').value = Math.floor(peso);
}






