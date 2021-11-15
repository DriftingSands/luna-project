from django.contrib.auth import get_user_model
from rest_framework import serializers
from comment.serializers import CommentSerializer


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    avatar_url = serializers.SerializerMethodField()
    background_image_url = serializers.SerializerMethodField()

    def get_avatar_url(self, obj):
        try:
            domain_name = 'https://luna2.propulsion-learn.ch'
            full_path = domain_name + obj.avatar.url
            return full_path
        except Exception:
            return None

    def get_background_image_url(self, obj):
        try:
            domain_name = 'https://luna2.propulsion-learn.ch'
            full_path = domain_name + obj.background_image.url
            return full_path
        except Exception:
            return None

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'date_joined', 'first_name', 'last_name', 'phone',
                  'interests', 'avatar', 'about_me', 'reviews', 'background_image', 'avatar_url', 'comments',
                  'background_image_url']
        read_only_fields = ['id', 'email', 'username', 'reviews']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['avatar'] = representation.pop('avatar_url')
        representation['background_image'] = representation.pop('background_image_url')
        representation['comments'] = CommentSerializer(instance.comments, many=True, context=self.context).data
        return representation



class SearchSerializer(serializers.Serializer):
    type = serializers.CharField(min_length=1, max_length=100)
    search_string = serializers.CharField(min_length=1, max_length=500)

    def validate(self, data):
        request_type = data.get('type')
        if request_type.lower() == 'restaurants' or request_type.lower() == 'reviews' \
                or request_type.lower() == 'users':
            return data
        else:
            raise serializers.ValidationError('Incorrect type. You must use either restaurants, reviews or users')
