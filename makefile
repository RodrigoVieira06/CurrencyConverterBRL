IMAGE_NAME=currency-converter
PORT=4200

install:
		yarn

build:
		docker build -t $(IMAGE_NAME) .

run:
		docker run -d -p $(PORT):$(PORT) $(IMAGE_NAME)

stop:
		docker stop $(shell docker ps -q -f "ancestor=$(IMAGE_NAME)")

all: install build run
