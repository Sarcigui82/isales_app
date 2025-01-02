from rest_framework.viewsets import ModelViewSet
from .models import EntityType, Entity
from .serializers import EntityTypeSerializer, EntitySerializer

class EntityTypeViewSet(ModelViewSet):
    queryset = EntityType.objects.all()
    serializer_class = EntityTypeSerializer

class EntityViewSet(ModelViewSet):
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer
