from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MenuItemViewsets, BlocksViwsets

router = DefaultRouter()
router.register('nav/', MenuItemViewsets)
router.register('blocks/', BlocksViwsets)

urlpatterns = [
    path('', include(router.urls))
]