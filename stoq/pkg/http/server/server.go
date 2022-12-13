package server

import (
	"log"
	router "version01/stoq/pkg/http/server/routes"

	"github.com/gin-gonic/gin"
)

type Server struct {
	port   string
	server *gin.Engine
}

func NewServer() Server {
	return Server{
		port:   "6969",
		server: gin.Default(),
	}
}

func (s *Server) Run() {
	router := router.ConfigRoutes(s.server)

	log.Printf("O server esta rodando na porta: %v", s.port)
	log.Fatal(router.Run(":" + s.port))
}
