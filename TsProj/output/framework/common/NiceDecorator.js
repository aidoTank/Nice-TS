"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// FairyGUI 元件 绑定器
function binder(name) {
    return function (target, key) {
        target["binders"] = target["binders"] || {};
        target["binders"][key] = name;
    };
}
exports.binder = binder;
//# sourceMappingURL=NiceDecorator.js.map