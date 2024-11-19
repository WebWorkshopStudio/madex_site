from django.shortcuts import render
from .models import Product, Category


# Create your views here.
def main_page(request):
    return render(request, template_name="madex/index.html")


def kitchens_view_func(request):
    category_id = Category.objects.get(title='Кухни')
    kitchens = Product.objects.all().get(category=category_id)
    context = {
        "kitchens": kitchens,
    }
    return render(request, template_name="madex/kitchens.html", context=context)
