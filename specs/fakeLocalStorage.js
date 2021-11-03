global.window = {};

global.window.localStorage = {
    setItem(key, value) { 
        this.data[key] = value;
    },
    getItem(key) { 
        return this.data[key];
    },
    removeItem(key) { 
        delete this.data[key];
    },
    clear() { 
        this.data = {};
    },
    data: {}
};
