```python
from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('record/', views.record_voice_memo, name='record_voice_memo'),
    path('save/', views.save_voice_memo, name='save_voice_memo'),
    path('retrieve/', views.retrieve_voice_memo, name='retrieve_voice_memo'),
    path('transcribe/', views.transcribe_voice_memo, name='transcribe_voice_memo'),
    path('summarize/', views.summarize_transcription, name='summarize_transcription'),
]
```