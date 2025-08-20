from django.db import models
# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    post_date = models.DateField()
    image = models.ImageField(upload_to='static/images/')
    paragraph = models.TextField(max_length=1000)
    more_details_for_the_dedicated_page = models.TextField(max_length=1000, default=' ')

class Review(models.Model):

    email = models.EmailField()
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    comment = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def update_review(self, email, rating, comment):
        self.email = email
        self.rating = rating
        self.comment = comment
        self.save()

    def delete_review(self):
        self.delete()