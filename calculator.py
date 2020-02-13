first_num=float(input('Enter the num:'))
sec_num=float(input('Enter the num:'))
print('1.add 2.sub 3.mul 4.div 5.exp')
c=int(input('Enter your choice:'))
if c==1:
  print('Addition of',first_num,'and',sec_num,'is',first_num+sec_num)
elif c==2:
  print('subtraction of',first_num,'and',sec_num,'is',first_num-sec_num)
elif c==3:
  print('multiplication of',first_num,'and',sec_num,'is',first_num*sec_num)
elif c==4:
  if sec_num==0:
    print('Infinity')
  else:
   print('division',first_num,'and',sec_num,'is',first_num/sec_num)
elif c==5:
  print('square value:a',first_num**sec_num)
else:
  print('Invalid')
