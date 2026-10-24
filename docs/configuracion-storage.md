
# Configuración propuesta de Cloud Storage

## Proyecto
turing-ia-gcp-dia1

## Bucket propuesto
turing-ia-gcp-dia1-archivos

## Ubicación
Región: us-central1 (Iowa)

Justificación:
Se selecciona una ubicación regional para mantener
los recursos de la práctica en la misma región y
evitar la complejidad de una configuración multirregional.

## Clase de almacenamiento
Standard

Justificación:
Es apropiada para archivos que se consultarán
frecuentemente durante las pruebas.

## Control de acceso
Uniforme

Justificación:
Permite administrar los permisos mediante IAM
en lugar de configurar permisos individuales
por objeto mediante ACL.

## Acceso público
Bloqueado

Justificación:
Los archivos no necesitan estar disponibles
públicamente. Se prioriza la confidencialidad.

## Regla de ciclo de vida
Acción: Delete
Condición: Age = 30 días

Justificación:
Permite eliminar automáticamente objetos que
alcancen una antigüedad de 30 días, evitando
conservar archivos temporales indefinidamente.

## Permisos IAM propuestos
Identidad:
turing-storage-reader

Rol:
Storage Object Viewer

Alcance:
Únicamente el bucket de la práctica.

Justificación:
Aplicar el principio de mínimo privilegio.
La cuenta solo debería poder consultar los
objetos necesarios para su función.

## Estado de implementación
Configuración diseñada, no desplegada.

Motivo:
La consola de Google Cloud impidió crear
el bucket porque el proyecto no tiene
facturación habilitada.

La configuración y los permisos propuestos
no han sido aplicados ni validados en GCP.
