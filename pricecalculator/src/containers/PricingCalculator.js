import { connect } from 'react-redux'
import PricingCalculator from '../components/PricingCalculator'
import { fetchProducts, fetchInternets } from '../redux/Actions'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchInternets: () => dispatch(fetchInternets())
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    internets: state.internets
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PricingCalculator)