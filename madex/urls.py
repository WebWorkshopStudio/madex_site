from django.urls import path
from .apps import MadexConfig

from .views import main_page, kitchens_view_func

app_name = MadexConfig.name

urlpatterns = [
    path("", main_page, name="main"),
    path("kitchens/", kitchens_view_func, name="all_kitchens"),
]
