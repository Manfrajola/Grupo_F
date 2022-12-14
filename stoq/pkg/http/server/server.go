package server

import (
	"log"
	"net/http"
	"os"
	"time"
	"version01/stoq/config"
	router "version01/stoq/pkg/http/server/routes"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
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

func NewHTTPServer(r *mux.Router, conf *config.Config) *http.Server {

	// handler := cors.Default().Handler(r)
	handler := cors.AllowAll().Handler(r)

	srv := &http.Server{
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		Addr:         ":" + conf.SRV_PORT,
		Handler:      handler,
		ErrorLog:     log.New(os.Stderr, "logger: ", log.Lshortfile),
	}

	return srv
} // Função HTTP do Isael
