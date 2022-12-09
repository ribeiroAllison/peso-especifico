# Specific Weight Calculator for Metal Wires


![alt screenshot of the program](/resources/img/program.JPG "Program screenshot")


## What is it?
This project is a metal wire density calculator. It will be used by a cable factory to calculate the amount of metal required to manufacture any given cable.

## How it works?
The program takes in four parameters and delivers two results based on them.

_> The parameters received are:_

1. The ****type of metal****, between three options ` (CCAM (aluminum), Steel or Cooper) `
2. The ****diameter**** of the wire.
3. The ****amount of wires**** of the same diameter that will be used to manufacture the cable.
4. The total length of the finished product.

_> Based on these four parameters, two results will be calculated:_

1. The ****specific weight****` (measured in kg/km) ` of one metal wire that fits the criteria.
2. The ****total metal weight**** that will be present in the finished cable.

## Information flow and logic
This is the flow of information to get the desired outputs:

```mermaid

graph TB


A[Type of Metal input] --> B[Metal Diameter Input] -- calculate area -->

C(Area) -- multiply by--> D(CCAM density)

C -- OR--> E(Cooper Density)

C -- OR--> F(Steal Density)

D --> G{Specific weight output}

E --> G

F --> G

G --multiply by--> H(wire quantity)

H --> I{Total metal weight output}

```

## Tecnologies and concetps used:

### **JavaScript:**

Used mainly for backend calculations.

_>*Main concepts used:*_


1. Functions.
2. Conditionals.
3. Switch statements.
4. DOM events.

### **HTML and CSS:**

_>*Main concepts used:*_

1. Semantic elements.
2. Responsive Design.
3. DOM Events.

### **Markdown:**

- To write README file

## Here is the deployed finished program, hope you like it!: [Peso Específico](**https://ribeiroallison.github.io/peso-especifico/**)