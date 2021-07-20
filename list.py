thislist = ["yuvan sankar raja", 7, ("krishna", "varun"), {"krishna", "varun"}]
# for x in thislist:
#     print(x)
# a1 = thislist[0]
# a2 = thislist[1]
# a3 = thislist[2]
# a4 = thislist[3]
# print(type(a1), type(a2), type(a3), type(a4))
# #! list are mutable here we add delete modify the original values
# thislist.append("krishna")
# print(thislist)
#! create list using constructor method
#! and also convert tuples and set to list
# thislist = list(("krishna", "kavin", 3, True))
# print(thislist)
# print(type(thislist))
# #! access list
# print(thislist[0])
# print(thislist[-1])
# #! slice string (some range of list index)
# print(thislist[0:1])
# print(thislist[-2:-1])
# #! check value present or not
# if "krishna" in thislist:
#     print("yes 'krishna' present in the list")
# ! change values in the list by index
# thislist[0] = "krishnapandi"
# print(thislist)
# # ! change values in the list by range of index
# thislist[1:2] = ["karthick", "karupasamy"]
# print(thislist)
# #! insert a new value without remove any of existing values
# thislist.insert(6, "kathirvelan")
# print(thislist)
#! insert a new value at end of the list without remove any of existing values
#! in this method we add one items at the time
# thislist.append("cherry")
# print(thislist)
#! to add more then one values or merge two list
thislist1 = ("krishna", "kavin", 3, True)
# thislist.extend(thislist1)
# print(thislist)
#! this method also convert other datatypes(any iterable) into list
# thislist.extend(thislist1)
# print(thislist)
# print(type(thislist))
#! to concate two list
# thislist2 = thislist + thislist1
# print(thislist2)
#! delete items in the list by using remove() - values
# thislist.remove("yuvan sankar raja")
# print(thislist)
#! remove items in the list by using pop() - index
# x = thislist.pop()
# y = thislist.pop(0)
# print(x) #? last value
# print(y) #? first value by index
# print(thislist)
#! delete items in the list and delete total list by using del - index
# del thislist[0]
# print(thislist)
# del thislist
# print(thislist)
#! remove all items in the list by using clear() - similar to del
# thislist.clear()
# print(thislist)


#! Array loops
#! Array loops through for loops
# for x in thislist:
#     print(x)
#! Array loops through numbered index
# for i in range(len(thislist)):
#     print(thislist[i])
#! Array loops through while loops and numbered index
# i = 0
# while
