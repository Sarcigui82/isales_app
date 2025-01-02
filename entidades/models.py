from django.db import models

class EntityType(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Entity(models.Model):
    name = models.CharField(max_length=100)
    entity_type = models.ForeignKey(EntityType, on_delete=models.CASCADE, related_name='entidades')
    contact_info = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
