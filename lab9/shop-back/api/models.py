from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255) # [cite: 27]

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255) # [cite: 20]
    price = models.FloatField() # [cite: 21]
    description = models.TextField() # [cite: 22]
    count = models.IntegerField() # [cite: 23]
    is_active = models.BooleanField(default=True) # [cite: 24]
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products') # [cite: 25]

    def __str__(self):
        return self.name