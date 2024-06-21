IMAGE_NAME=currency-converter
PORT=4200

build:
		docker build -t $(IMAGE_NAME) .

run:
		docker run -d -p $(PORT):$(PORT) -v $(pwd):/app $(IMAGE_NAME)

stop:
		docker stop $(shell docker ps -q -f "ancestor=$(IMAGE_NAME)")

all: install build run
