```python
import boto3
from django.conf import settings

class StorageService:
    def __init__(self):
        self.s3_client = boto3.client(
            's3',
            aws_access_key_id=settings.AWS_ACCESS_KEY,
            aws_secret_access_key=settings.AWS_SECRET_KEY,
            region_name=settings.AWS_REGION
        )

    def upload_file(self, file, bucket_name, object_name):
        try:
            self.s3_client.upload_fileobj(file, bucket_name, object_name)
            return True
        except Exception as e:
            print(e)
            return False

    def download_file(self, bucket_name, object_name, file_name):
        try:
            self.s3_client.download_file(bucket_name, object_name, file_name)
            return True
        except Exception as e:
            print(e)
            return False

    def delete_file(self, bucket_name, object_name):
        try:
            self.s3_client.delete_object(Bucket=bucket_name, Key=object_name)
            return True
        except Exception as e:
            print(e)
            return False
```