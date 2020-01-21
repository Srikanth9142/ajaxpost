from django.shortcuts import render,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .forms import TestModelForm
from . models import TestModel
# Create your views here.
def home(request):
	return render(request,'index.html')


def upload(request):
	if request.method=='POST':
		test = TestModelForm(request.POST,request.FILES)
		if test.is_valid():
			test.save()
			return render(request,'success.html')
		return HttpResponse("error")
	


	