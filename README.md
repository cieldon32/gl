# 准备工作
- 安装docker 和 postgres 桌面端并启动应用
- yarn nuke
  - 如果端口被占用，执行docker ps， 并删除已开启的服务：docker stop [CONTAINER ID] 
- 调试接口： http://localhost:3000/graphql