from django.shortcuts import render
from .models import Post
from django.shortcuts import get_object_or_404, render, redirect 
from .models import Review
from .forms import ReviewForm
from django.contrib import messages

def index(request):
    posts = Post.objects.all()
    reviews = Review.objects.all().order_by('-date')
    return render(request, 'index.html', {'posts': posts, 'reviews': reviews})

def about(request):
    return render(request, 'about.html')

def form(request):
    if request.method == 'POST':
        # prelucrează datele din request.POST
        messages.success(request, 'Form submitted successfully!')
        return redirect('contact')  # redirecționezi către același view pentru a reseta formularul
    return render(request, 'form.html')

def gallery(request):
    return render(request, 'gallery.html')

def chatbot(request):
    return render(request, 'chatbot.html')

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'post_details.html', {'post': post})

def submit_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Review submitted successfully!')
            return redirect('submit_review')  # Poți redirecționa înapoi la formular sau în altă parte
    else:
        form = ReviewForm()
    return render(request, 'submit_review.html', {'form': form})

def update_review(request, review_id):

    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ReviewForm(instance=review)
    return render(request, 'update_review.html', {'form': form})

def delete_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        review.delete_review()
        return redirect('home')
    return render(request, 'delete_review.html', {'review': review})