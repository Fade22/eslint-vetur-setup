module.exports = {
  extends: ["airbnb-base", "plugin:vue/recommended"],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "max-len": ["error", { code: 120 } ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-return-assign": "off",
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "space-before-function-paren": "off",
    "vue/attribute-hyphenation": "off",
    "vue/no-v-html": "off",
    "vue/script-indent": ["warn", 2, { baseIndent: 1 }]
  },
  overrides: [{
    files: ["*.vue"],
    rules: {
      indent: "off"
    }
  }]
};
