const fs = require('fs');

const galleryPath = 'public/images/gallery';

// Ensure the directory exists so the build never crashes
if (!fs.existsSync(galleryPath)) {
  fs.mkdirSync(galleryPath, { recursive: true });
}
