class SPAEventBus {
  constructor() {
    this.events = {};
    this.addEventListener = this.addEventListener.bind(this);
    this.emit = this.emit.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
  }

  addEventListener(type, callBack) {
    if (typeof type !== 'string') {
      console.error('event type must be string');
    }

    if (typeof callBack !== 'function') {
      console.error('callBack type must be function');
    }

    if (!(type in this.events)) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }

  removeEventListener(type, callBack) {
    if (typeof type !== 'string') {
      console.error('event type must be string');
    }

    if (Array.isArray(this.events[type])) {
      this.events[type] = this.events[type].filter(item => item !== callBack);
      if (this.events[type].length === 0) {
        delete this.events[type];
      }
    } else {
      console.error('This event is not being listened');
    }
  }

  emit(type, params, context = this) {
    if (!(type in this.events)) {
      console.error('unknown event type');
      return
    }

    if (Array.isArray(this.events[type])) {
      this.events[type].forEach(item => {
        if (typeof item  === 'function') {
          item.call(context, params)
        } else {
          console.error('unknown event type')
        }
      })

    }

  }
}

export default new SPAEventBus();
