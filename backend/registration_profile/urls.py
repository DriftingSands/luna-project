from django.urls import path

from registration_profile.views import CreateRegistrationView, ValidateCreateRegistrationView, PasswordResetView, \
    PasswordResetValidationView

urlpatterns = [
    path('password-reset/', PasswordResetView.as_view()),
    path('password-reset/validate/', PasswordResetValidationView.as_view()),
]
