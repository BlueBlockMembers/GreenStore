import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router';
import '../../styles/cart/Cart.css';



const Cart = () => {
  const [cart, setCart] = useState(null);
  const [token, setToken] = useState('');
  const [id, setId] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const loginWithToken = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loginWithToken();
  }, []);

  useEffect(() => {
    const getCartFromToken = async () => {
      try {
        if (token) {
          const decodedToken = jwtDecode(token);
          const customerId = decodedToken.customer._id;

          setId(customerId);
          // Make the API request to fetch the cart data
          const response = await axios.get(`http://localhost:8070/cart/${customerId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setCart(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCartFromToken();
  }, [token]);

  const updateCartItemQuantity = async (itemId, newQuantity) => {
    try {
      // Make the API request to update the quantity of an item in the cart
      const response = await axios.patch(
        `http://localhost:8070/cart/${cart._id}/items/${itemId}`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the cart object with the updated item
      const updatedCart = { ...cart };
      const updatedItemIndex = updatedCart.items.findIndex((item) => item._id === itemId);
      if (updatedItemIndex !== -1) {
        updatedCart.items[updatedItemIndex].quantity = newQuantity;
        setCart(updatedCart);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (itemId, e) => {
    const newQuantity = e.target.value;
    updateCartItemQuantity(itemId, newQuantity);
  };

  const removeCartItem = async (itemId) => {
    try {
      // Make the API request to remove an item from the cart
      await axios.delete(`http://localhost:8070/cart/${id}/items/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Fetch the updated cart data after removing the item
      const response = await axios.get(`http://localhost:8070/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalPrice = () => {
    if (cart && cart.items) {
      return cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
    }
    return '0.00';
  };

  const handleBackClick = () => {
    // Perform any necessary actions when the back button is clicked
    console.log('Back button clicked');
    navigate('/report');
  };

  const handleProceedPayment = () => {
    // Perform any necessary actions when the proceed to payment button is clicked
    console.log('Proceed to payment button clicked');
  };

  if (cart === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
                <button onClick={handleBackClick}>Back</button>
      <h1>Cart</h1>
      {cart.items && cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item._id}>
                  <td>{item.product.name}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleInputChange(item._id, e)}
                    />
                  </td>
                  <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeCartItem(item._id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total Price: ${calculateTotalPrice()}</p>

          <button onClick={handleProceedPayment}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
