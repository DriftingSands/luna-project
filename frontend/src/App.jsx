import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";
import RestaurantCreationForm from "./Pages/CreateRestaurantPage/RestaurantCreationFormPage";
import WriteNewReview from "./Pages/WriteNewReview/WriteNewReview";
import ProfilePage from "./Pages/ProfilePage/ProfilePage"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="appBodyDiv">
          <Route path="/" component={Home} exact />
          <Route path="/search/restaurants" component={Search} exact />
          <Route path="/search/reviews" component={Search} exact />
          <Route path="/search/users" component={Search} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register1" component={Login} exact />
          <Route path="/register2" component={Login} exact />
          <Route path="/register3" component={Login} exact />
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/restaurants/:id" component={RestaurantPage} exact />
          <Route
            path="/restaurants/:id/review"
            component={WriteNewReview}
            exact
          />
          <Route
            path="/newrestaurant"
            component={RestaurantCreationForm}
            exact
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
