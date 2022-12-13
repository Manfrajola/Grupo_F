package models

import (
	"encoding/json"
	"fmt"
)

// ESPECIFICANDO O TIPO DE CONTEUDO E TRANSFORMANDO EM JSON
type Produto struct {
	ID        int     `json:"id_product"`
	Name      string  `json:"name_product"`
	Code      string  `json:"code"`
	Price     float64 `json:"price"`
	CreatedAt string  `json:"created_at"`
	UpdatedAt string  `json:"updated_at"`
}

// TRANSFORMA A ESTRUTURA PRODUTO EM UMA SRING JSON
func (p Produto) String() string {
	data, err := json.Marshal(p)

	//CASO DER ERRO
	if err != nil {
		fmt.Println("error to convert Produto to JSON")
		fmt.Println(err.Error())
		return ""
	}
	//SE NÃO DER ERRO RETORNA O VALOR
	return string(data)
}

// ESPECIFICANDO O TIPO DE CONTEUDO DE PRODUTOLIST E TRANSFORMANDO EM JSON
type ProdutoList struct {
	List []*Produto `json:"list"`
}

// TRANSFORMA A ESTRUTURA PRODUTOLIST EM UMA STRING JSON
func (pl ProdutoList) String() string {
	data, err := json.Marshal(pl)

	//CASO DER ERRO
	if err != nil {
		fmt.Println("error to convert ProdutoList to JSON")
		fmt.Println(err.Error())
		return ""
	}
	//SE NÃO DER ERRO RETORNA O VALOR
	return string(data)
}

// CRIANDO UM FUNÇAO PARA CRIAR NOVO PRODUTO
func NewProduto(name string, code string, price float64) *Produto {
	return &Produto{
		Name:  name,
		Code:  code,
		Price: price,
	}
}

// ESPECIFICANDO O TIPO DE CONTEUDO DE USUARIO TRANSFORMANDO EM UMA STRING JSON
type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// CRIANDO UM FUNÇAO PARA CRIAR NOVO USUARIO
func NewUser() *User { // * declarando o ponteiro
	return &User{ // & devolvendo
		Username: "admin",
		Password: "supersenha",
	}
}

// ESPECIFICANDO O TIPO DO TOKEN E TRANSFORMANDO EM JSONE
type Token struct {
	Token string `json:"token"`
}

const USER_TOKEN = "fake-WzD5fqrlaAXLv26bpI0hxvAhDp7T1Bac"
