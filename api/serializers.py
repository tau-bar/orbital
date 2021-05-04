from rest_framework import serializers
from .models import Virus

class VirusSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Virus
        fields = '__all__'