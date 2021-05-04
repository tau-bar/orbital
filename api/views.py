from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import VirusSerializer
from .models import Virus

# Create your views here.
class VirusView(generics.CreateAPIView):
    queryset = Virus.objects.all()
    serializer_class = VirusSerializer

def home(request):
    return HttpResponse("virus home page")