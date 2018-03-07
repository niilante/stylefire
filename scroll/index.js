"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styler_1 = require("../styler");
var domScrollStyler = styler_1.default({
    useCache: false,
    onRead: function (key, _a) {
        var element = _a.element;
        return (key === 'top') ? element.scrollTop : element.scrollLeft;
    },
    onRender: function (_a, _b) {
        var top = _a.top, left = _a.left;
        var element = _b.element;
        element.scrollLeft = left;
        element.scrollTop = top;
    }
});
var viewportScrollStyler = styler_1.default({
    useCache: false,
    onRead: function (key) {
        if (typeof window === 'undefined')
            return 0;
        return (key === 'top') ? window.pageYOffset : window.pageXOffset;
    },
    onRender: function (_a) {
        var _b = _a.top, top = _b === void 0 ? 0 : _b, _c = _a.left, left = _c === void 0 ? 0 : _c;
        if (typeof window !== 'undefined' && typeof top === 'number' && typeof left === 'number') {
            window.scrollTo(left, top);
        }
    }
});
exports.default = function (element) { return element
    ? domScrollStyler({ element: element })
    : viewportScrollStyler(); };
//# sourceMappingURL=index.js.map