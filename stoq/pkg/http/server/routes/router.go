package router

import (
	"version01/stoq/pkg/http/controllers"

	"github.com/gin-gonic/gin"
)

func ConfigRoutes(router *gin.Engine) *gin.Engine {
	main := router.Group("api/v1")
	{
		produtos := main.Group("produtos")
		{
			produtos.GET("/", controllers.ShowAllproduct)
			produtos.GET("/:id", controllers.ShowAllproduct)
			produtos.POST("/", controllers.Createproduto)
			produtos.PUT("/", controllers.Editproduct)
			produtos.DELETE("/:id", controllers.Deleteproduto)
		}
	}

	return router
}
