IMAGE_NAME=nome-da-sua-aplicacao-angular

PORT=4200

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -p $(PORT):$(PORT) $(IMAGE_NAME)

clean:
	docker rmi $(IMAGE_NAME)

all: build run
