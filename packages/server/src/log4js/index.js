const log4js = require('koa-log4')

log4js.configure({
  appenders: {
		access: {
      type: 'dateFile',  
      pattern: '-yyyy-MM-dd.log',
      daysToKeep: 7,  
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] %m'  
      },
      filename: './logs/access.log'
    },
    httpRule: {
      type: 'dateFile', // 日志输出的类型例如
      pattern: '-yyyy-MM-dd.log',
      daysToKeep: 7, // 日志保留的天数
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] %m' // 输出日志的格式
      },
      filename: './logs/http.log' // 存储日志文件的位置
    },
    out: {
      type: 'stdout'
    }
  },
  categories: {
    // 默认
    default: { appenders: ['out'], level: 'info' },
    http: { appenders: ['httpRule'], level: 'all' },
		access: { appenders: ['access'], level: 'all' },
  }
})

module.exports = log4js
