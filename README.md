# Pocki ChatBot 🤖

Aplicación web de chatbot que permite al usuario enviar mensajes y recibir respuestas automáticas generadas por una API externa. El sistema está compuesto por un frontend desarrollado en React, un backend con Express y una base de datos MySQL para el almacenamiento de los mensajes.

## 📚 Índice

- [🚀 Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔧 Instalación y Ejecución](#-instalación-y-ejecución)
- [🌐 Rutas de la API](#-rutas-de-la-api)
- [🧠 Decisiones Técnicas](#-decisiones-técnicas)
- [🛠️ Futuras Mejoras](#-futuras-mejoras)
- [🧑‍💻 Autor](#-autor)

---

## 🚀 Tecnologías Utilizadas

### Frontend

- React
- CSS puro
- react-icons
- Axios

### Backend

- Node.js
- Express
- MySQL
- Axios
- Dotenv
- CORS
- Swagger (para documentación de la API)

---

## 📁 Estructura del Proyecto


/chatbot-app
├── /backend
│ ├── /controllers
│ │ └── chatbot.controller.js
│ ├── /config
│ │ └── db.js
│ ├── /routes
│ │ └── messagesRoutes.js
│ ├── /swagger
│ │ └── swagger.json
│ ├── index.js
│ ├── .env
│ └── package.json
│
├── /frontend
│ ├── /src
│ │ ├── /components
│ │ │ ├── ChatWindow.jsx
│ │ │ ├── Message.jsx
│ │ │ └── MessageInput.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
│
├── README.md
└── .gitignore

---

## 🔧 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/chatbot-app.git
cd chatbot-app
```

### Instalar Dependencias

# Backend

cd backend
npm install

# Frontend

cd ../frontend
npm install

### Configurar entorno (.env en /backend)

PORT=3001
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
OPENAI_API_KEY=tu_api_key


### Iniciar la aplicación

# Backend

cd backend
npm run dev

# Frontend (nuevo terminal)

cd frontend
npm run dev

# Rutas de la API

La documentación completa de la API se encuentra disponible en Swagger una vez el backend está en ejecución:

📄 http://localhost:3001/api-docs

# Rutas principales

POST /messages/crearMensaje: Enviar un mensaje y obtener respuesta de la IA

GET /messages/obtenerMensajes: Obtener historial de mensajes

## 🧠 Decisiones Técnicas

### 1. Arquitectura general

Se optó por una arquitectura **cliente-servidor** dividida en dos capas:

- **Frontend**: desarrollado con React.js para una experiencia de usuario dinámica y controlada por componentes.
- **Backend**: construido con Express.js sobre Node.js, responsable de la lógica del chatbot, el manejo de rutas y la conexión con la base de datos y la API externa.

### 2. Base de datos

Se utilizó **MySQL** por su robustez, facilidad de uso con Node.js y buena integración con herramientas de consulta.

- Tabla principal: `messages`, con campos `id`, `content`, `sender`, y `timestamp`.
- Se usó `mysql2/promise` para facilitar el uso de `async/await`.

### 3. API externa (IA)

Para la generación de respuestas automáticas, se consumió una API externa (`/api/getOpenaiResponse`), simulando un asistente basado en inteligencia artificial. Se usó **Axios** para realizar las solicitudes HTTP debido a su simplicidad y compatibilidad con promesas.

### 4. Controladores y rutas

Se aplicó el patrón **MVC básico**:

- Controladores: contienen la lógica de negocio (ej. guardar mensajes, consultar IA, etc.).
- Rutas: definen los endpoints (`/crearMensaje`, `/obtenerMensajes`).

### 5. Documentación con Swagger

Se integró **Swagger UI** en el backend para documentar y probar la API REST. El archivo `swagger.yaml` contiene la definición de rutas, parámetros, y respuestas esperadas, accesible desde `/api-docs`.

### 6. Manejo de errores

Se implementó control de errores básico en backend:

- Validación de datos faltantes.
- Manejo de errores de conexión con la API de IA.
- Respuestas HTTP claras para frontend.

### 7. Comunicación Frontend ↔ Backend

- El **frontend** realiza peticiones `fetch` al backend sobre `http://localhost:3001/messages/...`.
- Se configuró **CORS** para permitir solicitudes desde `http://localhost:3000`.

### 8. Estilos y componentes

En React se dividió la interfaz en tres componentes principales:

- `ChatWindow`: contenedor del historial de mensajes.
- `Message`: renderiza un solo mensaje.
- `MessageInput`: campo de entrada y botón para enviar mensajes.

Esta separación permite escalabilidad, reusabilidad y mantenimiento más claro del código.

### 9. Puertos

- Backend: puerto `3001` (definido en `.env`)
- Frontend: puerto `3000` (por defecto en Vite/React)

# 🛠️ Futuras Mejoras

Validación más robusta de inputs

Autenticación de usuarios

Guardado de conversaciones por usuario

Panel de administración para visualizar métricas del bot

# 🧑‍💻 Autor

Nombre: Yeison

Rol: Desarrollador Fullstack

Fecha: Mayo 2025.
