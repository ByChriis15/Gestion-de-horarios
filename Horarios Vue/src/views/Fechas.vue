<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <body>
        <header class="hero">
        </header>
        <main>
            <form id="caja-horario2" action="/">
                <span id="d-error" aria-live="assertive"></span>
                <label > <p>Seleccione los días de la actividad</p></label>
                <label > <p>Fecha:</p></label>
                <input class="controls"  type="date"  id="fecha_inicio" value="2022-23-10" min="2022-23-10">
                
                <label > <p>Seleccione las horas</p></label>
                <label > <p>Hora inicio</p></label>
                <input class="controls"  type="time" id="hora_inicio" name="hora_inicio">
        
                <label > <p>Hora fin</p></label>
                <input class="controls" type="time" id="hora_fin" name="hora_fin"> 
                <span id="h-error" aria-live="assertive"></span> 
        
                <button class="send-button" v-on:click="alertar('Registro guardado exitosamente');">
                    Registrar Actividad
                  </button>
            </form>
       
        </main>
   <footer>
        <div class="footer-content">
            <p>Copryright &copy; Built By <span class="copyright">TecaDesingers.</span> 2022 | All Right Reserved.</p>
            <p>Copryright Idea &copy; Built By <span class="copyright">AlmarexT.</span> 2016 | All Right Reserved.</p>
        </div>
    </footer>
    </body>    
    </template>
    
    <script>
    export default {
        alertar: function (message, event) {
        // ahora tenemos acceso al evento nativo.
        if (event) event.preventDefault()
        alert(message)
      } 
    }
    </script>
    
    <style scoped>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    body {
      font-family: "Times New Roman", Times, serif;
      background-color: #1d1d1d;
    }
    
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--padding-container);
      display: inline-block;
      list-style-type: none;
    }
    
    .hero {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-rows: 100px 1fr;
      color: #fff;
    }
    
    .hero::before {
      content: "";
      position: absolute;
      z-index: -1;
    }
    
    /* Menu de navegacion */
    
    .nav {
      --padding-container: 0;
      height: 100%;
      display: flex;
      align-items: center;
      display: inline-block;
      list-style-type: none;
      text-align: center;
    }
    
    .nav__title {
      font-size: 40px;
      font-weight: bold;
      color: rgb(11, 10, 10);
      text-decoration: none;
      text-align:center;
      font-weight: 500;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
      text-shadow: 2px  1px 2px rgb(255, 255, 255),
                 1px  1px 1px rgb(255, 255, 255),
                -2px  1px 2px rgb(255, 255, 255),
                 2px -1px 2px rgb(255, 253, 253);
    }
    
    .nav__link {
      margin-left: auto;
      padding: 0;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 2em;
      font-size: 20px;
    }
    
    .nav__items {
      list-style: none;
    }
    
    .nav__links {
      color: #fff;
      text-decoration: none;
    }
    
    .nav__menu {
      margin-left: auto;
      cursor: pointer;
      display: none;
      
    }
    
    .nav__img {
      display: block;
      width: 30px;
    }
    
    .nav__close {
      display: var(--show, none);
    }
    
    /* Main */
    
    #caja-horario2 {
      width: 450px;
      background: #bbc0be85;
      padding: 30px;
      margin: auto;
      margin-top: 100px;
      border-radius: 4px;
      font-family: "Time new roman";
      color: white;
      
    }
    
    #caja-horario2 h4 {
      font-size: 22px;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .controls {
      width: 100%;
      background: #ffffffbb;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 16px;
      border: 1px solid #96badd;
      font-family: "Time new roman";
      font-size: 18px;
      color: rgb(0, 0, 0);
    }
    
    #caja-horario2 p {
      height: 40px;
      text-align: auto;
      font-size: 18px;
      line-height: 40px;
    }
    
    .send-button {
      padding: 15px 25px;
      margin: 20px;
      font-size: 16px;
      border: 2px solid rgb(52, 89, 124);
      color: white;
      cursor: pointer;
      background: linear-gradient(to right, transparent 50%, rgb(255, 0, 0) 50%);
      background-size: 200%;
      background-position: left;
      transition: background-position 0.5s;
      display: inline-block;
      text-align: center;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    
    .send-button:hover {
      background-position: right;
      color: white;
      font-weight: 700;
    }
    
    /* Footer */
    
    .footer {
      background-color: #dc4242;
      margin-top: 185px;
      display: flex;
      justify-content: space-around
    }
    
    .footer__copy {
      padding: 25px;
      text-align: center;
      color: rgb(0, 0, 0);
    }
    
    .footer__copyright {
      font-weight: 300px;
      color: #000000;
    }
    
    .footer__icons {
      margin-bottom: 10px;
      color: #000000;
    }
    
    .footer__img {
      width: 30px;
      color: #000000;
    }
    </style>