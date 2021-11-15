from rest_framework.permissions import BasePermission
from rest_framework import permissions


class IsLoggedInUserOrStaff(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user


class ReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.method == 'GET'
