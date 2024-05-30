const dropList = document.querySelectorAll("form select"),
fromToken = document.querySelector(".sell select"),
toToken = document.querySelector(".buy select"),
getButton = document.querySelector("form button");
cfmButton = document.querySelectorAll("form button")[1];

var token_list = [
    {
      "currency": "BLUR",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.208115254237288
    },
    {
      "currency": "bNEO",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 7.1282679
    },
    {
      "currency": "BUSD",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.999183113
    },
    {
      "currency": "BUSD",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.999878261118644
    },
    {
      "currency": "USD",
      "date": "2023-08-29T07:10:30.000Z",
      "price": 1
    },
    {
      "currency": "ETH",
      "date": "2023-08-29T07:10:52.000Z",
      "price": 1645.93373737374
    },
    {
      "currency": "GMX",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 36.3451143728814
    },
    {
      "currency": "STEVMOS",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.0727670677966102
    },
    {
      "currency": "LUNA",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.409556389830508
    },
    {
      "currency": "RATOM",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 10.2509189152542
    },
    {
      "currency": "STRD",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.738655338983051
    },
    {
      "currency": "EVMOS",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.062461813559322
    },
    {
      "currency": "IBCX",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 41.268113559322
    },
    {
      "currency": "IRIS",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.0177095593220339
    },
    {
      "currency": "ampLUNA",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.495485898305085
    },
    {
      "currency": "KUJI",
      "date": "2023-08-29T07:10:45.000Z",
      "price": 0.675
    },
    {
      "currency": "STOSMO",
      "date": "2023-08-29T07:10:45.000Z",
      "price": 0.431318
    },
    {
      "currency": "USDC",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.989832
    },
    {
      "currency": "axlUSDC",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.989832
    },
    {
      "currency": "ATOM",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 7.18665733333333
    },
    {
      "currency": "STATOM",
      "date": "2023-08-29T07:10:45.000Z",
      "price": 8.51216205084746
    },
    {
      "currency": "OSMO",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 0.377297433333333
    },
    {
      "currency": "rSWTH",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.00408771
    },
    {
      "currency": "STLUNA",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.442322101694915
    },
    {
      "currency": "LSI",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 67.6966152542373
    },
    {
      "currency": "OKB",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 42.9756205932203
    },
    {
      "currency": "OKT",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 13.5615779661017
    },
    {
      "currency": "SWTH",
      "date": "2023-08-29T07:10:45.000Z",
      "price": 0.00403985045501208
    },
    {
      "currency": "USC",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.994
    },
    {
      "currency": "USDC",
      "date": "2023-08-29T07:10:30.000Z",
      "price": 1
    },
    {
      "currency": "USDC",
      "date": "2023-08-29T07:10:30.000Z",
      "price": 1
    },
    {
      "currency": "USDC",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.999878261118644
    },
    {
      "currency": "WBTC",
      "date": "2023-08-29T07:10:52.000Z",
      "price": 26002.822020202
    },
    {
      "currency": "wstETH",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 1872.25797423729
    },
    {
      "currency": "YieldUSD",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 1.02908479661017
    },
    {
      "currency": "ZIL",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 0.0165181355932203
    }
  ]

// Mapping of token codes to their respective cases in the GitHub repository,
// because currency name in prices.json might uses different case with the ones on GitHub repo
var caseMapping = {
    "BLUR": "BLUR",
    "BNEO": "bNEO",
    "BUSD": "BUSD",
    "USD": "USD",
    "ETH": "ETH",
    "GMX": "GMX",
    "STEVMOS": "stEVMOS",
    "LUNA": "LUNA",
    "RATOM": "rATOM",
    "STRD": "STRD",
    "EVMOS": "EVMOS",
    "IBCX": "IBCX",
    "IRIS": "IRIS",
    "AMPLUNA": "ampLUNA",
    "KUJI": "KUJI",
    "STOSMO": "stOSMO",
    "USDC": "USDC",
    "AXLUSDC": "axlUSDC",
    "ATOM": "ATOM",
    "STATOM": "stATOM",
    "OSMO": "OSMO",
    "RSWTH": "rSWTH",
    "STLUNA": "stLUNA",
    "LSI": "LSI",
    "OKB": "OKB",
    "OKT": "OKT",
    "SWTH": "SWTH",
    "USC": "USC",
    "WBTC": "WBTC",
    "WSTETH": "wstETH",
    "YIELDUSD": "YieldUSD",
    "ZIL": "ZIL"
  };

