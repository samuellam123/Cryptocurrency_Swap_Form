interface WalletBalance {
  currency: string;
  amount: number;
}
interface FormattedWalletBalance {
  currency: string;
  amount: number;
  formatted: string;
}

class Datasource {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getPrices(): Promise<{ [key: string]: number }> {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
}

interface Props extends BoxProps {

}
const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
	const [prices, setPrices] = useState({});

  useEffect(() => {
    const datasource = new Datasource("https://interview.switcheo.com/prices.json");
    datasource.getPrices().then(prices => {
      setPrices(prices);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  type Blockchain = 'Osmosis' | 'Ethereum' | 'Arbitrum' | 'Zilliqa' | 'Neo';

  const blockchainPriority: { [key in Blockchain]?: number } = {
    Osmosis: 100,
    Ethereum: 50,
    Arbitrum: 30,
    Zilliqa: 20,
    Neo: 20,
  };
  
  const getPriority = (blockchain: Blockchain): number => {
    return blockchainPriority[blockchain] ?? -99;
  };

  const filteredAndSortedBalances = useMemo(() => {
    return balances
      .filter((balance) => getPriority(balance.blockchain) > -99 && balance.amount > 0)
      .sort((lhs, rhs) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain));
  }, [balances]);

  const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    return {
      ...balance,
      formatted: balance.amount.toFixed(2)
    }
  })

  const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
    const usdValue = prices[balance.currency] * balance.amount;
    return (
      <WalletRow 
        className={classes.row}
        key={index}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    )
  })

  return (
    <div {...rest}>
      {rows}
    </div>
  )
}