# 基础知识

const 和static
mysql的事务
mysql锁机制是如何实现

## 深拷贝浅拷贝

深拷贝和浅拷贝是C++中的两种常见的拷贝方式，它们的区别主要在于拷贝的内容和拷贝的方式。

- 浅拷贝：浅拷贝只是复制了指针的值，而不是复制指针指向的内容。这意味着原始对象和拷贝对象共享同一块内存，如果其中一个对象更改了指向内存的值，那么另一个对象也会受到影响。
- 深拷贝：深拷贝会复制指针指向的内容。这意味着原始对象和拷贝对象拥有各自的独立的内存，彼此之间不会受到影响。

区别：

- 浅拷贝不会创建新的内存空间，只能用于传递指针或引用，不适用于需要独立拷贝的对象。
- 深拷贝会创建新的内存空间，适用于需要独立拷贝的对象。但是，由于需要分配新的内存空间，深拷贝比浅拷贝更耗费资源。

总之，使用深拷贝和浅拷贝最主要的区别在于是否拷贝了指针指向的内容，而不是指针本身。在使用时需要根据实际情况选择。

## 面向对象的三大特征

封装，继承，多态

1. 封装：将数据和操作数据的方法1进行有机结合，隐藏对象的属性和实现细节，仅对外公开接口来和对象进行交互。
2. 继承：可以使用现有类的所有功能，并在不需要重新编写原来的类的情况下对这些功能仅从扩展

    三种继承方式

    |继承方式| private| protected| public|
    |:-----|:-----|:-----|:-----|
    |基类的private成员| 不可见 |不可见 |不可见|
    |基类的protected成员 |变为private成员 |仍为protected成员 |仍为protected成员|
    |基类的public成员 |变为private成员 |变为protected成员 |仍为public成员仍为public成员|

3. 多态：用父类型的指针指向子类型的实例，然后通过父类的指针调用实际子类的成员函数。实现多态，有两种方式，重写，重载。

### 展开讲讲重写、重载

- 重载：是指允许存在多个同名函数，而这些函数的参数表不同（或许参数个数不同，或许参数类型不同，或许两者都不同）。
- 重写：是指子类重新定义父类虚函数的方法。

### 虚函数展开

[more virtual](../cpp/concept/virtual)

多态的实现机制为虚函数。

虚函数的作用是允许在派生类中重新定义与基类同名的函数，并且可以通过基类指针或引用来访问基类和派生类的同名函数。方法是在基类中为同名函数添加关键字virtual

### 为什么基类的析构要设置成虚析构

基类的析构函数应当设置成虚析构函数，是为了确保在子类对象被销毁时，能够正确的调用子类对象的析构函数和基类对象的析构函数。如果基类的析构函数不是虚析构函数，则在删除子类对象时只会调用子类的析构函数，而不会调用基类的析构函数，这会导致内存泄漏和对象状态不一致的问题。

当一个类有虚函数时，编译器会在该类中自动生成一个虚函数表(vtable)，该虚函数表记录了虚函数的地址。在派生类中，如果重新定义了基类的虚函数，则该虚函数表中的对应项将被更新为派生类的虚函数地址。因此，当删除派生类对象时，会先调用派生类的析构函数，然后再调用基类的析构函数，确保所有的资源被正确释放。

在实际使用中，如果一个类被设计成可派生的，其析构函数应当总是设置为虚析构函数，以确保派生类对象的正确销毁。

## `struct` 和 `class` 的区别

C++ 中，`struct` 和 `class` 是两种定义类的方式。它们的主要区别在于默认的访问权限和默认的继承方式。

1. 访问权限的区别：`struct` 的默认访问权限为 `public`，而 `class` 的默认访问权限为 `private`。因此，如果使用 `struct` 定义一个类，那么该类的成员变量和成员函数默认是公共的，可以被外部访问。而如果使用 `class` 定义一个类，那么该类的成员变量和成员函数默认是私有的，不能被外部访问。
2. 继承方式的区别：使用 `struct` 定义的类的默认继承方式是 `public`，而使用 `class` 定义的类的默认继承方式是 `private`。因此，当使用 `struct` 继承另一个类时，该类的公共成员和保护成员都会被继承，而当使用 `class` 继承另一个类时，该类的公共和受保护成员都将被继承为私有成员。

除了上述的两个区别外，`struct` 和 `class` 的其他方面基本相同。在实际编程中，可以根据需要灵活选择使用 `struct` 或 `class` 定义类。

