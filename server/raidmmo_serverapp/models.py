from django.db import models
# from django.contrib.postgres.fields import JSONField


# Create your models here.
class MonsterModel(models.Model):
    name = models.CharField(max_length=200, default="")
    pictureURL = models.CharField(max_length=200, default="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png")
    health = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)


class User(models.Model):
    username = models.CharField(max_length=200, default="")
    password = models.CharField(max_length=200, default="")
    pictureURL = models.CharField(max_length=200, default="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png")
    health = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    # item = JSONField()


class ShopItems(models.Model):
    name = models.CharField(max_length=200, default="")
    pictureURL = models.CharField(max_length=200, default="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png")
    health = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)


class BackpackModel(models.Model):
    foreignKeyShopItem = models.ForeignKey(ShopItems, on_delete=models.CASCADE, null=True, blank=True)
    foreignKeyUser = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)


class CurrentRaid(models.Model):
    currentMonsterForeignKey = models.IntegerField(default=1)