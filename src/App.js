

import queryString from 'query-string' 


// eslint-disable-next-line no-unused-expressions
// eslint-disable-next-line react/react-in-jsx-scope
// eslint-disable-next-line no-unused-expressions
<Route path='/' component={Dashboard} />

// eslint-disable-next-line no-undef
class Dashboard extends Component { 

  componentDidMount() {

    console.log(this.props.location.search)

    const values = queryString.parse(this.props.location.search)
    
    console.log(values.sorton)

    // eslint-disable-next-line no-undef
    fetchDashboardData(values.sorton)
  }

  // eslint-disable-next-line react/require-render-return
  render() {



  }

}