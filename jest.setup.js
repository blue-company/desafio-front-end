/* eslint-disable no-undef */
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    // Simula a observação
  }
  unobserve() {
    // Simula a parada da observação
  }
  disconnect() {
    // Simula a desconexão
  }
};