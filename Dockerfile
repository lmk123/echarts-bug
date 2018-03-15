FROM centos:7.3.1611

WORKDIR /app

# 安装 Node.js
RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | su -c 'bash -' \
  && yum -y install --setopt=tsflags=nodocs nodejs gcc-c++ make \
  # 安装 node-canvas 的依赖 https://github.com/Automattic/node-canvas/wiki/Installation---Fedora
  && su -c 'yum -y install --setopt=tsflags=nodocs cairo cairo-devel libjpeg-turbo-devel pango pango-devel giflib-devel'

EXPOSE 8080

COPY . ./

RUN npm install

CMD [ "node", "index" ]
