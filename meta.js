var exec = require('child_process').exec;

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
    "port": {
      "type": "number",
      "required": true,
      "message": "端口号",
      "default": "8089"
    },
    "prefix": {
      "type": "string",
      "required": false,
      "message": "识别前缀",
      "default": "h"
    },
  },
  "skipInterpolation": "frameworks/**/*",
  complete(data) {
    if (!data.inPlace) {
      console.log('开始安装项目依赖');
      exec(`cd ${data.destDirName} && yarn || npm i`,(error, stdout) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log('项目依赖安装完成！开始你的项目吧');
        //todo 不能捕获输出

        // exec(`cd ${data.destDirName} && npm run dev`,(error, stdout) => {
        //     if (error) {
        //         console.error(`exec error: ${error}`);
        //         return;
        //     }
        //     console.log(`stdout: ${stdout}`);
        // });
      });
    }
  }
};