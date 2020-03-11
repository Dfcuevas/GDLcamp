(function () {
  'use strict';

  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function() {
  
  // ------------- CAMPOS DATOS USUARIO ---------
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

  // ------------- CAMPOS PASES ---------
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');
    
  // ------------ BOTONES Y DIVS ------------

    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');
    

  // ------------ EXTRAS ------------------

    var etiquetas = document.getElementById('etiquetas');
    var camisas = document.getElementById('camisa_evento');





    calcular.addEventListener('click', calcularMontos);


    pase_dia.addEventListener('click', mostrarDias);

    function calcularMontos(event) {
      event.preventDefault();
      if(regalo.value === '') {
        alert('Debes elegir un regalo');
        regalo.focus();
      } else {
        var boletosDia = parseInt(pase_dia.value, 10)|| 0,
            boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
            boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
            cantCamisas = parseInt(camisas.value, 10)|| 0,
            cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;

        var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

        var listadoProductos = [];

        if(boletosDia >= 1) {
          listadoProductos.push(boletosDia + ' Pases por un dia');
        }
        if(boletos2Dias >= 1){
          listadoProductos.push(boletos2Dias + ' Pases por 2 dias');
        }
        if(boletoCompleto >= 1) {
          listadoProductos.push(boletoCompleto + ' Pase Completo');
        }
        if(cantCamisas = 1) {
          listadoProductos.push(cantCamisas + ' Camisa');
        }
        if(cantCamisas > 1) {
          listadoProductos.push(cantCamisas + ' Camisas');
        }
        if(cantCamisas = 1) {
          listadoProductos.push(cantEtiquetas + ' Etiqueta');
        }
        if(cantEtiquetas > 1) {
          listadoProductos.push(`${cantEtiquetas} Etiquetas`);
        }

        lista_productos.style.display = 'block';
        lista_productos.innerHTML = '';

        for(var i = 0; i < listadoProductos.length; i++) {
          lista_productos.innerHTML += listadoProductos[i] + '<br/>';
        }
        
        suma.style.display = 'block';
        suma.innerHTML = `$ ${totalPagar.toFixed(2)}`;
        
        


      }
    }

    function mostrarDias(){
      console.log('has hecho click');
    }

  }); // DOM CONTENT LOADED
})();