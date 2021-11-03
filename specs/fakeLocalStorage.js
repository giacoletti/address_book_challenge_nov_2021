global.window = {};

global.window.localStorage = {
    setItem(key, value) { 
        this.data[key] = value;
    },
    getItem() { },
    removeItem() { },
    clear() { },
    data: {}
};