## 内存分区

在C++中，内存分为五个区，它们分别是堆，栈，自由存储区，全局/静态存储区和常量存储区

- **堆**，由程序员进行分配释放，就是那些由 new 分配的内存块，一般一个 new 对应一个 delete
- **栈**，由操作系统自动分配释放，存放函数的参数值，局部变量的值等，函数结束时这些存储单元被自动的释放
- **自由存储区**，就是由 malloc 分配的内存块，一般一个 malloc 对应一个 free
- **全局/静态存储区**：全局变量和静态变量被分配在同一块内存中
- **常量存储区**：这是一块比较特殊的存储区，里面存储的是常量，不允许修改

## new delete, malloc free

`malloc` 和 `new` 的区别：

- `malloc` 是 C/C++ 中的函数，用于动态分配内存，返回 `void*` 类型的指针。需要手动指定内存大小，并且不会自动调用构造函数。
- `new` 是 C++ 中的运算符，用于动态分配内存，返回指定类型的指针。可以自动调用构造函数，不需要手动指定内存大小。

`free` 和 `delete` 的区别：

- `free` 是 C/C++ 中的函数，用于释放 `malloc` 动态分配的内存。
- `delete` 是 C++ 中的运算符，用于释放 `new` 动态分配的内存，同时会自动调用析构函数。

> 需要注意的是，如果使用 new 来分配内存，必须使用 delete 来释放；如果使用 malloc 来分配内存，必须使用 free 来释放。否则会出现内存泄漏或者段错误等问题。同时，使用 new 分配内存时还需要注意对于数组类型需要使用 delete[] 来释放，而不是单独的 delete 运算符。

## 静态成员函数可以直接访问非静态数据成员吗？

不可以，静态成员函数只是和类实现了绑定，而没有和任何对象绑定在一起，不包含this指针，无法访问静态成员。（静态成员函数所需内存在程序执行前就分配好了，给静态成员必须要等到这个类在堆/栈上分配内存才能使用，所以如果静态成员函数访问非静态，可能非静态成员还没有内存）

## socket编程了解吗？

服务器端函数：

- socket创建一个套接字
- bind绑定ip和端口
- listen使套接字变为可以被动链接
- accept等待客户端的连接
- read/write接收发送数据
- close关闭连接

客户端函数：

- 创建一个socket，用socket()
- 连接服务器用connect()
- 收发数据用read/write()
- close关闭连接

## TCP四次挥手的close_wait状态是在什么时候？

- 客户端打算关闭连接，此时会发送一个TCP报文，FIN标志被置为1，之后客户端进入FIN_wait_1状态
- 服务端收到该报文后，向客户端发送ACK报文，接着服务器进入CLOSED_WAIT状态
- 客户端收到服务端的ACK报文之后，进入FIN_wait_2状态
- 等待客户端处理完数据后，也向客户端发送FIN报文，之后服务端进入LAST_ACK状态
- 客户端收到服务器的FIN报文后，回一个ACK应答报文，之后进入TIME_WAIT状态
- 服务器接收到ACK应答报文后，就进入CLOSED状态，至此服务端已经完成连接的关闭
- 客户端在经过2MSL等待时间之后，自动进入CLOSED状态，至此客户端也完成连接的关闭

### 出现大量close_wait有什么影响，怎么排查？

出现大量CLOSE_WAIT的原因及解决办法：

如果一直保持在CLOSE_WAIT状态，那么只有一种情况，就是在对方关闭连接之后服务器程序自己没有进一步发出ack信号。换句话说，就是在对方连接关闭之后，程序里没有检测到，或者程序压根就忘记了这个时候需要关闭连接，于是这个资源就一直被程序占着。这种情况通过服务器内核参数也没办法解决，服务器对于程序抢占的资源没有主动回收的权利，除非终止程序运行。

所以如果将大量CLOSE_WAIT的解决办法总结为一句话那就是：查代码。因为问题出在程序里头啊。

## IO多路复用了解吗？select有什么问题？1024能够修改吗？

一个进程虽然任意时刻只能处理一个请求，但是处理每个请求的时间很短，1s就可以处理很多请求，把时间拉长来看，多个请求复用了一个进程，这就是多路复用。

