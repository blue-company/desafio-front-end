export function handleCloseComponents() {
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
}
