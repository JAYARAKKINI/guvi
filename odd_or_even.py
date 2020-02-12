all=[]
even=[]
odd=[]
newe=[]
newo=[]
sume=[]
sumo=[]
len1=int(input('Enter no of elements:'))
for i in range(0,len1):
  a=int(input('Enter the elements:'))
  all.append(a)
print('Your entered elements are:',all)  
for j in all:
  if(j%2==0):
    even.append(j)
  else:
    odd.append(j)
print("Even list:",even)    
print("odd list",odd)