select实现多路复用的方式是，将已连接的Socket都放入到一个文件描述符集合，然后调用select函数将文件描述符拷贝到内核里，让内核来检验是否有事件产生，检查的方式很粗暴，就是通过遍历文件描述符集合的方式，当检查到有事件产生后，将该Socket标记为可读或可写，接着再将整个文件描述符集合拷贝回用户态，然后用户态再通过遍历的方法找到可读或者可写的Socket，然后对其处理。

IO多路复用：Linux用select/poll函数实现IO复用模型，这两个函数也会使进程阻塞，但是和阻塞IO所不同的是这两个函数可以同时阻塞多个IO操作。而且可以同时对多个读操作、写操作的IO函数进行检查。select/poll会监听所有的IO，直到有数据可读或可写时，才真正调用IO操作函数。

select，poll，epoll都是IO多路复用的机制，I/O多路复用就是通过一种机制，可以监视多个文件描述符（Linux中，一切皆文件，通过文件描述符来标识），一旦某个文件描述符就绪（一般是读就绪或者写就绪），能够通知应用程序进行相应的读写操作。

但select，poll，epoll本质上都是同步I/O，因为他们都需要在读写事件就绪后自己负责进行读写，也就是说这个读写过程是阻塞的，而异步I/O则无需用户自己进行读写，异步I/O的实现是内核负责把数据从内核拷贝到用户空间，用户直接使用数据，这个过程是非阻塞的。

三者的原型如下所示：

```cpp
int select(int nfds, fd_set *readfds,   
           fd_set *writefds, fd_set *exceptfds,   
           struct timeval *timeout  
          );  

int poll(struct pollfd *fds, nfds_t nfds,   
         int timeout  
        );  

int epoll_wait(int epfd, struct epoll_event *events,   
               int maxevents, int timeout  
              );  
```

总结下select的几大缺点：

- 每次调用select，都需要把fd集合从用户态拷贝到内核态，这个开销在fd很多时会很大
- 同时每次调用select都需要在内核遍历传递进来的所有fd，这个开销在fd很多时也很大
- select支持的文件描述符数量太小了，默认是1024

理论上1024可以修改

## 线程与进程

### 多线程多进程区别

多线程和多进程都可以提高计算机的并发性能，但它们的技术实现和应用场景有所不同：

多线程：

1. 线程是程序执行流的最小单元，一个进程可以包含多个线程；
2. 多线程共享进程的内存空间，因此数据交换和通信比多进程更加方便高效；
3. 多线程易于实现和调试，因此常用于并发度比较低的任务。

多进程：

1. 进程是操作系统进行资源划分、调度的最小单位，一个进程包含一个或多个线程；
2. 不同进程之间的内存空间是相互隔离的，数据交换和通信需要借助 IPC（进程间通信）技术，效率较低；
3. 多进程相对于多线程更加稳定可靠，因此适用于需要高度并发的任务。

综上所述，多线程适用于并发度比较低、需要高效、简单易用的场景，多进程适用于需要高度并发、稳定可靠的场景。但并不是说它们是互斥的，实际上在很多场景下，多线程和多进程也可以结合使用，以提高计算机的并发性能。

### 进程间同步

进程间同步是指不同进程之间共享资源或者通信时，保证它们按照一定的规则执行，避免出现数据不一致或者死锁等问题的方法。实现进程间同步的常用方式有以下几种：

1. 信号量：使用信号量机制来实现进程之间的同步和互斥。
2. 管道：使用管道来实现多个进程之间的通信和同步。
3. 共享内存：使用共享内存来实现多个进程之间的数据共享和同步。
4. 互斥锁：使用互斥锁来实现进程之间的互斥访问和同步。

### 线程间同步

线程间同步是指在多个线程同时访问共享资源时，保证它们按照一定的顺序执行，避免出现数据不一致或者死锁等问题的方法。实现线程间同步的常用方式和进程间同步类似，主要有以下几种方式：

1. 锁机制：使用互斥锁或者信号量等机制来保证一段代码在同一时刻只能被一个线程执行。
2. 信号机制：使用条件变量等信号机制来协调多个线程之间的交互。
3. 原子操作：使用原子操作来保证某些操作的完整性和一致性，比如使用原子变量实现计数器等功能。
4. 线程局部存储：使用线程局部存储来避免线程之间共用同一块内存造成的竞争和冲突。

### 进程间通信方式

