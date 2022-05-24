export default function saveToLocalStorage(data: object) {
  localStorage.setItem("unsaved", JSON.stringify(data));
}
