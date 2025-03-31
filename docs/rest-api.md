# 🔌 GIP REST API

Plugin para WordPress que expõe endpoints seguros via JWT/Bearer Token:

## Endpoints

- `GET /gip/v1/sites` → Lista sites
- `POST /gip/v1/sites` → Registra novo site
- `POST /gip/v1/logs` → Cria log para um site

## Segurança

- Header: `Authorization: Bearer SEU_TOKEN`
- Token armazenado como metadado no JetEngine (campo `token`)