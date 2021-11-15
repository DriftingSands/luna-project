from django.urls import path

from comment.views import CommentsView, ListCommentsView, RetrieveUpdateDeleteCommentsView

urlpatterns = [
    path('<int:author_id>/', ListCommentsView.as_view()),
    path('delete/<int:id>/', RetrieveUpdateDeleteCommentsView.as_view()),
    path('new/<int:review_id>/', CommentsView.as_view())
    ]
