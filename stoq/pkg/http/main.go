package main

import (
	"version01/stoq/pkg/database"
	"version01/stoq/pkg/http/server"
)

func main() {
	database.StartDB()
	s := server.NewServer()

	s.Run()
}
