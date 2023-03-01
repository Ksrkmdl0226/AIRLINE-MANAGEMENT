from django.shortcuts import render

# Create your views here.
def webHome(request):
    return render(request,'web/index.html');

def webAbout(request):
    return render(request,'web/about.html');

def webRegister(request):
    return render(request,'web/register.html');

def webLogin(request):
    return render(request,'web/login.html');

def webContact(request):
    return render(request,'web/contact.html');

def webHotelSingle(request):
    return render(request,'web/hotel-single.html');

def webHotel(request):
    return render(request,'web/hotel.html');

def webPlaces(request):
    return render(request,'web/our_places.html');

# admin
def adminAdmin(request):
	return render(request, 'admin/admin.html');

def adminProfile(request):
	return render(request, 'admin/profile.html');

def adminFlights(request):
	return render(request, 'admin/flights.html');

def adminBooking(request):
	return render(request, 'admin/booking.html');

def adminPlaces(request):
	return render(request, 'admin/places.html');	

def adminCategory(request):
	return render(request, 'admin/category.html');

def adminPilot(request):
	return render(request, 'admin/pilot.html');

def adminStatus(request):
	return render(request, 'admin/status.html');


