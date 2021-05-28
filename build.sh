#!/bin/bash

function exit_if_fail() {
    if [ $1 != 0 ]; then
        echo "failed to" $2
        echo "exit"
        exit 1
    fi
}

[ $# == 1 ]
exit_if_fail $? "read app name"

pushd ./app/$1

gulp build
