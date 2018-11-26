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
// 语法：class 子类 extends 父类{}
class Amerian extends Person {
    constructor(name, age){
        // Q1: 为什么一定要在 constructor 中调用 super?
        // A1: 因为，如果一个子类，通过 extends 关键字继承了父类，那么，在子类的 constructor 构造函数中，必须优先调用一下 super()
        // Q2: super 是个什么东西?
        // A2: super 是一个函数，而且它是父类的 构造器；子类中的 super,其实就是父类中，constructor 构造器的一个引用
        // Q3: 为什么调用了 super() 以后，a1 实例的 name, age => undefined?
        // A3: 因为调用了 super() 相当于是 父类的 constructor(name, age)，并没有传参，所以是 undefined
        // 传参顺序：new Amerian('Jack', 20) => 子类 constructor(name, age) => super(name, age) 
        //          => 父类 constructor(name, age) => this.name this.age
        super(name, age)
    }
}

const a1 = new Amerian('Jack', 20)
console.log(a1)
a1.sayHello()

// 这是 子类 中国人
class Chinese extends Person {
    // IDNumber 是中国人独有的，不适合 挂载到 父类上
    constructor(name, age, IDNumber){
        super(name, age)
        // 语法规范中，在子类中，this 只能放到 super 之后使用
        this.IDNumber = IDNumber
    }
}

const c1 = new Chinese('张三', 22, '1234********')
console.log(c1)
c1.sayHello()