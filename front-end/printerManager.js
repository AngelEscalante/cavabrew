import { exec } from "child_process";

/**
 * Obtiene la lista de impresoras disponibles en Windows usando PowerShell.
 * @returns {Promise<string[]>} - Una promesa que resuelve con una lista de nombres de impresoras.
 */
export default function getPrinters() {
  return new Promise((resolve, reject) => {
    exec('powershell.exe -Command "Get-Printer | Select-Object -ExpandProperty Name"', (err, stdout, stderr) => {
      if (err) {
        reject(`Error obteniendo impresoras: ${err.message}`);
        return;
      }
      // Filtramos la salida para obtener solo los nombres de las impresoras
      const printers = stdout
        .split("\r\n") // Dividir en líneas
        .map((line) => line.trim()) // Eliminar espacios en blanco
        .filter((line) => line.length > 0); // Filtrar líneas vacías

      resolve(printers);
    });
  });
}
