from django.db import models

NULLABLE = {"null": True, "blank": True}


# Create your models here.
class Category(models.Model):
    title = models.CharField(
        verbose_name="название",
        max_length=50,
    )
    description = models.TextField(verbose_name="Описание", max_length=500, **NULLABLE)
    slug = models.SlugField(max_length=200, unique=True, **NULLABLE, verbose_name="url")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Product(models.Model):
    title = models.CharField(max_length=50, verbose_name="Название товара")
    style = models.CharField(max_length=50, verbose_name="Стиль")
    facade_material = models.CharField(
        max_length=50, verbose_name="Материал фасадов", **NULLABLE
    )
    body_material = models.CharField(
        max_length=50, verbose_name="Материал корпуса", **NULLABLE
    )
    table_top = models.CharField(max_length=50, verbose_name="Столешница", **NULLABLE)
    accessories = models.CharField(max_length=50, verbose_name="Фурнитура", **NULLABLE)
    price = models.IntegerField(verbose_name="Цена", **NULLABLE)
    description = models.TextField(max_length=1000, verbose_name="Описание товара")
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, verbose_name="Категория"
    )
    slug = models.SlugField(max_length=200, unique=True, **NULLABLE, verbose_name="url")
    image = models.ImageField(upload_to="products/", verbose_name="Главное фото")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "продукт"
        verbose_name_plural = "продукты"


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, verbose_name="Продукт", related_name="images"
    )
    image = models.ImageField(upload_to="products/", verbose_name="Изображение")

    def __str__(self):
        return f"Изображения дла {self.product.title}"

    class Meta:
        verbose_name = "Фотографий продукта"
        verbose_name_plural = "Галерея фотографий продукта"
