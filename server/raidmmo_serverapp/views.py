from django.http import HttpResponse, JsonResponse
from .serializers import UserSerializer, ShopItemsSerializer#, BackpackModelSerializer
from .models import User, MonsterModel, ShopItems#, BackpackModel
from json import loads


# Check to see if there is a username, if so, check the password associated with it.
def login_user(request):
    requestBodyInfo = loads(request.body)

    try:
        existingUser = User.objects.get(username=requestBodyInfo["username"])
    except User.DoesNotExist:
        return JsonResponse({"error": "User Not Found"})

    if existingUser.password == requestBodyInfo["password"]:
        serializer = UserSerializer(existingUser)
        return JsonResponse(serializer.data)
    else:
        return JsonResponse({"error": "Username and Password Does Not Match"})


# Retrieve and send a list of items that belong to the userID
def get_user_items(request):
    requestBodyInfo = loads(request.body)

    tempUser = User.objects.get(id=requestBodyInfo["userID"])
    serializer = ShopItemsSerializer(tempUser.equippedItem)
    return JsonResponse(serializer.data)


def add_user_items(request):
    requestBodyInfo = loads(request.body)
    # BackpackModel.objects.create(foreignKeyShopItem=requestBodyInfo["itemID"], foreignKeyUser=requestBodyInfo["userID"])
    return HttpResponse("okay")


def user_attack(request):
    requestBodyInfo = loads(request.body)
    monsterID = requestBodyInfo["monsterID"]
    userID = requestBodyInfo["userID"]

    currentMonsterModel = MonsterModel.objects.get(id=monsterID)
    userModel = User.objects.get(id=userID)

    # itemModels = BackpackModel.objects.filter(foreignKeyUser=userID)
    # itemTotalAttack = 0
    # for eachItem in itemModels:
    #     itemTotalAttack += eachItem.foreignKeyShopItem.attack

    currentMonsterModel.health -= (userModel.attack + userModel.equippedItem.attack)
    userModel.health -= currentMonsterModel.attack
    currentMonsterModel.save()
    userModel.save()
    return HttpResponse("okay")
