#include <napi.h>

// Napi::String Add(const Napi::CallbackInfo& info) {
//   Napi::Env env = info.Env();
//   return Napi::String::New(env, "world");
// }


// Napi::Object InitMath(Napi::Env env, Napi::Object exports) {
//   exports.Set(Napi::String::New(env, "Add"), Napi::Function::New(env, Add));
//   return exports;
// }
// NODE_API_MODULE(Add, InitMath)