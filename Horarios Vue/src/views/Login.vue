<!-- eslint-disable vue/multi-word-component-names -->
<template>
<!-- partial:index.partial.html -->
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="index.html" class="formulario" id="formulario">
			<h1>Envia tu solicitud</h1>
			<div class="formulario__grupo" id="grupo__usuario">
				<div class="formulario__grupo" id="grupo__nombre">
					<div class="formulario__grupo" id="grupo__password">
						<div class="formulario__grupo" id="grupo__correo">
							<span>Usa tu correo institucional</span>
							<input type="text" class="formulario__input" name="nombre" id="nombre"  placeholder="Nombre" />
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
							<input type="text" class="formulario__input" name="apellidos" id="apellidos"  placeholder="Apellidos" />
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
							<input type="email" class="formulario__input" name="email" id="email" placeholder="Email" />
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
							<input type="password" class="formulario__input" name="password" id="password"  placeholder="Contraseña" />
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
							<input type="password" class="formulario__input" name="password2" id="password2" placeholder="Repetir Contraseña" />
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
							<button>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</form>

	</div>
	<div class="form-container sign-in-container">
		<form action="/">
			<h1 class="Uleama"> Inic<span>i</span>a Ses<span>i</span>on </h1>
            <br><br>
			<span>Usa tu cuenta institucional asociada</span>
			<input type="email" class="formulario__input" name="email" id="email"  placeholder="Email" />
			<input type="password" placeholder="Contraseña" />
			<a href="/">¿Olvidaste tu contraseña?</a>
			<button>Iniciar Sesion</button>
		</form>
	</div>
    
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>¡Bienvenido otra vez!</h1>
				<p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
				<button class="ghost" id="signIn">Inicie Sesion</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>¡Hola, amigo!</h1>
				<p>Ingresa tus datos personales y envia tu solicitud de cuenta, la validaremos lo antes posible.</p>
				<a href="/"><button class="ghost" id="signUp">Registrate</button></a>
			</div>
		</div>
	</div>
</div>
<br><br><br>
<footer class="ColorFooter">
    <div class="footer-content">
        <p>Copryright &copy; Built By <span class="copyright">TecaDesingers.</span> 2022 | All Right Reserved.</p>
        <p>Copryright Idea &copy; Built By <span class="copyright">florin-pop.</span> 2016 | All Right Reserved.</p>
    </div>
</footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
  nombres: "", // Letras y espacios, pueden llevar acentos.
  apellidos: "", // Letras y espacios, pueden llevar acentos.
	contrasena: "", // 8 caracters, una letra mayuscula y minuscula.
  contrasena2:"", // 8 caracters, una letra mayuscula y minuscula.
	correo:"",
	direccion: ""// Letras y espacios, pueden llevar acento
  }),
  methods: {
   Registrar: function (e) {
     this.errors = [];
     if (!this.nombres) {
       alert("El nombre es obligatorio.");
     } else if (!this.validapellidos(this.nombres)) {
 this.errors.push('El nombre debe ser válido.');
 
     }
     if (!this.apellidos) {
  alert("El Apellido es obligatorio.");
} else if (!this.validapellidos(this.apellidos)) {
 this.errors.push('El apellidos debe ser válido.');
     }
     if (!this.correo) {
       alert('El correo electrónico es obligatorio.');
     } else if (!this.validEmail(this.correo)) {
       this.errors.push('El correo electrónico debe ser válido.');
     }

     if (!this.contrasena) {
  alert('contraseña es obligatorio.');
} else if (!this.validcontrasena(this.contrasena)) {
  this.errors.push('contraseña debe ser válido.');
}
if (!this.contrasena2) {
  alert('contraseña es obligatorio.');
} else if (!this.validcontrasena2(this.contrasena2)) {
  this.errors.push('El correo electrónico debe ser válido.');
} 
         if (!this.errors.length) {
  return true;
}
e.preventDefault();
   },
   validEmail: function (correo) {
     var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
     return re.test(correo);
     
   },
    validapellidos: function (apellidos,nombres) {
  var re1 = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  return re1.test(apellidos,nombres);
},
    validcontrasena: function (contrasena,contrasena2) {
  var re2 = /^[a-zA-Z0-9]$/;
  
  return re2.test(contrasena,contrasena2);
   }, 
 
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}

body {
	/*background: #f6f5f7;*/
    background: linear-gradient(rgb(42, 39, 43),rgb(166, 174, 174));
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	color: #23b6a8;
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span{
	font-size: 12px;
}
.Uleam span{
    font-size: 24px;
    color: red;
}
.Uleama span{
    font-size: 32px;
    color: red;
}

.ColorFooter span{
    color: #e22aca;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #23b6a8;
	background-color: #23b6a8;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
box-shadow: 0 14px 28px rgba(19, 227, 172, 0.768), 
			0 10px 10px rgba(196, 18, 18, 0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
    margin-top: 70px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}


.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #0c9cac, #41ffdc);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}

.formulario__grupo-input {
	position: relative;
}

.formulario__validacion-estado {
	position: absolute;
	right: 10px;
	bottom: 15px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;
}

.formulario__grupo-correcto .formulario__validacion-estado {
	color: #1ed12d;
	opacity: 1;
}

.formulario__grupo-incorrecto .formulario__label {
	color: #bb2929;
}

.formulario__grupo-incorrecto .formulario__validacion-estado {
	color: #bb2929;
	opacity: 1;
}

.formulario__grupo-incorrecto .formulario__input {
	border: 3px solid #bb2929;
}
</style>