#!/bin/sh

MONGO_DB=$MONGO_DB

for i in $(seq 1 10)
do
  nc -vz $MONGO_DB 27017
  exit_code=$?

  if [ $exit_code -eq '0' ]; then
    /usr/bin/node bin/dev.js
  else
    echo 'Sleeping...'
    sleep 1
  fi
done
