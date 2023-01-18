# 类

## 一个空类会生成哪些函数

如果一个类是空的，也就是说它没有定义任何成员变量和成员函数，那么它只会生成一个默认的构造函数。如果您显式地定义了构造函数，那么这个空类将会生成您定义的构造函数。

下面是一个空类的例子：

```cpp
class EmptyClass {
    // This class has no members
};
```

在这个例子中，类 `EmptyClass` 没有定义任何成员变量和成员函数。因此，它只会生成一个默认的构造函数。

如果您想要在空类中添加一些成员函数，可以使用如下代码：

```cpp
class EmptyClass {
    public:
        EmptyClass() {
            // This is the default constructor
        }

        void doSomething() {
            // This is a member function
        }
};
```

在这个例子中，类 `EmptyClass` 除了默认的构造函数外，还定义了一个成员函数 `doSomething`。

总之，一个空类会生成一个默认的构造函数，如果您显式地定义了构造函数，那么这个空类将会生成您定义的构造函数。

## 类默认的构造函数是什么？

类的默认构造函数是一种特殊的构造函数，用于在创建对象时初始化对象的成员变量。如果您没有定义任何构造函数，那么编译器会自动生成一个默认构造函数。

下面是一个简单的例子，演示了类的默认构造函数的使用：

```cpp
#include <iostream>

using namespace std;

class Point {
    public:
        int x;
        int y;
};

int main() {
    // Create an object of class Point
    Point p;

    // Initialize the object's member variables
    p.x = 10;
    p.y = 20;

    // Print the object's member variables
    cout << "x = " << p.x << endl;
    cout << "y = " << p.y << endl;

    return 0;
}
```

在这个例子中，类 `Point` 包含两个成员变量 `x` 和 `y`。我们创建了一个 `Point` 类的对象 `p`，并且通过默认构造函数初始化了这个对象的成员变量。

在这个例子中，编译器会自动生成一个默认的构造函数，这个构造函数会将对象的成员变量初始化为默认值。在这个例子中，因为我们没有定义构造函数，所以编译器会自动生成一个默认的构造函数，将对象的成员变量 x 和 y 初始化为 0。

## 只定义析构函数，会自动生成哪些构造函数？

如果你只定义了析构函数，那么编译器会自动为你生成一个默认构造函数和一个复制构造函数。这两个函数都没有参数，并且会执行默认的行为。

默认构造函数会将类的所有成员变量都初始化为它们的默认值（例如，整型会被初始化为0，指针会被初始化为nullptr）。复制构造函数会将类的所有成员变量都复制到新的对象中，这样新的对象就和原来的对象完全一样了。

这些默认生成的构造函数可能会带来一些问题，比如内存泄漏。如果类中有指针成员变量，那么默认构造函数可能会导致内存泄漏，因为它不会分配内存给指针指向的对象。复制构造函数也可能会导致问题，因为它只是简单地复制了指针，而不会创建新的对象。因此，如果你定义了析构函数，那么你应该同时定义构造函数，以避免这些问题。

当你定义了析构函数时，你应该同时定义构造函数来避免内存泄漏和其他问题。构造函数有多种类型，包括默认构造函数、复制构造函数、转换构造函数和移动构造函数。每一种构造函数都有它的用途和作用，你应该根据你的需要来选择使用哪一种构造函数。

默认构造函数是一种不带参数的构造函数。它用于创建一个对象时，如果没有提供任何参数，就会使用默认构造函数来初始化对象。复制构造函数是一种接受一个类型相同的对象作为参数的构造函数。它用于创建一个新的对象，并复制原来的对象的成员变量。

转换构造函数是一种接受一个不同类型的对象作为参数的构造函数。它可以用来将一个对象转换为另一个类型的对象。移动构造函数是一种接受一个类型相同的对象作为参数的构造函数，但是它不会复制原来的对象，而是将原来的对象移动到新的对象上。

定义构造函数时，你可以指定不同的参数列表来满足不同的需求。例如，你可以定义一个默认构造函数来初始化对象的成员变量，也可以定义一个接受参数的构造函数来根据参数来初始化对象的成员变量。你也可以定义一个复制构造函数来将一个对象复制到另一个对象上，或者定义一个转换构造函数来将一个对象转换为另一个类型的对象。

定义构造函数时，你应该注意几个重要的方面。首先，构造函数的名字应该和类的名字相同，这样编译器才能识别它是一个构造函数。其次，构造函数不应该有返回值，因为它的作用是创建一个对象，而不是返回一个值。最后，构造函数应该避免执行抛出异常的代码，因为如果构造函数抛出异常，程序将无法继续运行。

总之，构造函数是非常重要的，它可以让你创建一个对象并初始化它的成员变量。如果你只定义了析构函数，那么编译器会自动为你生成默认的构造函数和复制构造函数，但这些默认生成的函数可能不能满足你的需求，因此你应该自己定义构造函数，以便根据你的需要来初始化对象的成员变量。构造函数有多种类型，包括默认构造函数、复制构造函数、转换构造函数和移动构造函数，每一种构造函数都有它的用途和作用。例如，默认构造函数用于创建一个对象时，如果没有提供任何参数，就会使用默认构造函数来初始化对象。复制构造函数用于创建一个新的对象，并复制原来的对象的成员变量。转换构造函数用于将一个对象转换为另一个类型的对象。移动构造函数用于将一个对象移动到另一个对象上。

通常情况下，类中会包含多个构造函数，每个构造函数都有它的用途和作用。例如，一个类可能包含一个默认构造函数和一个接受参数的构造函数，这样你就可以根据需要选择使用哪一个构造函数来初始化对象的成员变量。同时，你还可以定义复制构造函数和转换构造函数，以便满足不同的需求。总之，定义构造函数可以帮助你创建对象并初始化它的成员变量，这样你就可以使用这些对象来完成特定的任务。在定义构造函数时，你应该注意构造函数的名字应该和类的名字相同，并且构造函数不应该有返回值。此外，构造函数应该避免执行抛出异常的代码，因为如果构造函数抛出异常，程序将无法继续运行。

总结一下，构造函数是非常重要的，它可以让你创建一个对象并初始化它的成员变量。如果你只定义了析构函数，那么编译器会自动为你生成默认的构造函数和复制构造函数，但这些默认生成的函数可能不能满足你的需求，因此你应该自己定义构造函数，以便根据你的需要来初始化对象的成员变量。构造函数有多种类型，包括默认构造函数、复制构造函数、转换构造函数和移动构造函数，每一种构造函数都有它的用途和作用。

## 如何实现一个不能在堆分配的类，如何实现一个不能被继承的类

如何实现一个不能在堆上分配的类，如果要在堆上分配就是会使用new，所以可以重载new 操作符，并将其重载于class A的private内：

```cpp
class A 
{
public:
    A(int a):_x(a){}
    int Display() {
    return _x;
}
void setVal(int x) {
    _x = x;
    return;
}
private:
    //
    int _x;
    void* operator new(size_t t){
    }
};
```

如何实现一个不能被继承的类，这里有一个比较简单的方法，利用C++11的新关键字final：

```cpp
class B final {
    public:
        B(int a) {
        }
};  
```