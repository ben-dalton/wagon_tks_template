#!/bin/bash

if [[ `uname` == 'Darwin' ]]; then
  # re: sleep - YUCK! if not pausing here, docker might not be available
  [ $(boot2docker status) != "running" ] && boot2docker start && sleep 2
fi

if [ -z "$(docker ps -a | grep wagon_sipcamp_gems)" ]; then
  echo 'Creating a persistent data container for gems'
  docker run \
    -d \
    -v /usr/local/bundle \
    --name wagon_sipcamp_gems \
    busybox:latest \
    tail -f /dev/null

  echo 'Install bundler in gems container'
  docker run \
    --volumes-from=wagon_sipcamp_gems \
    ruby:2.2 \
    gem install bundler --no-ri --no-rdoc
fi