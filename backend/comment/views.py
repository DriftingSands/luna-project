from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView, GenericAPIView
from rest_framework.response import Response
from comment.permissions import IsLoggedInUserOrStaff
from comment.models import Comment
from comment.serializers import CommentSerializer
from django.contrib.auth import get_user_model
from review.models import Review


User = get_user_model()


class CommentsView(ListCreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'review_id'
    lookup_field = "reviews"

    def post(self, request, review_id, *args, **kwargs):
        # reviews = self.kwargs["id"]
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=request.user, reviews=Review.objects.get(pk=review_id))
        return Response(serializer.data)

    def get(self, request, *args, **kwargs):
        queryset = Comment.objects.all()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    # def get_queryset(self):
    #     search = self.request.query_params.get('search')
    #     if search:
    #         return Review.objects.filter(text_content__contains=search)
    #     return Review.objects.all()


class ListCommentsView(GenericAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def get(self, request, *args, **kwargs):
        if self.kwargs:
            queryset = self.get_queryset().filter(author=self.kwargs['author_id'])
        else:
            queryset = self.get_queryset().filter(author=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class RetrieveUpdateDeleteCommentsView(RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'id'

    permission_classes = [IsLoggedInUserOrStaff]
