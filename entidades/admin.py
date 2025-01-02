from django.contrib import admin
from .models import EntityType, Entity  # Asegúrate de usar los nombres correctos

@admin.register(EntityType)
class EntityTypeAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']

@admin.register(Entity)
class EntityAdmin(admin.ModelAdmin):
    list_display = ['name', 'entity_type', 'contact_info', 'created_at', 'updated_at']
