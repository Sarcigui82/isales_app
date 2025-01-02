from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EntityTypeViewSet, EntityViewSet

router = DefaultRouter()
router.register(r'tipos', EntityTypeViewSet)
router.register(r'entidades', EntityViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
