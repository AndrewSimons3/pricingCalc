import React from 'react'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'

class PricingCalculator extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { fetchProducts } = this.props;

    await fetchProducts();

    console.log(this.props.products);
  }

  updateResults() {

  }

  render() {
    const { products } = this.props;
    console.log(products);
    if (products && products.length > 0) {
      return (
        // <Select
        //   labelId="demo-simple-select-label"
        //   id="demo-simple-select"
        //   value={age}
        //   onChange={handleChange}
        // >
        //   <MenuItem value={10}>Ten</MenuItem>
        //   <MenuItem value={20}>Twenty</MenuItem>
        //   <MenuItem value={30}>Thirty</MenuItem>
        // </Select>
        <Select 
          labelId="products"
          id="product-select"
          value={""}
          onChange={this.updateResults}>
        {

          products.map((product, key) => {
            return <option value={product.id} index={key}>{product.name}</option>
          })
        }
        </Select>
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