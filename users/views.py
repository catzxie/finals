from django.shortcuts import render

# Create your views here.
def aboutme(request):
    return render(request, 'html/belen.html')

def contact(request):
    return render(request, 'html/contact.html')