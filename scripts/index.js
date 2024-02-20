const fs = require('fs');
// import Carousel from '../component/UI/carousel';

const path = 'public/images/gallery';

const folders = fs.readdirSync(path).filter((file) => {
  return fs.statSync(`${path}/${file}`).isDirectory();
});

const data = folders.reduce((acc, folder) => {
  const photoPath = `${path}/${folder}`;
  const images = fs.readdirSync(photoPath).filter((file) => {
    return !fs.statSync(`${photoPath}/${file}`).isDirectory();
  }).map((photo) => `${photoPath}/${photo}`.replace('public', ''));;

  return {
    ...acc,
    [folder]: images,
  };
}, {});

fs.writeFileSync('src/app/(pages)/gallery/data/data.json', JSON.stringify(data, null, 2));