class PricingCalculator extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { fetchProducts } = this.props;

    await fetchProducts();

    console.log(this.props.products);
  }

  render() {
    const { products } = this.props;
    console.log(products);
    if (products && products.length > 0) {
      return (
        <div>
        {
          products.map((candidate, key) => {
            // return <div index={key}><img src={`https://electionbettingodds.com/${candidate.shortname}.png`}/><span>{candidate.win_probability}</span></div>
          })
        }
        </div>
      );
    }

    return(
      <div>
      <TableContainer>
        <Table>
         <div>
         <span>Loading...</span>
         </div>
        </Table>
      </TableContainer>
      </div>
    )
  }
}

export default PricingCalculator;