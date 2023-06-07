import fs from 'fs';
import path from 'path';

const jsonPath = path.resolve('../package.json');

console.log(jsonPath);

const packageData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

console.log(packageData);

// const packageData = JSON.parse(fs.readFileSync(jsonPath).toString());

export default packageData;
