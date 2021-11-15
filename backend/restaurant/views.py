from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.generics import GenericAPIView, ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from restaurant.serializers import RestaurantSerializer
from restaurant.models import Restaurant, CATEGORY_CHOICES
from rest_framework.response import Response
from registration_profile.permissions import IsOwnerOrAdmin
import json


# Create your views here.


class ListRestaurantView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class CreateRestaurantView(CreateAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(owner=self.request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class GetRestaurantsByCategoryView(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = []

    def get_queryset(self):
        return Restaurant.objects.filter(category=self.kwargs['category'])


class RetrieveUpdateDeleteRestaurantView(RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = [IsOwnerOrAdmin]


class ListUserRestaurantsViews(ListAPIView):
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'owner_id'
    permission_classes = []

    def get_queryset(self):
        user = self.kwargs.get('owner_id')
        return Restaurant.objects.filter(owner_id=user).order_by('-created')


class ListCategoriesView(APIView):

    def get(self, request):
        categories_dict = {"categories": [x[1] for x in CATEGORY_CHOICES]}
        return Response(categories_dict)


class HomePageRestaurantsView(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = []

    def get_queryset(self):
        top_four = (Restaurant.objects
                    .order_by('-rating_average')
                    .values_list('rating_average', flat=True))
        return Restaurant.objects.order_by('-rating_average').filter(rating_average__in=top_four[:4])
