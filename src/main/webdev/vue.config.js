const NODE_ENV_DEV =  process.env.NODE_ENV === 'production' ?  false :  true 
const pageMethod = require('./build/pages.js');
const pages = pageMethod.pages();
var path = require('path');


module.exports = {
	lintOnSave: false,
	pages ,
	productionSourceMap: false,
	publicPath: NODE_ENV_DEV  ? '/' : '../',
// 	devServer: {
// 		host: '127.0.0.1',
// 		port: 9999,
// 		proxy: {
// 			'/': {
// 				target:'<other_url>', 
// 				ws: false
// 			}
// 		}
// 	},
//	//输出的目录文件夹
// 	outputDir: '',
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
	}
}

function resolve(dir) {
	return path.join(__dirname, dir)
}


// 相关配置请参考：https://cli.vuejs.org/config/
