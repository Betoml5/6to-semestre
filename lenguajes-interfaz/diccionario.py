# import os python
frutas = {
    "manzana": 10,
    "naranja": 19.99,
    "platano": 99.22,
    "limon":  89.11,
    "pera": 87.11,
    "uva":  81.11,
    "mango":  39.11,
    "papaya":  89.11
}


def devolver_por_llave(llave):
    return f"Fruta: {llave} {frutas[llave]}"


def devolver_precio_por_llave(llave):
    return print(f"El precio de la fruta {llave} es {frutas[llave]}")


def imprimir_diccionario():
    for llave in frutas:
        print(devolver_por_llave(llave))


def agregar_fruta(fruta, precio):
    frutas[fruta] = precio


def mostrar_questionario():
    print("------------------")
    print("Introduce una opcion")
    print("1.- Ver lista de frutas")
    print("2.- Agregar fruta")
    print("3.- Ver fruta especifica")


while True:
    try:
        print(f"1.- Imprimir diccionario\n2.- Agregar fruta\n3.- Ver fruta por nombre\n4.- Salir")
        opcion = int(input("Introduce una opción: "))
        if opcion == 1:
            imprimir_diccionario()
        if opcion == 2:
            nueva_fruta = input("Introduce el nombre de la nueva fruta: ")
            precio = float(input("Introduce el precio de la fruta: "))
            agregar_fruta(nueva_fruta, precio)
        if opcion == 3:
            fruta = input("Introduce el nombre de una fruta: ")
            devolver_por_llave(fruta)
        if opcion == 4:
            break
    except KeyError:
        print("No existe esa fruta")
