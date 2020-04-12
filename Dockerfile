# Use the official image as a parent image.
FROM centos:centos7.7.1908

# Add yum repos
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

RUN yum install git yarn -y

# Application
COPY secret-hitler/ .
RUN yarn
RUN yum install nc -y

# start.sh uses MONGO_DB
ENV MONGO_DB=192.168.1.87
COPY start.sh .

RUN chmod 755 /usr/src/app/start.sh
EXPOSE 8082
CMD ["/usr/src/app/start.sh"]
