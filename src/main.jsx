import FoodContext from './context/FoodContext.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './redux/app/Store.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(

<Provider store={Store}>
  <FoodContext>
    <App />
    <ToastContainer />
  </FoodContext>
  </Provider>
    
 
)
