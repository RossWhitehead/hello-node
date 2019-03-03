#!/bin/bash
docker pull rossshaggywhitehead/$1:$2 
docker stop $1 
docker rm $1  
docker rmi rossshaggywhitehead/$1:current  
docker tag rossshaggywhitehead/$1:$2 rossshaggywhitehead/$1:current  
docker run -d --name $1 rossshaggywhitehead/$1:$2 
