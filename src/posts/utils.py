from .models import Post
from profiles.models import Profile
from django.http import HttpResponse
from django.shortcuts import redirect

def action_permission(func):
    def wrapper(request, **kwargs):
        pk = kwargs.get('pk')
        user_profile = Profile.objects.get(user=request.user)   
        post_obj = Post.objects.get(pk=pk)  

        if user_profile == post_obj.author:                       
            print('yes')
            return func(request, **kwargs)
        else:
            print('no')
            # return HttpResponse('Access Denied - You must be the author of the post to delete it.')
            return redirect('posts:main-board')
        
    return wrapper
