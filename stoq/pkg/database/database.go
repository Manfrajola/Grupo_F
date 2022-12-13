package database

import (
	"database/sql"
	"fmt"
	"log"
	"time"
	"version01/stoq/config"
	"version01/stoq/pkg/database/migrations"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
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

var db *gorm.DB

func StartDB() {
	str := "host=localhost port=8081 user=admin dbname=banco.sqlite3 sslmode=disable password="

	database, err := gorm.Open(postgres.Open(str), &gorm.Config{})

	if err != nil {
		fmt.Println("Could not connect to the Postgres Database")
		log.Fatal("Error: ", err)
	}

	db = database
	config, _ := db.DB()
	config.SetMaxIdleConns(10)
	config.SetMaxOpenConns(100)
	config.SetConnMaxLifetime(time.Hour)

	migrations.RunMigrations(db)
}

func CloseConn() error {
	config, err := db.DB()
	if err != nil {
		return err
	}

	err = config.Close()
	if err != nil {
		return err
	}

	return nil
}

func GetDatabase() *gorm.DB {
	return db
}
