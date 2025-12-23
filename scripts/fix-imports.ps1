# Скрипт для удаления отсутствующих импортов
$filePath = "c:\Users\alymb\salymbekov-frontend\src\App.jsx"

Write-Host "Чтение файла..." -ForegroundColor Yellow
$content = Get-Content $filePath -Raw

Write-Host "Удаление импорта QualitySystem..." -ForegroundColor Yellow
$content = $content -replace "const QualitySystem = lazy\(\(\) => import\('./pages/university/normativeDocs/QualitySystem'\)\)`r?`n", ""

Write-Host "Удаление импорта Dordoi..." -ForegroundColor Yellow
$content = $content -replace "const Dordoi = lazy\(\(\) => import\('./pages/clinical/Dordoi'\)\)`r?`n", ""

Write-Host "Удаление роута QualitySystem..." -ForegroundColor Yellow
$content = $content -replace "\s*<Route path=`"/university/normative-docs/quality-system`" element=\{<QualitySystem />\} />`r?`n", ""

Write-Host "Удаление роута Dordoi..." -ForegroundColor Yellow
$content = $content -replace "\s*<Route path=`"/clinical/dordoi`" element=\{<Dordoi />\} />`r?`n", ""

Write-Host "Сохранение файла..." -ForegroundColor Yellow
$content | Set-Content $filePath -NoNewline

Write-Host "`nГотово! Проверяем результат..." -ForegroundColor Green
$remaining = Select-String -Pattern "QualitySystem|Dordoi" -Path $filePath

if ($remaining) {
    Write-Host "Внимание: Найдены оставшиеся упоминания:" -ForegroundColor Red
    $remaining
} else {
    Write-Host "✅ Все импорты успешно удалены!" -ForegroundColor Green
}
