import {init} from "/init.ts";

try {
  init("js/hello.js")
} catch (e) {
  console.log(e)
  throw e
}