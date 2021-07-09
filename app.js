document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
})
const fetchData = async () =>{
    try {
        const res = await fetch ('nomenclador.json');
        const data = await res.json()

        pintarTabla(data)
    
    } catch (error) {
        console.log(error)
    }
}

const items = document.querySelector('#items')
const pintarTabla = (data) =>{
    const template = document.querySelector('#template-tabla').content
    const fragment = document.createDocumentFragment()
    Object.values(data).forEach(fila => {
        //template.querySelector('th').textContent = fila.id
        template.querySelectorAll('td')[0].textContent = fila.COD_U
        template.querySelectorAll('td')[1].textContent = fila.COD_P
        template.querySelectorAll('td')[2].textContent = fila.DESCRIPCION

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

}

var busqueda = document.getElementById('buscar');
var table = document.getElementById("tabla").tBodies[0];
buscaTabla = function(){
    texto = busqueda.value.toLowerCase();
    var r=0;
    while(row = table.rows[r++])
    {
      if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
        row.style.display = null;
      else
        row.style.display = 'none';
    }
  }

  busqueda.addEventListener('keyup', buscaTabla);

  //------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", ()=>{
    fetchData2()
})
const fetchData2 = async () =>{
    try {
        const res = await fetch ('diagnosticos.json');
        const data = await res.json()

        pintarTabla2(data)
    
    } catch (error) {
        console.log(error)
    }
}

const items2 = document.querySelector('#items2')
const pintarTabla2 = (data) =>{
    const template = document.querySelector('#template-tabla2').content
    const fragment = document.createDocumentFragment()
    Object.values(data).forEach(fila => {
        //template.querySelector('th').textContent = fila.id
        template.querySelectorAll('td')[0].textContent = fila.COD
        template.querySelectorAll('td')[1].textContent = fila.DESCRIPCION

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    items2.appendChild(fragment)

}

var busqueda2 = document.getElementById('buscar2');
var table2 = document.getElementById("tabla2").tBodies[0];
buscarTabla = function(){
    texto = busqueda2.value.toLowerCase();
    var r=0;
    while(row = table2.rows[r++])
    {
      if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
        row.style.display = null;
      else
        row.style.display = 'none';
    }
  }

  busqueda2.addEventListener('keyup', buscarTabla);