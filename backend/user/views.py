from django.db.models import Q
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView, GenericAPIView
from django.contrib.auth import get_user_model
from user.permissions import IsLoggedInUserOrStaff
from user.serializers import UserSerializer
from user.serializers import SearchSerializer
from restaurant.models import Restaurant
from rest_framework.response import Response
from restaurant.serializers import RestaurantSerializer
from review.models import Review
from review.serializers import ReviewSerializer

User = get_user_model()


class ListUserView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class SpecificUserView(RetrieveAPIView):
    """
    get:
    Get specific user profile
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'id'


class RetrieveUpdateDeleteProfileView(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get own profile
    patch:
    Update own profile
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_object(self):
        return User.objects.get(id=self.request.user.id)

    permission_classes = [IsLoggedInUserOrStaff]


class ListAllUsersView(ListAPIView):
    """
    get:
    List all users
    search: filter
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        search_string = self.request.query_params.get('search')
        if search_string:
            return User.objects.filter(username__contains=search_string)
        return User.objects.all()


class SearchView(GenericAPIView):
    serializer_class = SearchSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            if serializer.validated_data['type'].lower() == 'restaurants':
                restaurants = Restaurant.objects.filter(name__icontains=serializer.validated_data['search_string'])
                return Response(RestaurantSerializer(restaurants, many=True, context={'request': request}).data)
            elif serializer.validated_data['type'].lower() == 'reviews':
                reviews = Review.objects.filter(
                    text_content__icontains=serializer.validated_data['search_string'])
                return Response(ReviewSerializer(reviews, many=True, context={'request': request}).data)
            elif serializer.validated_data['type'].lower() == 'users':
                users = User.objects.filter(Q(username__icontains=serializer.validated_data['search_string']) |
                                            Q(first_name__icontains=serializer.validated_data['search_string']) |
                                            Q(last_name__icontains=serializer.validated_data['search_string']))
                return Response(UserSerializer(users, many=True, context={'request': request}).data)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
