from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from review.models import Review
from restaurant.models import Restaurant
from review.permissions import IsLoggedInUserOrStaff
from review.serializers import ReviewSerializer
from comment.serializers import CommentSerializer

User = get_user_model()


class ListCreateReviewsView(ListCreateAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "restaurant_id"
    lookup_field = "restaurant"

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):
        search = self.request.query_params.get('search')
        if search:
            return Review.objects.filter(text_content__contains=search)
        return Review.objects.all()

    def post(self, request, restaurant_id, *args, **kwargs):
        # restaurants = self.kwargs["id"]
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=request.user, restaurant=Restaurant.objects.get(pk=restaurant_id))
        return Response(serializer.data)


class ListReviewsView(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    def get(self, request, *args, **kwargs):
        if self.kwargs:
            queryset = self.get_queryset().filter(author=self.kwargs['author_id'])
        else:
            queryset = self.get_queryset().filter(author=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListReviewByRestaurantIdView(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    def get(self, request, *args, **kwargs):
        if self.kwargs:
            queryset = self.get_queryset().filter(author=self.kwargs['author_id'])
        else:
            queryset = self.get_queryset().filter(author=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListLikedReviews(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    def get_queryset(self):
        user = self.request.user
        return user.likes.all()


class ListCommentedReviews(ListCreateAPIView):
    serializer_class = CommentSerializer
    queryset = Review.objects.all()

    def get_queryset(self):
        user = self.request.user
        return user.comments.all()


class ToggleLikeReview(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    # lookup_field = 'id'

    def post(self, request, *args, **kwargs):
        review = self.get_object()
        user = request.user
        if user in review.liked_by.all():
            review.liked_by.remove(user)
        else:
            review.liked_by.add(user)
        return Response(self.get_serializer(review).data)


class RetrieveUpdateDeleteReviewsView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'id'

    permission_classes = [IsLoggedInUserOrStaff]

