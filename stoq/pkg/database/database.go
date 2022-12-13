package database

import (
	"database/sql"
	"fmt"
	"version01/stoq/config"
) // Importando as bibliotecas

type DatabaseInterface interface {
	GetDB() (DB *sql.DB)
	Close() error
} // Estrutura "DatabaseInterface"

type dabase_pool struct {
	DB *sql.DB
} // Estrutura "dabase_pool" para a criação da variavel do banco de dados

var dbpool = &dabase_pool{} // A varivel "dpool" recebendo o tipo de banco de dados

func NewDB(conf *config.Config) *dabase_pool { // Função paera conectar o banco de dados

	if conf.DBConfig.DB_DRIVE == "sqlite3" {
		conf.DBConfig.DB_DSN = fmt.Sprintf(conf.DB_NAME)
		dbpool = SQLiteConn(conf)
	} else {
		panic("Drive não implementado")
	}

	return dbpool
}

func (d *dabase_pool) Close() error { // Função paera desconectar o banco de dados

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
