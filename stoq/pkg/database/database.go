package database

import (
	"database/sql"
	"fmt"

	"github.com/faelp22/tcs_curso/stoq/config"
	//	"version01/stoq/config"
)

type DatabaseInterface interface {
	GetDB() (DB *sql.DB)
	Close() error
}

type dabase_pool struct {
	DB *sql.DB
}

var dbpool = &dabase_pool{}

func NewDB(conf *config.Config) *dabase_pool {

	switch conf.DBConfig.DB_DRIVE {
	case "sqlite3":
		conf.DBConfig.DB_DSN = fmt.Sprintf(conf.DB_NAME)
		dbpool = SQLiteConn(conf)
	default:
		panic("Drive não implementado")
	}

	return dbpool
}

func (d *dabase_pool) Close() error {

	err := d.DB.Close()
	if err != nil {
		return err
	}

	dbpool = &dabase_pool{}

	return err
}

func (d *dabase_pool) GetDB() (DB *sql.DB) {
	return d.DB
}
