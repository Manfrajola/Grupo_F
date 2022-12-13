package controllers

import (
	"strconv"
	"version01/stoq/pkg/database"
	"version01/stoq/pkg/http/models"

	"github.com/gin-gonic/gin"
)

func ShowAllproduct(c *gin.Context) {
	db := database.GetDatabase()
	var p []models.Produto
	err := db.Find(&p).Error
	if err != nil {
		c.JSON(400, gin.H{
			"erro": "nao foi possivel encontrar o produto pelo ID: " + err.Error(),
		})
		return
	}

	c.JSON(200, p)
}

func ShowProduct(c *gin.Context) {
	id := c.Param("id")
	newid, err := strconv.Atoi(id)

	if err != nil {
		c.JSON(400, gin.H{
			"error": "ID tem que ser inteiro",
		})
		return
	}

	db := database.GetDatabase()
	var p models.ProdutoList
	err = db.First(&p, newid).Error

	if err != nil {
		c.JSON(400, gin.H{
			"erro": "nao foi possivel encontrar o produto pelo ID: " + err.Error(),
		})
		return
	}

	c.JSON(200, p)
}

func Createproduto(c *gin.Context) {
	db := database.GetDatabase()

	var p models.Produto

	err := c.ShouldBindJSON(&p)
	if err != nil {
		c.JSON(400, gin.H{
			"erro": "nao pode vincular JSON: " + err.Error(),
		})
		return
	}

	err = db.Create(&p).Error
	if err != nil {
		c.JSON(400, gin.H{
			"erro": "nao posso criar o produto: " + err.Error(),
		})
		return
	}

	c.JSON(200, p)
}

func Deleteproduto(c *gin.Context) {
	id := c.Param("id")
	newid, err := strconv.Atoi(id)

	if err != nil {
		c.JSON(400, gin.H{
			"erro": "O ID precisa ser inteiro",
		})
		return
	}

	db := database.GetDatabase()

	err = db.Delete(&models.Produto{}, newid).Error

	if err != nil {
		c.JSON(400, gin.H{
			"erro": "nao posso deletar o produto: " + err.Error(),
		})
		return
	}

	c.Status(204)
}

func Editproduct(c *gin.Context) {
	db := database.GetDatabase()

	var p models.Produto

	err := c.ShouldBindJSON(&p)
	if err != nil {
		c.JSON(400, gin.H{
			"erro": "nao pode vincular JSON: " + err.Error(),
		})
		return
	}

	err = db.Save(&p).Error
	if err != nil {
		c.JSON(400, gin.H{
			"erro": "nao posso criar o produto: " + err.Error(),
		})
		return
	}

	c.JSON(200, p)
}
