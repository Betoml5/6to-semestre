
cal1 = float(input("Introduce la primera calificacion: "))
cal2 = float(input("Introduce la segunda calificacion: "))
cal3 = float(input("Introduce la tercera calificacion: "))

promedio = (cal1 + cal2 + cal3) / 3

print(f"El promedio de, {cal1}, {cal2}, y, {cal3}, es, promedio: 7.2f")

if promedio < 70: 
    print("Reprobado")
else:
    print("Aprobado")
