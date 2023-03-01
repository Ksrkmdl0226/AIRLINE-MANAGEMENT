"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',views.webHome),
    path('about/',views.webAbout),
    path('register/',views.webRegister),
    path('login/',views.webLogin),
    path('contact/',views.webContact),
    path('hotel-single/',views.webHotelSingle),
    path('hotel/',views.webHotel),
    path('our_places/',views.webPlaces),

    path('admin/', views.adminAdmin),
    path('dashboard/', views.adminAdmin),
    path('profile/', views.adminProfile),
    path('flights/', views.adminFlights),
    path('booking/', views.adminBooking),
    path('places/', views.adminPlaces), 
    path('category/', views.adminCategory),
    path('pilot/', views.adminPilot),
    path('status/', views.adminStatus)
   
   
    #  path('',views.webHome)
]
