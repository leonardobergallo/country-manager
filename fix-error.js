const fs = require('fs');

const filePath = './src/components/App.js';

try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    fileContent = fileContent.replace(/export\s+default\s+App;/g, 'export { App };');
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log('Fixed export error in App.js');
} catch (error) {
    console.error('Error fixing export error:', error);
}
