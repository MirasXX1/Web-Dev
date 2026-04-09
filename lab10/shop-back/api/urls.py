from rest_framework.routers import DefaultRouter
from api import views
from .views import register
from django.urls import path

router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet)
router.register(r'products', views.ProductViewSet)

urlpatterns = router.urls + [
    path('register/', register),
]