"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
    _classNames = _interopRequireDefault(require("../helpers/classNames"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(n, !0).forEach(function (t) {
            _defineProperty(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function _defineProperty(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}
var defaults = {
        prefixCls: "wux-notification",
        classNames: "wux-animate--slideInDown",
        image: "",
        title: "",
        text: "",
        duration: 3e3,
        data: "",
        onClick: function () {},
        onClose: function () {}
    },
    _notification = null;
(0, _baseComponent.default)({
    useFunc: !0,
    data: defaults,
    computed: {
        classes: ["prefixCls", function (t) {
            return {
                wrap: (0, _classNames.default)(t),
                content: "".concat(t, "__content"),
                hd: "".concat(t, "__hd"),
                image: "".concat(t, "__image"),
                bd: "".concat(t, "__bd"),
                title: "".concat(t, "__title"),
                text: "".concat(t, "__text"),
                ft: "".concat(t, "__ft")
            }
        }]
    },
    methods: {
        hide: function () {
            this.$$setData({
                in: !1
            }), "function" == typeof this.fns.onClose && this.fns.onClose(this.data.data)
        },
        show: function (t) {
            function e() {
                _notification && _notification.hide.call(n)
            }
            var n = this,
                i = 0 < arguments.length && void 0 !== t ? t : {},
                o = new Promise(function (t) {
                    var e = n.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, i));
                    n.$$setData(_objectSpread({
                        in: !0
                    }, e)), _notification && (clearTimeout(_notification.timeout), _notification = null), (_notification = {
                        hide: n.hide
                    }).timeout = setTimeout(function () {
                        return n.hide(), t(!0)
                    }, e.duration)
                });
            return e.then = function (t, e) {
                return o.then(t, e)
            }, e.promise = o, e
        },
        onClick: function () {
            "function" == typeof this.fns.onClick && this.fns.onClick(this.data.data)
        }
    }
});