1. 管道：管道是最简单的进程间通信方式之一，通过在两个进程之间建立管道，实现常规数据的传输。
2. 命名管道：命名管道是一种有名字的管道，可以有多个进程在同一个有名管道中读写数据。
3. 共享内存：共享内存是在多个进程之间共享一段内存区域，可以实现进程间的高速数据交换。
4. 信号量：信号量是一种特殊的变量，用于在不同进程之间共享计数器。利用信号量可以实现多进程之间的资源同步和互斥。
5. 消息队列：消息队列是在不同进程之间传递消息的一种方式，允许不同进程之间异步通信。
6. 套接字：套接字是一种用于进程间网络通信的接口，允许不同机器上的进程之间相互通信。

## 多线程有哪些锁

互斥锁，自旋锁，读写锁，乐观锁，悲观锁

- 互斥锁：mutex，保证在任何时刻，都只有一个线程访问该资源，当获取锁操作失败时，线程进入阻塞，等待锁释放。
- 读写锁：rwlock，分为读锁和写锁，处于读操作时，可以运行多个线程同时读。但写时同一时刻只能有一个线程获得写锁。
    互斥锁和读写锁的区别：
  - 读写锁区分读锁和写锁，而互斥锁不区分
  - 互斥锁同一时间只允许一个线程访问，无论读写；读写锁同一时间只允许一个线程写，但可以多个线程同时读。
- 自旋锁：spinlock，在任何时刻只能有一个线程访问资源。但获取锁操作失败时，不会进入睡眠，而是原地自旋，直到锁被释放。这样节省了线程从睡眠到被唤醒的时间消耗，提高效率。
- 条件锁：就是所谓的条件变量，某一个线程因为某个条件未满足时可以使用条件变量使该程序处于阻塞状态。一旦条件满足了，即可唤醒该线程(常和互斥锁配合使用)
- 信号量。

### 互斥锁与自旋锁

加锁的目的是保证共享资源在任意时间里，只有一个线程访问，这样就可以避免多线程导致共享数据错乱的问题

当已经有一个线程加锁后，其他线程加锁则就会失败，互斥锁和自旋锁对于加锁失败后的处理方式是不一样的：

- 互斥锁加锁失败后，线程会释放 CPU ，给其他线程；
- 自旋锁加锁失败后，线程会忙等待，直到它拿到锁；

互斥锁是一种「独占锁」，比如当线程 A 加锁成功后，此时互斥锁已经被线程 A 独占了，只要线程 A 没有释放手中的锁，线程 B 加锁就会失败，于是就会释放 CPU 让给其他线程，既然线程 B 释放掉了 CPU，自然线程 B 加锁的代码就会被阻塞。

对于互斥锁加锁失败而阻塞的现象，是由操作系统内核实现的。当加锁失败时，内核会将线程置为「睡眠」状态，等到锁被释放后，内核会在合适的时机唤醒线程，当这个线程成功获取到锁后，于是就可以继续执行。

所以，互斥锁加锁失败时，会从用户态陷入到内核态，让内核帮我们切换线程，虽然简化了使用锁的难度，但是存在一定的性能开销成本。

那这个开销成本是什么呢？会有两次线程上下文切换的成本：

- 当线程加锁失败时，内核会把线程的状态从「运行」状态设置为「睡眠」状态，然后把 CPU 切换给其他线程运行；
- 接着，当锁被释放时，之前「睡眠」状态的线程会变为「就绪」状态，然后内核会在合适的时间，把 CPU 切换给该线程运行。

线程的上下文切换的是什么？当两个线程是属于同一个进程，因为虚拟内存是共享的，所以在切换时，虚拟内存这些资源就保持不动，只需要切换线程的私有数据、寄存器等不共享的数据。

上下切换的耗时有大佬统计过，大概在几十纳秒到几微秒之间，如果你锁住的代码执行时间比较短，那可能上下文切换的时间都比你锁住的代码执行时间还要长。

所以，如果你能确定被锁住的代码执行时间很短，就不应该用互斥锁，而应该选用自旋锁，否则使用互斥锁。

自旋锁是通过CPU提供的CAS（Compare And Swap）函数，在用户态完成加锁和解锁的操作，不会主动产生线程上下文切换，所以相比互斥锁，会快一点，开销也小一点

一般加锁的过程，包含两个步骤：

- 第一步，查看锁的状态，如果锁是空闲的，则执行第二步；
- 第二步，将锁设置为当前线程持有；

