# Generated by Django 2.0.6 on 2019-11-06 21:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('raidmmo_serverapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='name',
            new_name='username',
        ),
    ]
