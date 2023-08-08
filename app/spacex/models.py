from django.db import models

class MenuItems(models.Model):
    title = models.CharField(max_length=50)
    #path = models.CharField(max_length=32)

    def __str__(self):
        return self.title
    

class Blocks(models.Model):
    top_string = models.CharField(max_length=32)
    num_string = models.CharField(max_length=16)
    bottom_string = models.CharField(max_length=32)

    def __str__(self):
        return self.top_string + " " + self.num_string + " " + self.bottom_string