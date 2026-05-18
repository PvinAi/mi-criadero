# 🐓 Mi Criadero

App para llevar control completo de un criadero de aves de combate.

## Características

- 📋 Registro completo de cada ave (placa, color, género, línea, peso, etc.)
- 📸 Foto opcional para cada ave
- 🌳 Árbol genealógico hacia atrás (padres, abuelos) y hacia adelante (hijos, nietos)
- 📍 Zonas configurables del criadero
- 💰 Control de inventario y costos (alimentos, vitaminas, medicinas, personal)
- ⚠️ Alertas y recordatorios de salud
- 🥊 Historial de peleas con estadísticas
- 📥 Importar/exportar datos en formato Excel/CSV
- 📱 Funciona offline después de instalarse
- 🆓 Sin costos, sin anuncios, datos guardados en tu propio celular

## Cómo instalar en el celular

### En iPhone (iOS):
1. Abre la URL de la app en **Safari**
2. Toca el botón **Compartir** (cuadrado con flecha hacia arriba)
3. Selecciona **"Agregar a pantalla de inicio"**
4. Toca **"Agregar"**
5. ¡Listo! El ícono de Mi Criadero aparecerá en tu pantalla como una app normal

### En Android:
1. Abre la URL de la app en **Chrome**
2. Toca el menú **⋮** (tres puntos arriba a la derecha)
3. Selecciona **"Instalar aplicación"** o **"Agregar a pantalla de inicio"**
4. Confirma la instalación
5. ¡Listo!

## Cómo publicar en GitHub Pages (para el desarrollador)

### Paso 1: Crear un repositorio en GitHub
1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** (verde, arriba a la izquierda)
3. Ponle un nombre: por ejemplo `mi-criadero`
4. Marca como **Public** (para que GitHub Pages sea gratis)
5. **NO marques** "Add a README file" (ya tenemos uno)
6. Haz clic en **"Create repository"**

### Paso 2: Subir los archivos
**Opción A — Desde la web (más fácil):**
1. En tu repositorio recién creado, haz clic en **"uploading an existing file"**
2. Arrastra TODOS los archivos y carpetas de esta carpeta `mi-criadero`:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `README.md`
   - La carpeta `icons/` completa (con todos los PNG dentro)
3. Escribe un mensaje como "Primera versión" en el campo de abajo
4. Haz clic en **"Commit changes"**

**Opción B — Desde la terminal (si sabes usar git):**
```bash
cd mi-criadero
git init
git add .
git commit -m "Primera versión de Mi Criadero"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mi-criadero.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. En tu repositorio, haz clic en **Settings** (arriba a la derecha)
2. En el menú izquierdo, baja y haz clic en **Pages**
3. En la sección **"Build and deployment"**:
   - Source: **Deploy from a branch**
   - Branch: **main** y carpeta **/ (root)**
4. Haz clic en **Save**
5. Espera 1-2 minutos
6. Recarga la página. Te dará una URL tipo:
   `https://TU-USUARIO.github.io/mi-criadero/`

### Paso 4: ¡Compartir!
Comparte esa URL con quien quieras. Cada persona puede abrirla y agregarla a su pantalla de inicio. Cada usuario tendrá sus propios datos guardados localmente en su celular.

## Notas importantes

- **Privacidad:** Los datos NO se suben a ningún servidor. Todo queda en el celular de cada usuario.
- **Respaldo:** Es buena idea usar la opción "Exportar todos los datos" de vez en cuando para tener un respaldo en Excel.
- **Sin internet:** Una vez instalada, la app funciona sin conexión.
- **Múltiples usuarios:** Cada criador instala la app en su celular y tiene su propia base de datos independiente.

## Próximos pasos (Etapas futuras)

- **Etapa 3:** Base de datos en la nube para compartir entre usuarios (opcional)
- **Etapa 4:** Publicación en App Store y Google Play como app nativa

## Soporte

Si tienes problemas con la app, contacta al desarrollador.

---
Hecho con ❤️ para criadores de aves de combate.
