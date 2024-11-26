from django.shortcuts import render
from .models import Product, Category, ProductImage


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

def detail_view_kitchens_func(request, pk):
    kitchen = Product.objects.get(pk=pk)
    galery = ProductImage.objects.filter(product=pk).order_by('pk')

    context = {
        "kitchen": kitchen,
        "galery": galery,
    }
    return render(request, context=context, template_name='madex/kitchen_detail.html')

def furniture_view_func(request):
    try:
        category_id = Category.objects.get(title="Мебель")
        furniture = Product.objects.all().get(category=category_id)
        if not furniture is None:
            context = {
                "furniture": furniture,
            }
            return render(request, template_name="madex/furniture.html", context=context)
        return render(request, template_name="madex/furniture.html")
    except :
        return render(request, template_name='madex/index.html')

