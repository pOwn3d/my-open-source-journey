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
// Update 5 - 1767118778
// Update 6 - 1767118778
// Update 7 - 1767118779
// Update 8 - 1767118779
// Update 9 - 1767118779
// Update 10 - 1767118779
// Update 11 - 1767118779
// Update 12 - 1767118779
// Update 13 - 1767118779
// Update 14 - 1767118779
// Update 15 - 1767118779
// Update 16 - 1767118779
// Update 17 - 1767118779
// Update 18 - 1767118779
// Update 19 - 1767118779
