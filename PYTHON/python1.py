print("Hola, soy un programa en Python avanzado")
print("Este programa es capaz de realizar varias acciones complejas")
print("¿Qué deseas hacer?")
print("1. Sumar dos números")
print("2. Restar dos números")
print("3. Multiplicar dos números")
print("4. Dividir dos números")
print("5. Calcular el área de un círculo")
print("6. Calcular el volumen de un cubo")
print("7. Calcular el promedio de una lista de números")
print("8. Calcular el factorial de un número")
print("9. Calcular la raíz cuadrada de un número")
print("10. Calcular la potencia de un número")
print("11. Calcular el seno, coseno y tangente de un ángulo")
print("12. Calcular la suma de una serie aritmética")
print("13. Calcular la suma de una serie geométrica")
print("14. Calcular el máximo y mínimo de una lista de números")
print("15. Calcular la media y la desviación estándar de una lista de números")

opcion = input("Ingresa la opción que deseas: ")

if opcion == "1":
    num1 = float(input("Ingresa el primer número: "))
    num2 = float(input("Ingresa el segundo número: "))
    print("La suma es: ", num1 + num2)
elif opcion == "2":
    num1 = float(input("Ingresa el primer número: "))
    num2 = float(input("Ingresa el segundo número: "))
    print("La resta es: ", num1 - num2)
elif opcion == "3":
    num1 = float(input("Ingresa el primer número: "))
    num2 = float(input("Ingresa el segundo número: "))
    print("La multiplicación es: ", num1 * num2)
elif opcion == "4":
    num1 = float(input("Ingresa el primer número: "))
    num2 = float(input("Ingresa el segundo número: "))
    if num2 != 0:
        print("La división es: ", num1 / num2)
    else:
        print("No se puede dividir por cero")
elif opcion == "5":
    radio = float(input("Ingresa el radio del círculo: "))
    print("El área del círculo es: ", 3.14159 * radio ** 2)
elif opcion == "6":
    lado = float(input("Ingresa la longitud del lado del cubo: "))
    print("El volumen del cubo es: ", lado ** 3)
elif opcion == "7":
    numeros = input("Ingresa una lista de números separados por espacios: ")
    numeros = [float(x) for x in numeros.split()]
    print("El promedio de la lista es: ", sum(numeros) / len(numeros))
elif opcion == "8":
    num = int(input("Ingresa un número: "))
    factorial = 1
    for i in range(1, num + 1):
        factorial *= i
    print("El factorial del número es: ", factorial)
elif opcion == "9":
    num = float(input("Ingresa un número: "))
    print("La raíz cuadrada del número es: ", num ** 0.5)
elif opcion == "10":
    num = float(input("Ingresa un número: "))
    exponente = float(input("Ingresa el exponente: "))
    print("La potencia del número es: ", num ** exponente)
elif opcion == "11":
    angulo = float(input("Ingresa un ángulo en grados: "))
    import math
    print("El seno del ángulo es: ", math.sin(math.radians(angulo)))
    print("El coseno del ángulo es: ", math.cos(math.radians(angulo)))
    print("La tangente del ángulo es: ", math.tan(math.radians(angulo)))
elif opcion == "12":
    primer_term = float(input("Ingresa el primer término de la serie: "))
    razon = float(input("Ingresa la razón de la serie: "))
    num_term = int(input("Ingresa el número de términos de la serie: "))
    suma = 0
    for i in range(num_term):
        suma += primer_term * (razon ** i)
    print("La suma de la serie es: ", suma)
elif opcion == "13":
    primer_term = float(input("Ingresa el primer término de la serie: "))
    razon = float(input("Ingresa la razón de la serie: "))
    num_term = int(input("Ingresa el número de términos de la serie: "))
    suma = 0
    for i in range(num_term):
        suma += primer_term * (razon ** i)
    print("La suma de la serie es: ", suma)
elif opcion == "14":
    numeros = input("Ingresa una lista de números separados por espacios: ")
    numeros = [float(x) for x in numeros.split()]
    print("El máximo de la lista es: ", max(numeros))
    print("El mínimo de la lista es: ", min(numeros))
elif opcion == "15":
    numeros = input("Ingresa una lista de números separados por espacios: ")
    numeros = [float(x) for x in numeros.split()]
    media = sum(numeros) / len(numeros)
    desviacion = (sum((x - media) ** 2 for x in numeros) / len(numeros)) ** 0.5
    print("La media de la lista es: ", media)
    print("La desviación estándar de la lista es: ", desviacion)
else:
    print("Opción no válida")