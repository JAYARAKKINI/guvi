#to print all natural numbers in reverse (from n to 1)


n=int(input("Enter the N number::"))
def natural(n):
    for i in range(n,1,-1):
        print(i,end=" ")
natural(n)        
        
