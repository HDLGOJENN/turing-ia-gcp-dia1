
# Auditoría de seguridad — Día 1

## Herramienta
npm audit

## Dependencias identificadas
- @google-cloud/functions-framework: 5.0.5
- cloudevents: 10.0.0
- uuid: 8.3.2

## Resultado
Se reportaron 3 advertencias de severidad moderada.

## Vulnerabilidad
GHSA-w5hq-g745-h8pq

## Análisis
La vulnerabilidad está asociada con una
dependencia transitiva del proyecto.

La herramienta propone una corrección que
requiere cambiar la versión principal
de Functions Framework.

## Decisión técnica
No se aplicó npm audit fix --force para
evitar introducir cambios incompatibles.

Se recomienda revisar las versiones
compatibles y ejecutar nuevamente las
pruebas antes de un despliegue real.

## Estado
Riesgo identificado y documentado.
Vulnerabilidades pendientes de corregir.
