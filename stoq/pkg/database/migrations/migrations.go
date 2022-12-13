package migrations

import (
	"version01/stoq/pkg/http/models"

	"gorm.io/gorm"
)

func RunMigrations(db *gorm.DB) {
	db.AutoMigrate(models.ProdutoList{})
}
