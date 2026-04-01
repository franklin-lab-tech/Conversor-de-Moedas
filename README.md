# 💱 Conversor de Moedas em Tempo Real

Um conversor de moedas moderno e responsivo que utiliza APIs em tempo real para fornecer as taxas de câmbio mais atualizadas. Desenvolvido com HTML, CSS e JavaScript vanilla, sem dependências externas.

## ✨ Funcionalidades

- **Conversão em Tempo Real**: Converta entre 6 moedas diferentes (Real, Dólar, Euro, Libra, Bitcoin e Rublo Russo)
- **Taxas Atualizadas Automaticamente**: Integração com APIs públicas para obter taxas de câmbio atuais
- **Botão de Atualização Manual**: Force a atualização das taxas quando necessário
- **Sistema de Cache**: Economiza dados mantendo taxas em cache por até 1 hora
- **Spinner de Carregamento**: Feedback visual durante a busca de dados
- **Data da Última Atualização**: Mostra quando as taxas foram atualizadas pela última vez
- **Interface Responsiva**: Design adaptado para desktop, tablet e mobile
- **Sem Dependências**: Utiliza apenas JavaScript vanilla e APIs nativas do navegador

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **APIs**:
  - [ExchangeRate-API](https://exchangerate.host/) - Taxas de câmbio de moedas fiduciárias
  - [CoinGecko API](https://www.coingecko.com/api) - Preço do Bitcoin em tempo real
- **Armazenamento**: localStorage (navegador)
- **Async/Await**: Para requisições HTTP assíncronas

## 📋 Pré-requisitos

- Navegador moderno com suporte a ES6+ (Chrome, Firefox, Safari, Edge)
- Conexão com internet para buscar taxas atuais
- Nenhuma instalação adicional necessária

## 🚀 Como Usar

### 1. **Clone ou baixe o projeto**
```bash
git clone https://github.com/seu-usuario/conversor-moedas.git
cd conversor-moedas
```

### 2. **Abra o arquivo `index.html` no navegador**
   - Basta clicar duas vezes no arquivo `index.html`
   - Ou arraste o arquivo para o navegador
   - Ou acesse via servidor local

### 3. **Utilize o conversor**
   - Selecione a moeda de **origem** (Converter de)
   - Selecione a moeda de **destino** (Converter para)
   - Digite o valor
   - Clique em **Converter**
   - As taxas são atualizadas automaticamente ao carregar a página

## 📚 Como Funciona

### **Fluxo de Funcionamento**

1. **Ao Carregar a Página**
   - O aplicativo tenta carregar as taxas do cache (localStorage)
   - Se o cache tiver menos de 1 hora, usa as taxas salvas
   - Caso contrário, busca as taxas atualizadas das APIs

2. **Buscando Taxas das APIs**
   - **ExchangeRate-API**: Fornece taxas de câmbio para USD, BRL, GBP, RUB
   - **CoinGecko API**: Fornece o preço do Bitcoin em BRL

3. **Salvando no Cache**
   - As taxas são salvas no localStorage do navegador
   - O timestamp é registrado para verificação de validade

4. **Conversão**
   - Valor de origem × taxa de origem = valor em EUR
   - Valor em EUR ÷ taxa de destino = valor final convertido

### **Sistema de Cache**

```javascript
// Exemplo: Taxas buscadas e salvas
{
  "rates": {
    "USD": 1.085,
    "BRL": 5.67,
    "GBP": 0.85,
    "EUR": 1,
    "RUB": 97.50
  },
  "bitcoinRate": 250000,
  "timestamp": 1743638445000
}
```

## 🔄 Atualizar Taxas Manualmente

Clique no botão **"Atualizar Taxas"** para:
- Ignorar o cache
- Buscar as taxas mais recentes das APIs
- Salvar os novos dados
- Atualizar a data de última atualização

Durante a atualização:
- Um spinner (⟳) é exibido
- O botão fica desabilitado
- O texto muda para "Atualizando..."

## 📱 Estrutura do Projeto

```
/Conversor de Moedas
├── index.html          # Estrutura HTML
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── assets/             # Imagens das moedas
│   ├── brasil 2-1.png
│   ├── estados-unidos (1) 1.png
│   ├── euro.png
│   ├── LIBRAS.png
│   ├── bitcoin 1.png
│   ├── rubro russo (1).png
│   ├── Vector.png      # Seta
│   └── PLANO DE FUNDO.png
└── README.md           # Este arquivo
```

## 🔧 Configuração Avançada

### **Modificar Taxas Padrão**

No arquivo `script.js`, altere o objeto `currencies`:

```javascript
const currencies = {
  real: { name: 'Real', code: 'BRL', rate: 1.0, ... },
  dolar: { name: 'Dólar Americano', code: 'USD', rate: 5.19, ... },
  // ... adicione ou modifique outras moedas
}
```

### **Aumentar Duração do Cache**

No arquivo `script.js`, procure por `3600000` (1 hora em ms):

```javascript
if (age < 3600000) { // Mudar este valor
  // 3600000 = 1 hora
  // 7200000 = 2 horas
  // 86400000 = 24 horas
}
```

### **Adicionar Novas Moedas**

1. Adicione no objeto `currencies`
2. Adicione nas opções do HTML
3. Adicione na URL da API ExchangeRate

## 📊 APIs Utilizadas

### ExchangeRate-API
- **URL**: `https://api.exchangerate.host/latest`
- **Parâmetros**: `base=EUR&symbols=USD,BRL,GBP,RUB`
- **Resposta**:
```json
{
  "success": true,
  "rates": {
    "USD": 1.085,
    "BRL": 5.67,
    "GBP": 0.85,
    "EUR": 1,
    "RUB": 97.50
  }
}
```

### CoinGecko API
- **URL**: `https://api.coingecko.com/api/v3/simple/price`
- **Parâmetros**: `ids=bitcoin&vs_currencies=brl`
- **Resposta**:
```json
{
  "bitcoin": {
    "brl": 250000
  }
}
```

## 🎨 Customização

### **Mudar Cores**

No arquivo `style.css`:

```css
.update-button {
    background: #4CAF50;  /* Mude esta cor */
    color: white;
}

.update-button:hover {
    background: #45a049;  /* E esta */
}
```

### **Adicionar Novas Moedas**

1. Adicione no objeto `currencies` do `script.js`
2. Adicione a opção no HTML `<select>`
3. Atualize a URL da API para incluir o código da moeda

## ⚠️ Limitações e Notas

- **Dependência de Internet**: Requer conexão ativa para buscar taxas
- **CORS**: Algumas APIs podem ter restrições de CORS em navegadores
- **Limite de Requisições**: As APIs públicas podem ter limite de requisições
- **Taxas Indicativas**: As taxas são apenas para referência, não para operações reais

## 🐛 Solução de Problemas

### Erro: "Erro ao atualizar taxas"
- Verifique sua conexão com internet
- As APIs podem estar temporariamente indisponíveis
- Atualize a página

### Spinner continua girando
- Verifique o console (F12) para mensagens de erro
- Limpe o cache do navegador
- Recarregue a página

### Bitcoin não atualiza
- A API CoinGecko pode estar lenta
- As demais moedas são atualizadas mesmo que Bitcoin falhe

## 📝 Explicação Técnica

### **LocalStorage para Cache**
O aplicativo utiliza `localStorage` para armazenar as taxas por até 1 hora, reduzindo o uso de banda e melhorando a velocidade:

```javascript
function saveRatesToCache(rates, bitcoinRate) {
  localStorage.setItem('exchangeRates', JSON.stringify({
    rates: rates,
    bitcoinRate: bitcoinRate,
    timestamp: Date.now()
  }))
}
```

### **Async/Await para Requisições**
As requisições às APIs são feitas de forma assíncrona sem bloquear a interface:

```javascript
async function fetchExchangeRates() {
  const response = await fetch('https://api.exchangerate.host/...')
  const data = await response.json()
  // processa dados
}
```

### **Formatação de Moedas**
Utiliza a API `Intl.NumberFormat` nativa para formatar valores com o locale correto:

```javascript
new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(value)
```

## 🎓 O Que Você Aprenderá

- ✅ Consumo de APIs públicas
- ✅ Programação assíncrona com async/await
- ✅ Manipulação do DOM com JavaScript
- ✅ Armazenamento de dados com localStorage
- ✅ Tratamento de erros com try/catch
- ✅ Design responsivo com CSS
- ✅ Boas práticas de JavaScript moderno

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e comerciais.

## 👨‍💻 Autor

Desenvolvido como projeto educacional no DEVCLUB.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Otimizar o código

## 📞 Suporte

Dúvidas? Verifique:
1. O console do navegador (F12) para mensagens de erro
2. Sua conexão com internet
3. Se as APIs estão respondendo (teste em outro navegador)

---

**Última atualização**: Abril de 2026  
**Status**: ✅ Ativo e Funcional  
**Compatibilidade**: Todos os navegadores modernos
