# Registrar diferentes alumnos las calificaciones de las materias, ingles, redes y lenguajes.
# Obtener el promedio general del grupo

alumnos = {}


def registrar_alumno(nombre, ingles, redes, lenguajes):
    alumno = {
        "ingles": ingles,
        "redes": redes,
        "lenguajes": lenguajes
    }
    alumnos[nombre] = alumno


def promedio(alumno):
    calificaciones = alumno.values()
    promedio = sum(calificaciones) / len(calificaciones)
    return promedio


def promedio_grupo(alumnos):
    promedios = []
    for alumno in alumnos.values():
        promedios.append(promedio(alumno))
    return sum(promedios) / len(promedios)


numero_alumnos = int(input("Ingresa el numero de alumnos: "))

for i in range(numero_alumnos):
    nombre = input("Ingresa el nombre del alumno: ")
    ingles = int(input("Ingresa la calificacion de ingles: "))
    redes = int(input("Ingresa la calificacion de redes: "))
    lenguajes = int(input("Ingresa la calificacion de lenguajes: "))
    registrar_alumno(nombre, ingles, redes, lenguajes)

promedio_grupo_total = promedio_grupo(alumnos)
print(f"El promedio del grupo es: {promedio_grupo_total:.2f}")
