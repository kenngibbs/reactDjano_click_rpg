# Generated by Django 2.0.6 on 2019-11-07 05:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('raidmmo_serverapp', '0004_auto_20191107_0510'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='backpackmodel',
            name='foreignKeyShopItem',
        ),
        migrations.RemoveField(
            model_name='backpackmodel',
            name='foreignKeyUser',
        ),
        migrations.AddField(
            model_name='user',
            name='equippedItem',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='raidmmo_serverapp.ShopItems'),
        ),
        migrations.DeleteModel(
            name='BackpackModel',
        ),
    ]
