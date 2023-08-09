from rest_framework import viewsets
from rest_framework.response import Response
from .models import MenuItems, Blocks
from .serializers import MenuItemSerializer, BlocksSerializer

class MenuItemViewsets(viewsets.ModelViewSet):
    queryset = MenuItems.objects.all()
    serializer_class = MenuItemSerializer

class BlocksViwsets(viewsets.ModelViewSet):
    queryset = Blocks.objects.all()
    serializer_class = BlocksSerializer