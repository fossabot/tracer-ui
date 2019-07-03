#!/bin/bash

COMMAND="$1"
SUBCOMMAND="$2"

function devmock(){
    if [ ! -z ${ISOLATION_ID} ]; then
        docker-compose -f ./docker-compose-build.yaml build dev
        docker-compose -f ./scenario/mock-local.yaml up
    else
        echo "Set ISOLATION_ID"
        exit 1
    fi
}

function devclean(){
    if [ ! -z ${ISOLATION_ID} ]; then
        docker rm -f $(docker ps -aq)
        docker rmi -f $(docker images --filter "dangling=true" -q)
        docker rmi -f ${DEV_IMAGE}:${ISOLATION_ID}
    else
        echo "Set ISOLATION_ID"
        exit 1
    fi
}

function dev(){
    local subcommand="$1"
    case $subcommand in
        "mock")
            devmock
            ;;
        "clean")
            devclean
            ;;
        *)
            echo "$COMMAND [mock | clean]"
            ;;
    esac
}

source .env
case $COMMAND in
   "dev")
        dev $SUBCOMMAND
        ;;
    "prod")
        prod
        ;;
    *)
        echo "$0 dev [mock] | prod | clean"
        ;;
esac