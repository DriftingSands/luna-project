"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt import views as jwt_views
from registration_profile.views import CreateRegistrationView, ValidateCreateRegistrationView
from restaurant.views import ListCategoriesView
from restaurant.views import HomePageRestaurantsView
from user.views import SearchView
from project import settings




schema_view = get_schema_view(
    openapi.Info(
        title="Motion Project API",
        default_version='v0.1',
        description="Motion Social Media App API",
    ),
    url="https://luna2.propulsion-learn.ch/backend/api/",
    public=True,  # Set to False restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/users/', include('user.urls')),
    path('backend/api/auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/auth/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    path('backend/api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('backend/api/auth/', include('registration_profile.urls')),
    path('backend/api/reviews/comment/', include('comment.urls')),
    path('backend/api/reviews/', include('review.urls')),
    path('backend/api/registration/', CreateRegistrationView.as_view()),
    path('backend/api/registration/validate/', ValidateCreateRegistrationView.as_view()),
    path('backend/api/restaurants/', include('restaurant.urls')),
    path('backend/api/category/list/', ListCategoriesView.as_view()),
    path('backend/api/home/', HomePageRestaurantsView.as_view()),
    path('backend/api/search/', SearchView.as_view())
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
