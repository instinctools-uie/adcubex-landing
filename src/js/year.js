export default function setFooterYear() {
  const now = new Date();
  const year = now.getFullYear();
  const yearElement = document.getElementById('year');
  yearElement.textContent = year.toString();
}
