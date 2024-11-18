from django.urls import path
from .apps import MadexConfig

from .views import main_page

app_name = MadexConfig.name

urlpatterns = [
    path("", main_page, name="main"),
]
