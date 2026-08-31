<#
  render-qa.ps1 — exporta todas las slides de un .pptx a PNG usando PowerPoint por COM.

  Por qué existe: sin renderizar no hay forma de ver los defectos que el codigo no
  muestra — filas de tabla aplastadas, texto desbordado, titulos que envuelven a dos
  lineas y pisan la bajada. Y que PowerPoint abra el archivo ya prueba que no esta
  corrupto, asi que este paso valida el esquema y hace el QA visual de una sola vez.

  Requiere Microsoft PowerPoint instalado (Windows). Mas fiel que LibreOffice, que
  sustituye las fuentes.

  Uso:
    powershell -File render-qa.ps1 -Deck "C:\ruta\deck.pptx"
    powershell -File render-qa.ps1 -Deck ".\deck.pptx" -Salida ".\qa-render"
#>

param(
  [Parameter(Mandatory = $true)][string]$Deck,
  [string]$Salida = ""
)

$ErrorActionPreference = "Stop"

$Deck = (Resolve-Path $Deck).Path
if (-not (Test-Path $Deck)) { throw "No existe el archivo: $Deck" }

if ([string]::IsNullOrWhiteSpace($Salida)) {
  $Salida = Join-Path (Split-Path $Deck -Parent) "qa-render"
}
if (-not (Test-Path $Salida)) { New-Item -ItemType Directory -Path $Salida | Out-Null }
$Salida = (Resolve-Path $Salida).Path

$destino = Join-Path $Salida "s.png"

Write-Output "Abriendo PowerPoint..."
$ppt = $null
$pres = $null
try {
  $ppt = New-Object -ComObject PowerPoint.Application
  # Open(archivo, ReadOnly, Untitled, WithWindow)
  $pres = $ppt.Presentations.Open($Deck, $true, $false, $false)

  Write-Output "Slides: $($pres.Slides.Count)"
  Write-Output "Exportando PNG..."

  # 18 = ppSaveAsPNG. Genera una carpeta con DiapositivaN.PNG / SlideN.PNG
  $pres.SaveCopyAs($destino, 18)
}
finally {
  if ($null -ne $pres) { try { $pres.Close() } catch {} }
  if ($null -ne $ppt) { try { $ppt.Quit() } catch {} }
}

$carpeta = Join-Path $Salida "s"
if (Test-Path $carpeta) {
  $n = (Get-ChildItem $carpeta -Filter *.PNG).Count
  Write-Output ""
  Write-Output "Listo: $n imagenes en $carpeta"
} else {
  Write-Output ""
  Write-Output "Listo. Revisa $Salida"
}

Write-Output ""
Write-Output "Ahora MIRALAS TODAS, no una muestra. Prestale atencion a:"
Write-Output "  - la ultima fila de cada tabla"
Write-Output "  - el ultimo bullet de cada caja"
Write-Output "  - el borde inferior de cualquier contenedor con varios parrafos"
Write-Output ""
Write-Output "Y el test de la ultima fila: mira cada render al 40%. Si a ese tamano"
Write-Output "no se leen el titular, la cifra clave y las etiquetas de estado, la"
Write-Output "slide falla, sin importar cuanto te guste de cerca."
