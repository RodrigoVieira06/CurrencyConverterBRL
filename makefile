IMAGE_NAME = currency-converter

build:
  docker build -t "${IMAGE_NAME}" .

run:
  docker run 4200:4200 "${IMAGE_NAME}"
