from django.db import models
# from django.contrib.postgres.fields import JSONField


# Create your models here.
class MonsterModel(models.Model):
    name = models.CharField(max_length=200, default="")
    pictureURL = models.CharField(max_length=200, default="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png")
    health = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class ShopItems(models.Model):
    name = models.CharField(max_length=200, default="")
    pictureURL = models.CharField(max_length=200, default="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png")
    health = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class User(models.Model):
    username = models.CharField(max_length=200, default="", unique=True)
    password = models.CharField(max_length=200, default="")
    pictureURL = models.CharField(max_length=1000, default="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png")
    health = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    equippedItem = models.ForeignKey(ShopItems, on_delete=models.CASCADE, null=True, blank=True)
    # item = JSONField()

    def __str__(self):
        return self.username


# class BackpackModel(models.Model):
#     foreignKeyShopItem = models.ForeignKey(ShopItems, related_name="backpack", on_delete=models.CASCADE, null=True, blank=True)
#     foreignKeyUser = models.ForeignKey(User, related_name="backpack", on_delete=models.CASCADE, null=True, blank=True)
#
#
# class CurrentRaid(models.Model):
#     currentMonsterForeignKey = models.IntegerField(default=1)