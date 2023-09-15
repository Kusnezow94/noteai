```python
from django.urls import path
from .api import views

urlpatterns = [
    path('api/register', views.register, name='register'),
    path('api/login', views.login, name='login'),
    path('api/logout', views.logout, name='logout'),
    path('api/notes', views.note_list, name='note_list'),
    path('api/notes/<int:pk>', views.note_detail, name='note_detail'),
    path('api/notes/<int:pk>/transcribe', views.transcribe_note, name='transcribe_note'),
    path('api/notes/<int:pk>/summarize', views.summarize_note, name='summarize_note'),
]
```