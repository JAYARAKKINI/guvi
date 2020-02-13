prime_number=[]
non_prime_number=[]
s=int(input('Enter the start value:'))
e=int(input('Enter the end value:'))
for i in range(s,e+1):
  if(i>1):
    for no in range(2,i):
      if(i % no)==0:
        non_prime_number.append(i)
        break
    else:
      prime_number.append(i)    
print('prime num in list',prime_number)
print('Non prime num in list',non_prime_number)
