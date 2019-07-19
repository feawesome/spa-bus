class EventEmitter {
  constructor() {
    this.events = {};
    this.addEventListener = this.addEventListener.bind(this);
    this.emit = this.emit.bind(this);
  }

  addEventListener(type, callBack) {
    if (typeof type !== 'string') {
      throw new Error('event type must be string');
    }

    if (typeof callBack !== 'function') {
      throw new Error('callBack type must be function');
    }

    if (!(type in this.events)) this.events[type] = callBack;
  }

  emit(type, message) {
    this.events[type](message);
  }
}

export default new EventEmitter();
