from django.http import HttpResponse, JsonResponse
from .serializers import UserSerializer, BackpackModelSerializer
from .models import User, BackpackModel, CurrentRaid, MonsterModel
from json import loads


# Check to see if there is a username, if so, check the password associated with it.
def login_user(request):
    requestBodyInfo = loads(request.body)

    try:
        existingUser = User.objects.get(username=requestBodyInfo["username"])
    except User.DoesNotExist:
        return HttpResponse("User Not Found")

    if existingUser.password == requestBodyInfo["password"]:
        serializer = UserSerializer(existingUser)
        return JsonResponse(serializer.data)
    else:
        return HttpResponse("Username and Password Does Not Match")


# Retrieve and send a list of items that belong to the userID
def get_user_items(request, userID):
    allUserItems = BackpackModel.objects.filter(foreignKeyUser=userID)
    serializer = BackpackModelSerializer(allUserItems, many=True)
    return JsonResponse(serializer.data, safe=False)


def add_user_items(request, itemID):
    return True


def user_attack(request, userID):
    # print(CurrentRaid.objects.get(id=1))
    currentMonsterModel = MonsterModel.objects.get(id=CurrentRaid.objects.get(id=1).currentMonsterForeignKey)
    userModel = User.objects.get(id=userID)
    currentMonsterModel.health -= userModel.attack
    userModel.health -= currentMonsterModel.attack
    currentMonsterModel.save()
    userModel.save()
    return HttpResponse("okay")
