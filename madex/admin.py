from django.contrib import admin
from madex.models import Product, Category, ProductImage


# Register your models here.
class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    fields = ("image",)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "style",
        "facade_material",
        "body_material",
        "table_top",
        "accessories",
        "price",
        "description",
        "category",
    )
    list_filter = ("category", "style")
    inlines = [ProductImageInline]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "description", )


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ("image",)
