class HttpServer{
  apiUrl;
  constructor(){
    this.apiUrl = 'http://localhost:3000';
  }
  
  async getBroths() {
    const response = await fetch(`${this.apiUrl}/broths`, {
      headers: {
        'x-api-key':'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'
      }
    });
    if (response.ok) {
      const dados = await response.json();
      return dados;
    } else {
      throw new Error('Erro na requisição:', response.statusText);
    }
  }

  async getProteins() {
    const response = await fetch(`${this.apiUrl}/proteins`, {
      headers: {
        'x-api-key':'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'
      }
    });
    if (response.ok) {
      const dados = await response.json();
      return dados;
    } else {
      throw new Error('Erro na requisição:', response.statusText);
    }
  }

  async makeOrder(brothId, proteinId){
    const payload = {
      brothId,
      proteinId
    };
    const response = await fetch(`${this.apiUrl}/orders`, {
      method: 'post',
      headers: {
        'x-api-key':'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      const dados = await response.json();
      return dados;
    } else {
      throw new Error('Erro na requisição:', response.statusText);
    }
  }
}