

const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const setupSwagger = (port) => {
    // Swagger setup
    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'E-commerce API',
                version: '1.0.0',
                description: 'API documentation for the E-commerce microservice architecture',
            },
            servers: [
                {
                    url: `http://localhost:${port}/api`,
                },
            ],
        },
        apis: [
            path.join(__dirname, '..', 'routes', '*.js'), // Routes directory
            path.join(__dirname, '..', 'models', '*.js')  // Models directory
        ],
    };
   return swaggerJSDoc(swaggerOptions);
}

module.exports = setupSwagger;