# UE5中嵌入网页

## 安装web browser 插件
https://unrealcommunity.wiki/web-browser-widget-13f406

## 创建控件蓝图

用户界面（user interface） => 控件蓝图（wiget blueprint） 命名（如WB_web_controller）

进入控件蓝图中在控制面板中搜索 “Web Browser” 并添加到预览区域，设置区域宽高与默认URL

## 使用控件蓝图

创建蓝图类：蓝图 => 蓝图类 => Actor => 添加 => 控件组件（wiget）=> 细节 => 用户界面 控件类选择 WB_web_controller
