
const functions = require('@google-cloud/functions-framework');
const { procesarMetadatos } = require('./procesador');

functions.cloudEvent('procesarArchivo', (cloudEvent) => {
  try {
    console.log('Iniciando procesamiento de archivo...');

    const metadatos = procesarMetadatos(cloudEvent);

    console.log(JSON.stringify({
      severity: 'INFO',
      mensaje: 'Archivo procesado correctamente',
      ...metadatos
    }));

  } catch (error) {
    console.error(JSON.stringify({
      severity: 'ERROR',
      mensaje: 'Error al procesar archivo',
      error: error.message,
      evento: cloudEvent?.id || 'desconocido'
    }));

    throw error;
  }
});
