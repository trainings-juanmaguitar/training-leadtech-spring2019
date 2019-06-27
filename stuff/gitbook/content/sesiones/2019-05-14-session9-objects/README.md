# Sesion 9 -  Objects (14-05-2019) 

{% video %}https://vimeo.com/336121160{% endvideo %}

👉 <https://apuntes-javascript-intermedio.netlify.com/>


## Working w/ Primitives vs Objects

![Reference vs Value](./img/pass-by-reference-vs-pass-by-value-animation.gif)



```javascript
>>> var data = {
  name: "juanma",
  location: "barcelona"
}

>>> var age = 35;

>>> function setData( oData, nAge ) {
  oData.location = "dublin";
  nAge = 40;
  return oData.location + " - " + nAge;
}

>>> setData(data, age)
"dublin - 40"
>> data
Object {name: "juanma", location: "dublin"}
>> age
35
```

```javascript
>>> var number = 10;
>>> var newNumber = number;
>>> newNumber = newNumber + 1000;
>>> number
10

>>> var arrayNumbers = [1,2,3,4]
>>> var newArrayNumbers = arrayNumbers
>>> newArrayNumbers.push(10)
>>> arrayNumbers
[1, 2, 3, 4, 10]

>>> var book = { title: "1984", author: "Orwell" }
>>> var newBook = book
>>> newBook.title = "Old Man and the Sea"
>>> book.title
"Old Man and the Sea"
```

```javascript
>>> var book = { title: "1984", author: "Orwell" }
>>> var newBook = book
>>> newBook.title = "Old Man and the Sea"
>>> book.title
"Old Man and the Sea"
```



[Trabajando con Objetos](https://apuntes-javascript-intermedio.netlify.com/objetos/#trabajando-con-objetos)

- [Copiando Objetos](https://apuntes-javascript-intermedio.netlify.com/objetos/#copiando-objetos)
- [Comparando Objetos](https://apuntes-javascript-intermedio.netlify.com/objetos/#comparando-objetos)
