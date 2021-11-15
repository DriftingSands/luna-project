from django.contrib.auth import get_user_model
from rest_framework import serializers
from comment.models import Comment

User = get_user_model()


class UserInCommentSerializer(serializers.ModelSerializer):
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
        fields = ['id', 'email', 'username', 'date_joined', 'first_name', 'last_name', 'phone', 'location',
                  'interests', 'avatar', 'about_me', 'reviews', 'background_image', 'avatar_url',
                  'background_image_url']
        read_only_fields = ['id', 'email', 'username', 'reviews']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['avatar'] = representation.pop('avatar_url')
        representation['background_image'] = representation.pop('background_image_url')
        return representation


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text_content', 'created', 'updated', 'author']
        read_only_fields = ['author', 'review']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = UserInCommentSerializer(instance.author, many=False, context=self.context).data
        return representation
