import { NextResponse } from 'next/server';

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Digi Money Manager API - Swagger UI</title>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" />
    <link rel="icon" type="image/png" href="https://unpkg.com/swagger-ui-dist@5.11.0/favicon-32x32.png" sizes="32x32" />
    <style>
      html {
        box-sizing: border-box;
        overflow: -y-scroll;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      body {
        margin: 0;
        background: #fafafa;
        font-family: sans-serif;
      }
      /* Custom styling to match Digi Money Manager */
      .swagger-ui .topbar {
        background-color: #003d29;
        padding: 12px 0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .swagger-ui .info .title {
        font-family: serif;
        color: #003d29;
      }
      .swagger-ui .btn.authorize {
        background-color: #008f5d;
        color: white;
        border-color: #008f5d;
      }
      .swagger-ui .btn.authorize svg {
        fill: white;
      }
    </style>
  </head>
  <body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js" charset="UTF-8"></script>
    <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js" charset="UTF-8"></script>
    <script>
      window.onload = function() {
        const ui = SwaggerUIBundle({
          url: "/api/openapi.json",
          dom_id: '#swagger-ui',
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
          ],
          plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
          ],
          layout: "BaseLayout",
          persistAuthorization: true
        });
        window.ui = ui;
      };
    </script>
  </body>
</html>
  `;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
