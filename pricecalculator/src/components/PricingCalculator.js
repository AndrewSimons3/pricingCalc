import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';


const useStyles = (theme) => ({
  formWrapper: {
    margin: 'auto',
    minWidth: 120,
    display: 'block',
  },
  formControl: {
    margin: '10px',
    display: 'block',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 'auto',
  },
  fullWidth: {
    width: '100%'
  },
  root: {
    width: '50px',
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginBottom: 0,
  },
  price: {
    marginTop: '-2%',
    marginBottom: '15px'
  },
  pos: {
    marginBottom: 12,
  },
  pageTitle: {
    margin: 'auto',
    fontSize: '32px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    fontWeight: 'bold'
  },
  main: {
    display: 'flex',
    margin: '5%'
  },
  sub: {
    width: '50%'
  },
  card: {
    margin: 'auto'
  },
  totalCard: {
    margin: '5%'
  }
});

class PricingCalculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {selectedProductId: "", selectedPackageId: "", selectedEquipmentId: "", selectedNumOfTvs: 1, selectedInternetId: "", selectedSpeedId: "", selectedintEquipmentId: ""}


    this.updateProductSelect = this.updateProductSelect.bind(this)
    this.updatePackageSelect = this.updatePackageSelect.bind(this)
    this.updateEquipmentSelect = this.updateEquipmentSelect.bind(this)
    this.updateNumOfTvsSelect = this.updateNumOfTvsSelect.bind(this)
    this.updateInternetSelect = this.updateInternetSelect.bind(this)
    this.updateSpeedSelect = this.updateSpeedSelect.bind(this)
    this.updateIntEquipmentSelect = this.updateIntEquipmentSelect.bind(this)
  }

  async componentDidMount() {
    const { fetchProducts } = this.props;
    await fetchProducts();
    const { fetchInternets } = this.props;
    await fetchInternets();
  }

  updateProductSelect(event) {
    const productId = event.target.value
    const product = this.getProduct(productId)
    const packages = product.packages
    const equipment = product.equipment
    const tvs = product.extratvcost
    var packageId = undefined
    var equipmentId = undefined
    var numTvs = undefined
    
    if(packages) {
      packageId = packages[0].name
    }
    if(equipment) {
      equipmentId = equipment[0].name
    }
    if(tvs) {
      numTvs = tvs[0]
    }
    this.setState({
      selectedProductId: event.target.value, 
      selectedPackageId: packageId,
      selectedEquipmentId: equipmentId,
      selectedNumOfTvs: numTvs,
    })
    console.log(event.target.value)
  }

  updateInternetSelect(event) {
    console.log(event.target.value)
    const internetId = event.target.value
    const internets = this.getInternet(internetId)
    const intSpeeds = internets.intSpeeds
    const intEquipment = internets.equipment
    console.log(intSpeeds)
    var speedId = undefined
    var intEquipmentId = undefined

    if(intSpeeds) {
      speedId = intSpeeds[0].speed
    }

    if(intEquipment) {
      intEquipmentId = intEquipment[0].name
    }

    this.setState({
      selectedInternetId: internetId,
      selectedIntEquipmentId: intEquipmentId,
    })
  }
  

  updatePackageSelect(event) {
    this.setState({selectedPackageId: event.target.value})
  }

  updateEquipmentSelect(event) {
    this.setState({selectedEquipmentId: event.target.value})
  }

  updateNumOfTvsSelect(event) {
    this.setState({selectedNumOfTvs: event.target.value})
  }

  updateSpeedSelect(event) {
    this.setState({selectedSpeedId: event.target.value})
  }

  updateIntEquipmentSelect(event) {
    this.setState({selectedIntEquipmentId: event.target.value})
  }

  getProduct(productId) {
    return this.props.products.find(product => {
      return product.name === productId
    })
  }

  getInternet(internetId) {
    return this.props.internets.find(internet => {
      return internet.name === internetId
    })
  }

  getPackages() {
    if (!this.state.selectedProductId) {
      return null
    }
    const product = this.getProduct(this.state.selectedProductId)
    return product.packages
  }

  getIntSpeeds() {
    if (!this.state.selectedInternetId) {
      return null
    }
    const internets = this.getInternet(this.state.selectedInternetId)
    return internets.intSpeeds
  }

  getEquipment() {
    if (!this.state.selectedProductId) {
      return null
    }
    const product = this.getProduct(this.state.selectedProductId)
    return product.equipment
  }

  getCurrency(decimalValue) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
    return formatter.format(decimalValue)
  }

  getTotalMonthlyCost() {
    const aPackage = this.getPackage()
    return aPackage.price
  }

  getUpFrontCost(product) {
    const tvCost = this.state.selectedNumOfTvs
    const initialCost = product.upfrontcost
    return tvCost + initialCost
  }

  getPackage() {
    const packages = this.getPackages()
    return packages.find(aPackage => {
      return aPackage.name === this.state.selectedPackageId
    })
  }

  getIntSpeed() {
    const intSpeeds = this.getIntSpeeds()
    return intSpeeds.find(intSpeed => {
      return intSpeed.speed === this.state.selectedSpeedId
    })
  }

  getIntEquipment() {
    if (!this.state.selectedInternetId) {
      return null
    }
    const internets = this.getInternet(this.state.selectedInternetId)
    return internets.equipment
  }

  getNumTvs(product) {
    return product.extratvcost.indexOf(this.state.selectedNumOfTvs) + 1
  }

 

  render() {

    const { products, classes, internets } = this.props;
    const packages = this.getPackages(products)
    const equipment = this.getEquipment(products)
    const intSpeeds = this.getIntSpeeds(internets)
    const intEquipment = this.getIntEquipment(internets)
    var speedWithPrice = null
    
    if (this.state.selectedSpeedId) {
      speedWithPrice = intSpeeds.find( (speedWithPrice) => {
        return speedWithPrice.speed == this.state.selectedSpeedId
      })
    }
    console.log(packages);

    if (products && products.length > 0) {
      const product = this.getProduct(this.state.selectedProductId)
      return (       
        <div className={classes.formWrapper}>
          <div className={classes.pageTitle}>PRICING CALCULATOR</div>
            <Box className={classes.main}>
              <Box className={classes.sub}>
                <FormControl className={classes.formControl}>
                  <div className={classes.fullWidth}>
                  <InputLabel id="product-select">TV</InputLabel>
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
                  {this.state.selectedProductId && (
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
                  )}
                    {this.state.selectedProductId && (
                      <FormControl className={classes.formControl}>
                        <div className={classes.fullWidth}>
                          <InputLabel id="tvs-select">Number of Tvs</InputLabel>
                            <Select className={classes.fullWidth}
                              labelId="tvs-select"
                              id="tvs-select"
                              value={this.state.selectedNumOfTvs}
                              onChange={this.updateNumOfTvsSelect}>
                              {
                                product.extratvcost.map((tvCost, key) => {
                                  return <MenuItem value={tvCost} key={key}>{key + 1}</MenuItem>
                                })
                              }
                            </Select>
                        </div>
                      </FormControl>
                    )}
                    </Box>
                    <Box className={classes.card}>
                    {this.state.selectedProductId && (
                      <Card className={classes.root}>
                        <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Upfront Cost
                          </Typography>
                          <Typography className={classes.price} variant="h5" component="h2">
                            {this.getCurrency(this.getUpFrontCost(product))}
                          </Typography>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Total Monthly Cost
                          </Typography>
                          <Typography className={classes.price} variant="h5" component="h2">
                            {this.getCurrency(this.getTotalMonthlyCost())}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {product.name} {this.getPackage().name} package with {this.getNumTvs(product)} TV(s)
                          </Typography>
                        </CardContent>
                    </Card>           
                    )}
                    </Box>
                  </Box>

                  <Box className={classes.main}>
                  <Box className={classes.sub}>
                <FormControl className={classes.formControl}>
                  <div className={classes.fullWidth}>
                  <InputLabel id="internet-select">Internet</InputLabel>
                    <Select className={classes.fullWidth}
                      labelId="internet-select"
                      id="internet-select"
                      value={this.state.selectedInternetId}
                      onChange={this.updateInternetSelect}>
                      {
                        internets.map((internet, key) => {
                          return <MenuItem value={internet.name} key={key}>{internet.name}</MenuItem>
                        })
                      }
                    </Select>
                  </div>
                </FormControl>

              {this.state.selectedInternetId && (
              <FormControl className={classes.formControl}>
                <div className={classes.fullWidth}>
                  <InputLabel id="speed-select">Speed</InputLabel>
                  <Select className={classes.fullWidth}
                    labelId="speed"
                    id="speed-select"
                    value={this.state.selectedSpeedId}
                    onChange={this.updateSpeedSelect}>
                    {
                      intSpeeds.map((speeds, key) => {
                        return <MenuItem value={speeds.speed} key={key}>{speeds.speed}</MenuItem>
                      })
                    }
                  </Select>
                </div>
              </FormControl>
            )}
            

            {this.state.selectedSpeedId && (
              <FormControl className={classes.formControl}>
                <div className={classes.fullWidth}>
                 <InputLabel id="equipment-select">Internet Equipment</InputLabel>
                 <Select className={classes.fullWidth}
                    labelId="equipment"
                    id="equipment-select"
                    value={this.state.selectedIntEquipmentId}
                    onChange={this.updateIntEquipmentSelect}>
                    {
                      intEquipment.map((equipment, key) => {
                        return <MenuItem value={equipment.name} key={key}>{equipment.name}</MenuItem>
                      })
                    }
                  </Select>
              </div>
            </FormControl>
            )}
            </Box>
            <Box className={classes.card}>         
              {this.state.selectedSpeedId && (
                <Card className={classes.root}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Installation Cost
                    </Typography>
                    <Typography className={classes.price} variant="h5" component="h2">
                    {this.getCurrency(speedWithPrice.install)}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Total Monthly Cost
                    </Typography>
                    <Typography className={classes.price} variant="h5" component="h2">
                      {this.getCurrency(speedWithPrice.intPrice)}
                    </Typography>
                  </CardContent>
                </Card>        
              )}
              </Box> 
          </Box>
          <Box className={classes.totalCard}>         
              {(
                <Card className={classes.root}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Total Cost
                    </Typography>
                    {/* <Typography className={classes.price} variant="h5" component="h2">
                    {this.getCurrency(speedWithPrice.install)}
                    </Typography> */}
                    <Typography className={classes.price} variant="h5" component="h2">
                      Price
                    </Typography>
                  </CardContent>
                </Card>        
              )}
              </Box> 
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