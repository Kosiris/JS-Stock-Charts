async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    
    let response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=fa0d69473c0e44248ea52651741c9909')
    
    let txt = response.json()
    console.log(txt)

    const { GME, MSFT, DIS, BNTX } = mockData;

    const stocks = [GME, MSFT, DIS, BNTX];
}

main()