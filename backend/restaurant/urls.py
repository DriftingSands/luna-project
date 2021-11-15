from django.urls import path

from restaurant.views import ListRestaurantView, CreateRestaurantView, GetRestaurantsByCategoryView
from restaurant.views import RetrieveUpdateDeleteRestaurantView
from restaurant.views import ListUserRestaurantsViews


urlpatterns = [
    path('', ListRestaurantView.as_view()),
    path('new/', CreateRestaurantView.as_view()),
    path('category/<int:category>/', GetRestaurantsByCategoryView.as_view()),
    path('user/<int:owner_id>/', ListUserRestaurantsViews.as_view()),
    path('<int:pk>/', RetrieveUpdateDeleteRestaurantView.as_view())
]