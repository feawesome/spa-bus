class SPAEventBus {
  constructor() {
    this.events = {};
    this.addEventListener = this.addEventListener.bind(this);
    this.emit = this.emit.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
  }

  addEventListener(type, callBack) {
    if (typeof type !== 'string') {
      throw new Error('event type must be string');
    }

    if (typeof callBack !== 'function') {
      throw new Error('callBack type must be function');
    }

    if (!(type in this.events)) {
      this.events[type] = callBack;
    } else {
      throw new Error('this event is listening');
    }
  }

  removeEventListener(type) {
    if (typeof type !== 'string') {
      throw new Error('event type must be string');
    }

    delete this.events[type]
  }

  emit(type, params) {
    if (typeof this.events[type] === 'function') {
      this.events[type](params)
    } else {
      console.error('unknown event type')
    }
  }
}

export default new SPAEventBus();
