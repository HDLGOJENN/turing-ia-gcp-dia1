# Día 1 — Infraestructura GCP | Turing-IA

## 1. Descripción

Proyecto desarrollado como parte del periodo de prueba técnica de GCP y Google Workspace de Turing-IA.

El objetivo es implementar una función basada en eventos de Cloud Storage que extraiga metadatos de archivos y genere registros estructurados.

Debido a las restricciones de facturación del proyecto GCP, la función fue desarrollada y ejecutada localmente mediante Google Cloud Functions Framework.

## 2. Tecnologías utilizadas

- Google Cloud Platform
- Cloud Storage (configuración propuesta)
- Cloud Run Functions (desarrollo local)
- Cloud Logging (integración prevista)
- Node.js 24
- JavaScript
- Google Cloud Functions Framework
- Node.js Test Runner
- Git y GitHub

## 3. Arquitectura propuesta

```text
Usuario
   |
   v
Cloud Storage
   |
   | Evento: object.finalized
   v
Eventarc
   |
   v
Cloud Function (Node.js)
   |
   v
Validación y extracción de metadatos
   |
   v
Cloud Logging
```

La arquitectura representa el despliegue previsto. En las pruebas realizadas, los eventos se enviaron localmente mediante PowerShell.

## 4. Estructura del proyecto

```text
dia1-cloud-function/
├── index.js
├── procesador.js
├── package.json
├── package-lock.json
├── test/
│   └── procesador.test.js
├── docs/
│   └── configuracion-storage.md
│   └── arquitectura.md
├── evidencias/
└── README.md
```

## 5. Instalación

Clonar el repositorio:

```bash
git clone https://github.com/HDLGOJENN/turing-ia-gcp-dia1.git
cd turing-ia-gcp-dia1
npm ci
```

Ejecutar la función localmente:

```bash
npm start
```

El servidor inicia en `http://localhost:8080/`.

## 6. Funcionamiento

La función `procesarArchivo` recibe un evento CloudEvent y valida:

- Tipo de evento permitido.
- Nombre y bucket del archivo.
- Tamaño del archivo.
- Tipo de contenido.

Si el evento es válido, genera un registro informativo.

Si detecta datos incorrectos, genera un registro de error y propaga la excepción.

## 7. Pruebas unitarias

Ejecutar:

```bash
npm test
```

Se implementaron cinco pruebas:

1. Procesamiento exitoso de un archivo.
2. Rechazo de tamaño negativo.
3. Rechazo de metadatos incompletos.
4. Rechazo de eventos no permitidos.
5. Rechazo de archivos sin tamaño definido.

**Resultado obtenido: 5 pruebas exitosas y 0 fallidas.**

También se realizaron pruebas manuales enviando eventos HTTP locales mediante PowerShell.

## 8. Seguridad

Se creó la cuenta de servicio `turing-storage-reader` sin generar claves descargables.

Se diseñó una política de mínimo privilegio para asignar permisos de lectura únicamente sobre el bucket requerido.

Esta política quedó documentada, pero no aplicada porque no fue posible crear el bucket.

La configuración propuesta contempla:

- Almacenamiento Standard.
- Ubicación regional `us-central1`.
- Acceso público bloqueado.
- Control de acceso uniforme.
- Eliminación de archivos mediante lifecycle a los 30 días.

## 9. Limitaciones

La creación del bucket y el despliegue real de la Cloud Function no pudieron realizarse porque Google Cloud solicitó habilitar la facturación.

Por este motivo:

- Se implementó la función localmente.
- Se simularon eventos de Cloud Storage.
- Se comprobaron los registros en la terminal.
- Se ejecutaron pruebas unitarias automatizadas.

No se verificó la ejecución automática en GCP ni la visualización de registros en Cloud Logging.

## 10. Evidencias

La carpeta `evidencias/` incluye capturas de:

- Creación del proyecto.
- APIs habilitadas.
- Cuenta de servicio IAM.
- Restricción de facturación en Cloud Storage.
- Ejecución local de la Cloud Function.
- Procesamiento exitoso de eventos.
- Manejo de errores.
- Pruebas unitarias.
- Organización del código.

## 11. Conclusión

Se desarrolló una solución basada en eventos utilizando Node.js, con separación de responsabilidades, validación de metadatos, manejo de errores y pruebas unitarias.

La solución quedó validada localmente y preparada para continuar con las pruebas de integración cuando se disponga de un entorno GCP con facturación habilitada.