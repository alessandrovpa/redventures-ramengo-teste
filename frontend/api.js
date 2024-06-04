class HttpServer{
  apiUrl;
  xApiKey;
  constructor(){
    this.apiUrl = 'http://localhost:3000';
    this.xApiKey = 'd9e48163921e40be85ea722e75dde7e460e17beabbbfe410b8ab0557d7cd172b';
  }
  
  async getBroths() {
    const response = await fetch(`${this.apiUrl}/broths`, {
      headers: {
        'x-api-key':this.xApiKey
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
        'x-api-key':this.xApiKey
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
        'x-api-key':this.xApiKey,
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