import React from 'react'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

class PricingCalculator extends React.Component {

  constructor(props) {
    super(props);

    // const useStyles = makeStyles((theme) => ({
    //   formControl: {
    //     margin: theme.spacing(1),
    //     minWidth: 120,
    //   },
    //   selectEmpty: {
    //     marginTop: theme.spacing(2),
    //   },
    // }));
  }

  async componentDidMount() {
    const { fetchProducts } = this.props;

    await fetchProducts();

    console.log(this.props.products);
  }

  updateResults() {

  }

  render() {
    // const classes = useStyles();
    const { products } = this.props;
    console.log(products);
    if (products && products.length > 0) {
      return (
        <FormControl>
        {/* className={classes.formControl}> */}
           <InputLabel id="Products">Products</InputLabel>
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
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
      </FormControl>
        // <Select
        //   labelId="products"
        //   id="product-select"
        //   value={""}
        //   onChange={this.updateResults}>
        // {

        //   products.map((product, key) => {
        //     return <option value={product.id} index={key}>{product.name}</option>
        //   })
        // }
        // </Select>
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