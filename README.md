<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway:wght@100&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

    <link rel="stylesheet" href="CS-CV.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Curriculum Vitae</title>
</head>

<body>
    <div class="contenido">
        <i class="bi bi-moon-stars-fill modo" id="btn-modo"></i>
        <div class="lateral_izq escondido"> <!-- Sección lateral izquierda-->
            <div id="perfil"> <!-- Imagen, nombre y puesto-->
                <img src="Imagenes/RB.jpg" alt="Ryan Brown" id="img_perfil">
                <h1 id="nombre" class="titulos"> Ryan Brown </h1>
                <h3 id="puesto_trabajo" class="titulos">Analista en Sistemas</h3>
            </div>

            <div id="resumen"> <!--Presentación previa-->
                <h3 id="res_personal" class="titulos"> RESUMEN PERSONAL</h3>
                <p id="cuadro_personal">
                    Soy un analista en sistemas que se orienta a tener resultados excelentes habilidades de
                    comunicación,
                    así como una gran compresión de los sistemas digitales y los procesos de la cadena de suministro.
                </p>
            </div>

            <div id="aptitudes">
                <h3 id="aptitudes_tit" class="titulos">APTITUDES</h3>
                <ul id="lista_ap">
                    <li>Desarrollo de software básico</li>
                    <li>Documentación de proyectos</li>
                    <li>Análisis de modelos de negocio</li>
                    <li>Resolución de problemas</li>
                    <li>Diseño de pruebas de calidad</li>
                    <li>Diseño investigación y formación de usuarios</li>
                </ul>
            </div>

            <div id="contacto">
                <h3 id="contacto_tit" class="titulos">CONTACTO</h3>
                <p id="cuadro_contacto" class="cuadro">
                    <strong>Dirección de oficina:</strong> C/ Chacabuco 772. Buenos Aires, Argentina 1768<br>
                    <strong>Correo electrónico:</strong> ryan.brown@gmail.com<br>
                    <strong>Numero de contacto:</strong> +54 (11) 528-10181<br>
                    <strong>LikedIn:</strong> @RyanBrown.ar
                </p>
            </div>

        </div>
        <button id="btn-mostrar-1" class="mostrar" type="button">MOSTRAR MAS</button>
        <div class="lateral_der escondido"> <!-- Sección Lateral Derecha-->

            <div id="historial_lab">
                <h3 id="hist_lab" class="hist_acad_lab_ref_tit">
                    <span id="icono1"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-briefcase " viewBox="0 0 16 16">
                            <path
                                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                        </svg></span>HISTORIAL LABORAL
                </h3>
                <div id="cuadro_lab" class="cuadro_lab_acad">
                    <h4 id="subtitulo_1">Analista en Sistemas</h4>
                    <h4 id="subtitulo_2">Mercado Libre | Mayo 2018 - Actualidad</h4>
                    <ul id="lista_acad_lab">
                        <li>Formación del personal</li>
                        <li>Estudio del sistema organizativo</li>
                        <li>Traduzco los requisitos de la empresa en diseños funcionales</li>
                    </ul>

                    <h4 id="subtitulo_1">Analista de datos sénior</h4>
                    <h4 id="subtitulo_2">Estudio Luna | Marzo 2016 - Marzo 2018</h4>
                    <ul id="lista_acad_lab">
                        <li>Recopilé y analicé datos con diversos marcos</li>
                        <li>Solucioné problemas de software</li>
                        <li>Apliqué técnicas estadísticas para diagnosticar problemas empresariales</li>
                    </ul>
                </div>
            </div>

            <div id="historial_acad">
                <h3 id="hist_acad" class="hist_acad_lab_ref_tit" class="titulo_izq_2"><span><svg
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-mortarboard"
                            viewBox="0 0 17 16" id="icono2">
                            <path
                                d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                            <path
                                d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                        </svg></span>HISTORIAL ACADÉMICO</h3>
                <div id="cuadro_acad" class="cuadro_lab_acad">
                    <h4 id="subtitulo_1">Universidad Tecnológica Nacional Facultad Regional Buenos Aires</h4>
                    <h4 id="subtitulo_2">Especialización | Febrero 2018 - Agosto 2019</h4>
                    <ul id="lista_acad_lab">
                        <li>Certificado en Especialista en Ingenieria Gerencial</li>
                        <li>Adquisición de conocimientos sobre la optimización de sistemas y procesos gerenciales con
                            sistemas tecnológicos</li>
                    </ul>

                    <h4 id="subtitulo_1">Facultad de Ingeniería de la Universidad de Buenos Aires</h4>
                    <h4 id="subtitulo_2">Grado en Ciencias | Marzo 2008 - Julio 2014</h4>
                    <h4 id="subtitulo_2">Grado en Licenciatura en Analisis de Sistemas </h4>
                    <ul id="lista_acad_lab">
                        <li>Mención en Sistemas empresariales</li>
                        <li>Coordinador de Proyectos</li>
                        <li>Beca del Banco Galicia</li>
                    </ul>
                </div>
            </div>

            <div id="referencias">
                <h3 id="ref" class="hist_acad_lab_ref_tit" class="titulo_izq_3"><span><svg
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-lines-fill"
                            viewBox="0 0 16 16" id="icono3">
                            <path
                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                        </svg></span>REF. LABORALES</h3>
                <p id="cuadro_ref">
                    <strong>Carlos Mar</strong><br>
                    Coordinador del Área de Sistemas de Mercado Libre<br>
                    Email: carlosmar66@gmail.com<br>
                    <strong>Marcelo Terlo</strong><br>
                    Director de Estudio Luna<br>
                    Email: Marceterlo@gmail.com<br>
                </p>
            </div>



        </div>
        <button id="btn-mostrar-2" class="mostrar" type="button">MOSTRAR MAS</button>
        <div id="descarga">
            <a href="test.pdf" download="test1" id="boton_descarga"><span><svg xmlns="http://www.w3.org/2000/svg"
                        width="37" height="37" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 15 20"
                        id="pdf">
                        <path fill-rule="evenodd"
                            d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                    </svg></span>DESCARGAR</a>
        </div>
    </div>
    <script src="JS-CV.js"></script>
</body>

</html>
