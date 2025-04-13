const sharp = require('sharp');

async function getThumbnailDimensions(thumbnailName) {
  try {
    const imagePath = `./src/thumbnails/${thumbnailName}_thumb.jpg`;
    const metadata = await sharp(imagePath).metadata();
    console.log(`Thumbnail dimensions: ${metadata.width} x ${metadata.height}`);
  } catch (error) {
    console.error('Error getting thumbnail dimensions:', error);
  }
}

// Get the thumbnail name from command line arguments
const thumbnailName = process.argv[2];
if (!thumbnailName) {
  console.error('Please provide a thumbnail name as an argument');
  process.exit(1);
}

getThumbnailDimensions(thumbnailName);
