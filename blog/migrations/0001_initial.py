# Generated by Django 4.0.1 on 2022-01-31 19:15

import blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128)),
                ('text', models.TextField(max_length=2048)),
                ('posted_by', models.CharField(default='root', max_length=50)),
                ('posted_at', models.DateTimeField(default=blog.models.auto_now)),
                ('edited_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
