from rest_framework import serializers
from .models import EntityType, Entity

class EntityTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntityType
        fields = '__all__'

class EntitySerializer(serializers.ModelSerializer):
    entity_type_name = serializers.CharField(source='entity_type.name', read_only=True)

    class Meta:
        model = Entity
        fields = ['id', 'name', 'entity_type', 'entity_type_name', 'contact_info', 'created_at', 'updated_at']
