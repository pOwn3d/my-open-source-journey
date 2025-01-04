// Utility functions
const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
};

const throttle = (fn, limit) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

module.exports = { debounce, throttle, deepClone };
// Update 1 - 1767118778
// Update 2 - 1767118778
// Update 3 - 1767118778
// Update 4 - 1767118778
