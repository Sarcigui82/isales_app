from django.http import JsonResponse, HttpResponse

def health_check(request):
    return JsonResponse({"message": "API funcionando correctamente"})

def home(request):
    return HttpResponse("Bienvenido a iSales_App!")
