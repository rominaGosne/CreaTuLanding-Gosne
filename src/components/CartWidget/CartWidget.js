import { Badge } from 'react-bootstrap'
import cart from './assets/pngegg.png'
const CartWidget =()=> {
    return(
        <div  className="mx-3 my-2">
            <img src={cart} width={30} height={30}  alt='pngegg.png'/>
            <Badge className='mx-1' bg="secondary">6</Badge>
        </div>
    )
}
export default CartWidget