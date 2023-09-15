```python
import openai

openai.api_key = 'your-openai-api-key'

def transcribe_audio(audio_file_path):
    """
    Function to transcribe audio using OpenAI's Whisper
    """
    with open(audio_file_path, 'rb') as audio_file:
        response = openai.Whisper.transcribe(file=audio_file)
        return response['transcription']
```