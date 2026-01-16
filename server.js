
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
 * IMPORTANT FOR NAMECHEAP CPANEL:
 * The port is often passed as a string or a pipe path by the Passenger engine.
 * process.env.PORT is the standard way to capture it.
 */
const PORT = process.env.PORT || 3000;

// The directory where your built files (from 'npm run build') live
const distPath = path.resolve(__dirname, 'dist');

// Serve all static assets from the dist folder
app.use(express.static(distPath));

// For any request that doesn't match a static file, serve the index.html.
// This is critical for React Router/SPA functionality on page refresh.
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Application started successfully on port ${PORT}`);
  console.log(`Serving content from: ${distPath}`);
});
