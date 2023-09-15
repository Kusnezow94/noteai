```python
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

def register_user(username, password):
    user = User.objects.create_user(username=username, password=password)
    token = Token.objects.create(user=user)
    return user, token.key

def login_user(username, password):
    user = authenticate(username=username, password=password)
    if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        return user, token.key
    else:
        return None, None

def logout_user(token_key):
    try:
        token = Token.objects.get(key=token_key)
        token.delete()
        return True
    except Token.DoesNotExist:
        return False
```