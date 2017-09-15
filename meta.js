module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "项目名"
        },
        "version": {
            "type": "string",
            "required": false,
            "message": "项目版本",
            "default": "1.0.0"
        },
    },
    "filters": {
        ".eslintrc.js": "lint",
        ".eslintignore": "lint",
        "config/test.env.js": "unit || e2e",
        "test/unit/**/*": "unit",
        "build/webpack.test.conf.js": "unit",
        "test/e2e/**/*": "e2e",
        "src/router/**/*": "router"
    },
    "skipInterpolation": "frameworks/**/*.vue",
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};