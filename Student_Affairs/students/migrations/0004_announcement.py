# Generated by Django 4.2.1 on 2023-05-28 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0003_member_state'),
    ]

    operations = [
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=1024)),
            ],
        ),
    ]
