from django.urls import path

from user.views import ListUserView, RetrieveUpdateDeleteProfileView, ListAllUsersView, SpecificUserView

urlpatterns = [
    path('list/', ListUserView.as_view()),
    path('me/', RetrieveUpdateDeleteProfileView.as_view()),
    path('?search/<str:search_string>/', ListAllUsersView.as_view()),
    path('<int:id>/', SpecificUserView.as_view())
]
