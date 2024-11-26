# Generated by Django 5.1.2 on 2024-11-26 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('madex', '0006_product_image'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='productimage',
            options={'verbose_name': 'Галерея фотографий продукта', 'verbose_name_plural': 'Галерея фотографий продукта'},
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(max_length=1000, verbose_name='Описание товара'),
        ),
    ]
