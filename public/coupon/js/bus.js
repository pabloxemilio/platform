// EventBus.js
class EventBus {
  constructor() {
    this.events = {};
  }

  // 监听事件
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  // 取消监听
  off(event, callback) {
    if (!this.events[event]) return;

    if (callback) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    } else {
      // 不传 callback 表示清空该事件的所有监听
      delete this.events[event];
    }
  }

  // 触发事件
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(...args));
  }
}

// 挂载到 window
window.$bus = new EventBus();
