from django.urls import path

from review.views import ListCreateReviewsView, RetrieveUpdateDeleteReviewsView, ToggleLikeReview, ListReviewsView, \
    ListLikedReviews, ListCommentedReviews

urlpatterns = [
    path('', ListCreateReviewsView.as_view()),
    path('new/<int:restaurant_id>/', ListCreateReviewsView.as_view()),
    path('user/me/', ListReviewsView.as_view()),
    path('like/', ListLikedReviews.as_view()),
    path('user/<int:author_id>/', ListReviewsView.as_view()),
    path('<int:id>/', RetrieveUpdateDeleteReviewsView.as_view()),
    path('like/<int:pk>/', ToggleLikeReview.as_view()),
    path('comments/', ListCommentedReviews.as_view())
]
