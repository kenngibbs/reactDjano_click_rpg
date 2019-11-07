from .models import User, MonsterModel, ShopItems#, BackpackModel, CurrentRaid
from .serializers import UserSerializer, MonsterSerializer, ShopItemsSerializer#, BackpackModelSerializer, CurrentRaidModelSerializer
from rest_framework import viewsets


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class MonsterViewSet(viewsets.ModelViewSet):
    # queryset = MonsterModel.objects.all()
    queryset = MonsterModel.objects.filter(health__gt=0)
    serializer_class = MonsterSerializer


class ShopItemViewSet(viewsets.ModelViewSet):
    queryset = ShopItems.objects.all()
    serializer_class = ShopItemsSerializer


# class BackpackViewSet(viewsets.ModelViewSet):
#     queryset = BackpackModel.objects.all()
#     serializer_class = BackpackModelSerializer
#
#
# class CurrentRaidViewSet(viewsets.ModelViewSet):
#     queryset = CurrentRaid.objects.all()
#     serializer_class = CurrentRaidModelSerializer