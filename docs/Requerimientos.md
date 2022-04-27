Consigna:
=========

Se necesita una aplicacion que nos permita gestionar tareas.
El usuario podrá crear nuevas tareas, colocando un titulo y una descripcion.
Al agregarlas, deberá aparecer en una lista de tareas pendientes, mostrando sus datos y mostrando si esta finalizada o no

Las tareas pueden ser marcadas como finalizadas al hacer click en el boton de finalizar

Restricciones: 
- no pueden haber dos tareas con el mismo titulo y activas al mismo tiempo
- el listado de tareas solo mostrará las tareas pendientes. Aquellas finalizadas no deben mostrarse

Historias / Casos de uso 
========================

1. Como usuario, dado un titulo y una descripción quiero poder crear una tarea para que se muestre en el listado de tareas
  - Criterios de aceptación:
    - debe fallar si no se ingresa titulo o descripcion
    - debe fallar si se ingresa un titulo duplicado
    - debe insertar una nueva tarea si se ingresa una descripcion y un titulo 
    - la nueva tarea debe aparecer como "sin finalizar"

2. Como usuario, al ingresar a la aplicacion quiero ver el listado de tareas pendientes
  - Criterios de aceptacion
    - se debe mostrar para cada tarea su titulo y descripcion
    - no se deben mostrar tareas que ya estén finalizadas

3. Como usuario, quiero poder marcar una tarea como finalizada para que ya no aparezca mas en la lista
  - Criterios de aceptacion
    - al marcar como finalizada una tarea, debe actualizar el estado de la misma a finalizado
    
