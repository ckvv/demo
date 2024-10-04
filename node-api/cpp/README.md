#  C++ 插件

Addons 是用 C++ 编写的动态链接的共享对象。require（） 函数可以将插件作为普通Node.js模块加载。插件提供了 JavaScript 和 C/C++ 库之间的接口。


## 实现插件

### 使用内部 V8、libuv 和 Node.js 库
直接使用 Node.js 和 V8 API 来实现插件, 当从一个 V8 版本到下一个版本（以及一个主要的 Node.js 版本到下一个版本），V8 API 可能并且已经发生了巨大的变化。 每次更改时，插件可能需要更新和重新编译才能继续运行<https://nodejs.org/en/learn/modules/abi-stability#abi-stability>。(除非需要直接访问 Node-API 未公开的功能，否则请使用 Node-API)

```c++
// Node.js C++ API 可通过以下任一 API 获取
#include <node.h>
#include <node_buffer.h>
#include <node_version.h>
#include <node_object_wrap.h> 

// libuv API
#include <uv.h> 

// V8 API 
#include <v8.h> 
```

### nan
一个充满宏和实用优势的头文件，用于更轻松地跨版本插件Node.js开发, 除非需要特定的较低版本 Node 插件的开发 否则建议使用`Node-API`,使用例子可以参考<https://github.com/nodejs/node-addon-examples/tree/main/src>

### Node-API

Node-API（以前的 N-API）是一个用于构建原生插件的 API。它独立于底层 JavaScript 运行时（例如 V8），并作为 Node.js 本身的一部分进行维护。此 API 在 Node.js 的各个版本中将保持应用程序二进制接口 （ABI） 稳定。它旨在使插件与底层 JavaScript 引擎中的更改隔离开来，并允许为一个主要版本编译的模块在 Node.js 的后续主要版本上运行，而无需重新编译, 此外 `node-addon-API/N-API` 插件也兼容 Bun 和 Deno 运行时

```c++
// Node-API 是一个 C API
// https://nodejs.org/docs/latest/api/n-api.html
#include <node_api.h> 


// node-addon-api 的 C++ 包装器模块
#include <napi.h>
```

### node-addon-api

Node-API 是一个 C API，可确保 ABI 在 Node.js 版本和不同编译器级别之间的稳定性。C++ API 更易于使用。为了支持使用 C++，该项目维护了一个名为 node-addon-api 的 C++ 包装器模块。此包装器提供可内联的 C++ API。使用 node-addon-api 构建的二进制文件将取决于 Node.js 导出的基于 Node API C 的函数的符号。node-addon-api 是编写调用 Node-API 的代码的更有效方法。

## 打包环境
与用 JavaScript 编写的模块不同，使用 Node-API 开发和部署Node.js原生插件需要一组额外的工具。除了为 Node.js 开发所需的基本工具外，原生插件开发人员还需要一个可以将 C 和 C++ 代码编译成二进制文件的工具链。此外，根据原生插件的部署方式，原生插件的用户还需要安装 C/C++ 工具链。

```sh
# C/C++ 工具链

# 对于 Mac 开发人员，Xcode 提供了所有必需的编译器工具
xcode-select --install 

# 对于 Windows 开发人员，Visual Studio 提供了所有必需的编译器工具
npm install --global windows-build-tools 


# node-gyp 是一个用 Node.js 编写的跨平台命令行工具，用于为 Node.js 编译原生插件模块
npm install -g node-gyp
# CMake.js 是一个Node.js原生插件构建工具，其工作方式（几乎）与 node-gyp 完全相同，但它不是 gyp，而是基于 CMake 构建系统
npm install -g cmake-js
```

### 插件编写

+ binding.gyp

一旦源代码写好了，就必须把它编译成二进制的 `addon.node` 文件。为此，请在项目的顶层创建一个名为 `binding.gyp` 的文件，该文件使用类似 JSON 的格式描述模块的构建配置。这个文件由 `node-gyp 使用` ，node-gyp 是一个专门为编译 Node.js 插件而编写的工具。


## NAPI-RS
NAPI-RS 是一个用 Rust 构建预编译的 Node.js 插件的框架。


## 参考

+ https://nodejs.github.io/node-addon-examples/
+ https://nodejs.org/docs/latest/api/n-api.html
