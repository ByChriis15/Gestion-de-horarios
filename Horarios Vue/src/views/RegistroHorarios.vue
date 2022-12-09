<template>
    <main><center>
        <br><br><br><br><br><br><br><br><br><br>
        <section class="container about">
            <div>
                <form id="Horario" action="/fechas">
                    <div id="Nombre">
                        <h1>Nombre del usuario</h1>
                        <input class="controls" type="text" id="nombred" placeholder="Ingrese un nombre" name="nombres" required>
                        <span id="n-error" aria-live="assertive"></span>
                    </div>

                    <h1>Escoja la carrera</h1>
                    <div class="select">
                        <select name="carrera" id="carrera">
                            <option value="0" selected disabled>Elige una opción</option>
                            <option value="IES">Medicina</option>
                            <option value="ITI">Administracion</option>
                            <option value="IES">Informatica</option>
                        </select>
                        
                    </div>
                    <span id="c-error" aria-live="assertive"></span>

                    <h1>Escoja el Nivel</h1>
                    <div class="select">
                        <select name="nivel" id="nivel">
                            <option value="0" selected disabled>Elige una opción</option>
                            <option value="N1">Primer Nivel</option>
                            <option value="N2">Segundo Nivel</option>
                            <option value="N3">Tercer Nivel</option>
                            <option value="N4">Cuarto Nivel</option>
                            <option value="N5">Quinto Nivel</option>
                            <option value="N6">Sexto Nivel</option>
                            <option value="N7">Séptimo Nivel</option>
                            <option value="N8">Octavo Nivel</option>
                            <option value="N9">Noveno Nivel</option>
                            <option value="N10">Décimo Nivel</option>
                        </select>
                    </div>
                    <span id="nv-error" aria-live="assertive"></span>
                    <h1>Escoja el paralelo</h1>
                    <div class="select">
                        <select name="paralelo" id="paralelo">
                            <option value="0" selected disabled>Elige una opción</option>
                            <option value="A">Paralelo A</option>
                            <option value="B">Paralelo B</option>
                            <option value="C">Paralelo C</option>
                        </select>
                    </div>
                    <span id="p-error" aria-live="assertive"></span>
                    <h1>Escoja la asignatura</h1>
                    <div class="select">
                        <select name="asignatura" id="asignatura">
                            <option value="0" selected disabled>Elige una opción</option>
                            <option value="M1">...</option>
                        </select>
                    </div>
                    <span id="a-error" aria-live="assertive"></span>
                    <a href="/"><button class="send-button">Siguiente</button></a>
                </form>
            </div>
        <br><br>
        </section></center>
    </main>
    <footer class="footer">
            <div class="footer__social">
                <center><p>Copryright &copy; Built By <span class="copyright">TecaDesingers.</span> 2022 | All Right Reserved.</p>
                <p>Copryright Idea &copy; Built By <span class="copyright">AlmarexT.</span> 2016 | All Right Reserved.</p></center>
            </div>
    </footer>
</template>
<script>
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Horario").addEventListener('submit', validarFormulario); 
  });
function validarFormulario(evento){
    evento.preventDefault();
    var nombre = document.getElementById('nombred').value;
    if (nombre.length > 20 || !nombre.trim("")) {
        document.getElementById("n-error").innerHTML = "Nombre no válido";
        return;
    }
    else{
        document.getElementById("n-error").innerHTML = "";
    }
    var carrera = document.getElementById('carrera').value;
    if (carrera==0) {
        document.getElementById("c-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("c-error").innerHTML = "";
    }
    var nivel = document.getElementById('nivel').value;
    if (nivel==0) {
        document.getElementById("nv-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("nv-error").innerHTML = "";
    }
    var paralelo = document.getElementById('paralelo').value;
    if (paralelo==0) {
        document.getElementById("p-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("p-error").innerHTML = "";
    }
    
    var asignatura = document.getElementById('asignatura').value;
    if (asignatura==0) {
        document.getElementById("a-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("a-error").innerHTML = "";
    }
    this.submit();
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

section{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0!important;
    padding-bottom: 0!important;
    padding: 6rem;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
body {
    font-family: 'Times New Roman', Times, serif;
    background-color: rgb(134, 203, 246);
}

#Horario {
    width: 450px;
    background: #bbc0be85;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 4px;
    color: white;
}

select {
    background: white;
    flex: 1;
    padding: 0 .5em;
    color: #000000;
    cursor: pointer;
    font-size: 1em;
    font-family: 'Times New Roman', Times, serif;
}

h1 {
    padding: 3px;
    font-size: 15px;
    text-align: center;
}

.select {
    display: flex;
    width: 370px;
    height: 40px;
    line-height: 3;
    background: #000000;
    overflow: hidden;
    border-radius: .35em;
    margin: 10px;
    border: 1px solid #96badd;
}

#Nombre {
    margin: auto;
    border-radius: 4px;
    color: white;
    padding: 10px;
}

#Nombre h1 {
    padding: 10px;
}

.controls {
    width: 370px;
    height: 40px;
    background: #ffffffbb;
    padding: 10px;
    border-radius: .35em;
    border: 1px solid #96badd;
    font-size: 18px;
    color: rgb(0, 0, 0);
}

::placeholder {
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    color: #000000;
}

.send-button {
    padding: 15px 25px;
    margin: 20px;
    font-size: 16px;
    border: 2px solid #000000;
    color: white;
    cursor: pointer;
    background: linear-gradient(to right, transparent 50%, #778899 60%);
    background-size: 200%;
    background-position: left;
    transition: background-position 0.5s;
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
}

.send-button:hover {
    background-position: right;
    color: white;
    font-weight: 700;
}

.about {
    text-align: center;
}

.subtitle {
    text-align: center;
    font-size: 28px;
    margin-bottom: 22px;
    padding: 50px 50px 1px 20px;
    color: aliceblue;
    text-decoration: none;
    text-align:center;
    font-weight: 700;
    text-shadow: 2px  1px 2px gray,
                1px  1px 1px gray,
                -2px  1px 2px black,
                2px -1px 2px gray;
    }

.footer {
    background-color: #1D293F;
    margin-top: 235px;
}

.footer__copy {
    padding: 25px;
    text-align: center;
    color: #fff;
    margin-top: -15%;
}

.footer__copyright {
    font-weight: 300px;
}

.footer__icons {
    margin-bottom: 10px;
}

.footer__img {
    width: 30px;
}
</style>