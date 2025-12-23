import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appJsxPath = join(__dirname, '..', 'src', 'App.jsx');
const srcPath = join(__dirname, '..', 'src');

console.log('Проверка импортов в App.jsx...\n');

const content = readFileSync(appJsxPath, 'utf-8');
const lines = content.split('\n');

const lazyImportRegex = /const\s+(\w+)\s+=\s+lazy\(\s*\(\)\s*=>\s*import\(['"](.+?)['"]\)/;
const missingImports = [];

lines.forEach((line, index) => {
  const match = line.match(lazyImportRegex);
  if (match) {
    const componentName = match[1];
    const importPath = match[2];
    
    // Конвертируем относительный путь в абсолютный
    const fullPath = join(srcPath, importPath + '.jsx');
    
    if (!existsSync(fullPath)) {
      missingImports.push({
        line: index + 1,
        componentName,
        importPath,
        fullPath
      });
    }
  }
});

if (missingImports.length === 0) {
  console.log('✅ Все импорты найдены!');
} else {
  console.log(`❌ Найдено ${missingImports.length} отсутствующих файлов:\n`);
  missingImports.forEach(({ line, componentName, importPath }) => {
    console.log(`Строка ${line}: ${componentName}`);
    console.log(`  Путь: ${importPath}`);
    console.log('');
  });
}
