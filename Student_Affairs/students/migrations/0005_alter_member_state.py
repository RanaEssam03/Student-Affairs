# Generated by Django 4.2.1 on 2023-05-28 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0004_announcement'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='state',
            field=models.BooleanField(default=True),
        ),
    ]
