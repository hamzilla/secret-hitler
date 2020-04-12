# Use the official image as a parent image.
FROM centos:centos7.7.1908

# Add mongo yum repo
COPY repo/* /etc/yum.repos.d/

# Set the working directory.
WORKDIR /usr/src/app

# Run the command inside your image filesystem.
# Install node
RUN yum install epel-release -y
RUN cat /etc/yum.repos.d/node.x | bash -
RUN yum clean all && yum makecache fast
RUN yum install -y gcc-c++ make
RUN yum install -y nodejs

RUN yum install git mongodb-org yarn -y
RUN mkdir -p /data/db

# Application
#COPY . 
# Copy source code
#COPY iso bin __test__ node_modules utils models docs webpack public logs scripts .github .git data views routes repo src .babelrc nodemon.json LICENSE .eslintrc version.js .prettierignore README.md yarn.lock .dockerignore .gitignore package.json .env .nvmrc .prettierrc .gitattributes .travis.yml .snyk app.js ./
COPY secret-hitler/ .
RUN yarn

RUN yum install nc -y

# start.sh uses MONGO_DB
ENV MONGO_DB=192.168.1.87
COPY start.sh .

RUN chmod 755 /usr/src/app/start.sh

#CMD ["sh","-c", "start.sh &"]
#ENTRYPOINT /usr/src/app/start.sh
CMD ["/usr/src/app/start.sh"]

EXPOSE 8080
