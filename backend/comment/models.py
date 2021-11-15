from django.db import models
from django.contrib.auth import get_user_model
from review.models import Review

User = get_user_model()


class Comment(models.Model):
    text_content = models.CharField(max_length=500, blank=False, null=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='comments')
    reviews = models.ForeignKey(to=Review, on_delete=models.CASCADE, related_name='review_comments', blank=True, null=True)



    def __str__(self):
        return f'Comment ID:{self.id} by {self.author}'
