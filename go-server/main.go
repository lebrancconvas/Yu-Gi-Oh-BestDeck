package main

import(
	"fmt"
	"io/ioutil"
	"net/http"
	"github.com/gin-gonic/gin"
)

func Homepage(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Welcome to Web Server.",
	})
}

func main() {
	// Get API Data
	response, err := http.Get("https://db.ygoprodeck.com/api/v7/cardinfo.php")

	if err != nil{
		fmt.Println("No response from Request.")
	}

	defer response.Body.Close()

	body, err := ioutil.ReadAll(response.Body)

	// fmt.Println(string(body))

	// Create Server 
	
	r := gin.Default()
	
	r.GET("/", Homepage)
	r.GET("/api/v1/cards", func(c *gin.Context){
		c.JSON(200, gin.H{
			"cards": string(body),
		})
	})
	r.Run() 
} 