import { buttonDownload } from "./variables.js";
import { langState } from "./lang.js";

async function downloadExistingPDF() {
  const lang = langState.isEnglish ? 'rus' : 'eng'
  const response = await fetch(`./assets/download/CV_VitaliMay_${lang}.pdf`);
  const pdfBlob = await response.blob(); // получаем Blob из ответа

  // Создаем ссылку для скачивания
  const url = URL.createObjectURL(pdfBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `CV_VitaliMay_${lang}.pdf`; // имя файла при скачивании
  document.body.appendChild(link);
  link.click();

  // Очищаем
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export const initDownload = () => {
  buttonDownload.addEventListener('click', downloadExistingPDF)
}