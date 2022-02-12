import datetime
from django.db import models

def auto_now():
    return datetime.datetime.now()

class Post(models.Model):
    title = models.CharField(max_length=128)
    text = models.TextField(max_length=2048)
    posted_by = models.CharField(max_length=50, default="root")
    posted_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
