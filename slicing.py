even=[]
s=int(input('Start:'))
e=int(input('End:'))
for i in range(s,e+1):
  if(i%2==0):
    even.append(i)
print(even)    
a=int(input('Enter the starting slice value:'))    
b=int(input('Enter the ending slice value:'))
print(even[a:b])
