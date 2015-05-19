#!/bin/bash

set -e

source './script/prerequisites.sh'

docker-compose run cms script/bootstrap.sh
