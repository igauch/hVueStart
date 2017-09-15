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
    "skipInterpolation": "frameworks/**/*.vue",
    "completeMessage": "开始你的项目吧！\n文档：https://github.com/igauch/hVueStart"
};