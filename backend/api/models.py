```python
from django.db import models
from django.contrib.auth.models import User

class VoiceMemo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    audio_file = models.FileField(upload_to='voice_memos/')
    timestamp = models.DateTimeField(auto_now_add=True)

class Transcription(models.Model):
    voice_memo = models.OneToOneField(VoiceMemo, on_delete=models.CASCADE)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

class Summary(models.Model):
    transcription = models.OneToOneField(Transcription, on_delete=models.CASCADE)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
```