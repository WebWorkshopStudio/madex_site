import logging
from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category, ProductImage

logger = logging.getLogger(__name__)


# Create your views here.
def main_page(request):
    return render(request, template_name="madex/index.html")


def kitchens_view_func(request):
    category_id = Category.objects.get(title="Кухни")
    kitchens = Product.objects.all().filter(category=category_id).order_by("-pk")
    context = {
        "kitchens": kitchens,
    }

    return render(request, template_name="madex/kitchens.html", context=context)


def classic_kitchens_view_func(request):
    category_id = Category.objects.get(title="Кухни")
    kitchens = (
        Product.objects.all()
        .filter(category=category_id, style="Классический")
        .order_by("-pk")
    )
    context = {
        "kitchens": kitchens,
    }
    return render(request, template_name="madex/kitchens.html", context=context)


def modern_kitchens_view_func(request):
    category_id = Category.objects.get(title="Кухни")
    kitchens = (
        Product.objects.all()
        .filter(category=category_id, style="Современный")
        .order_by("-pk")
    )
    context = {
        "kitchens": kitchens,
    }
    return render(request, template_name="madex/kitchens.html", context=context)


def kitchen_detail(request, pk):
    style_txt = "Стиль:"

    try:
        logger.debug(f"Запрос на товар с ID: {pk}")
        kitchen = Product.objects.get(pk=pk)
        gallery = []
        product_images = ProductImage.objects.all().filter(product=pk)
        for image in product_images:
            gallery.append(image.image.url)

        data = {
            "title": kitchen.title,
            "style": kitchen.style,
            "facade_material": kitchen.facade_material,
            "body_material": kitchen.body_material,
            "table_top": kitchen.table_top,
            "accessories": kitchen.accessories,
            "price": float(kitchen.price) if kitchen.price else None,
            "description": kitchen.description,
            "image_url": kitchen.image.url if kitchen.image else None,
            "gallery": gallery,
        
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        logger.error(f"Товар с ID {pk} не найден.")
        return JsonResponse({"error": "Product not found"}, status=404)
