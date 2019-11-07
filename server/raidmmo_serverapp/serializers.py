# from django.contrib.auth.models import User, Group
from .models import User, MonsterModel, ShopItems#, BackpackModel, CurrentRaid
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class MonsterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonsterModel
        fields = '__all__'


class ShopItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopItems
        fields = '__all__'


# class BackpackModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BackpackModel
#         fields = '__all__'


# class CurrentRaidModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CurrentRaid
#         fields = '__all__'