from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MenuItemViewsets, BlocksViwsets

router = DefaultRouter()
router.register(r'get-nav-item', MenuItemViewsets)
router.register(r'get-blocks', BlocksViwsets, basename="blocks")

urlpatterns = [
    path('', include(router.urls))
]