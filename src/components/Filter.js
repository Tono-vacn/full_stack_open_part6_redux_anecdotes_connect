//import{useDispatch} from 'react-redux'
import { connect } from 'react-redux'
import {createFilter} from '../reducers/filterReducer'

const Filter = (props) => {
    //const dispatch = useDispatch()
    const handleChange = (event) => {
      // input-field value is in variable event.target.value
        console.log(event.target.value)
        props.createFilter(event.target.value)

    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default connect(null,{
    createFilter
  })(Filter)