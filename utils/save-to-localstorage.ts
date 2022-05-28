export default function saveToLocalStorage(key: string, data: object) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(e, "Could not save");
  }
}
