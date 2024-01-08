#! /bin/bash
## •需要在发布平台添加一下环境变量

echo $APP_NAME
echo $APP_REGION
echo $APP_VERSION
echo "start nginx"
# inject() {
#   if [ -z $REGION_ENV ]; then
#     echo "缺少TUYA_ENV"
#   else
#     echo "当前需要注入的ENV: $REGION_ENV"
#     if [ -z www/$REGION_ENV.html ];then
#       echo "不存在当前环境的html"
#     else
#       sed -i "/<head>/r www/$REGION_ENV.html" "www/index.html"
#       if [ $? -ne 0 ]; then
#         echo "注入失败"
#       else
#         echo "注入成功"
#       fi
#     fi
#   fi
# }
# inject
nginx -g "daemon off;"
