#to find all natural num from 1 to n

n=int(input("Enter the N number::")) #enter the n number
def natural(n):                      #function
    for i in range(1,n+1):         #for loop
      print(i,end=" ")
natural(n)        
