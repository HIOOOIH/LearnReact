// 这是父类，可以直接理解成 原型对象 prototype
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    //打招呼 的实例方法
    sayHello(){
        console.log("大家好")
    }
}

// 这是 子类 美国人
// 在 class 类中，可以使用 extends 关键字，实现 子类继承父类
// 语法： class 子类 extends 父类{}
class Amerian extends Person {

}

const a1 = new Amerian('Jack', 20)
console.log(a1)
a1.sayHello()

// 这是 子类 中国人
class Chinese extends Person {

}

const c1 = new Chinese('张三', 22)
console.log(c1)
c1.sayHello()