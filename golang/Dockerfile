FROM golang:1.17.0-alpine as builder

WORKDIR /usr/src/app

COPY go.mod ./

RUN go mod download && go mod verify

COPY . .

RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /usr/local/bin/app ./...


FROM scratch

WORKDIR /usr/src/app

COPY --from=builder /usr/local/bin/app .

ENTRYPOINT ["./app"]