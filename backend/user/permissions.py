from rest_framework.permissions import BasePermission
from rest_framework import permissions


class IsLoggedInUserOrStaff(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS or request.user.is_staff:
            return True
        return obj.user == request.user


class ReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.method == 'GET'
