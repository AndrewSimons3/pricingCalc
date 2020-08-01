import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';


const useStyles = (theme) => ({
  formWrapper: {
    margin: 'auto',
    minWidth: 120,
    display: 'block',
    width: '75%',
  },
  formControl: {
    margin: '20px',
    display: 'block',
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: 'auto',
  },
  fullWidth: {
    width: '100%'
  }
});

class PricingCalculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {selectedProductId: "", selectedPackageId: "", selectedEquipmentId: ""}


    this.updateProductSelect = this.updateProductSelect.bind(this)
    this.updatePackageSelect = this.updatePackageSelect.bind(this)
    this.updateEquipmentSelect = this.updateEquipmentSelect.bind(this)

  }

  async componentDidMount() {
    const { fetchProducts } = this.props;
    await fetchProducts();
    console.log(this.props.products);
  }

  updateProductSelect(event) {
    const productId = event.target.value
    const product = this.getProduct(productId)
    const packages = product.packages
    const equipment = product.equipment
    var packageId = undefined
    var equipmentId = undefined
    if(packages) {
      packageId = packages[0].name
    }
    this.setState({selectedProductId: event.target.value, selectedPackageId: packageId})
    console.log(event.target.value)

    if(equipment) {
      equipmentId = equipment[0].name
    }
    this.setState({selectedProductId: event.target.value, selectedEquipmentId: equipmentId})
  }

  updatePackageSelect(event) {
    this.setState({selectedPackageId: event.target.value})
  }

  updateEquipmentSelect(event) {
    this.setState({selectedEquipmentId: event.target.value})
  }

  getProduct(productId) {
    return this.props.products.find(product => {
      return product.name === productId
    })
  }

  getPackages(products) {
    if (!this.state.selectedProductId) {
      return null
    }
    const product = this.getProduct(this.state.selectedProductId)
    return product.packages
  }

  getEquipment(products) {
    if (!this.state.selectedProductId) {
      return null
    }
    const product = this.getProduct(this.state.selectedProductId)
    return product.equipment
  }

  render() {

    const { products, classes } = this.props;
    const packages = this.getPackages(products)
    const equipment = this.getEquipment(products)
    console.log(packages);

    if (products && products.length > 0) {
      return (
        <div className={classes.formWrapper}>
          <FormControl className={classes.formControl}>
            <div className={classes.fullWidth}>
            <InputLabel id="product-select">Products</InputLabel>
              <Select className={classes.fullWidth}
                labelId="products"
                id="product-select"
                value={this.state.selectedProductId}
                onChange={this.updateProductSelect}>
                {
                  products.map((product, key) => {
                    console.log(product.id)
                    return <MenuItem value={product.name} key={key}>{product.name}</MenuItem>
                  })
                }
              </Select>
            </div>
          </FormControl>
            {this.state.selectedProductId && (
              <FormControl className={classes.formControl}>
                <div className={classes.fullWidth}>
                  <InputLabel id="package-select">Packages</InputLabel>
                  <Select className={classes.fullWidth}
                    labelId="packages"
                    id="package-select"
                    value={this.state.selectedPackageId}
                    onChange={this.updatePackageSelect}>
                    {
                      packages.map((aPackage, key) => {
                        return <MenuItem value={aPackage.name} key={key}>{aPackage.name}</MenuItem>
                      })
                    }
                  </Select>
                </div>
              </FormControl>
            )}
              <FormControl className={classes.formControl}>
                <div className={classes.fullWidth}>
                 <InputLabel id="equipment-select">Equipment</InputLabel>
                 <Select className={classes.fullWidth}
                    labelId="equipment"
                    id="equipment-select"
                    value={this.state.selectedEquipmentId}
                    onChange={this.updateEquipmentSelect}>
                    {
                      equipment.map((equipment, key) => {
                        return <MenuItem value={equipment.name} key={key}>{equipment.name}</MenuItem>
                      })
                    }
                  </Select>
              </div>
            </FormControl>
      </div>
      );
    }

    return(
      <div>
         <div>
         <span>Loading...</span>
         </div>    
      </div>
    )
  }
}

export default withStyles(useStyles)(PricingCalculator);