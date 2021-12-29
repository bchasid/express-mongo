{
    openapi: '3.0.1',
    info: {
      version: '1.3.0',
      title: 'WorthyFieldPerm',
      description: 'Field Permission management API',
      termsOfService: 'http://api_url/terms/',
      contact: {
        name: 'Baruch Chasid',
        email: 'bchasid@gmail.com',
        url: 'https://www.worth.com/'
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
      }
    },
    /* ... */
    
  };
  {
    /* ... */
    servers: [
      {
        url: 'http://localhost:8080/',
        description: 'Local server'
      },
      {
        url: 'https://api_url_testing',
        description: 'Testing server'
      },
      {
        url: 'https://api_url_production',
        description: 'Production server'
      }
    ],
    /* ... */
  };
  {
    /* ... */
    tags: [
      {
        name: 'CRUD operations'
      }
    ],
    /* ... */
  };