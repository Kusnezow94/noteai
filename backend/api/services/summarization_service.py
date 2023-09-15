```python
import openai

openai.api_key = 'your-openai-api-key'

class SummarizationService:
    @staticmethod
    def summarize_text(text):
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=text,
            temperature=0.3,
            max_tokens=60
        )
        return response.choices[0].text.strip()
```