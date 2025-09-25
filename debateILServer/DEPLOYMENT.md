# Deployment Instructions for Render

## Environment Variables Required

Set these environment variables in your Render service:

```
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=production
PORT=3030
DB_CONNECTION=sqlite://./debateil.db
```

## Build and Start Commands

- **Build Command**: `npm install`
- **Start Command**: `npm start`

## Database

The server uses SQLite for production. The database file `debateil.db` will be created automatically.

## CORS Configuration

The server is configured to allow requests from:

- `https://final-project-debateil-client.onrender.com`
- Any `*.onrender.com` domain

## Cookie Configuration

Cookies are configured with:

- `httpOnly: true`
- `secure: true` (for HTTPS)
- `sameSite: "none"` (for cross-domain)
- `maxAge: 24 hours`

## Troubleshooting

1. **Check logs** in Render dashboard for errors
2. **Verify environment variables** are set correctly
3. **Test endpoints** with curl:
   ```bash
   curl https://your-server.onrender.com
   curl https://your-server.onrender.com/api/debates
   ```