CAS 函数就把这两个步骤合并成一条硬件级指令，形成原子指令，这样就保证了这两个步骤是不可分割的，要么一次性执行完两个步骤，要么两个步骤都不执行。

比如，设锁为变量 lock，整数 0 表示锁是空闲状态，整数 pid 表示线程 ID，那么 CAS(lock, 0, pid) 就表示自旋锁的加锁操作，CAS(lock, pid, 0) 则表示解锁操作。

使用自旋锁的时候，当发生多线程竞争锁的情况，加锁失败的线程会「忙等待」，直到它拿到锁。这里的「忙等待」可以用 while 循环等待实现，不过最好是使用 CPU 提供的 PAUSE 指令来实现「忙等待」，因为可以减少循环等待时的耗电量。

自旋锁是最比较简单的一种锁，一直自旋，利用 CPU 周期，直到锁可用。需要注意，在单核 CPU 上，需要抢占式的调度器（即不断通过时钟中断一个线程，运行其他线程）。否则，自旋锁在单 CPU 上无法使用，因为一个自旋的线程永远不会放弃 CPU。

自旋锁开销少，在多核系统下一般不会主动产生线程切换，适合异步、协程等在用户态切换请求的编程方式，但如果被锁住的代码执行时间过长，自旋的线程会长时间占用 CPU 资源，所以自旋的时间和被锁住的代码执行的时间是成「正比」的关系，我们需要清楚的知道这一点。

自旋锁与互斥锁使用层面比较相似，但实现层面上完全不同：当加锁失败时，互斥锁用「线程切换」来应对，自旋锁则用「忙等待」来应对。

### 读写锁

读写锁由【读锁】和【写锁】组成，只读取共享资源1用【读锁】加锁，如果要修改共享资源则用【写锁】加锁。

读写锁的工作原理是：

- 当【写锁】没有被线程占用时，【读锁】可以多线程并发持有
- 当【写锁】被线程占用时，读线程的获取读锁的操作会被阻塞，其他写线程的获取写锁的操作也会被阻塞

### 乐观锁和悲观锁

悲观锁做事比较悲观，它认为多线程同时修改共享资源的概率比较高，于是很容易出现冲突，所以访问共享资源前，先要上锁。

那相反的，如果多线程同时修改共享资源的概率比较低，就可以采用乐观锁。

乐观锁做事比较乐观，它假定冲突的概率很低，它的工作方式是：先修改完共享资源，再验证这段时间内有没有发生冲突，如果没有其他线程在修改资源，那么操作完成，如果发现有其他线程已经修改过这个资源，就放弃本次操作。

## 分布式有了解吗

## stl

### 各种容器的实现方式

### vector具体实现

## 指针的具体实现方式

## 数据互斥

在多线程存在的环境中，除了堆栈中的临时数据之外，所有的数据都是共享的。如果我们需要线程之间正确地运行，那么务必需要保证公共数据的执行和计算是正确的。简单一点说，就是保证数据在执行的时候必须是互斥的。否则，如果两个或者多个线程在同一时刻对数据进行了操作，那么后果是不可想象的。

todo todo todo

那么，有什么办法可以保证在某一时刻只有一个线程对数据进行操作呢？四个基本方法：

1. 关中断
2. 数学互斥方法
3. 操作系统提供的互斥方法
4. cpu原子操作

### 关中断

要让数据在某一时刻只被一个线程访问，方法之一就是停止线程调度就可以了。那么怎样停止线程调度呢？那么关掉时钟中断就可以了啊。在X86里面的确存在这样的两个指令

```c
#include <stdio.h>
int main () {
    __asm {
        cli
        sti
    }
    return 1;
}
```

其中cli是关中断，sti是开中断。这段代码没有什么问题，可以编过，当然也可以生成执行文件。但是在执行的时候会出现一个异常告警：Unhandled exception in test.exe: 0xC0000096:  Privileged Instruction。告警已经说的很清楚了，这是一个特权指令。只有系统或者内核本身才可以使用这个指令。

### 数学互斥方法

假设有两个线程（a、b）正要对一个共享数据进行访问，那么怎么做到他们之间的互斥的呢？其实我们可以这么做

```cpp
unsigned flag[2] = {0};
unsigned turn = 0;

void process (unsigned index) {
    flag[index] = 1;
    turn = index;
    while (flag[1 - index] && (turn == index)) {
        // do something
    }
}
```

### 操作系统提供的互斥方法

### cpu原子操作