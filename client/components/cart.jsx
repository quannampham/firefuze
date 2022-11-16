import React from 'react';
class Cart extends React.Component {

  render() {
    const { cart, on } = this.props;
    let games;
    let subtotal = 0;
    if (!cart) {
      games = null;
    } else {
      for (let i = 0; i < cart.length; i++) {
        subtotal += Number(cart[i].price);
      }
      games = cart.map(e => {
        return (
          <div className="cart-game column-full row" key={e.productid}>
            <div className="cart-game-img-container column-one-third">
              <img src={e.imageurl} alt="" className='cart-game-img' />
            </div>
            <div className='cart-game-text column-one-half'>
              <div className='cart-game-title'>{e.title}</div>
              <div className='quantity-container'>
                <span className='quantity-text'>QNTY</span>
                <div className='quantity-buttons'>
                  <i className="fa-solid fa-plus" />
                  <span className='quantity-value'>{e.quantity}</span>
                  <i className="fa-solid fa-minus" />
                </div>
              </div>
            </div>
            <div className='cart-game-price column-one-sixth row'>${e.price}</div>
          </div>
        );
      });
    }
    if (on) {
      return (
        <div>
          <div className='cart-container cart-on'>
            <div className='cart-text-container'>
              <p className='cart-text'>CART</p>
            </div>
            <div className="cart-game-container">
              {games}
            </div>
            <div className='checkout-container'>
              <div className='subtotal-container row'>
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className='checkout-btn-container'>
                <a href="#checkout" className='checkout-btn'>CHECKOUT</a>
              </div>
            </div>
          </div>
          <div className="black black-on" onClick={this.props.cartOff}/>
        </div>
      );
    } else {
      return (
        <div>
          <div className='cart-container'>
            <div className='cart-text-container'>
              <p className='cart-text'>CART</p>
            </div>
            <div className="cart-game-container">
              {games}
            </div>
            <div className='checkout-container'>
              <div className='subtotal-container row'>
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className='checkout-btn-container'>
                <a href="#checkout" className='checkout-btn'>CHECKOUT</a>
              </div>
            </div>
          </div>
          <div className="black"/>
        </div>
      );
    }
  }
}

export default Cart;