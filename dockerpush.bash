docker build -t morehomes .

docker tag morehomes:latest bderegt/fec-more-homes:morehomes

docker push bderegt/fec-more-homes:morehomes
