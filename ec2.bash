sudo service docker start

docker login

docker pull bderegt/fec-more-homes:morehomes

docker stop morehomes

docker container rm morehomes

docker run -d -p 3004:3004 --name morehomes bderegt/fec-more-homes:morehomes