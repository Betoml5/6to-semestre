
suma = 0
contador = 0
while (True):
    num = int(input("Ingrese un numero: "))
    suma = suma + num
    contador = contador + 1
    if num == 0:
        break

promedio = suma / contador
print("El promedio es: ", promedio)
