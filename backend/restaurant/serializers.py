from rest_framework import serializers
from restaurant.models import Restaurant
from user.serializers import UserSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        try:
            domain_name = 'https://luna2.propulsion-learn.ch'
            full_path = domain_name + obj.image.url
            return full_path
        except Exception:
            return None

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category', 'country', 'street', 'city',
                  'zip', 'website', 'phone', 'email', 'opening_hours', 'owner',
                  'price_level', 'image', 'price_level', 'restaurant_reviews',
                  'rating_average', 'image_url', 'review_count'
                  ]
        read_only_fields = ['id', 'image', 'owner', 'restaurant_reviews']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['owner'] = UserSerializer(instance.owner, many=False, context=self.context).data
        representation['image'] = representation.pop('image_url')
        return representation
