const glob = require('glob')
let pages = {}
module.exports.pages = function (){
    glob.sync( './src/pages/*/main.js').forEach(filepath =>
    {
        let fileList = filepath.split('/');
        let fileName = fileList[fileList.length-2];
        pages[fileName] = {
            entry: 'src/pages/' + fileName + '/main.js',
            // 模板来源
            template: 'public/' + fileName + '/index.html',
            title: '红十字基金申请',
            filename: fileName == 'index' ?  fileName + '.html' :  fileName + '/index.html',
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', fileName]
        }
    })
    return pages
};