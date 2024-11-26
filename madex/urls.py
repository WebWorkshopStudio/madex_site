from django.urls import path
from .apps import MadexConfig

from .views import main_page, kitchens_view_func, furniture_view_func, classic_kitchens_view_func, modern_kitchens_view_func, detail_view_kitchens_func

app_name = MadexConfig.name

urlpatterns = [
    path("", main_page, name="main"),
    path("kitchens/", kitchens_view_func, name="all_kitchens"),
    path("furniture/",furniture_view_func, name="all_furniture"),
    path("classic-kitchens/", classic_kitchens_view_func, name="classic_kitchens"),
    path('modern-kitchens/', modern_kitchens_view_func,name='modern_kitchens'),
    path("kitchen/<int:pk>/",detail_view_kitchens_func, name='kitchen_detail' ),
]