// Removes duplicate tokens from the list and keeps only the latest entry for each currency based on the date.
function removeDuplicatesAndKeepLatest(token_list) {
    const latest_token_list = {};

    token_list.forEach(token => {
        const { currency, date } = token;
        if (!latest_token_list[currency] || new Date(date) > new Date(latest_token_list[currency].date)) {
            latest_token_list[currency] = token;
        }
    });

    return (latest_token_list);
}
const latest_token_list = removeDuplicatesAndKeepLatest(token_list);

// Initialize the exchange page
for (let i = 0; i < dropList.length; i++) {
    for(let token in latest_token_list){
        // selecting ETH by default as SELL currency and USD as BUY currency
        let selected = "";
        if (i == 0) {
            if (token == "ETH") {
                selected = "selected";
            }
        } else {
            if (token == "USD") {
                selected = "selected";
            }
        }
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${token}" ${selected}>${token}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        // calling loadFlag with passing target element as an argument
        loadFlag(e.target);
    });
}

function loadFlag(element){
    for(let token in latest_token_list){
        // if token_code is equal to option value
        if(token == element.value){ 
            // selecting img tag of particular drop list
            let imgTag = element.parentElement.querySelector("img"); 
            // get token img from online GitHub repo
            imgTag.src = getIconUrl(token);
        }
    }
}

// get token icon img from online GitHub repo, with token 
function getIconUrl(token) {
    // map token code to correct casing 
    let display_token = caseMapping[token.toUpperCase()]
    return `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${display_token}.svg`;
}

// Calc Exchange rate of default ETH to USD
window.addEventListener("load", ()=>{
    getExchangeRate();
});

// Listen to each "Get Token Button Exchange Rate" button click
getButton.addEventListener("click", e =>{
    e.preventDefault(); //preventing form from submitting
    getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromToken.value; // temporary currency code of FROM drop list
    fromToken.value = toToken.value; // passing TO currency code to FROM currency code
    toToken.value = tempCode; // passing temporary currency code to TO currency code
    loadFlag(fromToken); // calling loadFlag with passing select element (fromCurrency) of FROM
    loadFlag(toToken); // calling loadFlag with passing select element (toCurrency) of TO
    getExchangeRate(); // calling getExchangeRate
})

function getExchangeRate(){
    // Get SELL amount
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let sell_token_amount = amount.value;
    // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
    if(sell_token_amount == "" || sell_token_amount == "0"){
        amount.value = "1";
        sell_token_amount = 1;
    }

    // fetching SELL and BUY price from the price_list from JSON
    let sell_token_price = latest_token_list[fromToken.value].price;
    let buy_token_price = latest_token_list[toToken.value].price;

    try {
        // calculate buy_price by using formula: sell_token_amount * sell_token_price = buy_token_amount * buy_token_price
        // Set to 6 significant level, referenced to https://app.uniswap.org/swap.
        let buy_token_amount = (sell_token_amount * sell_token_price / buy_token_price).toPrecision(6);

        // input back to HTML, to display exchange rate
        exchangeRateTxt.innerText = `${sell_token_amount} ${fromToken.value} = ${buy_token_amount} ${toToken.value}`;
    } catch (error) {
        exchangeRateTxt.innerText = "Something went wrong";
    }
    
}

function confirmExchange() {
    
}