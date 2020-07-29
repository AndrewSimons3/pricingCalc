import { connect } from 'react-redux'
import PricingCalculator from '../components/PricingCalculator'
import { fetchProducts } from '../redux/Actions'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PricingCalculator)