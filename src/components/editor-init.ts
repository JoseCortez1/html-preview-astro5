import * as monaco from 'monaco-editor';

export async function initMonacoEditor(
  locale: string,
  translations: any,
  monacoEditorElement: HTMLElement
) {
  // Función para generar el HTML inicial según el idioma
  function getInitialHTML(locale: string, translations: any) {
    return `<!DOCTYPE html>
<html lang="${locale}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${translations.home.initialHTMLTitle}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>${translations.home.initialHTMLHeading}</h1>
    <p>${translations.home.initialHTMLText}</p>
</body>
</html>`;
  }

  // Configuración inicial del editor
  const initialHTML = getInitialHTML(locale, translations);
  
  // Verificar si hay contenido guardado en sessionStorage
  const savedContent = sessionStorage.getItem('editor-content');
  const savedModified = sessionStorage.getItem('editor-modified') === 'true';
  const savedLocale = sessionStorage.getItem('editor-locale');
  
  // Si el idioma cambió y el usuario no había modificado, usar el nuevo HTML inicial
  // Si el usuario ya había modificado, mantener su contenido
  let editorContent = initialHTML;
  let userHasModified = false;
  
  if (savedContent && savedModified && savedLocale === locale) {
    // El usuario había modificado y estamos en el mismo idioma, restaurar su contenido
    editorContent = savedContent;
    userHasModified = true;
  } else if (savedLocale && savedLocale !== locale && !savedModified) {
    // El idioma cambió y el usuario no había modificado, usar nuevo HTML inicial
    editorContent = initialHTML;
    userHasModified = false;
  }
  
  // Almacenar el HTML inicial y el estado de modificación
  const defaultHTML = initialHTML;
  
  // Guardar el locale actual
  sessionStorage.setItem('editor-locale', locale);

  // Add this configuration BEFORE Monaco is initialized
  (window as any).MonacoEnvironment = {
    getWorkerUrl: function(moduleId: string, label: string) {
      if (label === 'json') {
        return '/monaco-editor/min/vs/language/json/json.worker.js';
      }
      if (label === 'css' || label === 'scss' || label === 'less') {
        return '/monaco-editor/min/vs/language/css/css.worker.js';
      }
      if (label === 'html' || label === 'handlebars' || label === 'razor') {
        return '/monaco-editor/min/vs/language/html/html.worker.js';
      }
      if (label === 'typescript' || label === 'javascript') {
        return '/monaco-editor/min/vs/language/typescript/ts.worker.js';
      }
      return '/monaco-editor/min/vs/editor/editor.worker.js';
    }
  };

  // Crear el editor Monaco
  const editor = monaco.editor.create(monacoEditorElement, {
    value: editorContent,
    language: 'html',
    automaticLayout: true,
    fontSize: 14,
    wordWrap: 'on',
    scrollBeyondLastLine: false,
  });

  // Función para verificar si el contenido es el HTML inicial
  function isDefaultContent(content: string): boolean {
    // Comparar sin espacios en blanco al inicio/final para ser más flexible
    const normalizedContent = content.trim();
    const normalizedDefault = defaultHTML.trim();
    return normalizedContent === normalizedDefault;
  }

  // Función para actualizar la vista previa
  function updatePreview() {
    const htmlContent = editor.getValue();
    const previewFrame = document.getElementById('preview-frame') as HTMLIFrameElement | null;
    
    if (!previewFrame) {
      console.error('Preview frame not found');
      return;
    }
    
    // Crear un blob con el contenido HTML
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Actualizar el src del iframe
    previewFrame.src = url;
    
    // Limpiar el URL anterior después de un tiempo
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  // Actualizar vista previa inicial
  updatePreview();

  // Escuchar cambios en el editor
  editor.onDidChangeModelContent(() => {
    const currentContent = editor.getValue();
    
    // Verificar si el usuario ha modificado el contenido
    if (!isDefaultContent(currentContent)) {
      userHasModified = true;
      // Guardar el contenido modificado en sessionStorage
      sessionStorage.setItem('editor-content', currentContent);
      sessionStorage.setItem('editor-modified', 'true');
    }
    
    // Debounce para evitar actualizaciones excesivas
    if ((window as any).previewTimeout) {
      clearTimeout((window as any).previewTimeout);
    }
    (window as any).previewTimeout = setTimeout(updatePreview, 300);
  });

  // Limpiar sessionStorage si el usuario resetea el contenido al HTML inicial
  // Esto permite que el contenido se actualice cuando cambie el idioma
  const checkIfResetToDefault = () => {
    const currentContent = editor.getValue();
    if (isDefaultContent(currentContent) && userHasModified) {
      // El usuario volvió al contenido por defecto, limpiar el estado
      userHasModified = false;
      sessionStorage.removeItem('editor-content');
      sessionStorage.setItem('editor-modified', 'false');
    }
  };

  // Verificar periódicamente si el contenido fue reseteado
  setInterval(checkIfResetToDefault, 1000);

  // Limpiar recursos al salir
  window.addEventListener('beforeunload', () => {
    editor.dispose();
  });

  return editor;
}

