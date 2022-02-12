import datetime
import pytest

from ..models import Post


@pytest.mark.django_db
def test_default_user_is_root():
    post = Post(title="Test", text="Testing")
    post.save()

    assert post.id
    assert post.title == "Test"

    assert post.posted_by == "root"

@pytest.mark.django_db
def test_default_edited_time_is_set():
    post = Post(title="Test", text="Testing")
    post.save()

    assert post.id
    assert post.edited_at is not None
    assert post.edited_at.date() == datetime.datetime.now().date()

@pytest.mark.django_db
def test_default_posted_time_is_set():
    post = Post(title="Test", text="Testing")
    post.save()

    assert post.id
    assert post.posted_at is not None
    assert post.posted_at.date() == datetime.datetime.now().date()

@pytest.mark.django_db
def test_default_viewed_count_is_set():
    post = Post(title="Test", text="Testing")
    post.save()

    assert post.id
    assert post.viewed_count == 0

@pytest.mark.django_db
def test_increment_viewed_count_is_valid():
    post = Post(title="Test", text="Testing")
    post.viewed_count += 1
    post.save()

    assert post.id
    assert post.viewed_count == 1