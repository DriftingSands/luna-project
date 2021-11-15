from django.db import models
from django.contrib.auth import get_user_model
from user.models import User
from django.db.models import Avg

# Create your models here.

CATEGORY_CHOICES = [
    (1, "Swiss"),
    (2, "Italian"),
    (3, "French"),
    (4, "German"),
    (5, "Indian"),
    (6, "American"),
    (7, "Turkish"),
    (8, "Greek"),
    (9, "Caribbean"),
    (10, "Belgian"),
    (11, "Austrian"),
    (12, "British")
]


def user_directory_path(instance, filename):
    return f'user/{instance.id}/{filename}'


class Restaurant(models.Model):
    PRICE_LEVEL_CHOICES = [
        (1, '$'),
        (2, '$$'),
        (3, '$$$'),
        (4, '$$$$'),
        (5, '$$$$$')
    ]

    name = models.CharField(max_length=255)
    category = models.IntegerField(choices=CATEGORY_CHOICES, default=1)
    country = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip = models.CharField(max_length=10, blank=True, null=True)
    website = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField(max_length=100, blank=True, null=True)
    opening_hours = models.CharField(max_length=100)
    price_level = models.IntegerField(choices=PRICE_LEVEL_CHOICES, default=1)
    image = models.ImageField(max_length=255, blank=True, null=True, upload_to=user_directory_path)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='restaurants')
    created = models.DateTimeField(auto_now_add=True)
    rating_average = models.FloatField(default=0, blank=True)
    review_count = models.IntegerField(default=0)

    def update_review_fields(self):
        reviews = self.restaurant_reviews.all()
        self.rating_average = reviews.aggregate(models.Avg('rating')).get('rating__avg')
        self.review_count = reviews.count()
        self.save(update_fields=['rating_average', 'review_count'])

    def __str__(self):
        return f'{self.name}'

