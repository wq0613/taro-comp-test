const fs = require('fs-extra');
// const fs = require('fs')
const path = require('path');

export default ctx => {
    ctx.onBuildFinish(() => {
        // Taro v3.1.4


        const rootPath = path.resolve(__dirname, '../');
        const miniappPath = path.join(rootPath, 'miniapp');
        const outputPath = path.resolve(__dirname, '../dist');
        const destPath = path.join(miniappPath, 'ui');

        if (fs.existsSync(destPath)) {
            fs.removeSync(destPath);
        }
        fs.copySync(outputPath, destPath);

        console.log('拷贝结束！');
    });
};

