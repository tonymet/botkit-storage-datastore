export default [{
    ignores: ["coverage/*"],
}, {
    languageOptions: {
        globals: {},
        ecmaVersion: 2017,
        sourceType: "module",
    },

    rules: {
        "no-with": 2,

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        "max-len": [2, 120],
        "comma-style": [2, "last"],

        indent: [2, 4, {
            SwitchCase: 1,
        }],
    },
}];