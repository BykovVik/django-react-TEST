from rest_framework import serializers
from .models import MenuItems, Blocks

class MenuItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuItems
        fields = ("__all__")


class BlocksSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blocks
        fields = ('top_string', 'num_string', 'bottom_string')