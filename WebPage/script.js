let Banner = document.getElementById("banner")

let filmA1= document.getElementById("filmA1")
let filmA2= document.getElementById("filmA2")
let filmA3= document.getElementById("filmA3")
let filmA4= document.getElementById("filmA4")
let filmA5= document.getElementById("filmA5")

let filmB1= document.getElementById("filmB1")
let filmB2= document.getElementById("filmB2")
let filmB3= document.getElementById("filmB3")
let filmB4= document.getElementById("filmB4")
let filmB5= document.getElementById("filmB5")

let filmC1= document.getElementById("filmC1")
let filmC2= document.getElementById("filmC2")
let filmC3= document.getElementById("filmC3")
let filmC4= document.getElementById("filmC4")
let filmC5= document.getElementById("filmC5")

let Rep=document.querySelector(".film")


filmA1.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">El hombre de acero</h2><p>El Hombre de Acero es un reinicio de la franquicia de Superman que narra la historia de origen del icónico superhéroe. Clark Kent, un extraterrestre con poderes sobrehumanos, debe enfrentar a su némesis, el general Zod, para proteger a la humanidad y convertirse en el símbolo de esperanza conocido como Superman. La película combina acción, efectos visuales impresionantes y una narrativa emocional para explorar los orígenes y el papel del héroe.</p><div class="content-desc"><button id="film" class="BDesc">&#9658;</button><p>Play</p></div>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmA1.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
    
})
//A2
filmA2.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">El señor de los Anilos: El retorno del rey</h2><p>El Retorno del Rey es la tercera entrega de la trilogía "El Señor de los Anillos". La trama sigue la lucha final de Frodo y Sam para destruir el Anillo Único en Mordor. Mientras tanto, Aragorn asume su destino como rey de Gondor y lidera una gran batalla contra Sauron. Con la ayuda de sus aliados, incluidos los elfos y los enanos, logran la victoria y Frodo finalmente logra destruir el Anillo. La película culmina con la restauración de la paz en la Tierra Media y la despedida de los personajes principales.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmA2.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//A3
filmA3.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">Avengers: Endgame</h2><p>"Avengers: Endgame" es la culminación épica del Universo Cinematográfico de Marvel. Después de la devastación causada por Thanos, los Vengadores restantes buscan una manera de revertir sus acciones y traer de vuelta a los caídos. A través de un viaje en el tiempo, se reúnen con aliados pasados y enfrentan a Thanos una vez más en una batalla final. Tony Stark, el Hombre de Hierro, sacrifica su vida para derrotar a Thanos y salvar el universo. Los Vengadores sobrevivientes regresan y honran a los caídos, estableciendo un nuevo futuro para el equipo.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmA3.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//A4
filmA4.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">Avatar: El sentido del agua</h2><p>Jake Sully y Neytiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmA4.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//A5
filmA5.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">Super Mario Bros: La Pelicula</h2><p>Un fontanero llamado Mario viaja por un laberinto subterráneo con su hermano, Luigi, intentando salvar a una princesa capturada.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmA5.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//B1
filmB1.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">John Wick: Capitulo 4</h2><p>Una exploración de las aventuras, las desgarradoras experiencias y las hazañas del legendario asesino a sueldo, John Wick.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmB1.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//B2
filmB2.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">Casino Royale</h2><p>"Casino Royale" es la primera película de Daniel Craig como James Bond. La trama sigue al agente 007 mientras se enfrenta a Le Chiffre, un banquero terrorista. Bond participa en un juego de póquer de alto riesgo para frustrar los planes de Le Chiffre y desmantelar su organización. A medida que se desarrolla el juego, Bond se involucra con Vesper Lynd, una agente británica. Sin embargo, descubre que Vesper está involucrada con el enemigo, lo que lo lleva a una traición dolorosa. La película termina con Bond superando la traición y persiguiendo su misión como agente secreto.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmB2.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//B3
filmB3.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">Terminator: El dia del jucio final</h2><p>En "Terminator 2: Judgment Day", un avanzado Terminator, el T-800, es enviado desde el futuro para proteger a John Connor, el futuro líder de la resistencia humana. Sarah Connor, la madre de John, también se encuentra en la lucha contra los cyborgs asesinos. Sin embargo, un T-1000, un Terminator líquido y letal, también es enviado para eliminar a John. A medida que la persecución se intensifica, Sarah, John y el T-800 forman una improbable alianza para detener al T-1000 y cambiar el futuro. La película culmina con un enfrentamiento emocionante en una fundición y la destrucción del chip de la tecnología Terminator, asegurando un futuro más esperanzador.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmB3.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//B4
filmB4.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">El Caballero oscuro</h2><p>En "El Caballero Oscuro", Batman se enfrenta a su enemigo más despiadado, el Joker, quien sembró el caos en Gotham City. El Joker desata una ola de crímenes y manipula a los ciudadanos para que tomen decisiones moralmente ambiguas. Batman se ve obligado a hacer alianzas inusuales, como trabajar con el fiscal Harvey Dent. A medida que la ciudad se sumerge en el caos, Batman se enfrenta a dilemas éticos y pone en juego su identidad secreta. La película culmina con la muerte de Dent y la decisión de Batman de asumir la culpa por sus acciones, llevando a la persecución de los ciudadanos hacia él y dejando a Gotham en un estado de incertidumbre.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmB4.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//B5
filmB5.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">Los Simpson: La pelicula</h2><p>En "Los Simpson: la película", la ciudad de Springfield se enfrenta a una crisis ambiental cuando el irresponsable Homero Simpson contamina el lago local. El gobierno decide cubrir la ciudad con una cúpula gigante. Mientras tanto, la familia Simpson se ve envuelta en una serie de desventuras, incluyendo la huida de una mafia de Springfield y el intento de Homero de salvar su matrimonio con Marge. Finalmente, Homero se da cuenta de su error y lidera a la ciudad en un esfuerzo para destruir la cúpula y salvar Springfield. La película concluye con la ciudad recuperando su libertad y la familia Simpson reunida.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmB5.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//C1
filmC1.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">The Boys</h2><p>"The Boys" es una serie de superhéroes con un enfoque oscuro y subversivo. En un mundo donde los superhéroes son comercializados y corruptos, un grupo de individuos llamado "The Boys" se unen para exponer la verdad y hacer justicia. Liderados por Billy Butcher, persiguen a "Los Siete", el equipo de superhéroes más poderoso y corrupto. Con un equilibrio entre violencia, humor negro y crítica social, "The Boys" revela la corrupción y el poder desmedido de los superhéroes, cuestionando la idea tradicional de los íconos de la justicia y el heroísmo. A medida que avanza la trama, los personajes enfrentan peligros y desafíos mientras luchan por proteger a la humanidad de la amenaza de los superhéroes.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmC1.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//C2
filmC2.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">Breaking Bad</h2><p>"Breaking Bad" sigue la historia de Walter White, un profesor de química que se convierte en un fabricante de metanfetamina después de ser diagnosticado con cáncer. Junto con su antiguo estudiante, Jesse Pinkman, se adentran en el mundo del narcotráfico. A medida que Walter se sumerge más en el crimen, se transforma en el poderoso y temido Heisenberg. A lo largo de la serie, enfrentan peligrosos rivales, incluido el narcotraficante mexicano Gus Fring, y se ven envueltos en una red de mentiras y violencia. La serie explora la degradación moral de Walter y cómo su búsqueda de poder y dinero afecta su vida y la de sus seres queridos.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmC2.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//C3
filmC3.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">Chernobil</h2><p>Miniserie de televisión de drama histórico creada por Craig Mazin y dirigida por Johan Renck. La serie gira en torno al desastre nuclear de Chernóbil de abril de 1986 y los esfuerzos de limpieza sin precedentes que siguieron. Cuenta con un reparto encabezado por Jared Harris, Stellan Skarsgård y Emily Watson.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmC3.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//C4
filmC4.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">Peaky Blinders</h2><p>"Peaky Blinders" es una serie ambientada en Birmingham, Inglaterra, después de la Primera Guerra Mundial. La historia sigue a la familia Shelby, liderada por Tommy Shelby, quien dirige una pandilla criminal llamada los Peaky Blinders. Tommy y sus hermanos se enfrentan a rivales y autoridades mientras buscan expandir su imperio del crimen. La serie presenta intriga política, relaciones complicadas y violencia despiadada. Tommy se enfrenta a enemigos poderosos, como la inspectora Grace Burgess y el líder de la mafia italiana, Luca Changretta. Con ingenio y astucia, los Peaky Blinders luchan por mantener su dominio y enfrentar su pasado turbulento.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmC4.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})
//C5
filmC5.addEventListener("mouseover", function(){
    Banner.style.animationPlayState="paused"
    Banner.className="banner-paused"
    Banner.innerHTML='<h2 class="text-banner">La que se Avecina</h2><p>"La que se avecina" es una comedia de televisión española que sigue las divertidas y caóticas situaciones de un grupo de vecinos en un complejo residencial llamado Mirador de Montepinar. A lo largo de la serie, se presentan conflictos, enredos y malentendidos, generando situaciones cómicas y momentos hilarantes. Cada episodio muestra las vivencias y ocurrencias de estos peculiares personajes en su vida diaria.</p>'
    console.log("Quiting")
    Banner.style.backgroundColor="rgb(0,0,0)"
})
filmC5.addEventListener("mouseleave",function(){
    Banner.style.animationPlayState="running"
    Banner.innerHTML=""
    Banner.className="banner"
})

