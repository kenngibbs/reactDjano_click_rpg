from django.urls import include, path
from rest_framework import routers
from . import views
from .api import UserViewSet, MonsterViewSet, ShopItemViewSet, BackpackViewSet, CurrentRaidViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('monsters', MonsterViewSet)
router.register('shopitems', ShopItemViewSet)
router.register('backpack', BackpackViewSet)
router.register('currentraid', CurrentRaidViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('login_user/', views.login_user),
    path('add_user_items/<int:itemID>/', views.add_user_items),
    path('user_attack/<int:userID>/', views.user_attack),
    path('get_user_items/<int:userID>/', views.get_user_items),
]