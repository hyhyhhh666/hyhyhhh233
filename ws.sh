echo '开始配置'
echo '作者 b站:guimc qq:1584784496'
sleep 0.5
echo '安装nodejs'
apt install nodejs
echo '下载运行库'
npm install ws
echo '从github下载代码'
rm -rf ws.js
wget https://raw.githubusercontent.com/hyhyhhh666/hyhyhhh233/master/ws.js
echo '配置完成，输入 node ws.js 以启动'