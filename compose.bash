echo $'\e[1;31m'CLEARING CACHE$'\e[0m'
docker stop morehomes_app_1 morehomes
docker container rm morehomes_app_1 morehomes
docker image rm morehomes_app

echo $'\e[1;32m'COMPOSE STARTING$'\e[0m'
docker-compose up -d

echo $'\e[1;33m'RESTARTING APP$'\e[0m'
docker restart morehomes_app_1

echo $'\e[1;33m'SEEDING DB$'\e[0m'
docker exec morehomes_app_1 node seed/seed.js

echo $'\e[1;32m'COMPOSE COMPLETE$'\e[0m'
echo $'\e[1;32m'app ready at localhost:3004$'\e[0m'


# docker run -d -p 3004:3004 -v  $(pwd):/src/app --name morehomes morehomes:latest
