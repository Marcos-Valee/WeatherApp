# 🌦️ WeatherApp

WeatherApp é uma aplicação React que permite aos usuários consultar informações meteorológicas em tempo real para qualquer cidade do mundo. A interface é moderna e responsiva, utilizando TailwindCSS e animações com Framer Motion.

## 🚀 Funcionalidades

- 🔍 **Busca por cidade**: Insira o nome de uma cidade para obter informações meteorológicas.
- 🌡️ **Temperatura**: Exibe a temperatura atual em graus Celsius.
- 💧 **Umidade**: Mostra o nível de umidade do ar.
- 🌬️ **Velocidade do vento**: Exibe a velocidade do vento em km/h.
- ❌ **Mensagens de erro**: Informa quando a cidade não é encontrada.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva.
- **Framer Motion**: Biblioteca para animações suaves e interativas.
- **OpenWeather API**: API para obter dados meteorológicos em tempo real.

## 📸 Demonstração

![WeatherApp Screenshot](https://via.placeholder.com/800x400?text=WeatherApp+Screenshot)

## 📂 Estrutura do Projeto

src/
├── Components/
│   ├── InputWeather.jsx   # Componente de entrada para busca de cidades
│   ├── ViewWeather.jsx    # Componente para exibição dos dados meteorológicos
│   ├── WeatherApp.jsx     # Componente principal da aplicação
├── images/                # Imagens utilizadas na aplicação
├── App.jsx                # Componente raiz
├── main.jsx               # Ponto de entrada da aplicação
├── index.css              # Estilos globais
