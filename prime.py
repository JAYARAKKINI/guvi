prime_number=[]
non_prime_number=[]
a=int(input('Enter the no of elements:'))
for i in range(0,a):
  n=int(input())
  if(n>1):
    for i in range(2,n//2):
      if((n%i)==0):
        non_prime_number.append(n) 
        break
    else:
      prime_number.append(n)
  else:
    non_prime_number.append(n)    
print('prime_number in list:',prime_number)
print('non_prime_number in list',non_prime_number)
