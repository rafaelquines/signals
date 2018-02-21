#!/bin/sh
set -e

if [ "$1" = 'start' ]; then
    exec node app
fi

exec "$@"