package http

import (
	"log"
	"net/http"
	"os"
	"time"

	//"version01/stoq/config"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"honnef.co/go/tools/config"
)

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
}
