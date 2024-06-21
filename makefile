IMAGE_NAME=currency-converter
PORT=4200
CURRENT_DIR := $(shell pwd)

build:
		docker build -t $(IMAGE_NAME) .

run:
		docker run -dp $(PORT):$(PORT) $(IMAGE_NAME)

stop:
		docker stop $(shell docker ps -q -f "ancestor=$(IMAGE_NAME)")

all: build run
