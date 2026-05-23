# MedAgenda UX - Prototipo web para gestión y control de citas médicas

Este repositorio contiene un prototipo web estático de la tercera fase del proyecto de gestión y control de citas médicas. La solución se enfoca en un flujo mínimo viable: reserva de cita por parte del paciente, visualización administrativa, control de estados y evaluación de usabilidad.

## Tipo de prototipo seleccionado

**Web**, porque permite publicar la interfaz en GitHub Pages sin backend, sin base de datos real y sin instalación adicional para el evaluador.

## Archivos principales

- `index.html`: estructura de la interfaz.
- `styles.css`: estilos visuales y diseño responsive.
- `script.js`: interacción básica del prototipo.
- `.nojekyll`: evita procesamiento innecesario de Jekyll en GitHub Pages.
- `docs/guion_video.md`: guion sugerido para video de máximo 5 minutos.
- `docs/plantilla_revision_companeros.md`: formato para revisar proyectos de dos grupos.
- `docs/sistematizacion_experiencia.md`: texto base para sustentar la experiencia.

## Cómo publicar en GitHub Pages

1. Crear un repositorio público en GitHub. Nombre sugerido: `prototipo-citas-medicas`.
2. Subir todos los archivos de esta carpeta a la raíz del repositorio.
3. Entrar a **Settings > Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Elegir la rama `main` y la carpeta `/root`.
6. Guardar y esperar a que GitHub genere la URL.
7. El enlace tendrá una forma similar a:
   `https://TU_USUARIO.github.io/prototipo-citas-medicas/`

## Flujo demostrado

1. El paciente selecciona especialidad, profesional, fecha y hora.
2. El sistema muestra un resumen de la cita.
3. El usuario confirma la cita.
4. El panel administrativo muestra citas por estado.
5. La sección de evaluación presenta métodos e indicadores de validación.

## Créditos académicos

Proyecto académico de Ingeniería de Software. Autor: David Padilla Correa.
